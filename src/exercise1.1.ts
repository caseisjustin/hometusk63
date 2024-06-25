// 1
function findCommonElements(array1: number[], array2: number[]): number[] {
    const result = array1.filter(value => array2.includes(value));
    result.sort((a, b) => a - b);

    return result;
}

const array1 = [1, 2, 3, 4, 5];
const array2 = [4, 5, 6, 7, 8];
console.log(findCommonElements(array1, array2));