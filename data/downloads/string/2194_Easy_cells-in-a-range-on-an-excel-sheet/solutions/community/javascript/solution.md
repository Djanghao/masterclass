# [JavaScript] Easy to understand - double loop

**Author:** poppinlp
**Votes:** 20
**Link:** [https://leetcode.com/problems/cells-in-a-range-on-an-excel-sheet/solutions/1833319/](https://leetcode.com/problems/cells-in-a-range-on-an-excel-sheet/solutions/1833319/)

---

The strategy for this problem is straightforward:
- we traverse from start letter to end letter
- for each letter, we traverse from start number to end number

I can't find tricks for this problem, if you find some please comment, thanks.

Here's the code I submitted during the contest:

```js
const cellsInRange = (s) => {
  const [fromLetter, fromNum, , toLetter, toNum] = s;
  const ret = [];
  for (let l1 = fromLetter.charCodeAt(0), l2 = toLetter.charCodeAt(0); l1 <= l2; ++l1) {
    for (let n1 = +fromNum, n2 = +toNum; n1 <= n2; ++n1) {
      ret.push(String.fromCharCode(l1) + n1);
    }
  }
  return ret;
};
```