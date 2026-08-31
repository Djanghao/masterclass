# Go clean solution

**Author:** nick_shkaruba
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-operations-to-make-array-equal-ii/solutions/3085258/](https://leetcode.com/problems/minimum-operations-to-make-array-equal-ii/solutions/3085258/)

---

**Time complexity**: O(n) time, because we iterate multiple times on the input arrays
**Space complexity**: O(1), because we store computational result in nums1 

Enjoy:
```
func minOperations(nums1 []int, nums2 []int, k int) int64 {
  if k == 0 {
    for i := range nums1 {
      if nums1[i] != nums2[i] {
        return -1
      }
    }
    return 0
  }
  
  // Compute k-diff, store it in nums1
  for i := range nums1 {
    diff := nums2[i] - nums1[i]
    if diff % k != 0 {
      return -1
    }
    
    nums1[i] = diff / k
  }
  
  positivesSum := 0
  negativesSum := 0
  for i := range nums1 {
    if nums1[i] > 0 {
      positivesSum += nums1[i]
    } else if nums1[i] < 0 {
      negativesSum += nums1[i]
    }
  }
  
  if positivesSum != -negativesSum {
    return -1
  }
  return int64(positivesSum)
}
```