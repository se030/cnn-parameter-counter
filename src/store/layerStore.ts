import create from 'zustand'
import { ConvLayer, FCLayer, InputImage, ResultValue } from '../interfaces/Info'

interface LayerState {
    input: InputImage;
    convLayerList: ConvLayer[];
    fcLayerList: FCLayer[];
    resultList: ResultValue[];
    setInput: (size: number | undefined, channel: number | undefined) => void;
    addConvLayer: (conv: boolean) => void;
    setConvLayer: (idx:number, target: number, value: number | undefined) => void;
    deleteConvLayer: (idx: number) => void;
    addFCLayer: () => void;
    setFCLayer: (idx:number, value: number | undefined) => void;
    deleteFCLayer: (idx: number) => void;
    processResult: () => void;
}
const useLayer = create<LayerState>(set => ({
    input: { size: 224, channel: 3 },
    convLayerList: [
        { conv: true, filter: undefined, stride: undefined, padding: undefined, channel: undefined },
    ],
    fcLayerList: [{ nodes: undefined }, ],
    resultList: [],
    setInput: (size: number | undefined, channel: number | undefined) => {
        set((prev) => {
            prev.input = { size: isNaN(size!)? undefined : size, channel: isNaN(channel!)? undefined : channel }
            return { ...prev }
        })
    },
    addConvLayer: (conv: boolean) => {
        set((prev) => {
            const convLayerList = [ ...prev.convLayerList, 
                { conv: conv, filter: undefined, stride: undefined, padding: undefined, channel: undefined }
            ];
            return { ...prev , convLayerList }
        })
    },
    setConvLayer: (idx:number, target: number, value: number | undefined) => {
        set((prev) => {
            switch(target) {
                case (0):
                    prev.convLayerList[idx] = { ...prev.convLayerList[idx], filter: isNaN(value!)? undefined : value };
                    break;
                case (1):
                    prev.convLayerList[idx] = { ...prev.convLayerList[idx], stride: isNaN(value!)? undefined : value };
                    break;
                case (2):
                    prev.convLayerList[idx] = { ...prev.convLayerList[idx], padding: isNaN(value!)? undefined : value };
                    break;
                case (3):
                    prev.convLayerList[idx] = { ...prev.convLayerList[idx], channel: isNaN(value!)? undefined : value };
                    break;
                default:
                    break;
            }
            return { ...prev }
        })
    },
    deleteConvLayer: (idx: number) => {
        set((prev) => {
            prev.convLayerList.splice(idx, 1);
            return { ...prev }
        })
    },
    addFCLayer: () => {
        set((prev) => {
            const fcLayerList = [ ...prev.fcLayerList, { nodes: undefined } ];
            return { ...prev , fcLayerList }
        })
    },
    setFCLayer: (idx:number, value: number | undefined) => {
        set((prev) => {
            prev.fcLayerList[idx] = { ...prev.fcLayerList[idx], nodes: isNaN(value!)? undefined : value }
            return { ...prev }
        })
    },
    deleteFCLayer: (idx: number) => {
        set((prev) => {
            console.log(idx);
            prev.fcLayerList.splice(idx, 1);
            return { ...prev }
        })
    },
    processResult: () => {
        set((prev) => {
            const resultList: ResultValue[] = [];
            let size = prev.input.size;
            let channel = prev.input.channel;
            prev.convLayerList.forEach((item) => {
                if (item.conv) {
                    size = Math.floor((size! + 2 * item.padding! - (item.filter!-1) - 1) / item.stride! + 1);
                    resultList.push({
                        size: size,
                        channel: item.channel,
                        params: (item.filter! * item.filter! * channel! + 1) * item.channel!
                    })
                    channel = item.channel;
                }
                else {
                    size = Math.floor((size! - item.filter!) / item.stride! + 1);
                    resultList.push({
                        size: size,
                        channel: channel,
                        params: undefined
                    })
                }
            })

            size = size! * size! * channel!;
            prev.fcLayerList.forEach((item) => {
                size! *= item.nodes!;
                resultList.push({
                    size: undefined,
                    channel: undefined,
                    params: size
                })
            })
            return { ...prev, resultList }
        })
    }
}))

export default useLayer;