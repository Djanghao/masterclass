# O(n²) Rotate the array and recalculate sum | JavaScript

**Author:** babec
**Votes:** 1
**Link:** [https://leetcode.com/problems/collecting-chocolates/solutions/3626593/](https://leetcode.com/problems/collecting-chocolates/solutions/3626593/)

---

JS implementation of [this solution](https://leetcode.com/problems/collecting-chocolates/solutions/3623806/python-3-rotate-n-1-times/)

# Intuition
Since the constraints are not too big we can apply brute force here.

First initialize the `results` array, which is essentially a copy of `nums`.
Also declare `min` variable, which will store the sum of all numbers in `nums`.

`n-1` times rotate `nums` array (`nums.unshift(nums.pop())`)

For each rotation check if `j-th` value of `nums` is smaller than `j-th` value of `results`. If it is smaller override `i-th` value in `results`.

After checking all numbers of `results` recalculate `min`.

# Complexity
- Time complexity: O(n\xB2)
- Space complexity: O(n)

# Code
```
var minCost = function(nums, x) {
    const results = [...nums]
    let min = results.reduce((a,b) => a+b, 0)

    for (let i=1; i<nums.length; i++) {
        nums.unshift(nums.pop())
        for (j=0; j<nums.length; j++) {
            if (results[j] > nums[j]) {
                results[j] = nums[j]
            }
        }
        min = Math.min(min, results.reduce((a,b) => a+b, 0) + i*x)
    }

    return min
};
```