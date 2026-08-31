# JavaScript two lines

**Author:** shengdade
**Votes:** 7
**Link:** [https://leetcode.com/problems/goat-latin/solutions/509672/](https://leetcode.com/problems/goat-latin/solutions/509672/)

---

```javascript
/**
 * @param {string} S
 * @return {string}
 */
var toGoatLatin = function(S) {
  const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
  return S.split(' ')
    .map((w, i) =>
      vowels.has(w[0])
        ? w + 'ma' + 'a'.repeat(i + 1)
        : w.slice(1) + w[0] + 'ma' + 'a'.repeat(i + 1)
    )
    .join(' ');
};
```