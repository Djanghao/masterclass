# Golang Go Solution 🚀

**Author:** fcmdias
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-number-of-people-that-can-be-caught-in-tag/solutions/2864188/](https://leetcode.com/problems/maximum-number-of-people-that-can-be-caught-in-tag/solutions/2864188/)

---

```
func catchMaximumAmountofPeople(team []int, dist int) int {
    var res int
    caught := make(map[int]bool)
    var latest int
    for i, v := range team {
        if v == 0 {
            continue
        }
        start := i - dist
        if start < 0 {
            start = 0
        }
        if start < latest {
            start = latest + 1
        }
        end := i + dist 
        for ii := start; ii < len(team) && ii <= end; ii++ {
            vv := team[ii]
            if vv == 1 {
                continue
            }
            if caught[ii] {
                continue
            }
            caught[ii] = true
            latest = ii
            res++
            break
        }
    }
    return res
}
```