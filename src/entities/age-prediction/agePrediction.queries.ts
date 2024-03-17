import { useEffect, useRef } from "react"

import { useQuery } from "@tanstack/react-query"

import { getAgePrediction } from "./agePrediction.api.js"
import { GetAgeRequest } from "./agePrediction.types.js"

export const useGetAgePrediction = (data: GetAgeRequest) => {
  const lastData = useRef<GetAgeRequest>(data)

  const query = useQuery({
    queryKey: ["agePrediction"],
    queryFn: async ({ signal }) => await getAgePrediction(data.name, signal),
    enabled: false,
  })

  useEffect(() => {
    if (data.name === lastData.current.name) return

    lastData.current = data
    query.refetch()
  }, [data, query])

  return query
}
