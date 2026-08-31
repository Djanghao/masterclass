# [JS|TS] Recursion

**Author:** night-sky
**Votes:** 1
**Link:** [https://leetcode.com/problems/partition-string-into-minimum-beautiful-substrings/solutions/3737470/](https://leetcode.com/problems/partition-string-into-minimum-beautiful-substrings/solutions/3737470/)

---

# Code
```javascript []
var minimumBeautifulSubstrings = function(s) {
  let bin = ['11110100001001', '110000110101', '1001110001', '1111101', '11001', '101', '1'];
  let min = Infinity;

  function rec(str, binIndex, size = 0) {
    if (binIndex === 7) {
      if (str.replaceAll('_', '') === '') {
        min = Math.min(min, size);
      }

      return;
    }

    if (str.indexOf(bin[binIndex]) !== -1) {
      rec(str.replace(bin[binIndex], '_'), binIndex, size + 1);
    }

    rec(str, binIndex + 1, size);
  }

  rec(s, 0);

  return min === Infinity ? -1 : min;
};
```
```typescript []
function minimumBeautifulSubstrings(s: string): number {
  let bin = ['11110100001001', '110000110101', '1001110001', '1111101', '11001', '101', '1'];
  let min = Infinity;

  function rec(str: string, binIndex: number, size = 0) {
    if (binIndex === 7) {
      if (str.replaceAll('_', '') === '') {
        min = Math.min(min, size);
      }

      return;
    }

    if (str.indexOf(bin[binIndex]) !== -1) {
      rec(str.replace(bin[binIndex], '_'), binIndex, size + 1);
    }

    rec(str, binIndex + 1, size);
  }

  rec(s, 0);

  return min === Infinity ? -1 : min;
};
```
