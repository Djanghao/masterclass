# simple solution

**Author:** ITPavel
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-value-to-get-positive-step-by-step-sum/solutions/4909922/](https://leetcode.com/problems/minimum-value-to-get-positive-step-by-step-sum/solutions/4909922/)

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
function minStartValue(nums: number[]): number {
let m:number =0, s:number= 0;
for (let num of nums){ s += num; m = Math.min(m, s); }
return 1 - m;     
};
```