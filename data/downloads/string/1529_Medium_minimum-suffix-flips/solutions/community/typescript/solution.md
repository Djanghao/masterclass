# Javascript/Typescript solution.

**Author:** tranhan0795
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-suffix-flips/solutions/4776615/](https://leetcode.com/problems/minimum-suffix-flips/solutions/4776615/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
function minFlips(target: string): number {
    let curFlips = 0;

    for (let i = 0; i < target.length; i++) {
        if ((curFlips + parseInt(target[i])) % 2 === 1) {
             curFlips++;
        }
    }

    return curFlips;
};
```