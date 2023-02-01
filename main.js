function addSum(){
    let number = 0;
    return function(num){
        return number += num
    }
}

const sum = addSum()
console.log(sum(3))
console.log(sum(5))
console.log(sum(20))
