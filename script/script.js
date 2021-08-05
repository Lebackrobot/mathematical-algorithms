//Criando a controller para gerenciar o script da soma
angular.module('app', ['ngMaterial', 'ngMessages'])
.controller('appController', function($scope) {

    //@getTime - retorna tempo decorrido da operação 
    function getTime(n1, n2, type) {
        
        //@startTime - tempo inicial (ms)
        const startTime = parseFloat(performance.now())

        //type == true: soma | type == false: multiplica
        type ? soma(n1, n2) : multiplication(n1, n2)

        //tempo final 
        const endTime = parseFloat(performance.now())
        return endTime - startTime
    } 

    //@getIterations - retorna número de iterações em cada casa decimal 
    function getIterations(n1, n2, type) {
        
        //swap para n1 ser maior que n2
        if(n1 < n2) [n1, n2] = [n2, n1]
        n1 = n1.toString()
        n2 = n2.toString()

        return type ? n1.length : n1.length * n2.length 

    }

    //@getRandon - listener que retorna numeros aleatórios
     $scope.getRandom = (type, param) => {
        const max = 10e7
        const random = Math.floor(Math.random() * max + 1)
        console.log(param)
         if( type == 'sum' )
            !param ? $scope.installment.n1 = random : $scope.installment.n2 = random
         

         else {
             !param ? $scope.factor.n1 = random : $scope.factor.n2 = random
         }
    }


    //@$scope.installment - Objeto para parcelas da soma
    $scope.installment = {
        n1: null,  
        n2: null 
    }

    //@scope.factor - Objeto para fatores da multiplicação
    $scope.factor = {
        n1: null,  
        n2: null 
    }

    //soma utilizando algoritmo americano
    $scope.sum = (n1, n2) => {
        //flag da operação
        $scope.operation = true
        
        //convertendo parâmetros para inteiros
        n1 = parseInt(n1)
        n2 = parseInt(n2)


        
        //método em algorithm/algorithm.js
        const res = soma(n1, n2)

        //@$scope.res - resposta da função
        $scope.res = {
            message: "success",
            sum: res,
            n1, 
            n2
        }

        //@$scope.time - tempo de execução da operação
        //@$scope.iterations - número de iterações dos parâmetros
        $scope.time = getTime(n1, n2, true).toString() + ' ms'
        $scope.iterations = getIterations(n1, n2, true)
    }


    //multiplicação utilizando algoritmo americano
    $scope.multiplication = (n1, n2) => {
        //flag da operação
        $scope.operation = false

        //convertendo parâmetros para inteiros
        n1 = parseInt(n1)
        n2 = parseInt(n2)
        
        
        //método em algorithm/algorithm.js
        const res = multiplication(n1, n2)

        //@$scope.res - objeto de resposta da função 
        $scope.res = {
            message: "success",
            multiplication: res,
            n1,
            n2
        }  

        //@$scope.time - tempo de execução da operação
        //@$scope.iterations - número de iterações dos parâmetros
        $scope.time = getTime(n1, n2, false).toString() + ' ms'
        $scope.iterations = getIterations(n1, n2, false)


    }
})