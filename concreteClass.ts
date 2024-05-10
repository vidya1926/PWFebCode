import { Browser } from "./interface_01";

class transaction implements Browser{
    browserName: string;
    getBrowserVersion() {
      this.browserName="Chrome";     
      console.log(this.browserName)
    }
    getStatus(): boolean {
       return true;
    }
}

const purchase=new transaction();
purchase.getBrowserVersion();


