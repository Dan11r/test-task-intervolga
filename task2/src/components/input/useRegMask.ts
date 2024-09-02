import { useEffect } from 'react'

export const useRegMask = (
  value: string,
  regMask: Array<RegExp>,
  setValue: (n: string, v: string) => void,
  name: string,
) => {
  const deleteLastLetter = (index: number) => {
    let newValue = value.substring(0, index)
    setValue(name, newValue)
  }

  useEffect(() => {
    let index = value?.length - 1
    if (regMask && regMask.length >= value?.length) {
      if (!regMask[index]?.test(value?.split('')[index])) {
        deleteLastLetter(index)
      }
    } else if (regMask && regMask.length < value?.length) {
      deleteLastLetter(index)
    }
  }, [value])
}
