// 2
function checkValue(value: any): string{
    switch(typeof value){
        case 'string':
            return "Qiymat string";
            break;
        case 'number':
            return 'Qiymat number';
            break;
        case 'boolean':
            return "Qiymat boolean";
            break;
        case 'bigint':
            return "Qiymat bigint";
            break;
        case 'function':
            return "Qiymat function";
            break;
        case 'object':
            return "Qiymat object";
            break;
        case 'symbol':
            return "Qiymat symbol";
            break;
        case 'undefined':
            return "Qiymat undefined";
            break;
        default:
            return "enter value"
    }
}

console.log(checkValue(4))