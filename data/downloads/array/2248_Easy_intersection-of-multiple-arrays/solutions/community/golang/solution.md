# Funny solution with Go

**Author:** tuanbieber
**Votes:** 2
**Link:** [https://leetcode.com/problems/intersection-of-multiple-arrays/solutions/2458233/](https://leetcode.com/problems/intersection-of-multiple-arrays/solutions/2458233/)

---

```
func intersection(nums [][]int) []int {
    numSet := make([]int, 1001)
    
    for i := 0; i < len(nums); i++ {
        for j := 0; j < len(nums[i]); j++ {
            numSet[nums[i][j]]++
        }
    }
    
    var res []int
    
    for i := 0; i < 1001; i++ {
        if numSet[i] == len(nums) {
            res = append(res, i)
        }
    }
    
    sort.Ints(res)
    
    return res
}
```