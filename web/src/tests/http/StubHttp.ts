import {Http} from '../../http/NetworkHttp.ts'

export class StubHttp implements Http {
    post(url: string, body: string): void {
    }
    get_returnValue: Promise<string[]> = Promise.resolve([])
    get(url: string): Promise<string[]> {
        return this.get_returnValue
    }
}