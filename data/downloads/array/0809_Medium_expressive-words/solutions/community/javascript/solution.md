# Easy to understand

**Author:** andyoung
**Votes:** 8
**Link:** [https://leetcode.com/problems/expressive-words/solutions/452844/](https://leetcode.com/problems/expressive-words/solutions/452844/)

---

```javascript
/**
 * @param {string} S
 * @param {string[]} words
 * @return {number}
 */
var expressiveWords = function(S, words) {
  function count(str, i) {
    let start = i;
    while (i + 1 < str.length) {
      if (str[i] !== str[i + 1]) break;
      i++;
    }
    return i - start + 1;
  }
  
  function isStretchy(w) {
    let i = 0, j = 0;
    while (i < w.length && j < S.length) {
      if (w[i] !== S[j]) return false;
      let countA = count(w, i);
      let countB = count(S, j);
      if (countA > countB || (countA < countB && countB < 3)) {
        return false;
      }
      i += countA;
      j += countB;
    }
    return i == w.length && j == S.length;
  }
  
  let ans = 0;
  words.forEach(w => {
    if (isStretchy(w)) ans++;
  });
  return ans;
};
```