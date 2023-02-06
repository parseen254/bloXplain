interface Data { 
    cid: string;
    from: string;
    timestamp: string;
    to: string;
    height: number;
    gasFeeCap: string;
    gasLimit: string;
    gasPremium: string;
    method: string;
    params: string;
    signature: string;
    size: string;
    version: string;
    StoragePower: number;
    toActor: string;
    fromActor: string;
    confirmations: number;
    gasUsed: number;
    value: string;
    status: string;
   

}

interface Error { 
    message: string;
}
export default Data;