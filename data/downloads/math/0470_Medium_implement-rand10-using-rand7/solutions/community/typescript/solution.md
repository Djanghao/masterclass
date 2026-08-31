# 80ms

**Author:** GennadySX
**Votes:** 0
**Link:** [https://leetcode.com/problems/implement-rand10-using-rand7/solutions/4538298/](https://leetcode.com/problems/implement-rand10-using-rand7/solutions/4538298/)

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
/**
 * The rand7() API is already defined for you.
 * function rand7(): number {}
 * @return a random integer in the range 1 to 7
 */

function rand10(): number {
    let ans: number = Number.MAX_SAFE_INTEGER;
    while (ans >= 40) {
        ans = 7 * (rand7() - 1) + (rand7() - 1);
    }
    return (ans % 10) + 1;
};
```