// TODO create better solution for cloning initial values in form component
export const clone = (value = null) => {
  const json = JSON.stringify(value)
  return JSON.parse(json)
}
