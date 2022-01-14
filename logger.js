function toLog(
    inputVal, initAr,
    validatorValue,resultData){

    console.log(       
        `
        ValorString: ${inputVal} tipo -> ${typeof inputVal},        
        ArrayIn ${initAr} tipo -> ${typeof initAr},
        ArrayInLength ${inputVal.length}, 
        ArrayB ${validatorValue}
        Resultado: ${resultData}
        `
    );
}