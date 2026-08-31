# Simple solution using Set

**Author:** aansmirnov
**Votes:** 1
**Link:** [https://leetcode.com/problems/first-letter-to-appear-twice/solutions/4683747/](https://leetcode.com/problems/first-letter-to-appear-twice/solutions/4683747/)

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
function repeatedCharacter(s: string): string {
    const lettersSet = new Set();

    for (let i = 0; i < s.length; i++) {
        if (lettersSet.has(s[i])) {
            return s[i];
        }

        lettersSet.add(s[i]);
    }
};
```