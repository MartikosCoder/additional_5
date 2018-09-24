module.exports = function check(str, bracketsConfig) {
    if(str.length % 2 !== 0){
        return false;
    } else {
        let stack = [],
            last = '';
        const map = {
            '(': ')',
            '[': ']',
            '{': '}',
            '1': '2',
            '3': '4',
            '5': '6',
        };
        const map_advanced = {
            '|': '|',
            '7': '7',
            '8': '8'
        };

        for (let i = 0; i < str.length; i++) {
            if (str[i] in map) {
                stack.push(str[i]);
            } else if (str[i] in map_advanced){
                if(stack.indexOf(str[i]) === -1){
                    stack.push(str[i]);
                } else {
                    last = stack.pop();

                    if (str[i] !== map_advanced[last]) return false;
                }
            } else {
                last = stack.pop();

                if (str[i] !== map[last]) return false;
            }
        }

        return stack.length === 0;
    }
}
