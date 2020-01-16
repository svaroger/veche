
// то как получаемые внешние данные подгоняются под формат

const processContact = contact => ({
  name: `${contact.name.first} ${contact.name.last}`,
  phone: contact.phone,
})

// export const fetchUsers = async () => {
//   const response = await fetch('https://randomuser.me/api/?results=50&nat=us')
//  const {results} = await response.json()
//  return results.map(processContact)
//}

// сверка логина и пароля
// функцию login нужно импортировать в loginScreen

// export const login = async (login, password) => {
//    const response = await fetch('http://localhost:8000', {
//      method: 'POST',
//      headers: {'content-type': 'application/json'},
//      body: JSON.stringify ({login: this.state.login, password: this.state.password}),
//    })
//
//    if (response.ok) {
//      return true
//    }
//
//  const errMessage = await response text()
//    throw new Error(errMessage)
//  }
//      this.props.navigation.navigate('contact')
