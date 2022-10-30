
var ansNum = 0
function genNumber(){
    var ansNum = Math.floor(Math.random() * 100)
    console.log(ansNum)
    return ansNum
}



export default { genNumber}