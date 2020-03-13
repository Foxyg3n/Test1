const database = require('./database')
const user = require('./user')

result = database.map((item) => {
  if (user.login == item.login && user.password == item.password)
  return true
})

console.log(result.includes(true))