# One line code solution (with explanation), beats 93%, O(logn) time

**Author:** zturn
**Votes:** 18
**Link:** [https://leetcode.com/problems/elimination-game/solutions/954062/](https://leetcode.com/problems/elimination-game/solutions/954062/)

---

**Thumbs up if you like it!**

Observations (assuming f(n) is the last number when the input is n):
* f(1) = 1
* f(2n + 1) = f(2n)
* f(2n) = 2(n - (f(n) - 1))
	*  f(n) - 1 is the last number offset (**started from left**) when the input is n
	*  f(n) - 1 is also the last number offset (**started from the right**) when the input is 2n
	* So n - (f(n) - 1) is the last number offset (**started from left**) when the input is 2n
	* Finally, 2(n - (f(n) - 1)) is the last number value when the input is 2n
```
class Solution {
    public int lastRemaining(int n) {
        return n == 1 ? 1 : (n / 2 - lastRemaining(n / 2) + 1) * 2;
    }
}
```