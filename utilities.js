// Utilities File


export const
    isBin = array => {
        if(!array.length) return false

        let binArr = Array.isArray(array) ? array : Array.from(array, Number);
        let onlyBin = binArr.filter((a) => a === 1 || a === 0);

        return onlyBin.length === array.length;
    },

    alertBoxAnim = (obj,margin,value,gap = 0) => {

        setTimeout(() => {
            if(typeof margin === 'number') {
                switch(margin){
                    case 1:
                        obj.style.marginTop = value;
                        break;
                    case 2:
                        obj.style.marginRight = value;
                        break;
                    case 3:
                        obj.style.marginBottom = value;
                        break;
                    case 4:
                        obj.style.marginLeft = value;
                        break;        
                }
            
			}
        },gap);
    },

    showResult = (obj) => {
        obj.style.marginTop = '0';
        obj.style.opacity = '1';
    },

    resetResult = (obj) => {
        obj.style.marginTop = '';
        obj.style.opacity = '';
    }