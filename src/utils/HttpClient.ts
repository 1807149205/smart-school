import axios, { AxiosInstance } from 'axios'

export interface HttpResponse <T> {
    code: number;
    msg: string;
    data: T
}

class HttpClient {

    private axiosInstance: AxiosInstance;
    private url: string;
    private port: number;

    constructor(url: string, port: number) {
        this.url = url;
        this.port = port;

        this.axiosInstance = axios.create({
            baseURL: `${this.url}:${this.port}`, 
            timeout: 50000, 
            headers: {
                'Content-Type': 'application/json', 
            },
        });
    }

    public async get<T>(url: string, params?: any): Promise<HttpResponse<T>> {
        const resp = await this.axiosInstance.get(url, { params });
        return resp.data;
    }

    public async post<T>(url: string, paramsJson: string): Promise<HttpResponse<T>> {
        const resp = await this.axiosInstance.post(url, paramsJson);
        return resp.data;
    }
}

export default new HttpClient('http://localhost', 8080);