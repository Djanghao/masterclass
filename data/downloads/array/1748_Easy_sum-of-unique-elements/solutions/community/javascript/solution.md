# [JS] | One pass solution

**Author:** vivekjain202
**Votes:** 9
**Link:** [https://leetcode.com/problems/sum-of-unique-elements/solutions/1054340/](https://leetcode.com/problems/sum-of-unique-elements/solutions/1054340/)

---

The problem can be solved by using a hash map and greddily calculating sum, hash map is used to keep track of frequency of occurence of each number. Loop over nums array if the number is not already present in the obj then greedily add it to sum and set frequency to 1. If the frequency of number is already 1 then we need to remove this from our greedy sum and set it's frequency to -1 as we need not to perform anything on same number.
```
var sumOfUnique = function(nums) {
  let obj = {}
  let sum = 0
  // count frequency of each number
  for(let num of nums){
    if(obj[num] === undefined){
      sum += num
      obj[num] = 1
    }else if(obj[num] === 1){
      sum -= num
      obj[num] = -1
    }
  }
  
  return sum
};
```