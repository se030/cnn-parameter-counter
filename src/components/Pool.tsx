import { HiMinus } from 'react-icons/hi'
import { LayerContainer, DeleteButton } from './lib';
import useLayer from '../store/layerStore'

interface PoolProps {
    idx: number;
    filter: string;
    stride: string;
}
const Pool = ({ idx, filter, stride }: PoolProps) => {
    const { setConvLayer, deleteConvLayer } = useLayer();
    return <LayerContainer>
        <p>Pool</p>
        <div>
            <span>Filter Size</span>
            <input value={filter ?? ""} onChange={(e) => setConvLayer(idx, 0, parseInt(e.target.value))} />
        </div>
        <div>
            <span>Stride</span>
            <input value={stride ?? ""} onChange={(e) => setConvLayer(idx, 1, parseInt(e.target.value))} />
        </div>
        <DeleteButton onClick={() => deleteConvLayer(idx)}><HiMinus /></DeleteButton>
    </LayerContainer>
}

export default Pool;