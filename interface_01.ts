
interface Browser{
    browserName:string
    getBrowserVersion():void;
    getStatus():boolean;
}


interface PaymentDetails{
     payCOD():void;
     payCard():number

}

export {Browser,PaymentDetails}