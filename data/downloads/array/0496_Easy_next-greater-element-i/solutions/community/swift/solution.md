# 6 lines, no stack and dictionary needed

**Author:** kiemtien
**Votes:** 3
**Link:** [https://leetcode.com/problems/next-greater-element-i/solutions/5199317/](https://leetcode.com/problems/next-greater-element-i/solutions/5199317/)

---

```
class Solution {
func nextGreaterElement(_ nums1: [Int], _ nums2: [Int]) -> [Int] {
  var res = [Int]()
  for num in nums1 {
    if let index = nums2.firstIndex(of: num) {
      let range = Array(nums2[index..<nums2.count]).filter { $0 > num }
      res.append(range.first ?? -1)
    }
  }
  return res
}
}
```