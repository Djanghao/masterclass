# Be careful when using prefix and suffix in Swift

**Author:** kiemtien
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-distinct-difference-array/solutions/5184112/](https://leetcode.com/problems/find-the-distinct-difference-array/solutions/5184112/)

---

```
class Solution {
func distinctDifferenceArray(_ nums: [Int]) -> [Int] {
  var result = [Int]()
  for index in 1 ... nums.count {
    let prefixArray = nums.prefix(upTo: index)
    let suffixArray = nums.suffix(nums.count - index)
    let uniqueFromPrefix = Set(prefixArray).count
    let uniqueFromSuffix = Set(suffixArray).count
   
    let diff = uniqueFromPrefix - uniqueFromSuffix
    result.append(diff)
  }
  return result
}
}
```