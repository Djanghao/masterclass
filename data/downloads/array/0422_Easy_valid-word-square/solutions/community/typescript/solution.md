# Time: O(N^2) | Space: O(1)

**Author:** rojas
**Votes:** 0
**Link:** [https://leetcode.com/problems/valid-word-square/solutions/5525007/](https://leetcode.com/problems/valid-word-square/solutions/5525007/)

---

# Complexity
- Time complexity: $O(N^2)$

- Space complexity: $O(1)$

# Code
```typescript
function validWordSquare(words: string[]): boolean {
    const N = words.length;
    for (let i = 0; i < N; ++i) {
        if (words[i].length > N) {
            return false;
        }
        for (let j = i; j < N; ++j) {
            if (words[i][j] != words[j][i]) {
                return false;
            }
        }
    }
    return true;
};
```