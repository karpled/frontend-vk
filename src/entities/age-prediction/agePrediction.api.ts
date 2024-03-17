import { agifyClient } from "~/shared/api/base.js"

import { GetAgeRequest, GetAgeResponse } from "./agePrediction.types.js"

export const getAgePrediction = async (
  name: GetAgeRequest["name"],
  signal?: AbortSignal,
): Promise<GetAgeResponse["age"]> => {
  const result = await agifyClient.get<GetAgeResponse>("/", { name }, signal)
  return result.age
}
