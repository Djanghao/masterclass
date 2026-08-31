# Beats 100%(at least for now), very simple Swift solution

**Author:** JUNGYUN-Daegu
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-consecutive-floors-without-special-floors/solutions/4570686/](https://leetcode.com/problems/maximum-consecutive-floors-without-special-floors/solutions/4570686/)

---

# Intuition
Travering through sorted special floors and calculating with previous special floor

# Approach
The trick is adding dummy special floor as `bottom - 1` and `top + 1`

# Code
```
class Solution {
    func maxConsecutive(_ bottom: Int, _ top: Int, _ special: [Int]) -> Int {
        var res: Int = 0
        var pre: Int = bottom - 1

        var special = special
        special.append(bottom - 1)
        special.append(top + 1)

        let sorted = special.sorted()

        sorted.forEach {
            res = max(res, $0 - pre - 1)
            pre = $0
        }

        return res
    }
}
```