import { LayerContainer } from "./lib"
import useLayer from '../store/layerStore';

const Input = () => {
    const { input, setInput } = useLayer();
    return <LayerContainer>
        <p>Input</p>
        <div>
            <span>W/H</span>
            <input value={input.size ?? ""} onChange={(e) => setInput(parseInt(e.target.value), input.channel)} />
        </div>
        <div>
            <span>Channel</span>
            <input value={input.channel ?? ""} onChange={(e) => setInput(input.size, parseInt(e.target.value))} />
        </div>
    </LayerContainer>
}

export default Input;