"use strict";
// hometusk
const colorCodes = {
    "qora": "0",
    "jigarrang": "1",
    "qizil": "2",
    "to'q sariq": "3",
    "sariq": "4",
    "yashil": "5",
    "ko'k": "6",
    "binafsha": "7",
    "kulrang": "8",
    "oq": "9"
};
function getResistanceCode(colors) {
    let code = "";
    for (let color of colors) {
        if (color in colorCodes) {
            code += colorCodes[color];
        }
    }
    return code;
}
console.log(getResistanceCode(["jigarrang", "yashil"]));
console.log(getResistanceCode(["jigarrang", "yashil", "binafsha"]));
console.log(getResistanceCode(["ko'k", "oq"]));
