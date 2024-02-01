/*faça um programa para uma escola, onde o aluno tem que tirar mais do
 que sete para ser aprovado e menos que sete para ser reprovado*/

const studants =[{
    aluno: "Gustavo",
    nota: 7
},
{
    aluno:"Elisa",
    nota: 8
},
{
    aluno: "Matheus",
    nota: 5
},
{
    aluno: "Isaque",
    nota: 9
},
{
    aluno: "Larissa",
    nota: 9
}]


    const approvedStudants = studants.map( studant => {

        let aprovedOrNot

        if(studant.nota >= 7){
            aprovedOrNot = "Approved"
        }else{
            aprovedOrNot = " Disapproved"
        }
        const studants = {
            name : studant.aluno,
            finalResult: aprovedOrNot
        }
        return studants
    })

    console.log(approvedStudants)