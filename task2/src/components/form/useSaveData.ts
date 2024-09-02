import { useEffect } from 'react'
import { FormFields } from './index'
import { UseFormGetValues, UseFormWatch } from 'react-hook-form'
export const useSaveData = (
  getValues: UseFormGetValues<FormFields>,
  watch: UseFormWatch<FormFields>,
) => {
  useEffect(() => {
    sessionStorage.setItem('carBuyForm', JSON.stringify(getValues()))
  }, [
    watch([
      'buyerFullName',
      'carName',
      'dateToBuyer',
      'passportNumber',
      'passportSeries',
      'stateNumber',
      'whenGave',
      'whoGave',
    ]),
  ])
}
