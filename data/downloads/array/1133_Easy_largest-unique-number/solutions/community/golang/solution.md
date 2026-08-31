# [Go] Slice solution

**Author:** harotobira
**Votes:** 1
**Link:** [https://leetcode.com/problems/largest-unique-number/solutions/572270/](https://leetcode.com/problems/largest-unique-number/solutions/572270/)

---

Runtime: 0 ms, faster than 100.00% of Go online submissions for Largest Unique Number.
Memory Usage: 2.8 MB, less than 100.00% of Go online submissions for Largest Unique Number.
```
func largestUniqueNumber(A []int) int {
	count := make([]int, 1001)
    for _, n := range A {
        count[n]++
    }
    
    for i := len(count)-1; i >= 0; i-- {
        if count[i] == 1 {
            return i
        }
    }
    
    return -1
}
```