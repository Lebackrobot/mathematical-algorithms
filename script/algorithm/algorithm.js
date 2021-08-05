
//Soma
function soma(n1 = 0, n2 = 0) {

    //@@ output @@
    let value = '';

    //swap para ser n1 > n2
    if (n1 < n2) [n1, n2] = [n2, n1]

    //convertendo para string e formatando números para soma
    let stringN1 = n1.toString()
    let stringN2 = n2.toString()
    stringN2 = nmFormat(n1, n2)

    //valor da casa decimal
    //marcador de overflow (núero maior que dez)
    let place = 0
    let overflow = 0




    for (let i = stringN1.length - 1; i >= 0; i--) {
        place = (parseInt(stringN1[i]) + parseInt(stringN2[i])) + overflow;
        overflow = 0;

        //houve overflow 
        if (place >= 10) {

            //ultimo elemento? 
            if (i) place = place % 10
            overflow = 1
        }

        value = place.toString() + value;
    }

    //returns 
    return parseInt(value)
}

//função de multiplicação
function multiplication(n1 = 0, n2 = 0) {

    //@@ output @@
    let value = 0;

    //swap para ser n1 > n2
    if (n1 < n2) [n1, n2] = [n2, n1]

    //conversão e tratamento de strings
    const stringN1 = n1.toString()
    let stringN2 = n2.toString()

    for (let i = 0; i < stringN1.length; i++) {

        //@nmPlace - número da casa decimal 
        let nmPlace

        for (let j = 0; j < stringN2.length; j++) {

            let nmPlace

            //Tratamento dos multiplicadores
            nmPlace = (Math.pow(10, stringN2.length - (j + 1))) * parseInt(stringN2[j]) * Math.pow(10, stringN1.length - (i + 1)) * parseInt(stringN1[i])

            //verificando soma
            console.log(nmPlace)
            value += nmPlace
        }

    }

    return value
}