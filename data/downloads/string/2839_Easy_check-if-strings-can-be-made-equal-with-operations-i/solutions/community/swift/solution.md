# Runtime: 33.33% - Memory: 100%

**Author:** kiemtien
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-strings-can-be-made-equal-with-operations-i/solutions/5285825/](https://leetcode.com/problems/check-if-strings-can-be-made-equal-with-operations-i/solutions/5285825/)

---

```
class Solution {
func canBeEqual(_ s1: String, _ s2: String) -> Bool {
  var arrS1 = Array(s1)
  var arrS2 = Array(s2)
  
  for index in 1..<arrS1.count-2 {
    arrS1.swapAt(index, index + 2)
    if arrS1 == arrS2 {
      return true
    }
  }
  
  for index in 0..<arrS1.count-2 {
    arrS1.swapAt(index, index + 2)
    if arrS1 == arrS2 {
      return true
    }
  }
  
  return s1 == s2
}
}
```