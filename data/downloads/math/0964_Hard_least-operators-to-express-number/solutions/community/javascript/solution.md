# Least Operators to Express Number

**Author:** Naeem_ABD
**Votes:** 0
**Link:** [https://leetcode.com/problems/least-operators-to-express-number/solutions/5489434/](https://leetcode.com/problems/least-operators-to-express-number/solutions/5489434/)

---

# Intuition
The problem requires us to find the minimum number of operators required to express a given target using a single positive integer x. We can use the four basic arithmetic operations: addition, subtraction, multiplication, and division. The problem statement also mentions that we should use the usual order of operations, i.e., multiplication and division happen before addition and subtraction.


# Code
```
/**
 * @param {number} x
 * @param {number} target
 * @return {number}
 */
var leastOpsExpressTarget = function (x, target) {
  let pos = 0, neg = 0, k = 0, pos_prev, neg_prev;
  while (target > 0) {
    const cur = target % x;
    target = Math.floor(target / x);
    if (k > 0) {
      const pos2 = Math.min(cur * k + pos, (cur + 1) * k + neg);
      const neg2 = Math.min((x - cur) * k + pos, (x - cur - 1) * k + neg);
      pos = pos2, neg = neg2;
    } else {
      pos = cur * 2, neg = (x - cur) * 2;
    }
    pos_prev = pos, neg_prev = neg;
    k++;
  }
  return Math.min(pos_prev, k + neg_prev) - 1;
};
```