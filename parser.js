import {isBin,alertBoxAnim,showResult} from './utilities.js';

const alertBoxArea = document.getElementById('alertBox-area');
const alertBoxTextArea = document.getElementById('alertBox-text');
const binString = document.getElementById('binInput');
const toParseBtn = document.getElementById('toParseBtn');
const clearResult = document.getElementById('cleanBtn');
const resultSpan = document.getElementById('result-span');

const alertBoxStndrtMargin = '-290px';

binString
    .addEventListener(
    'keydown',
    (k) =>{              
        if(k.keyCode === 13){
            bin2Dec();
        }
    }
);
toParseBtn
    .addEventListener('click',bin2Dec);
clearResult
    .addEventListener('click',toClear);

function bin2Dec(){
    let binArr = Array.from(binString.value,(n) => Number(n));

    let expo = binArr.length;
    let acc = 0;

    if(binString.value.length === 0 || !isBin(binArr)){
        alertBoxTextArea.textContent = 'Empty or Non-Binary Value';
        alertBoxArea.style.marginRight = '0px';

        alertBoxAnim(alertBoxArea,2,alertBoxStndrtMargin,1500)

        binString.focus();
    } else{

        for (let numbers of binArr){
            acc += (2 ** --expo) * numbers;
        }

        resultSpan.innerHTML = acc;
        showResult(resultSpan);
    }

    alertBoxAnim(alertBoxArea,2,alertBoxStndrtMargin,1500);

    binString.focus();
}

function toClear(){
    if(resultSpan.textContent === ''){
        alertBoxTextArea.textContent = 'Nothing To Clear';
        alertBoxArea.style.marginRight = '0px';

        alertBoxAnim(alertBoxArea,2,alertBoxStndrtMargin,1500);

        binString.focus();
    } else{
        binString.value = '';

        showResult(resultSpan);
        resultSpan.textContent = '';

        alertBoxAnim(alertBoxArea,2,alertBoxStndrtMargin,1500);

        binString.focus();
    }
}