export declare type OpenFileArgs = {
    useChunks?: boolean;
    chunkSize?: number;
    mapping?: Record<string, any>;
};
export declare function openFile({ useChunks, chunkSize, mapping, }: OpenFileArgs): Promise<unknown>;
