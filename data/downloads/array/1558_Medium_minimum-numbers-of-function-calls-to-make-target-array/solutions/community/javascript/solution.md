# JS Solution

**Author:** VarunNarayan21
**Votes:** 3
**Link:** [https://leetcode.com/problems/minimum-numbers-of-function-calls-to-make-target-array/solutions/4323666/](https://leetcode.com/problems/minimum-numbers-of-function-calls-to-make-target-array/solutions/4323666/)

---


# Code
```
/**
 * @param {number[]} nums
 * @return {number}
 */

function decrement_odd_nums(arr) {
    let odd_count = 0
    for (let i = 0; i < arr.length; i++) {
        const num = arr[i]
        if (num % 2 !== 0) {
            odd_count ++
            arr[i] -= 1
        }
    }
    return odd_count
}

function halve_nums(arr) {
    is_done = true
    for (let i = 0; i < arr.length; i++) {
        const num = arr[i]
        if (num !== 0) {
            is_done = false
        }
        arr[i] = arr[i] / 2
    }
    return is_done
}

var minOperations = function(nums) {
    let ops_count = 0
    is_done = false
    while (is_done === false) {
        let decrement_ops = decrement_odd_nums(nums)
        is_done = halve_nums(nums)
        ops_count += decrement_ops
        if (!is_done) {
            ops_count ++
        }
    }
    return ops_count
};
```