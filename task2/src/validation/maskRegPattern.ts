const l = /^([авекмнорстух])$/i //letter for state number
const n = /^\d$/i //number
const d = /^\.$/i //dot

export const stateNumberPattern = [l, n, n, n, l, l, n, n, n]

export const passportSeriesPattern = [n, n, n, n]

export const passportNumberPattern = [n, n, n, n, n, n]

export const datePattern = [n, n, d, n, n, d, n, n, n, n]
