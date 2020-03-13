const database = require('./database')
const user = require('./user')

function checkUser(item) {
  if (user.login == item.login && user.password == item.password)
   return true
}

function check() {

  result = database.map(checkUser)

  console.log(result.includes(true))

}

check()