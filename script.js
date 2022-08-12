
let nome = prompt("Digite aqui seu nome")
if( nome.length < 5 ){
    alert("Nome inválido")
}else{
    let materia1 = prompt("Digite aqui a matéria")
    let nota1 = parseFloat(prompt("Qual sua nota?"))
        if(nota1 == 0 || nota1 > 10){
            alert("Valor invalido")
        }else{
            let materia2 = prompt("Digite aqui a matéria")
            let nota2 = parseFloat(prompt("Qual sua nota?"))
            if(nota2 == 0 || nota2 > 10){
                alert("Valor invalido")
            }else{
                let materia3 = prompt("Digite aqui a matéria")
                let nota3 = parseFloat(prompt("Qual sua nota?"))
                if(nota3 == 0 || nota3 > 10){
                    alert("Valor invalido")
                }else{
                    let materia4 = prompt("Digite aqui a matéria")
                    let nota4 = parseFloat(prompt("Qual sua nota?"))
                    if(nota3 == 0 || nota4 > 10){
                        alert("Valor invalido")
                    }else{
                        let materia5 = prompt("Digite aqui a matéria")
                        let nota5 = parseFloat(prompt("Qual sua nota?"))
                        if(nota5 == 0 || nota5 > 10){
                            alert("Valor invalido")
                        }else{
                            let materia6 = prompt("Digite aqui a matéria")
                            let nota6 = parseFloat(prompt("Qual sua nota?"))
                            if(nota6 == 0 || nota6 > 10){
                                alert("Valor invalido")
                            }else{
                                let materia7 = prompt("Digite aqui a matéria")
                                let nota7 = parseFloat(prompt("Qual sua nota?"))
                                if(nota7 == 0 || nota7 > 10){
                                    alert("Valor invalido")
                                }else{
                                    let materia8 = prompt("Digite aqui a matéria")
                                    let nota8 = parseFloat(prompt("Qual sua nota?"))
                                    if(nota8 == 0 || nota8 > 10){
                                        alert("Valor invalido")
                                    }else{
                                        let materia9 = prompt("Digite aqui a matéria")
                                        let nota9 = parseFloat(prompt("Qual sua nota?"))
                                        if(nota9 == 0 || nota9 > 10){
                                            alert("Valor invalido")
                                        }else{
                                            let materia10 = prompt("Digite aqui a matéria")
                                            let nota10 = parseFloat(prompt("Qual sua nota?"))
                                            if(nota10 == 0 || nota10 > 10){
                                                alert("Valor invalido")
                                            }else{
                                                let presenca = parseInt(prompt("Qual sua presenca?"))
                                                if(presenca == 0 || presenca > 10){
                                                    alert("Valor invalido")
                                                }else{
                                                    let somaNota = nota1 + nota2 + nota3 + nota4 + nota5 + nota6 + nota7 + nota8 + nota9 + nota10
                                                    let mediaNota = somaNota / 10
                                                        if(mediaNota >= 8 && presenca >= 6){
                                                            alert(`A nota do aluno ${nome} é de ${mediaNota} e sua presenca de ${presenca} : Aluno provado!`)
                                                        }else{
                                                            alert(`A nota do aluno ${nome} é de ${mediaNota} e sua presença de ${presenca} : Aluno reprovado!`)
                                                        }
                                                    }
                                                }                                        
                                            }
                                        }
                                    }
                                }
                            }
                        }  
                    }
                }
            }
    }




