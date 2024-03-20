import {Http} from '../../http/NetworkHttp.ts'

export class SpyHttp implements Http {
    get_argument_url: string | undefined = undefined
    get(url: string): Promise<string[]> {
        this.get_argument_url = url
        return Promise.resolve([])
    }

    post_argument_url: string | undefined = undefined
    post_argument_body: string | undefined = undefined
    post(url: string, body: string): void {
        this.post_argument_url = url
        this.post_argument_body = body
    }
}
