const newForEach = function(array, callBack){
    for(i = 0; i <array.length; i++){
        const currentValue = array[i];
        callBack(currentValue, i, array)
    }

}

const newMap = function (array, callBack){
    const newArr = [];
    for (i = 0; i <array.length; i++){
        const currentValue = array[i];
        newArr.push(callBack(currentValue, i, array))
    }
    return newArr;
    
}

const newSome = function (array, callBack){
   
    for (i = 0; i<array.length; i++){
        const currentValue = array[i];
       if (callBack(currentValue)){
           return true;
           
        }
    } return false;
}

const newFind = function (array, callBack){
    for ( i = 0; i < array.length; i++){
        const currentValue = array[i];
        if(callBack(currentValue)){
            return currentValue;
        }
    } return false;

}

const newFindIndex = function (array, callBack){
    for (i = 0; i < array.length; i++){
    const currentValue = array[i];
    if(callBack(currentValue)){
        return i;
        }
    }
}

const newEvery = function(array, callBack){
    
    for (i = 0; i < array.length; i++){
        const currentValue = array[i];
        if(callBack(currentValue) != currentValue){
            return false;
        }

    }return true;
}

const newFilter = function(array, callBack){
    const newArr = [];
    for (i = 0; i < array.length; i++){
        const currentValue = array[i];
        if(callBack(currentValue)){
            newArr.push(currentValue)
        }

    }return newArr;
}



const echo = function (val) {
    console.log(val)
}
const addTwo = function (val) {
    return val + 2
}
const negate = function (val) {
    return val * -1
}
const isAbove10 = function (val) {
    return val > 10
}
const isNegative = function (val) {
    return val < 0
}
const isPositive = function (val) {
    return val > 0
}
const isNumber = function (val) {
    return typeof val === 'number'
}
let nums = [-3, -1, 0, 1, 2, 30, 45, 678]
console.group('newForEach')
console.log(JSON.stringify(newForEach(nums, echo)) === JSON.stringify(nums.forEach(echo)))
console.groupEnd()

console.group('newMap')
console.log(JSON.stringify(newMap(nums, isNegative)) === JSON.stringify(nums.map(isNegative)))
console.log(JSON.stringify(newMap(nums, addTwo)) === JSON.stringify(nums.map(addTwo)))
console.groupEnd()

console.group('newSome')
console.log(JSON.stringify(newSome(nums, isNegative)) === JSON.stringify(nums.some(isNegative)))
console.log(JSON.stringify(newSome(nums, isPositive)) === JSON.stringify(nums.some(isPositive)))
console.log(JSON.stringify(newSome(nums, isAbove10)) === JSON.stringify(nums.some(isAbove10)))
console.groupEnd()

console.group('newFind')
console.log(JSON.stringify(newFind(nums, isNegative)) === JSON.stringify(nums.find(isNegative)))
console.log(JSON.stringify(newFind(nums, isPositive)) === JSON.stringify(nums.find(isPositive)))
console.log(JSON.stringify(newFind(nums, isAbove10)) === JSON.stringify(nums.find(isAbove10)))
console.groupEnd()
console.group('newFindIndex')
console.log(JSON.stringify(newFindIndex(nums, isNegative)) === JSON.stringify(nums.findIndex(isNegative)))
console.log(JSON.stringify(newFindIndex(nums, isPositive)) === JSON.stringify(nums.findIndex(isPositive)))
console.log(JSON.stringify(newFindIndex(nums, isAbove10)) === JSON.stringify(nums.findIndex(isAbove10)))
console.groupEnd()
console.group('newEvery')
console.log(JSON.stringify(newEvery(nums, isNegative)) === JSON.stringify(nums.every(isNegative)))
console.log(JSON.stringify(newEvery(nums, isPositive)) === JSON.stringify(nums.every(isPositive)))
console.log(JSON.stringify(newEvery(nums, isAbove10)) === JSON.stringify(nums.every(isAbove10)))
console.log(JSON.stringify(newEvery(nums, isNumber)) === JSON.stringify(nums.every(isNumber)))
console.groupEnd()
console.group('newFilter')
console.log(JSON.stringify(newFilter(nums, isNegative)) === JSON.stringify(nums.filter(isNegative)))
console.log(JSON.stringify(newFilter(nums, isPositive)) === JSON.stringify(nums.filter(isPositive)))
console.log(JSON.stringify(newFilter(nums, isAbove10)) === JSON.stringify(nums.filter(isAbove10)))
console.log(JSON.stringify(newFilter(nums, isNumber)) === JSON.stringify(nums.filter(isNumber)))
console.groupEnd() 

