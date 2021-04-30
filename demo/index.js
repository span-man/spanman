let spanman = require("../index.js")

// 深拷贝
let arr = [1, 2, 3, 44]
let bArr = spanman.deepCopy(arr)
console.log("bArr---->", bArr)

// 删除数组中的某项
let arr2 = [1, 2, 3, 44]
let arr3 = spanman.remove(arr2, 3)

console.log("arr2---->", arr2) // 删除之后的对象
console.log("arr3---->", arr3) // 被删除的项
