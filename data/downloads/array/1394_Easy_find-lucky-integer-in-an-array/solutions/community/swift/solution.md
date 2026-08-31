# Runtime: 50% - Memory: 18%

**Author:** kiemtien
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-lucky-integer-in-an-array/solutions/5304149/](https://leetcode.com/problems/find-lucky-integer-in-an-array/solutions/5304149/)

---

```
class Solution {
func findLucky(_ arr: [Int]) -> Int {
  var frequencyCounter = [Int: Int]()
  for num in arr {
    frequencyCounter[num, default: 0] += 1
  }
  for num in arr.sorted(by: >) {
    if frequencyCounter[num] == num {
      return num
    }
  }
  return -1
}
}
```