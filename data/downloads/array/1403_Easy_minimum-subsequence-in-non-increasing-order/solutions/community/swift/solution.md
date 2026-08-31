# 16 ms

**Author:** kiemtien
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-subsequence-in-non-increasing-order/solutions/5198369/](https://leetcode.com/problems/minimum-subsequence-in-non-increasing-order/solutions/5198369/)

---

# Code
```
class Solution {
  func minSubsequence(_ nums: [Int]) -> [Int] {
  var sortedNums = nums.sorted(by: >)
  var resultArray = [Int]()
  for _ in 0 ..< sortedNums.count {
    resultArray.append(sortedNums.removeFirst())
    if resultArray.reduce(0, +) > sortedNums.reduce(0, +) {
      return resultArray
    }
  }
  return resultArray
}
}
```