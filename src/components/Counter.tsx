import useLayer from '../store/layerStore';
import { CounterContainer, FlexColumn, FlexContainer } from './lib';
import Input from './Input';
import Conv from './Conv';
import Pool from './Pool';
import FC from './FC';
import Result from './Result'

const Counter = () => {
    const { convLayerList, fcLayerList, resultList, addConvLayer, addFCLayer, processResult } = useLayer();

    return <CounterContainer>
        <h1>CNN Parameter Counter</h1>
        <FlexContainer>
            <FlexColumn>
                <Input />
                {
                    convLayerList.map((item, idx) => {
                        if (item.conv)
                            return <Conv
                                key={idx}
                                idx = {idx}
                                filter = {item.filter? item.filter.toString() : ""}
                                stride = {item.stride? item.stride.toString() : ""}
                                padding = {item.padding? item.padding.toString() : ""}
                                channel = {item.channel? item.channel.toString() : ""}
                            />
                        else
                            return <Pool
                                key = {idx}
                                idx = {idx}
                                filter = {item.filter? item.filter.toString() : ""}
                                stride = {item.stride? item.stride.toString() : ""}
                            />
                    })
                }
                {
                    fcLayerList.map((item, idx) => <FC
                        key={idx}
                        idx = {idx}
                        nodes = {item.nodes? item.nodes.toString() : ""}
                    />)
                }
            </FlexColumn>
            <FlexColumn width="250px">
                <button className="btn" onClick={() => addConvLayer(true)}>Conv</button>
                <button className="btn" onClick={() => addConvLayer(false)}>Pool</button>
                <button className="btn" onClick={() => addFCLayer()}>FC</button>
                <button className="btn" onClick={() => processResult()}>Result</button>
            </FlexColumn>
            <FlexColumn>
                {
                    resultList?.map((item, idx) => <Result 
                        key={idx}
                        size={item.size} 
                        channel={item.channel}
                        params={item.params} 
                    />)
                }
            </FlexColumn>
        </FlexContainer>
    </CounterContainer>
}

export default Counter;