import { LayerContainer } from "./lib"
import { ResultValue } from "../interfaces/Info";

const Result = ({ size, channel, params }: ResultValue) => {
    const format = (val: string) => {
        let substrings = [];
        for (let i=val.length; 0 < i; i -= 3) substrings.unshift(val.substring(i-3 < 0? 0 : i-3, i));
        return substrings.join(',');
    }
    return <LayerContainer>
        {channel && 
            (<div>
                <span>Output Size</span>{size}×{size}×{channel}
            </div>)
        }
        {params && 
            (<div>
                <span>Parameters</span>{format(params.toString())}
            </div>)
        }
    </LayerContainer>
}

export default Result;