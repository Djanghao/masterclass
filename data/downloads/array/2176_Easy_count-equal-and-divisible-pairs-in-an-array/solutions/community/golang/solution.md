# Go O(n^2) solution

**Author:** tuanbieber
**Votes:** 5
**Link:** [https://leetcode.com/problems/count-equal-and-divisible-pairs-in-an-array/solutions/2133880/](https://leetcode.com/problems/count-equal-and-divisible-pairs-in-an-array/solutions/2133880/)

---

```
func countPairs(nums []int, k int) int {
    var res int
    
    for i := 0; i < len(nums); i++ {
        for j := i + 1; j < len(nums); j++ {
            if nums[i]  == nums[j] && (i*j) % k == 0 {
                res++
            }
        }
    }
    
    return res
}
```