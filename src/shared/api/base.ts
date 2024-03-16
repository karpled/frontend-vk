import axios, { AxiosResponse } from "axios"

export class ApiClient {
  private baseUrl: string

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl
  }

  async handleResponse<T>(response: AxiosResponse<T>): Promise<T> {
    if (response.status >= 200 && response.status < 300) {
      return response.data
    } else {
      throw new Error(`HTTP error: ${response.status} - ${response.statusText}`)
    }
  }

  async get<T>(url: string): Promise<T> {
    const response = await axios.get<T>(`${this.baseUrl}${url}`)
    return this.handleResponse(response)
  }

  async post<T>(url: string, data: unknown): Promise<T> {
    const response = await axios.post<T>(`${this.baseUrl}${url}`, data)
    return this.handleResponse(response)
  }
}

export const catFactNinjaClient = new ApiClient("https://catfact.ninja")
export const agifyClient = new ApiClient("https://api.agify.io")
