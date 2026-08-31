# ✅🌵Easy Javascript/Typescript solution. Time: O(N), Space: O(1)

**Author:** alxn_tarasiuk
**Votes:** 4
**Link:** [https://leetcode.com/problems/sorting-the-sentence/solutions/4371664/](https://leetcode.com/problems/sorting-the-sentence/solutions/4371664/)

---

# Complexity
- Time complexity: $$O(N)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
function sortSentence(s: string): string {
  return s.split(' ')
  .sort((a, b) => +a[a.length - 1] - +b[b.length - 1])
  .join(' ')
  .replace(/\\d/gm, '')
};
```