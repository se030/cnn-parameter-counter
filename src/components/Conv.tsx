import { HiMinus } from 'react-icons/hi'
import { LayerContainer, DeleteButton } from './lib';
import useLayer from '../store/layerStore'

interface ConvProps {
    idx: number;
    filter: string;
    stride: string;
    padding: string;
    channel: string;
}
const Conv = ({ idx, filter, stride, padding, channel }: ConvProps) => {
    const { setConvLayer, deleteConvLayer } = useLayer();
    return <LayerContainer>
        <p>CONV</p>
        <div>
            <span>Filter Size</span>
            <input value={filter} onChange={(e) => setConvLayer(idx, 0, parseInt(e.target.value))} />
        </div>
        <div>
            <span>Stride</span>
            <input value={stride} onChange={(e) => setConvLayer(idx, 1, parseInt(e.target.value))} />
        </div>
        <div>
            <span>Padding</span>
            <input value={padding} onChange={(e) => setConvLayer(idx, 2, parseInt(e.target.value))} />
        </div>
        <div>
            <span>Channel</span>
            <input value={channel} onChange={(e) => setConvLayer(idx, 3, parseInt(e.target.value))} />
        </div>
        {
            0 < idx && <DeleteButton onClick={() => deleteConvLayer(idx)}><HiMinus /></DeleteButton>
        }
    </LayerContainer>
}

export default Conv;