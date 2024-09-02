export const getSessionFormData = () => {
  let result
  try {
    result = JSON.parse(sessionStorage.getItem('carBuyForm') || '{}')
  } catch (e) {
    return console.error(e)
  }

  return result
}
