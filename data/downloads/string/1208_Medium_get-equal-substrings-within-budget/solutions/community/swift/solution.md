# ✅ Accepted sliding window solution

**Author:** protodimbo
**Votes:** 1
**Link:** [https://leetcode.com/problems/get-equal-substrings-within-budget/solutions/5218993/](https://leetcode.com/problems/get-equal-substrings-within-budget/solutions/5218993/)

---

# Code
```
class Solution {
    func equalSubstring(_ s: String, _ t: String, _ maxCost: Int) -> Int {
        var curCost = 0, l = 0, res = 0, s = Array(s), t = Array(t)

        for r in 0..<s.count {
            if let sAsciiValue = s[r].asciiValue, let tAsciiValue = t[r].asciiValue {
                curCost += abs(Int(sAsciiValue) - Int(tAsciiValue))
            }

            while curCost > maxCost {
                if let sAsciiValue = s[l].asciiValue, let tAsciiValue = t[l].asciiValue {
                    curCost -= abs(Int(sAsciiValue) - Int(tAsciiValue))
                }
                l += 1
            }
            res = max(res, r - l + 1)
        }

        return res
    }
}
```