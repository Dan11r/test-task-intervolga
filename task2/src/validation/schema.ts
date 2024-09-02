import { z } from 'zod'

const messages = {
  requiredText: 'Это поле обязательно для заполнения',
  correctData: 'Введите корректные данные',
  minLength: (num: number) => {
    return `Минимальная длина:${num}`
  },
}

const stateNumber = /^[авекмнорстух]\d{3}[авекмнорстух]{2}\d{2,3}$/i
const fullName = /^[а-я]+\s[а-я]+\s[а-я]+$/i
const passportSeries = /^\d{4}$/i
const passportNumber = /^\d{6}$/i
const date =
  /^([0][1-9]|[1][0-9]|[2][0-9]|[3][0-1])\.([0][1-9]|[1][0-2])\.(19[0-9][0-9]|20[0-9][0-9])$/

export const schema = z.object({
  stateNumber: z
    .string()
    .nonempty({ message: messages.requiredText })
    .refine((val) => stateNumber.test(val), {
      message: messages.correctData,
    }),
  carName: z
    .string()
    .nonempty({ message: messages.requiredText })
    .min(2, { message: messages.minLength(2) }),
  dateToBuyer: z
    .string()
    .nonempty({ message: messages.requiredText })
    .refine((val) => date.test(val), {
      message: messages.correctData,
    }),
  buyerFullName: z
    .string()
    .nonempty({ message: messages.requiredText })
    .refine((val) => fullName.test(val), {
      message: messages.correctData,
    }),
  passportSeries: z
    .string()
    .nonempty({ message: messages.requiredText })
    .refine((val) => passportSeries.test(val), {
      message: messages.correctData,
    }),
  passportNumber: z
    .string()
    .nonempty({ message: messages.requiredText })
    .refine((val) => passportNumber.test(val), {
      message: messages.correctData,
    }),
  whoGave: z
    .string()
    .nonempty({ message: messages.requiredText })
    .min(5, { message: messages.minLength(5) }),
  whenGave: z
    .string()
    .nonempty({ message: messages.requiredText })
    .refine((val) => date.test(val), {
      message: messages.correctData,
    }),
})
