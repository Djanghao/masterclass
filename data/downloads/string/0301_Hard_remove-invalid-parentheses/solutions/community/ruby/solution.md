# Solution for this problem.

**Author:** crazyycoder805
**Votes:** 0
**Link:** [https://leetcode.com/problems/remove-invalid-parentheses/solutions/5073409/](https://leetcode.com/problems/remove-invalid-parentheses/solutions/5073409/)

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
var removeInvalidParentheses = function(s) {
    const isValid = (str) => {
        let count = 0;
        for (let char of str) {
            if (char === '(') count++;
            else if (char === ')') count--;
            if (count < 0) return false;
        }
        return count === 0;
    };

    const result = new Set();
    let level = new Set([s]);

    while (true) {
        const valid = Array.from(level).filter(isValid);
        if (valid.length > 0) {
            valid.forEach(str => result.add(str));
            break;
        }

        const nextLevel = new Set();
        for (let str of level) {
            for (let i = 0; i < str.length; i++) {
                if (str[i] === '(' || str[i] === ')') {
                    const next = str.slice(0, i) + str.slice(i + 1);
                    nextLevel.add(next);
                }
            }
        }
        if (nextLevel.size === 0) break;
        level = nextLevel;
    }

    return Array.from(result);
};

```