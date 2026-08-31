# [TypeScript] Simple 2-lines solution. O(1) | O(1)

**Author:** badnewz
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-number-of-pushes-to-type-word-i/solutions/4842921/](https://leetcode.com/problems/minimum-number-of-pushes-to-type-word-i/solutions/4842921/)

---

# Complexity
- Time complexity: $\\mathcal{O}(1)$
- Space complexity: $\\mathcal{O}(1)$

# Code
```
function minimumPushes(word: string): number {
    const n = word.length;
    return n <= 8 ? n :             // 1*n
        n <= 16 ? 2 * n - 8 :       // 1*8 + 2*(n-8)
            n <= 24 ? 3 * n - 24 :  // 1*8 + 2*8    + 3*(n-16)
                4 * n - 48;         // 1*8 + 2*8    + 3*8       + 4*(n-24)
};
```