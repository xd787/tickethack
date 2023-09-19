function objectsToStrings(data) {
    let firstNames = []
    // Insert your code here
    for (let i = 0; i< data.length; i++){
      let firstName = data[i].firstName;
      if (firstName) {
        firstNames.push(firstName)
      }
        }
   return firstNames
    }
//}




// Don't edit the code below this line
const contactList = [
    { firstName: 'Jane', lastName: 'Doe' },
    { firstName: '', lastName: 'Doe' },
    { firstName: 'Mike', lastName: 'Awesome' },
    { firstName: '', lastName: 'Doe' },
    { firstName: 'John', lastName: '' }
]

console.log(objectsToStrings(contactList))

// Expected : ['Jane', 'Mike', 'John']

module.exports = { objectsToStrings }