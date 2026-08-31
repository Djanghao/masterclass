# [JavaScript] Easy to understand

**Author:** poppinlp
**Votes:** 9
**Link:** [https://leetcode.com/problems/check-if-all-1s-are-at-least-length-k-places-away/solutions/619558/](https://leetcode.com/problems/check-if-all-1s-are-at-least-length-k-places-away/solutions/619558/)

---

Just update and check the places length in traversal.

By the way, I don't get the point of this problem.

```js
const kLengthApart = (nums, k) => {
  let cur = k;
  for (const n of nums) {
    if (n === 0) { ++cur; continue; }
    if (cur < k) return false;
    cur = 0;
  }
  return true;
};
```