# Go O(m+n) O(1)

**Author:** pdkonovalov
**Votes:** 36
**Link:** [https://leetcode.com/problems/merge-sorted-array/solutions/3646745/](https://leetcode.com/problems/merge-sorted-array/solutions/3646745/)

---

```
func merge(nums1 []int, m int, nums2 []int, n int)  {
    for n != 0 {
        if m != 0 && nums1[m-1] > nums2[n-1] {
            nums1[m+n-1] = nums1[m-1]
            m--
        } else {
            nums1[m+n-1] = nums2[n-1]
            n--
        }
    }
}
```