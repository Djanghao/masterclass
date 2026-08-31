# TS Intuitive Sliding Window

**Author:** dnguy104
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-number-of-nice-subarrays/solutions/5371167/](https://leetcode.com/problems/count-number-of-nice-subarrays/solutions/5371167/)

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
function numberOfSubarrays(nums: number[], k: number): number {
    let res = 0;
    let odds = 0;
    let q = [];
    let r = 0;
    let l = 0;
    while(r<nums.length) {
        odds += (nums[r] % 2) ? 1 : 0;
        if(nums[r] % 2) q.push(r);

        if(odds > k) {
            let prev = q.shift();
            odds--;
            l = prev + 1;
        }
        if(odds===k) {
            if(q.length) res += q[0] - l + 1;
            else res += r - l + 1;
        }
        r++;
    }
    return res;
};
```