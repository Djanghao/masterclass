# GoLang

**Author:** passionFruitFlower
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-equal-sum-of-two-arrays-after-replacing-zeros/solutions/4261660/](https://leetcode.com/problems/minimum-equal-sum-of-two-arrays-after-replacing-zeros/solutions/4261660/)

---

```
func minSum(nums1 []int, nums2 []int) int64 {
    s1 := int64(0)
    s2 := int64(0)
    o1 := int64(0)
    o2 := int64(0)
    for i := 0; i < len(nums1); i++ {
        if nums1[i] == 0 {
            o1 += 1
        }
        s1 += int64(nums1[i])
    }
    for i := 0; i < len(nums2); i++ {
        if nums2[i] == 0 {
            o2 += 1
        }
        s2 += int64(nums2[i])
    }
    if o1 == 0 && o2 == 0 {
        if s1 == s2 {
            return s1
        }
        return int64(-1)
    }
    if o1 == 0 {
        o1, o2 = o2, o1
        s1, s2 = s2, s1
    }
    if o2 == 0 {
        if o1 + s1 > s2 {
            return int64(-1)
        }
        return s2
    }
    return max(o1 + s1, o2 + s2)
}
```