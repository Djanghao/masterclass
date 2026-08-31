# Simple Solution | Beginner Friendly | Easy Approach with Explanation

**Author:** Jithinp96
**Votes:** 8
**Link:** [https://leetcode.com/problems/first-missing-positive/solutions/6088768/](https://leetcode.com/problems/first-missing-positive/solutions/6088768/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
1. Positive integers start from 1. We can keep track of the smallest expected number (`x`) while iterating through the array.
2. By sorting the array, we can iterate in increasing order, making it easy to find missing numbers.

# Approach
<!-- Describe your approach to solving the problem. -->
1. Sort the array in ascending order.
2. Initialize `x` to 1, representing the smallest positive integer we expect to find.
3. Iterate through the sorted array:
   - If the current number matches `x`, increment `x` (move to the next expected integer).
   - Otherwise, continue, as the number is not relevant to the smallest missing positive.
4. After the loop, `x` holds the smallest missing positive integer.

# Code
```javascript []
/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    let x=1;
    nums.sort((a, b) => a-b);
    for(let i=0;i<nums.length; i++) {
        if(nums[i] == x){
            x++
        }
    }
    return x
};
```

```typescript []
function firstMissingPositive(nums: number[]): number {
    let x = 1;
    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === x) {
            x++;
        }
    }
    
    return x;
};
```