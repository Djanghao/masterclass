# Easy solution with step by step explanation with O( n logn)

**Author:** shamnad_skr
**Votes:** 3
**Link:** [https://leetcode.com/problems/array-partition/solutions/5959214/](https://leetcode.com/problems/array-partition/solutions/5959214/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
1. Sort the array: By sorting the array, we ensure that the smallest numbers are next to each other. This allows us to pair adjacent numbers, which will maximize the sum of the smaller values.

2. Sum the minimum values of the pairs: After sorting, we can sum up every second element (starting from the first) because those elements will be the smaller of the two in each pair.

# Complexity
- Time complexity:O(n logn)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```typescript []
function arrayPairSum(nums: number[]): number {
    

    // Sort the array in ascending order
    nums.sort((a, b) => a - b);
    
    let sum = 0;
    
    // Iterate through the sorted array and sum up every alternate element
    for (let i = 0; i < nums.length; i += 2) {
        sum += nums[i];
    }
    
    return sum;

};
```