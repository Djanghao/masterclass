# [Accepted] Swift

**Author:** vasilisiniak
**Votes:** 1
**Link:** [https://leetcode.com/problems/latest-time-you-can-obtain-after-replacing-characters/solutions/5059150/](https://leetcode.com/problems/latest-time-you-can-obtain-after-replacing-characters/solutions/5059150/)

---

```
class Solution {
    func findLatestTime(_ s: String) -> String {
        
        var d = Array(s)

        if d[0] == "?" { d[0] = (d[1] == "?" || d[1] == "1" || d[1] == "0") ? "1" : "0" }
        if d[1] == "?" { d[1] = (d[0] == "1") ? "1" : "9" }
        if d[3] == "?" { d[3] = "5" }
        if d[4] == "?" { d[4] = "9" }

        return String(d)
    }
}
```