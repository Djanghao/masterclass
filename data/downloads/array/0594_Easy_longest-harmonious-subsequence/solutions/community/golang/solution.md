# [Go] Map solution 48 ms

**Author:** harotobira
**Votes:** 4
**Link:** [https://leetcode.com/problems/longest-harmonious-subsequence/solutions/559579/](https://leetcode.com/problems/longest-harmonious-subsequence/solutions/559579/)

---

```
func findLHS(nums []int) int {
    numbers := make(map[int]int, len(nums))
    for _, n := range nums {
		numbers[n]++
	}
    ans := 0 
    for k, v := range numbers{
        if i, ok := numbers[k+1]; ok {
            ans = max(ans, i + v)
        }
    }
    
    return ans
}


func max(a,b int)int{
    if a > b{
        return a
    }

    return b
}
```