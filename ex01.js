//for each

const students =[
    {name: "Maria", age: 23},
    {name: "Sofia", age: 25},
    {name: "Vitor", age: 26},
    {name: "Clara", age: 19},
    {name: "Fernanda", age: 30},
]

let studantsAge  = 0

students.forEach( (students, index) => {
    studantsAge += students.age
})

const average = studantsAge / students.length

console.log(`A média dos alunos é de ${studantsAge.toFixed(0)}`)

