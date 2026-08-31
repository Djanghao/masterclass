# RemoveAll Where

**Author:** kiemtien
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-all-the-integers-in-a-range-are-covered/solutions/5140180/](https://leetcode.com/problems/check-if-all-the-integers-in-a-range-are-covered/solutions/5140180/)

---

```
class Solution {
func isCovered(_ ranges: [[Int]], _ left: Int, _ right: Int) -> Bool {
  var baseRange = Array(left...right)
  for range in ranges {
    let range = Array(range.first!...range.last!)
    baseRange.removeAll { num in
      range.contains(num)
    }
  }
  return baseRange.isEmpty
}
}
```