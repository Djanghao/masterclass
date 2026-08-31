# Simple Solution | Beginner Friendly | Easy Approach with Explanation✅

**Author:** Jithinp96
**Votes:** 3
**Link:** [https://leetcode.com/problems/to-lower-case/solutions/6091253/](https://leetcode.com/problems/to-lower-case/solutions/6091253/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The problem requires converting all uppercase letters in a string to lowercase. JavaScript provides a built-in method `toLowerCase()` that efficiently handles this operation.

# Approach
<!-- Describe your approach to solving the problem. -->
1. Utilize the `toLowerCase()` method, which processes the input string `s` and converts all uppercase characters to lowercase.
2. Return the resulting string directly as the output.

# Code
```javascript []
/**
 * @param {string} s
 * @return {string}
 */
var toLowerCase = function(s) {
    return s.toLowerCase()
};
```

```typescript []
function toLowerCase(s: string): string {
    return s.toLowerCase();
}