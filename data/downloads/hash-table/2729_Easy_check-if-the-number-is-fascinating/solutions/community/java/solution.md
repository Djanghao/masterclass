# Most efficient O(1)

**Author:** Java_Programmer_Ketan
**Votes:** 8
**Link:** [https://leetcode.com/problems/check-if-the-number-is-fascinating/solutions/3622760/](https://leetcode.com/problems/check-if-the-number-is-fascinating/solutions/3622760/)

---

There are just 4 numbers which satisfy this condition. TC->O(1)
```
class Solution {
    public boolean isFascinating(int n) {
        return n == 192 || n == 219 || n==273 || n==327;
    }
}
```