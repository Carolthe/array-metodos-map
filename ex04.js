//map

const students = [
    { name: "Vitoria", age: 17},
    { name: "Julia", age: 16},
    {name: "Mel", age: 17},
    {name:"Carla", age: 18},
    {name: "Kevin", age: 16}
]

const newArray = students.map((studant) =>{
    const newArray = {
        name: studant.name + "da Silva",
        age: studant.age -5
    }
    return newArray
})
  
console.log(newArray)

