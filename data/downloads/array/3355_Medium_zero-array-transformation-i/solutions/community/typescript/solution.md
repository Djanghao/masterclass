# Easy 🗿 solution ⚛️ with step by step 🤩 explanation

**Author:** shamnad_skr
**Votes:** 1
**Link:** [https://leetcode.com/problems/zero-array-transformation-i/solutions/6101760/](https://leetcode.com/problems/zero-array-transformation-i/solutions/6101760/)

---

# Intuition
The goal is to transform the nums array into a "Zero Array" using the queries provided. Each query allows decrementing the values within a specified range. The difference array technique is utilized to efficiently apply the decrements for all queries, avoiding repeated updates to the nums array for each index in the range. This technique enables us to handle range updates in O(1) time per query, followed by a single pass to apply the accumulated differences.

# Approach
1. Use a Difference Array:
    - A difference array (diff) is initialized with a size of n+1 (where n is the length of nums), filled with zeros. This array is used to track the net decrement at each index.
    - For each query [li,ri]:Decrement diff[li] by 1 (start the decrement at index li).Increment diff[ri+1] by 1 (stop the decrement after index ri, if within bounds).
2. Apply the Difference Array:

    - Iterate through the diff array to calculate the cumulative effect at each index of nums.
    - Update nums by adding the cumulative value from the diff array to the current value of nums.
3. Zero Array Check:

    - If any element in nums becomes less than zero during the update, set it to zero to ensure the operation remains valid.
    - After processing all updates, check if all elements in nums are 0. Return true if they are; otherwise, return false.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```javascript []
/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {boolean}
 */
var isZeroArray = function(nums, queries) {

    let n = nums.length;
    let diff = new Array(n + 1).fill(0);

    for (let i = 0; i < queries.length; i++) {
        let start = queries[i][0];
        let end = queries[i][1];

        diff[start] -= 1;
        if (end + 1 < n) {
            diff[end + 1] += 1;
        }
    }

    for (let i = 0; i < n; i++) {
        
        if (i > 0) {
            diff[i] += diff[i - 1];
        }

        nums[i] += diff[i];
        if (nums[i] < 0) {
            nums[i] = 0; 
        }
    }

    return nums.every(num => num === 0);
};
```