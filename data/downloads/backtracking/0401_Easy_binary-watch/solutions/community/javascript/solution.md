# JavaScript brute force

**Author:** shengdade
**Votes:** 18
**Link:** [https://leetcode.com/problems/binary-watch/solutions/494251/](https://leetcode.com/problems/binary-watch/solutions/494251/)

---

```
/**
 * @param {number} num
 * @return {string[]}
 */
var readBinaryWatch = function(num) {
  const times = [];
  for (let h = 0; h < 12; h++) {
    for (let m = 0; m < 60; m++) {
      const hOnes = h ? h.toString(2).match(/1/g).length : 0;
      const mOnes = m ? m.toString(2).match(/1/g).length : 0;
      if (hOnes + mOnes === num) {
        times.push(`${h}:${m < 10 ? `0${m}` : m}`);
      }
    }
  }
  return times;
};
```