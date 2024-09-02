import { FC } from 'react'
import { clsx } from 'clsx'
import { useForm, FormProvider } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { schema } from '../../validation/schema'

import {
  stateNumberPattern,
  datePattern,
  passportSeriesPattern,
  passportNumberPattern,
} from '../../validation/maskRegPattern'
import { Input } from '../input'
import { getSessionFormData } from './getSessionFormData'
import { useSaveData } from './useSaveData'
interface Props {
  className?: string
}
export type FormFields = z.infer<typeof schema>

export const CarForm: FC<Props> = ({ className }) => {
  let defaultValues = getSessionFormData()

  const form = useForm<FormFields>({
    resolver: zodResolver(schema),
    mode: 'onChange',
    defaultValues,
  })
  useSaveData(form.getValues, form.watch)
  const onSubmit = (data: FormFields) => {
    alert('Данные отправлены: ' + JSON.stringify(data))
  }
  const onClickClear = () => {
    let values = form.getValues()

    for (let key in values) {
      form.setValue(key as keyof FormFields, '', { shouldValidate: true })
    }
  }
  return (
    <FormProvider {...form}>
      <form className={clsx('form', className)} onSubmit={form.handleSubmit(onSubmit)}>
        <b className="form-name">Транспортные средства и водители</b>
        <div className="form-content">
          <Input
            regMask={stateNumberPattern}
            name="stateNumber"
            label="Гос-номер"
            placeholder="Укажите гос-номер"
          />
          <Input name="carName" label="Транспортное средство" placeholder="Транспортное средство" />

          <Input
            name="dateToBuyer"
            regMask={datePattern}
            label="Ориентировочная дата прибытия к покупателю"
            placeholder="Дата"
            datePicker
          />
          <p>Данные водителя</p>
          <Input name="buyerFullName" label="ФИО" placeholder="Укажите ФИО водителя" />
          <div className="passport-section">
            <Input
              regMask={passportSeriesPattern}
              name="passportSeries"
              label="Паспортные данные"
              placeholder="Серия"
            />
            <Input regMask={passportNumberPattern} name="passportNumber" placeholder="Номер" />
          </div>
          <Input name="whoGave" label="Кем выдан" placeholder="Кем выдан" />
          <Input
            regMask={datePattern}
            name="whenGave"
            label="Когда выдан"
            placeholder="Когда выдан"
          />
          <div className="button-section">
            <button type="submit">Отправить</button>
            <button type="reset" onClick={onClickClear} className="button-outline">
              Отменить
            </button>
          </div>
        </div>
      </form>
    </FormProvider>
  )
}
