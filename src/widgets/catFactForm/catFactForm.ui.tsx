import React, { useEffect } from "react"

import { useQuery } from "@tanstack/react-query"
import { Button, FormItem, Group, Textarea } from "@vkontakte/vkui"

import { getFact } from "~/entities/cat-fact/api/getFact.js"

export const CatFactForm = (): React.ReactElement => {
  const inputRef = React.useRef<HTMLTextAreaElement>(null)

  const { data, isFetching, isError, refetch } = useQuery({
    queryKey: ["cat-fact"],
    queryFn: async () => await getFact(),
    enabled: false,
  })

  useEffect(() => {
    if (data && inputRef.current) {
      const firstWord = inputRef.current.value.split(" ")[0]
      inputRef.current.focus()
      inputRef.current.setSelectionRange(firstWord.length, firstWord.length)
    }
  }, [data])

  const handleClick = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    refetch()
  }

  return (
    <Group>
      <form onSubmit={handleClick}>
        <FormItem
          status={isError ? "error" : "default"}
          bottom={isError ? "Не удалось загрузить факт" : undefined}
        >
          <Textarea
            placeholder="Тут появится факт"
            disabled={isFetching || isError}
            value={data}
            getRef={inputRef}
          />
        </FormItem>
        <FormItem>
          <Button type="submit" size="l" stretched>
            Получить факт
          </Button>
        </FormItem>
      </form>
    </Group>
  )
}
