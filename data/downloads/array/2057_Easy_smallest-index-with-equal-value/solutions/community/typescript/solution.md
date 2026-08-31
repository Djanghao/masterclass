# Simple Solution | Beginner Friendly | Easy Approach with Explanation✅

**Author:** Jithinp96
**Votes:** 3
**Link:** [https://leetcode.com/problems/smallest-index-with-equal-value/solutions/6089010/](https://leetcode.com/problems/smallest-index-with-equal-value/solutions/6089010/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
- The task is to find the smallest index where the condition i % 10 == nums[i] holds true.
- We need to check each index i and compare the value at that index with i % 10. If a match is found, return the index.
- If no such index exists, return -1. Since the problem asks for the smallest such index, we can return the first one we find.

# Approach
1. Iterate over the array `nums` and check if the current index `i` satisfies the condition `i % 10 == nums[i]`.
2. If a match is found, return the index `i` immediately.
3. If no match is found after checking all indices, return -1.

# Code
```javascript []
/**
 * @param {number[]} nums
 * @return {number}
 */
var smallestEqual = function(nums) {
    for(let i=0;i<nums.length;i++){
        if(i%10==nums[i]) {
            return i
        }
    }
    return -1
};
```

```typescript []
function smallestEqual(nums: number[]): number {
    for (let i = 0; i < nums.length; i++) {
        if (i % 10 === nums[i]) {
            return i;
        }
    }
    return -1;
};