# 🟢🔴🟢 Beats 100.00%👏 1 Line Solution 🟢🔴🟢

**Author:** HelloSajib
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-operations-to-make-array-equal/solutions/5872949/](https://leetcode.com/problems/minimum-operations-to-make-array-equal/solutions/5872949/)

---

```dart []
class Solution {
  int minOperations(int n) => n ~/ 2 * (n ~/ 2 + n % 2);
}
