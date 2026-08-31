# Go(lang) Solution

**Author:** 0xedb
**Votes:** 2
**Link:** [https://leetcode.com/problems/find-subsequence-of-length-k-with-the-largest-sum/solutions/1960424/](https://leetcode.com/problems/find-subsequence-of-length-k-with-the-largest-sum/solutions/1960424/)

---

```go
func maxSubsequence(nums []int, k int) []int {
    dupe := make([]int, len(nums))
    copy(dupe, nums)
    sort.Ints(dupe)
    
    seen := make(map[int]int, k)
    
    for _, val := range dupe[len(dupe) - k : ] {
        seen[val]++
    }
    
    ans := make([]int, 0, k)
    
    for _, val := range nums {
        if v, ok := seen[val]; ok && v > 0 {
            ans = append(ans, val)
            seen[val]--
        }
    }    
    
         
    return ans
}
```