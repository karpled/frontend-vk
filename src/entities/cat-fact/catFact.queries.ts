import { useQuery } from "@tanstack/react-query"

import { getCatFact } from "./catFact.api.js"

export const useGetCatFact = () => {
  return useQuery({
    queryKey: ["catFact"],
    queryFn: async () => await getCatFact(),
    enabled: false,
  })
}
