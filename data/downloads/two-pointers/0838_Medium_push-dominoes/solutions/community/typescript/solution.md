# replace

**Author:** morris367
**Votes:** 0
**Link:** [https://leetcode.com/problems/push-dominoes/solutions/4896070/](https://leetcode.com/problems/push-dominoes/solutions/4896070/)

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
function pushDominoes(dominoes: string): string {
    while (true) {
        let ans: string = ""
        ans = dominoes.replaceAll("R.L", "_").replaceAll(".L", "LL").replaceAll("R.", "RR").replaceAll("_", "R.L")
        if (ans == dominoes) return ans
        dominoes = ans
    }
};
```