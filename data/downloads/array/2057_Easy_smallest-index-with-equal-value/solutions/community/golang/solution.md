# Golang solution

**Author:** nathannaveen
**Votes:** 1
**Link:** [https://leetcode.com/problems/smallest-index-with-equal-value/solutions/1551043/](https://leetcode.com/problems/smallest-index-with-equal-value/solutions/1551043/)

---

Why is this problem even there?

```
func smallestEqual(nums []int) int {
    for i := range nums {
        if i % 10 == nums[i] {
            return i
        }
    }
    
    return -1
}
```