# 64% runtime

**Author:** kiemtien
**Votes:** 0
**Link:** [https://leetcode.com/problems/remove-trailing-zeros-from-a-string/solutions/5276485/](https://leetcode.com/problems/remove-trailing-zeros-from-a-string/solutions/5276485/)

---

```
class Solution {
func removeTrailingZeros(_ num: String) -> String {
  var num = num
  while num.last == "0" {
    num.removeLast()
  }
  return num
}

}
```