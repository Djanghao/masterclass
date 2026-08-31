# JavaScript Solution (No Binary Search)

**Author:** ponyoluvsham
**Votes:** 2
**Link:** [https://leetcode.com/problems/sum-of-mutated-array-closest-to-target/solutions/1121369/](https://leetcode.com/problems/sum-of-mutated-array-closest-to-target/solutions/1121369/)

---

* Runtime: 84 ms, faster than 89.66% of JavaScript online submissions for Sum of Mutated Array Closest to Target.
* Memory Usage: 40.8 MB, less than 43.10% of JavaScript online submissions for Sum of Mutated Array Closest to Target.
```
var findBestValue = function(arr, target) {
    arr.sort((a, b) => a - b);
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        const lengthOfNumsToRight = arr.length - i;
        const currentNum = arr[i];
        if (sum + (currentNum * lengthOfNumsToRight) > target) {
            return Math.ceil((target - sum) / lengthOfNumsToRight - 0.5);
        }
        sum += currentNum;
    }

    return arr[arr.length - 1];
};
```