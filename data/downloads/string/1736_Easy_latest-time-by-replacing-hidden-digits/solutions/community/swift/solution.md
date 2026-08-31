# Swift solution

**Author:** yamironov
**Votes:** 1
**Link:** [https://leetcode.com/problems/latest-time-by-replacing-hidden-digits/solutions/1034670/](https://leetcode.com/problems/latest-time-by-replacing-hidden-digits/solutions/1034670/)

---

Swift solution
```
class Solution {
    func maximumTime(_ time: String) -> String {
        let t = Array(time).map({ Int(String($0)) ?? -1 })
        return "\\(t[0] >= 0 ? t[0] : (t[1] < 4 ? 2 : 1))\\(t[1] >= 0 ? t[1] : (t[0] == -1 || t[0] == 2 ? 3 : 9)):\\(t[3] >= 0 ? t[3] : 5)\\(t[4] >= 0 ? t[4] : 9)"
    }
}
```