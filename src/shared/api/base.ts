import axios, { AxiosResponse } from "axios"

import { API_AGIFY, API_CATFACT_NINJA } from "../config/index.js"

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

  async get<T>(
    url: string,
    params?: { [key: string]: string },
    signal?: AbortSignal,
  ): Promise<T> {
    const response = await axios.get<T>(`${this.baseUrl}${url}`, {
      params,
      signal,
    })
    return this.handleResponse(response)
  }
}

export const catFactNinjaClient = new ApiClient(API_CATFACT_NINJA)
export const agifyClient = new ApiClient(API_AGIFY)
