const sumAll = function(firstNum, lastNum) {
    let sum = 0;
    let smallerNum, largerNum;

    if(firstNum < 0 || lastNum < 0 || !Number.isInteger(firstNum) || !Number.isInteger(lastNum)){
        return "ERROR";
    }

    if(firstNum <= lastNum){
        smallerNum = firstNum;
        largerNum = lastNum;
    }
    else{
        smallerNum = lastNum;
        largerNum = firstNum;
    }

    for(let i = smallerNum; i <= largerNum; i++){
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
