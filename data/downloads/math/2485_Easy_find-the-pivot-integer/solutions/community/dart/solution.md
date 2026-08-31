# Easy Approach

**Author:** Isko21
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-the-pivot-integer/solutions/3560117/](https://leetcode.com/problems/find-the-pivot-integer/solutions/3560117/)

---

# Code
```
class Solution {
    int pivotInteger(int n) {
        double res = sqrt((n * n + n) / 2);

        return res.ceil() == res.floor() ? res.floor() : -1;
    }
}
```