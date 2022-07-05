import { HiMinus } from 'react-icons/hi'
import { LayerContainer, DeleteButton } from './lib';
import useLayer from '../store/layerStore'
import { useState } from 'react';

interface FCProps {
    idx: number;
    nodes: string;
}
const FC = ({ idx, nodes }: FCProps) => {
    const { deleteFCLayer } = useLayer();
    const [ nodesVal, setNodesVal ] = useState(nodes);

    return <LayerContainer>
        <p>FC</p>
        <div>
            <span>Nodes</span>
            <input value={nodesVal} onChange={(e) => setNodesVal(e.target.value)} />
        </div>
    {
            0 < idx && <DeleteButton onClick={() => deleteFCLayer(idx)}><HiMinus /></DeleteButton>
        }
    </LayerContainer>
}

export default FC;