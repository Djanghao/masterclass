# Swift | Bit logic solution

**Author:** VladimirTheLeet
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-operations-to-make-the-integer-zero/solutions/3683379/](https://leetcode.com/problems/minimum-operations-to-make-the-integer-zero/solutions/3683379/)

---

# Code
```
class Solution {
    func makeTheIntegerZero(_ y: Int, _ x: Int) -> Int
    {
        var y = y
        for k in 1...
        {
            y -= x
            if x > 0 && y < 0 { return -1 }
            if y >= 0 && (y.nonzeroBitCount == k || (y.nonzeroBitCount < k && y >= k)) { return k }
        }
        return -1
    }
}
```