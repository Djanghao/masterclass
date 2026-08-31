# TS | JS => Simple one liner  🔥🔥🔥

**Author:** decpk
**Votes:** 0
**Link:** [https://leetcode.com/problems/di-string-match/solutions/5821212/](https://leetcode.com/problems/di-string-match/solutions/5821212/)

---

# Complexity
- Time complexity: ```O(n)```

<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: `O(n)`
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```typescript []
function diStringMatch(s: string, low = 0, high = s.length): number[] {
    return new Array(s.length + 1)
        .fill(0)
        .reduce((acc, curr, i) => [...acc, s[i] === "I" ? low++ : high--], []);
};
```