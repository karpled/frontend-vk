import { agifyClient } from "~/shared/api/base.js"

import type { GetAgeRequest, GetAgeResponse } from "../types.js"

export const getAge = async (
  params: GetAgeRequest,
  signal?: AbortSignal,
): Promise<GetAgeResponse["age"]> => {
  const result = await agifyClient.get<GetAgeResponse>(
    "/",
    { name: params.name },
    signal,
  )
  return result.age
}
