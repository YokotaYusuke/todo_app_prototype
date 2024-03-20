export interface Http {
    get(url: string): Promise<string[]>
    post(url: string, body: string): void
}

export class NetworkHttp implements Http {
    async get(url: string): Promise<string[]> {
        return await fetch(url)
            .then(res => res.json())
    }

    post(url: string, body: string): void {
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'text/plain'
            },
            body: body
        })
    }
}

