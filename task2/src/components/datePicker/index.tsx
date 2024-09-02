import React, { useEffect, useState } from 'react'
import { useFormContext } from 'react-hook-form'
import Picker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import clsx from 'clsx'

interface Props {
  className?: string
  name: string
}

export const DatePicker: React.FC<Props> = ({ className, name }) => {
  const { setValue } = useFormContext()
  const [selected, setSelected] = useState<Date | null>()
  useEffect(() => {
    selected && setValue(name, selected?.toLocaleDateString(), { shouldValidate: true })
  }, [selected])
  return (
    <Picker
      className={clsx('datepicker', className)}
      selected={selected}
      onChange={(date) => setSelected(date)}
    />
  )
}
