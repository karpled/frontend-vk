import { useEffect } from "react"

export const useFocusOnFetch = (
  ref: React.RefObject<HTMLInputElement | HTMLTextAreaElement>,
  data: unknown,
) => {
  useEffect(() => {
    if (!ref.current) return

    const refValue = ref.current.value
    if (refValue.length === 0) return

    const firstWord = ref.current.value.split(" ")[0]
    ref.current.focus()
    ref.current.setSelectionRange(firstWord.length, firstWord.length)
  }, [ref, data])
}
