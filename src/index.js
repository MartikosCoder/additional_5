module.exports = function check(str, bracketsConfig) {
    if(str.length % 2 !== 0){
        return false;
    } else {
        let chars = str.split(''),
            stack = [],
            open = [],
            close = [],
            closeIndex,
            openIndex;


        for (let br = 0; br < bracketsConfig.length; br++){
            open.push(bracketsConfig[br][0]);
            close.push(bracketsConfig[br][1]);
        }

        for (let i = 0; i < chars.length; i++) {
            openIndex = open.indexOf(chars[i]);
            if (openIndex !== -1) {
                stack.push(openIndex);
                continue;
            }

            console.log(stack);

            closeIndex = close.indexOf(chars[i]);
            if (closeIndex !== -1) {
                openIndex = stack.pop();
                if (closeIndex !== openIndex) {
                    return false;
                }
            }
        }

        if (stack.length !== 0) {
            return false;
        }

        return true;
    }
}
