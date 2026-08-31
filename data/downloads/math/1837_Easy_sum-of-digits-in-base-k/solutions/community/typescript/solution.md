# 1 line, 52ms (Beats 100%)

**Author:** morris367
**Votes:** 0
**Link:** [https://leetcode.com/problems/sum-of-digits-in-base-k/solutions/5119801/](https://leetcode.com/problems/sum-of-digits-in-base-k/solutions/5119801/)

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
function sumBase(n: number, k: number): number {
    return n.toString(k).split("").map(Number).reduce((total, curr) => total + curr, 0)
};
```

![\u87A2\u5E55\u64F7\u53D6\u756B\u9762 2024-05-06 162937.png](./images/0.png)
