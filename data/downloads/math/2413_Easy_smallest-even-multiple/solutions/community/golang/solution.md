# golang easy solution 0ms

**Author:** fshiori
**Votes:** 1
**Link:** [https://leetcode.com/problems/smallest-even-multiple/solutions/2591500/](https://leetcode.com/problems/smallest-even-multiple/solutions/2591500/)

---

Runtime: 2 ms, faster than 100.00% of Go online submissions for Smallest Even Multiple.
Memory Usage: 2 MB, less than 100.00% of Go online submissions for Smallest Even Multiple.

```
func smallestEvenMultiple(n int) int {
    if n % 2 == 1 {
        return n * 2
    } else {
        return n
    }
}
```