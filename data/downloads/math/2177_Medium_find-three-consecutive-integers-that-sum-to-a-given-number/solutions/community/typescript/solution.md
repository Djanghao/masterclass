# Simple solution

**Author:** Hanuman-Ghawade
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-three-consecutive-integers-that-sum-to-a-given-number/solutions/4942853/](https://leetcode.com/problems/find-three-consecutive-integers-that-sum-to-a-given-number/solutions/4942853/)

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
function sumOfThree(num: number): number[] {
    const n = num % 3 === 0;
    const x = num / 3
    if (n) {
        return [x - 1, x, x + 1]
    } else {
        return []
    }
};
```