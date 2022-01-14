const alertBoxArea = document.getElementById('alertBox-area');
const alertBoxTextArea = document.getElementById('alertBox-text');
const binString = document.getElementById('binInput');
const toParseBtn = document.getElementById('toParseBtn');
const clearResult = document.getElementById('cleanBtn');
const resultSpan = document.getElementById('result-span');

const alertBoxStndrtMarginRight = '-290px';

binString
.addEventListener(
'keydown',
    function(k){                                
        if(k.keyCode === 13){
            bin2Dec();
        }                           
});
toParseBtn
    .addEventListener('click',bin2Dec);
clearResult
    .addEventListener('click',toClear);

var validator = (ar) => 
                (ar.filter((a) => 
                a === 1 || a === 0)).length === ar.length;

function bin2Dec(){    
    let binArr = Array.from(binString.value,(n) => Number(n));

    let exp = binArr.length;
    let acc = 0;

    if(binString.value.length == 0 || !validator(binArr)){
        alertBoxTextArea.textContent = 'Empty or Non-Binary Value';
        alertBoxArea.style.marginRight = '0px';

        let interval = setInterval(function (){
            alertBoxArea.style.marginRight = alertBoxStndrtMarginRight;
            clearInterval(interval);
        },1500);

        binString.focus();
    } else{
        
        for (numbers of binArr){
            acc += (2 ** --exp) * numbers;
        }

        resultSpan.innerHTML = acc;
        resultSpan.style.marginTop = '0';
        resultSpan.style.opacity = '1';

    }    
    
    toLog(
        binString.value,
        binArr,validator(binArr),
        resultSpan.textContent
    );

    let interval = setInterval(function (){
        alertBoxArea.style.marginRight = alertBoxStndrtMarginRight;
        clearInterval(interval);
    },1500);

    binString.focus();
}

function toClear(){
    if(resultSpan.textContent === ''){
        alertBoxTextArea.textContent = 'Nothing To Clear';
        alertBoxArea.style.marginRight = '0px';

        let interval = setInterval(function (){
            alertBoxArea.style.marginRight = alertBoxStndrtMarginRight;
            clearInterval(interval);
        },1500);

        binString.focus();
    } else{
        binString.value = '';
        
        resultSpan.style.opacity = '0';
        resultSpan.style.marginTop = '';
        resultSpan.textContent = '';        

        let interval = setInterval(function (){
            alertBoxArea.style.marginRight = alertBoxStndrtMarginRight;
            clearInterval(interval);
        },1500);
        
        binString.focus();
    }
}