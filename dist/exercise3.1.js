"use strict";
// 3
function findMaxPositive(...num) {
    console.log(typeof num);
    let maxn = num[0];
    for (const i in num) {
        if (maxn < num[i]) {
            maxn = num[i];
        }
    }
    return maxn;
}
console.log(findMaxPositive(1, 9, 3, 4));
