# Kill Process - Go | HashMap + BFS | Time - O(n) | Space - O(n)

**Author:** anr-m
**Votes:** 1
**Link:** [https://leetcode.com/problems/kill-process/solutions/2642023/](https://leetcode.com/problems/kill-process/solutions/2642023/)

---

```go
func killProcess(pid []int, ppid []int, kill int) []int {
    
    children := make(map[int][]int, len(ppid))
    for i := range pid {
        children[ppid[i]] = append(children[ppid[i]], pid[i])
    }
    
    res := []int{kill}
    for idx := 0; idx < len(res); idx++ {
        res = append(res, children[res[idx]]...)
    }
    
    return res
}
```