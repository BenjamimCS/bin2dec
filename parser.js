import {isBin,alertBoxAnim,showResult,resetResult} from './utilities.js';

const alertBoxArea = document.getElementById('alertBox-area');
const alertBoxTextArea = document.getElementById('alertBox-text');
const inputBin = document.getElementById('inputBin');
const toParseBtn = document.getElementById('toParseBtn');
const clearResult = document.getElementById('cleanBtn');
const resultSpan = document.getElementById('result-span');

const alertBoxStndrtMargin = '-290px';
    
inputBin
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
    let inputBinNumber = Array.from(inputBin.value,(n) => Number(n));

    let expo = inputBinNumber.length -1;
    let acc = 0;

    if(inputBin.value.length === 0 || !isBin(inputBinNumber)){
        alertBoxTextArea.textContent = 'Empty or Non-Binary Value';
        alertBoxArea.style.marginRight = '0px';

        alertBoxAnim(alertBoxArea,2,"0px")

        inputBin.focus();
    } else{

        for (let numbers of inputBinNumber){
            acc += (2 ** expo--) * numbers;
        }

        resultSpan.innerHTML = acc;
        showResult(resultSpan);
    }

    alertBoxAnim(alertBoxArea,2,alertBoxStndrtMargin,1500);

    inputBin.focus();
}

function toClear(){
    if(!resultSpan.textContent){
        alertBoxTextArea.textContent = 'Nothing To Clear';

        alertBoxAnim(alertBoxArea,2,"0px")
        alertBoxAnim(alertBoxArea,2,alertBoxStndrtMargin,1500);

        inputBin.focus();
    } else{
        inputBin.value = '';

        resetResult(resultSpan);
        resultSpan.textContent = '';

        alertBoxAnim(alertBoxArea,2,alertBoxStndrtMargin);

        inputBin.focus();
    }
}
