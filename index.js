const pjson = require('./package.json');

itWorks = function() {
    
    const start = Date.now();

    try {

        return JSON.stringify({"itWorks": "Yes, it works!"
        , "package": pjson.name
        , "version": pjson.version
        });

    } catch (error) {
        
        const end = Date.now();

        throw new utilitalia_Error(
            'itWorks'
            , `${(end - start)}ms.`
            , error.message);

    }

}

numeriInParole = function(numero) {

    const start = Date.now();

    try {

        let numeroLength = Math.ceil(Math.log10(numero + 1));

        if (numeroLength > 15) {
    
            const end = Date.now();
    
            throw new utilitalia_Error(
                'numeriInParole'
                , `${(end - start)}ms.`
                , 'Numbers longer than 15 digits are not managed!'
            )
        }
        
        let a = '';
    
        const numeriParole = 
            [
                [0, '']
                , [1, 'uno', 'un']
                , [2, 'due']
                , [3, 'tre']
                , [4, 'quattro']
                , [5, 'cinque']
                , [6, 'sei']
                , [7, 'sette']
                , [8, 'otto']
                , [9, 'nove']
                , [10, 'dieci']
                , [11, 'undici']
                , [12, 'dodoci']
                , [13, 'tredici']
                , [14, 'quattordici']
                , [15, 'quindici']
                , [16, 'sedici']
                , [17, 'diciassette']
                , [18, 'diciotto']
                , [19, 'diciannove']
                , [20, 'venti']
                , [21, 'ventuno']
                , [28, 'ventotto']
                , [30, 'trenta']
                , [31, 'trentuno']
                , [38, 'trentotto']
                , [40, 'quaranta']
                , [41, 'quarantuno']
                , [48, 'quarantotto']
                , [50, 'cinquanta']
                , [51, 'cinquantuno']
                , [58, 'cinquantotto']
                , [60, 'sessanta']
                , [61, 'sessantuno']
                , [68, 'sessantotto']
                , [70, 'settanta']
                , [71, 'settantuno']
                , [78, 'settantotto']
                , [80, 'ottanta']
                , [81, 'ottantuno']
                , [88, 'ottantotto']
                , [90, 'novanta']
                , [91, 'novantuno']
                , [98, 'novantotto']
                , [100, 'cento']
                , [1000, 'mille', 'mila']
                , [1000000, 'milione', 'milioni']
                , [1000000000, 'miliardo', 'miliardi']
                , [1000000000000, 'bilione', 'bilioni']
    
            ];
    
        let migliaianumero_str_array = numero.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",").split(','); //.reverse();
        
        let migliaianumero_num_array = [];
    
        migliaianumero_str_array.forEach(element => {
            let zeroClean = element.at(0) === '0' ? Number(element.substring(1)) : Number(element);
            migliaianumero_num_array.push(zeroClean);
        });
    
        const centinaiaInParole = numero => 
        {// centinaia / decine / unità
            let result = '';
            
            let numeroLength = Math.ceil(Math.log10(numero + 1));
    
            if(numeroLength === 3) { //centinaia
                const quotientc = Math.floor(numero/100);
                const remainderc = numero % 100;
                const quotientd = Math.floor(remainderc/10)*10;
                const remainderd = remainderc % 10;
                result += numeriParole.find((element) => quotientc > 1 ? element[0] === quotientc : ['',''])[1]
                    + numeriParole.find((element) => element[0] === 100)[1]
                    + numeriParole.find((element) => quotientd === 10 || remainderd === 1 || remainderd === 8 ? element[0] === remainderc : [0,''])[1]
                    + numeriParole.find((element) => quotientd !== 10 && remainderd !== 1 && remainderd !== 8 ? element[0] === quotientd : [0,''])[1]
                    + numeriParole.find((element) => quotientd !== 10 && remainderd !== 1 && remainderd !== 8 ? element[0] === remainderd : [0,''])[1]
            } else if(numeroLength === 2) { // decine
                const quotientu = Math.floor(numero/10)*10;
                const remainderu = numero % 10;
                result += numeriParole.find((element) => quotientu === 10 || remainderu === 1 || remainderu === 8 ? element[0] === numero : [0,''])[1]
                    + numeriParole.find((element) => quotientu !== 10 && remainderu !== 1 && remainderu !== 8 ? element[0] === quotientu : [0,''])[1]
                    + numeriParole.find((element) => quotientu !== 10 && remainderu !== 1 && remainderu !== 8 ? element[0] === remainderu : [0,''])[1]
            } else if(numeroLength === 1) { // unità
                result += numero === 1 ? numeriParole.find((element) => element[0] === numero)[2] : numeriParole.find((element) => element[0] === numero)[1];
            }
    
            return result;
    
        };
        
        let num_array_length = migliaianumero_num_array.length;
    
        migliaianumero_num_array.forEach(function callback(value, index) {
    
            a += centinaiaInParole(value);
    
            if (num_array_length === 2 && index === 0) {
                a += value == 1 ? numeriParole.find((element) => element[0] === 1000)[1] : numeriParole.find((element) => element[0] === 1000)[2];
            } else if (num_array_length === 3 && index === 0) {
                a += value == 1 ? numeriParole.find((element) => element[0] === 1000000)[1] : numeriParole.find((element) => element[0] === 1000000)[2];
            } else if (num_array_length === 3 && index === 1) {
                if (value === 1) a = a.slice(0, -2);
                a += value == 1 ? numeriParole.find((element) => element[0] === 1000)[1] : numeriParole.find((element) => element[0] === 1000)[2];
            } else if (num_array_length === 4 && index === 0) {
                a += value == 1 ? numeriParole.find((element) => element[0] === 1000000000)[1] : numeriParole.find((element) => element[0] === 1000000000)[2];
            } else if (num_array_length === 4 && index === 1) {
                a += value == 1 ? numeriParole.find((element) => element[0] === 1000000)[1] : numeriParole.find((element) => element[0] === 1000000)[2];
            } else if (num_array_length === 4 && index === 2) {
                if (value === 1) a = a.slice(0, -2);
                a += value == 1 ? numeriParole.find((element) => element[0] === 1000)[1] : numeriParole.find((element) => element[0] === 1000)[2];
            } else if (num_array_length === 5 && index === 0) {
                a += value == 1 ? numeriParole.find((element) => element[0] === 1000000000000)[1] : numeriParole.find((element) => element[0] === 1000000000000)[2];
            } else if (num_array_length === 5 && index === 1) {
                a += value == 1 ? numeriParole.find((element) => element[0] === 1000000000)[1] : numeriParole.find((element) => element[0] === 1000000000)[2];
            } else if (num_array_length === 5 && index === 2) {
                a += value == 1 ? numeriParole.find((element) => element[0] === 1000000)[1] : numeriParole.find((element) => element[0] === 1000000)[2];
            } else if (num_array_length === 5 && index === 3) {
                if (value === 1) a = a.slice(0, -2);
                a += value == 1 ? numeriParole.find((element) => element[0] === 1000)[1] : numeriParole.find((element) => element[0] === 1000)[2];
            }
    
        });
    
        return a;    

    } catch (error) {
        
        const end = Date.now();

        throw new utilitalia_Error(
            'numeriInParole'
            , `${(end - start)}ms.`
            , error.message);

    }

}

utilitalia_Error = function(routine = "", executiontime = "", message = "") { 
    
    this.routine = routine;
    this.executiontime = executiontime; 
    this.message = message; 
    this.name = "utilitalia_Error";

} 

utilitalia_Error.prototype = Error.prototype;

module.exports = { itWorks, numeriInParole };