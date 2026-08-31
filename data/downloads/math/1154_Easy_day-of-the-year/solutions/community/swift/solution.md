# ✅ [Swift] 4 lines, 100% speed, easy to understand

**Author:** lmvtsv
**Votes:** 1
**Link:** [https://leetcode.com/problems/day-of-the-year/solutions/2988154/](https://leetcode.com/problems/day-of-the-year/solutions/2988154/)

---

![image.png](./images/0.png)

```
class Solution {
    func dayOfYear(_ date: String) -> Int {
        var days = [31,28,31,30,31,30,31,31,30,31,30,31]
	    let date = date.split(separator: "-").map { Int($0)! }
	    days[1] = date[0].isMultiple(of: 400) || (date[0].isMultiple(of: 4) && !date[0].isMultiple(of: 100)) ? 29 : 28
	    return days[0..<date[1] - 1].reduce(0, +) + date[2]
    }
}
```