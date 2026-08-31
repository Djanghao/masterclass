# JavaScript solution using Set

**Author:** shengdade
**Votes:** 8
**Link:** [https://leetcode.com/problems/fair-candy-swap/solutions/512064/](https://leetcode.com/problems/fair-candy-swap/solutions/512064/)

---

```javascript
/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var fairCandySwap = function(A, B) {
  const sumA = A.reduce((acc, cur) => acc + cur);
  const sumB = B.reduce((acc, cur) => acc + cur);
  const diff = (sumA - sumB) >> 1;
  const setA = new Set(A);
  for (const candy of B) {
    if (setA.has(candy + diff)) return [candy + diff, candy];
  }
};
```