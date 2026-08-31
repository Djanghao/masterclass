# Go, Divide and Conquer

**Author:** onebitrs
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-score-of-an-array-after-marking-all-elements/solutions/3312364/](https://leetcode.com/problems/find-score-of-an-array-after-marking-all-elements/solutions/3312364/)

---

# Code
```
func findScore(nums []int) int64 {
    if len(nums) == 0 { return int64(0) }
    if len(nums) == 1 { return int64(nums[0]) }
    
    min, pos := nums[0], 0
    for i, num := range nums {
        if num < min {
            min = num
            pos = i
        }
    }
    ans := int64(min)
    if pos - 1 >= 0 {
        ans += findScore(nums[:pos-1])
    }
    if pos + 2 <= len(nums) {
        ans += findScore(nums[pos+2:])
    }
    return ans
}
                
```