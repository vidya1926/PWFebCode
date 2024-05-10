abstract class TestReporter{

abstract reportType:string

abstract start():Promise<string>;

reportStatus(status:string):string{
    return status;
}
}

export {TestReporter}