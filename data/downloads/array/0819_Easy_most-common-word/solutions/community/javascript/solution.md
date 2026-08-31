# Clean JavaScript solution

**Author:** Hongbo-Miao
**Votes:** 10
**Link:** [https://leetcode.com/problems/most-common-word/solutions/420553/](https://leetcode.com/problems/most-common-word/solutions/420553/)

---

```
const mostCommonWord = (paragraph, banned) => {
  const bannedSet = new Set(banned);
  const words = paragraph.toLowerCase().split(/\\W+/);
  const map = {};
  for (const w of words) {
    if (!bannedSet.has(w)) {
      if (map[w] == null) map[w] = 0;
      map[w]++;
    }
  }

  let res = '';
  let max = -Infinity;
  for (const w in map) {
    const count = map[w];
    if (count > max) {
      res = w;
      max = count;
    }
  }
  return res;
};
```
