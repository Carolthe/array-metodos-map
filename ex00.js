//metodos de array




//para adicionar um elemento no final ".push"

let studants = ["Maria", "João", "Vitor", "Gabriel"]

studants.push("Bruna")

console.log(studants)

//para contar quantos elementos tem no array ".length"

let personNumber = ["Maria", "João","Vitor", "Gabriel"]

console.log(personNumber.length)

//para colocar em ondem alfabetica ".sort()"

let ordem = ["Maria", "João", "Vitor", "Gabriel"]

console.log(studants.sort())

//para deletar

let person = ["Maria", "João", "Vitor", "Gabriel"]

delete person [1]

console.log(person)


//para remover e também acrecentar 


const newStudents = ["Maria", "João", "Vitor", "Gabriel"]

newStudents.splice (1,0, 'flor')

console.log(newStudents)

//para tirar o ultimo item


const remove = ["Maria", "João", "Vitor", "Gabriel"]

remove.pop()

console.log(remove)

//para remover o primeiro item

const removeOne = ["Maria", "João", "Vitor", "Gabriel"]

removeOne.shift()

console.log(removeOne)