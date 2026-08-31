# One string solution

**Author:** mavrayev
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-uncommon-subsequence-i/solutions/5920056/](https://leetcode.com/problems/longest-uncommon-subsequence-i/solutions/5920056/)

---

# Code
```typescript []
function findLUSlength(a: string, b: string): number {
  return a !== b ? (a.length > b.length ? a.length : b.length) : -1;
}
```