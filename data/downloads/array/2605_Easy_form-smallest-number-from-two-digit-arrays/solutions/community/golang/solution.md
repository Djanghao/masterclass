# good solution

**Author:** Hamidjon4424
**Votes:** 0
**Link:** [https://leetcode.com/problems/form-smallest-number-from-two-digit-arrays/solutions/5134650/](https://leetcode.com/problems/form-smallest-number-from-two-digit-arrays/solutions/5134650/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
func minNumber(nums1 []int, nums2 []int) int {
    sort.Ints(nums1)
    sort.Ints(nums2)
    hmap := make(map[int]int)
    for _, i := range nums1{
        hmap[i]++
    }   
    for _, i := range nums2{
        if hmap[i] > 0{
            return i
        }
    }
    var min, max int
    if nums1[0] < nums2[0]{
        min = nums1[0]
        max = nums2[0]
    }else{
        min = nums2[0]
        max = nums1[0]
    }
    ret, _ := strconv.Atoi(strconv.Itoa(min) + strconv.Itoa(max))
    return ret
}
```