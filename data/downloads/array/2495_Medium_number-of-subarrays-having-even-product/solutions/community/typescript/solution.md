# 100% speed & memory, explanation

**Author:** EvgeniiTachalov
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-subarrays-having-even-product/solutions/5642883/](https://leetcode.com/problems/number-of-subarrays-having-even-product/solutions/5642883/)

---

# Approach
To solve this problem efficiently, we can iterate through the array and use dynamic programming. The idea is to keep track of the number of subarrays ending at each index that have an even product.

1. Initialize a variable `dp` to store the count of subarrays ending at the current index with an even product.
2. Traverse the array:
   - If the current element is even, all subarrays ending at this index will have an even product. Thus, set `dp = i + 1`, where `i` is the current index.
   - If the current element is odd, the count of subarrays with an even product remains the same as for the previous index.
3. Sum up all values of `dp` for each index to get the total number of subarrays with even products.

# Complexity
- Time complexity: $$O(n)$$, where \\( n \\) is the length of the array. We only need a single pass through the array.
- Space complexity: $$O(1)$$. We use only a constant amount of extra space.

# Code
```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var evenProduct = function(nums) {
    let n = nums.length;
    let count = 0;
    let dp = 0; 
    
    for (let i = 0; i < n; i++) {
        if (nums[i] % 2 === 0) {
            dp = i + 1; 
        } 
        count += dp; 
    }
    
    return count;
};
