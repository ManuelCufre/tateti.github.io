const b1 = document.getElementById('1')
const b2 = document.getElementById('2')
const b3 = document.getElementById('3')
const b4 = document.getElementById('4')
const b5 = document.getElementById('5')
const b6 = document.getElementById('6')
const b7 = document.getElementById('7')
const b8 = document.getElementById('8')
const b9 = document.getElementById('9')
const botones = [b1, b2, b3, b4, b5, b6, b7, b8, b9]

botones.forEach(boton =>{
    boton.onclick= () => {
        boton.innerHTML = "X"
        boton.classList.add('x')
        boton.style.color = "green"
       setTimeout(()=>{
        maquina(botones)
       },1000)
        comprobarUsuario(botones)
        comprobarMaquina(botones)
    }
})

function estaOcupado(boton){
    return boton.innerHTML !=="";
}

function maquina(botones){
    let numAleatorio = Math.floor(Math.random() * 9) + 1 
    let encontrado = false
    for(i = 0; i < botones.length; i++){
        if (botones[i].id == numAleatorio && !estaOcupado(botones[i])){
            botones[i].innerHTML = 'O' 
            botones[i].classList.add('x')
            botones[i].style.color = "red"
            encontrado = true
            break
        }
    }
    if(encontrado == false){
         maquina(botones)
    }
    comprobarMaquina(botones)
}



function comprobarUsuario(botones){
    const resultado = document.getElementById('resultado')
    if(b1.innerHTML == "X" && b2.innerHTML == "X" && b3.innerHTML == "X"){
        resultado.innerHTML = "Ganastee!!"
        
    }
    else if(b4.innerHTML == "X" && b5.innerHTML == "X" && b6.innerHTML == "X"){
        resultado.innerHTML = "Ganastee!!"
    }
    else if(b7.innerHTML == "X" && b8.innerHTML == "X" && b9.innerHTML == "X"){
        resultado.innerHTML = "Ganastee!!"
    }
    else if(b1.innerHTML == "X" && b4.innerHTML == "X" && b7.innerHTML == "X"){
        resultado.innerHTML = "Ganastee!!"
    }
    else if(b2.innerHTML == "X" && b5.innerHTML == "X" && b8.innerHTML == "X"){
        resultado.innerHTML = "Ganastee!!"
    }
     else if(b3.innerHTML == "X" && b6.innerHTML == "X" && b9.innerHTML == "X"){
        resultado.innerHTML = "Ganastee!!"
    }
    else if(b1.innerHTML == "X" && b5.innerHTML == "X" && b9.innerHTML == "X"){
        resultado.innerHTML = "Ganastee!!"
    }
    else if(b3.innerHTML == "X" && b5.innerHTML == "X" && b7.innerHTML == "X"){
        resultado.innerHTML = "Ganastee!!"
    }
}

function comprobarMaquina(botones){
    const resultado = document.getElementById('resultado')
    if(b1.innerHTML == "O" && b2.innerHTML == "O" && b3.innerHTML == "O"){
        resultado.innerHTML = "PERDISTEEE!!"
    }
    else if(b4.innerHTML == "O" && b5.innerHTML == "O" && b6.innerHTML == "O"){
        resultado.innerHTML = "PERDISTEEE!!"
    }
    else if(b7.innerHTML == "O" && b8.innerHTML == "O" && b9.innerHTML == "O"){
        resultado.innerHTML = "PERDISTEEE!!"
    }
    else if(b1.innerHTML == "O" && b4.innerHTML == "O" && b7.innerHTML == "O"){
        resultado.innerHTML = "PERDISTEEE!!"
    }
    else if(b2.innerHTML == "O" && b5.innerHTML == "O" && b8.innerHTML == "O"){
        resultado.innerHTML = "PERDISTEEE!!"
    }
     else if(b3.innerHTML == "O" && b6.innerHTML == "O" && b9.innerHTML == "O"){
        resultado.innerHTML = "PERDISTEEE!!"
    }
     else if(b1.innerHTML == "O" && b5.innerHTML == "O" && b9.innerHTML == "O"){
        resultado.innerHTML = "PERDISTEEE!!"
    }
    else if(b3.innerHTML == "O" && b5.innerHTML == "O" && b7.innerHTML == "O"){
        resultado.innerHTML = "PERDISTEEE!!"
    }
}