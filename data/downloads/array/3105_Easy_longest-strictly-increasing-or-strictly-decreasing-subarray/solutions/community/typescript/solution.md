# simple solution

**Author:** ITPavel
**Votes:** 1
**Link:** [https://leetcode.com/problems/longest-strictly-increasing-or-strictly-decreasing-subarray/solutions/5007269/](https://leetcode.com/problems/longest-strictly-increasing-or-strictly-decreasing-subarray/solutions/5007269/)

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
```
function longestMonotonicSubarray(nums: number[]): number {
let ans:number = 1,  inc:number = 1, dec:number = 1;
for(let i = 1; i < nums.length; i++) {
    if(nums[i-1] > nums[i]) {
        dec++;
        inc = 1;
        } else if (nums[i-1] < nums[i]) {
            dec = 1;
            inc++;
        } else {
            inc = 1;
            dec = 1;
        }
        ans = Math.max(ans, inc, dec);
    }
 return ans;    
};
```