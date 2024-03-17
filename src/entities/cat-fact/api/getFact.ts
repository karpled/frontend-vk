import { catFactNinjaClient } from "~/shared/api/base.js"

import { GetFactResponse } from "../model/GetFactResponse.js"

export const getFact = async (): Promise<GetFactResponse["fact"]> => {
  const result = await catFactNinjaClient.get<GetFactResponse>("/fact")
  return result.fact
}
