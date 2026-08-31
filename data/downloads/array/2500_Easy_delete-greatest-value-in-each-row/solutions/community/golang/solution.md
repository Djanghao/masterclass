# Golang | Sorting

**Author:** Mikekbnv
**Votes:** 1
**Link:** [https://leetcode.com/problems/delete-greatest-value-in-each-row/solutions/2900758/](https://leetcode.com/problems/delete-greatest-value-in-each-row/solutions/2900758/)

---


# Code
```
func max(a, b int) int {
    if a > b {
        return a
    }
    return b
}
func deleteGreatestValue(grid [][]int) int {
    
    for _, arr := range grid {
        sort.Ints(arr)
    }
    
    answer := 0
    for i := 0; i < len(grid[0]); i++ {
        tmp := 0
        for j := 0; j < len(grid); j++{
            tmp = max(tmp, grid[j][i])
        }
        answer += tmp
    }
    return answer
}
```