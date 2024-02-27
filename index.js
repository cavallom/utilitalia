const pjson = require('./package.json');

function getNumberLength(num) {
    return Math.ceil(Math.log10(num + 1));
}

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

    let numberLength = getNumberLength(numero);

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
            , [1000000, 'milione']
            , [1000000000, 'miliardo']
            , [1000000000000, 'bilione']

        ];

        let lunghezzaNumero = numberLength;

        let result = '';

        if(numero > 99 && numero < 1000) {
            const quotientd = Math.floor(numero/100);
            const remainderd = numero % 100;
            const quotientu = Math.floor(remainderd/10)*10;
            const remainderu = remainderd % 10;
            result += numeriParole.find((element) => quotientd > 1 ? element[0] === quotientd : ['',''])[1]
                + numeriParole.find((element) => element[0] === 100)[1]
                + numeriParole.find((element) => quotientu === 10 || remainderu === 1 || remainderu === 8 ? element[0] === remainderd : [0,''])[1]
                + numeriParole.find((element) => quotientu !== 10 && remainderu !== 1 && remainderu !== 8 ? element[0] === quotientu : [0,''])[1]
                + numeriParole.find((element) => quotientu !== 10 && remainderu !== 1 && remainderu !== 8 ? element[0] === remainderu : [0,''])[1]
        } else if(numero > -1 && numero < 100) {
            const quotientu = Math.floor(numero/10)*10;
            const remainderu = numero % 10;
            result += numeriParole.find((element) => quotientu === 10 || remainderu === 1 || remainderu === 8 ? element[0] === numero : [0,''])[1]
                + numeriParole.find((element) => quotientu !== 10 && remainderu !== 1 && remainderu !== 8 ? element[0] === quotientu : [0,''])[1]
                + numeriParole.find((element) => quotientu !== 10 && remainderu !== 1 && remainderu !== 8 ? element[0] === remainderu : [0,''])[1]

        }
        return result;

}
utilitalia_Error = function(routine = "", executiontime = "", message = "") { 
    
    this.routine = routine;
    this.executiontime = executiontime; 
    this.message = message; 
    this.name = "utilitalia_Error";

} 

utilitalia_Error.prototype = Error.prototype;

module.exports = { itWorks, numeriInParole };