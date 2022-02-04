export const messReceiver =async (users , sender) => {
  const receiver = users.filter(user => user !== sender)
  return receiver[0]
}