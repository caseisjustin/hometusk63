// 3
function findMaxPositive(...num: number[]): number{
    console.log(typeof num)
    let maxn: number = num[0]
    for(const i in num){
        if(maxn < num[i]){
            maxn = num[i]
        }
    }
    return maxn
}

console.log(findMaxPositive(1, 9, 3, 4))