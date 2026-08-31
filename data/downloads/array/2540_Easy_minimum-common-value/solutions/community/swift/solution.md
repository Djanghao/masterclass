# Swift Two Pointers

**Author:** colin6575
**Votes:** 2
**Link:** [https://leetcode.com/problems/minimum-common-value/solutions/4861762/](https://leetcode.com/problems/minimum-common-value/solutions/4861762/)

---

# Approach
Two Pointers

# Complexity
- Time complexity:
O(n) - One iteration needed

- Space complexity:
O(1) - space required doesn't increase w/input size

# Code
```
class Solution {
  func getCommon(_ nums1: [Int], _ nums2: [Int]) -> Int {
    var nums1Index = 0
    var nums2Index = 0
    var solution = 0
  
    while nums1Index < nums1.count &&
          nums2Index < nums2.count {
    
      let nums1Val = nums1[nums1Index]
      let nums2Val = nums2[nums2Index]
    
      if nums1Val == nums2Val {
        return nums1Val
      } else if nums1Val > nums2Val {
        nums2Index += 1
      } else {
        nums1Index += 1
      }
    }
  
    return -1
  }
}
```