# Not easy

**Author:** kiemtien
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-number-of-operations-with-the-same-score-i/solutions/5320398/](https://leetcode.com/problems/maximum-number-of-operations-with-the-same-score-i/solutions/5320398/)

---

```
class Solution {
func maxOperations(_ nums: [Int]) -> Int {
  var firstSum = nums[0] + nums[1]
  var res = 1
  var nums = nums
  nums.removeFirst()
  nums.removeFirst()
  while firstSum == nums.prefix(2).reduce(0, +) {
    nums.removeFirst()
    if nums.isEmpty { return res }
    nums.removeFirst()
    res += 1
  }
  return res
}
}
```