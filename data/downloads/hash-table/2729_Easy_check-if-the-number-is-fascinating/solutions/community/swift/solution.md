# Runtime: 14% - Memory: 9%

**Author:** kiemtien
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-the-number-is-fascinating/solutions/5289940/](https://leetcode.com/problems/check-if-the-number-is-fascinating/solutions/5289940/)

---

```
class Solution {
func isFascinating(_ n: Int) -> Bool {
  var strigN = String(n)
  var doubleN = String(n * 2)
  var tripleN = String(n * 3)
  var checking = strigN + doubleN + tripleN
  var result = true
  var dict = [Character: Int]()
  for char in checking {
    dict[char, default: 0] += 1
    if char == "0" { return false }
    if dict[char] == 2 {
      result = false
    }
  }
  return result
}
}
```