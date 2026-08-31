# Radix 2

**Author:** kiemtien
**Votes:** 0
**Link:** [https://leetcode.com/problems/binary-number-with-alternating-bits/solutions/5112084/](https://leetcode.com/problems/binary-number-with-alternating-bits/solutions/5112084/)

---

# Code
```
class Solution {
func hasAlternatingBits(_ n: Int) -> Bool {
  let binaryString = String(n, radix: 2)
  let arrayBinaryString = Array(binaryString)
  // 1010 -> true
  // 1111 -> false
  // 1011 -> false
  var answer = false
  
  if n == 1 {
    return true 
  }
  
  for i in 0 ..< arrayBinaryString.count - 1 {
      if arrayBinaryString[i] != arrayBinaryString[i + 1] {
        answer = true
      } else {
        return false
      }
    
  }
  
  return answer
}
}
```