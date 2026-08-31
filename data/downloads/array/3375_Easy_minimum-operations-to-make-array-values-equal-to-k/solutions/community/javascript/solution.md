# [Javascript] Sorting O(nlogn) / O(1)

**Author:** _savely
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-operations-to-make-array-values-equal-to-k/solutions/6123816/](https://leetcode.com/problems/minimum-operations-to-make-array-values-equal-to-k/solutions/6123816/)

---

# Intuition


- With the operation defined, it is not possible to make the array elements any  larger, so if the array has a value less than k, it is not possible to make it equal to k

- Starting with the second largest element in the array, we traversing it from right to left adding an operation each time we encounter an element that is not equal to the previous one


```javascript []
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function(nums, k) {

    nums.sort((a, b) => a - b);

    if(nums[0] < k) return -1;

    let ops = nums[0] === k ? 0 : 1;

    for(let i = nums.length - 2; i >= 0; i--) {

        ops += nums[i] === nums[i + 1] ? 0 : 1;
    }
    
    return ops;
};
```