# Easy: 2 pointers with  n*2 brute force aproach

**Author:** subramanya4shenoy
**Votes:** 0
**Link:** [https://leetcode.com/problems/two-sum-less-than-k/solutions/5926831/](https://leetcode.com/problems/two-sum-less-than-k/solutions/5926831/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```typescript []
function twoSumLessThanK(nums: number[], k: number): number {
    let i = 0;
    let j = 0;
    let maxSum = -1;
    while(i < nums.length-1) {
        j = i+1;

        while(j< nums.length) {
            if((nums[i] + nums[j]) < k) {
                maxSum = Math.max((nums[i] + nums[j]), maxSum)
            }
            j++;
        }
        i++;
    }

    return maxSum;
};
```