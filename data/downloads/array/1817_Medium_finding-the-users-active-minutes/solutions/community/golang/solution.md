# Golang simple solution

**Author:** puoklam
**Votes:** 1
**Link:** [https://leetcode.com/problems/finding-the-users-active-minutes/solutions/1938022/](https://leetcode.com/problems/finding-the-users-active-minutes/solutions/1938022/)

---

```go
func findingUsersActiveMinutes(logs [][]int, k int) []int {
    records := make(map[int]map[int]bool) // id -> minute -> bool
    for _, log := range logs {
        id, min := log[0], log[1]
        if records[id] == nil {
            records[id] = make(map[int]bool)
        }
        records[id][min] = true
    }
    ret := make([]int, k)
    for _, mins := range records {
        ret[len(mins) - 1]++
    }
    return ret
}
```