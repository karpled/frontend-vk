import { catFactNinjaClient } from "~/shared/api/base.js"

import { GetFactResponse } from "./catFact.types.js"

export const getCatFact = async (): Promise<GetFactResponse["fact"]> => {
  const result = await catFactNinjaClient.get<GetFactResponse>("/fact")
  return result.fact
}
