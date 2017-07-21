// push adds to the end of the array
// pop removes the last item of the array
// unshift adds to the front of the array
// shift removes the first item of the array
// indexOf finds the index of an item in the array
// slice copies specific parts of an array EX: array.slice(startIndex, endIndex)

function printReverse(list){
    var startIdx = list.length - 1;
    for (startIdx; startIdx > -1; startIdx--){
        console.log(list[startIdx]);
    }
}
printReverse([1,2,3,4]); 

function isUniform(list2){
    for (var i = 0; i < list2.length; i++){
        if (list2[0] !== list2[i]){
            return false;
        }
    }
    return true;
    // forEach implementation not working bc 'return false' only returns out of the forEach function
    // list2.forEach(function(item){
    //     if (item !== list2[0]){
    //         return false;
    //     }
    // });
    // return true;
}
console.log(isUniform([1,1,1,1]));
console.log(isUniform([1,2,1,1]));

function sumArray(sumList){
    var result = 0;
    sumList.forEach(function(num){
        result += num;
    });
    return result;
}
console.log(sumArray([1,2,3]));
console.log(sumArray([-5,100]));

function max(maxList){
    var MAX = maxList[0];
    maxList.forEach(function(num2compare){
        if (num2compare > MAX){
            MAX = num2compare;
        }
    });
    return MAX;
}
console.log(max([1,2,3]));
console.log(max([-5,100]));