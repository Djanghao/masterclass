# Keep It Simple and Go

**Author:** GiovanniGiorgio
**Votes:** 10
**Link:** [https://leetcode.com/problems/max-consecutive-ones/solutions/2191256/](https://leetcode.com/problems/max-consecutive-ones/solutions/2191256/)

---

```
func findMaxConsecutiveOnes(nums []int) int {
    res, curr := 0, 0
    
    for _, n := range nums {
        curr = curr * n + n
        if curr > res { res = curr }
    }
    return res
}
```