// 1
function userData(name: string, age: number, address: string, married: boolean): [string, number, string, boolean] {
    return [name, age, address, married]
}

const userInfo = userData("john", 22, "NewYork", true)
console.log(userInfo)