# Fairly standard JS/TS solution using array sorting and .shift()

**Author:** jamauss
**Votes:** 1
**Link:** [https://leetcode.com/problems/sort-even-and-odd-indices-independently/solutions/4368915/](https://leetcode.com/problems/sort-even-and-odd-indices-independently/solutions/4368915/)

---

Just put each odd and even number into their own arrays, sorted each array how it needs to be sorted, then `shift`ing them back into the return array.

# Code
```
const sortEvenOdd = (nums: number[]): number[] => {
    
    const evenNums = [];
    const oddNums = [];

    for(let i = 0; i < nums.length; i++) {
        if(i % 2 === 0) {
            evenNums.push(nums[i]);
        } else {
            oddNums.push(nums[i]);
        }
    }

    // sort even index nums in ascending order
    if(evenNums.length > 0) evenNums.sort((a,b) => a - b);
    // sort odd index nums in descending order
    if(oddNums.length > 0) oddNums.sort((a,b) => b - a);

    const returnArray = [];

    while(evenNums.length > 0 || oddNums.length > 0) {
        if(evenNums.length > 0) returnArray.push(evenNums.shift());
        if(oddNums.length > 0) returnArray.push(oddNums.shift());
    }

    return returnArray;
};
```

See more `TypeScript`/`JavaScript` (and other language) LeetCode solutions at https://github.com/jasonmauss/LeetCode