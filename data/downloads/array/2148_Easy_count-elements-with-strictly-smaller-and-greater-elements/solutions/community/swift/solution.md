# Runtime: 84% - Memory: 17%

**Author:** kiemtien
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-elements-with-strictly-smaller-and-greater-elements/solutions/5304205/](https://leetcode.com/problems/count-elements-with-strictly-smaller-and-greater-elements/solutions/5304205/)

---

```
class Solution {
func countElements(_ nums: [Int]) -> Int {
 // [-3,-3,3,3,90]
  var sorted = nums.sorted()
  
  let first = sorted.first
  let last = sorted.last
  
  sorted.removeAll(where: { $0 == first})
  sorted.removeAll(where: { $0 == last})
  
  return sorted.count
}
}
```