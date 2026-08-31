# Swift with trick

**Author:** pagafan7as
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-distinct-numbers-on-board/solutions/5455482/](https://leetcode.com/problems/count-distinct-numbers-on-board/solutions/5455482/)

---

For $$n > 2$$, $$n \\mod (n - 1) = 1$$.

Therefore for $$n > 2$$ after $$n - 2$$ days we will have all the numbers $$2...n$$ but we will never have 1.

# Code
```
class Solution {
    func distinctIntegers(_ n: Int) -> Int {
        n == 1 ? 1 : n - 1
    }
}
```