# Javascript ES6 simple solution

**Author:** leomacode
**Votes:** 56
**Link:** [https://leetcode.com/problems/reshape-the-matrix/solutions/734753/](https://leetcode.com/problems/reshape-the-matrix/solutions/734753/)

---

```
var matrixReshape = function (nums, r, c) {
  var arr = nums.flat();
  if (r * c != arr.length) return nums;

  var res = [];
  while (arr.length) res.push(arr.splice(0, c));
  return res;
};
```