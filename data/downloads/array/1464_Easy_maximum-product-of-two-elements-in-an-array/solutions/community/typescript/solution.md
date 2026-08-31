# A simple two-line solution with a step-by-step process.

**Author:** shamnad_skr
**Votes:** 2
**Link:** [https://leetcode.com/problems/maximum-product-of-two-elements-in-an-array/solutions/5899286/](https://leetcode.com/problems/maximum-product-of-two-elements-in-an-array/solutions/5899286/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
1. Sort the array from larger to small
2. Took 0,1 index values from that array ( since after sort they are the largest or same)
3. calculate the anser and return ind

# Complexity
- Time complexity:O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```typescript []
function maxProduct(nums: number[]): number {

    //sort values from larger to small
     nums.sort((a,b) => b-a);
    //Calculating and returning the first two values.
    return ( (nums[0]-1)* (nums[1]-1) );
    
};
```