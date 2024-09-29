const removeFromArray = function(arr, ...nums) {
    const newArr = arr.filter((i) => !nums.includes(i));
    return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
