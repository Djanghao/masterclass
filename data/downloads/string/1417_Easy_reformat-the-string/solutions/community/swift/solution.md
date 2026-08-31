# 40% for both

**Author:** kiemtien
**Votes:** 0
**Link:** [https://leetcode.com/problems/reformat-the-string/solutions/5319497/](https://leetcode.com/problems/reformat-the-string/solutions/5319497/)

---

```
class Solution {
func reformat(_ s: String) -> String {
  var chars = Array(s).filter { $0.isLetter }
  var nums = Array(s).filter { $0.isNumber }
  var result = ""
  var charLength = chars.count
  var numsLength = nums.count
  
  if abs(charLength - numsLength) > 1 { return "" }
  
  while !chars.isEmpty && !nums.isEmpty {
    if chars.count > nums.count {
      result += String(chars.removeFirst())
      result += String(nums.removeFirst())
    } else {
      result += String(nums.removeFirst())
      result += String(chars.removeFirst())
    }
  }
  
  if chars.isEmpty && nums.isEmpty {
    return result
  } else {
    result += chars.isEmpty ? String(nums.last!) : String(chars.last!)
  }
  return result
}

}
```