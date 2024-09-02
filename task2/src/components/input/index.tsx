import { clsx } from 'clsx'
import { useFormContext } from 'react-hook-form'

import { useRegMask } from './useRegMask'
import { DatePicker as Picker } from '../datePicker'
interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string
  className?: string
  label?: string
  placeholder?: string
  regMask?: Array<RegExp>
  datePicker?: boolean
}

export const Input: React.FC<Props> = ({
  className,
  name,
  label,
  placeholder,
  regMask,
  datePicker,
  ...props
}) => {
  const {
    formState: { errors },
    register,
    watch,
    setValue,
  } = useFormContext()

  if (regMask) {
    const value: string = watch(name)
    useRegMask(value, regMask, setValue, name)
  }

  const errorText = errors[name]?.message as string

  return (
    <div className={clsx('form-item ', errorText && 'input-error', className)}>
      <label htmlFor={name}>{label || ''}</label>
      <div className="input-area">
        <input
          {...register(name)}
          {...props}
          id={name}
          type="text"
          placeholder={placeholder || 'Заполните поле'}
          className="text-input"
        />
        {datePicker && (
          <div className="datepicker-container">
            <Picker name={name} />
          </div>
        )}
      </div>

      {errorText && <div className="input-error-message">{errorText}</div>}
    </div>
  )
}
