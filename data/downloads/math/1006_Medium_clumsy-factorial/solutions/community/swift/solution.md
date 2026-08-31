# Swift

**Author:** vasiliyfedotov
**Votes:** 0
**Link:** [https://leetcode.com/problems/clumsy-factorial/solutions/3807434/](https://leetcode.com/problems/clumsy-factorial/solutions/3807434/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: $$O(n)$$
- Space complexity: $$O(1)$$

# Code
```
class Solution {
    func clumsy(_ n: Int) -> Int {
        if n == 1 { return 1 }
        var res = 0

        var nn = n
        var qsign = 1
        var qq = n
        var act = -1

        while nn > 0 {
            if act == 0 {
                qq *= nn
                if nn == 1 {  res += qsign * qq }
            } else if act == 1 {
                res += qsign * qq / nn
                qq = 0
            } else if act == 2 {
                res += nn
            } else if act == 3 {
                qsign = -1
                qq = nn
                if nn == 1 {  res += qsign * qq }
            }

            act += 1
            act = act % 4
            nn -= 1
        }

        return res
    }
}
```