export interface InputImage {
    size: number | undefined;
    channel: number | undefined;
}

export interface ConvLayer {
    conv: boolean;
    filter: number | undefined;
    stride: number | undefined;
    padding: number | undefined;
    channel: number | undefined;
}

export interface FCLayer {
    nodes: number | undefined;
}

export interface ResultValue {
    size: number | undefined;
    channel: number | undefined;
    params: number | undefined;
}