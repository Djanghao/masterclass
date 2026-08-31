# Beat 100% on time and space

**Author:** kiemtien
**Votes:** 0
**Link:** [https://leetcode.com/problems/convert-integer-to-the-sum-of-two-no-zero-integers/solutions/5198306/](https://leetcode.com/problems/convert-integer-to-the-sum-of-two-no-zero-integers/solutions/5198306/)

---

```
class Solution {
   func getNoZeroIntegers(_ n: Int) -> [Int] {
  var result = [Int]()
  
  for digit in 1 ... n {
    let remainding = n - digit
    if !String(remainding).contains("0"), !String(digit).contains("0") {
      return [digit, remainding]
    }
  }
  
  return result
}
}
```