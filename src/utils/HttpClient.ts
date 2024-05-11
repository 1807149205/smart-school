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
    private isAddToken: boolean = false;

    constructor(url: string, port: number) {
        this.url = url;
        this.port = port;

        this.axiosInstance = axios.create({
            baseURL: `${this.url}:${this.port}`, 
            timeout: 500000, 
            headers: {
                'Content-Type': 'application/json', 
            },
        });
    }

    public async get<T>(url: string, params?: any): Promise<HttpResponse<T>> {
        if (localStorage.getItem("token") && this.isAddToken) {
            this.setHeader("token", localStorage.getItem("token") as string);
        }
        const resp = await this.axiosInstance.get(url, { params });
        return resp.data;
    }

    public async post<T>(url: string, paramsJson: string): Promise<HttpResponse<T>> {
        if (localStorage.getItem("token") && this.isAddToken) {
            this.setHeader("token", localStorage.getItem("token") as string);
        }
        const resp = await this.axiosInstance.post(url, paramsJson);
        return resp.data;
    }

    public setHeader(key: string, value: string) {
        if (key === 'token') {
            this.isAddToken = true;
        }
        this.axiosInstance.defaults.headers.common[key] = value;
    }
}

export default new HttpClient('http://localhost', 8080);
