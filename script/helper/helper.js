//função auxiliar para formatar o número para somar
function nmFormat(n1, n2) {
    //swap para ser n1 > n2
    if (n1 < n2) [n1, n2] = [n2, n1]

    //convertendo para string
    const stringN1 = n1.toString()
    let stringN2 = n2.toString()

    //diferença de casas decimais
    const diffHouse = stringN1.length - stringN2.length;

    //complementando casas decimais    
    for (let i = 0; i < diffHouse; i++) stringN2 = "0" + stringN2

    return (stringN2)
}