# 🟢🔴🟢 Beats 100.00%👏 3 Lines Solutions 🟢🔴🟢

**Author:** HelloSajib
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-child-who-has-the-ball-after-k-seconds/solutions/6055118/](https://leetcode.com/problems/find-the-child-who-has-the-ball-after-k-seconds/solutions/6055118/)

---

```
class Solution {
  int numberOfChild(int n, int k) {

    int children = n - 1;
    if((k ~/ children) % 2 == 0) return k % children;
    else return children - (k % children);

  }
}
```