# Golang Optimized Binary Search

**Author:** azulbukh
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-distance-between-a-pair-of-values/solutions/3361360/](https://leetcode.com/problems/maximum-distance-between-a-pair-of-values/solutions/3361360/)

---

# Code
```
func maxDistance(nums1 []int, nums2 []int) int {
    m := 0
    for i := 0; i < len(nums1); i++ {
        l, h := i, len(nums2) - 1
        first := nums1[i]
        for l <= h {
            mid := (h - l) / 2 + l
            if nums2[mid] < first {
                h = mid - 1
            } else {
                l = mid + 1
            }
        }
        if h - i > m {
            m = h - i
        }

    }
    return m
}
```