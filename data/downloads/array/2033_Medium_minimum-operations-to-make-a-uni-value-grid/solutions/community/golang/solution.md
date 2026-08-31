# golang median solution

**Author:** jzhang046
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-operations-to-make-a-uni-value-grid/solutions/1516379/](https://leetcode.com/problems/minimum-operations-to-make-a-uni-value-grid/solutions/1516379/)

---

```go
func minOperations(grid [][]int, x int) int {
    mod := grid[0][0] % x
    divides := make([]int, 0, len(grid) * len(grid[0]))
    for _, row := range grid {
        for _, num := range row {
            if num % x != mod {
                return -1
            }
            divides = append(divides, num / x)
        }
    }
    sort.Ints(divides)
    median := divides[len(divides)/2]
    
    result := 0
    for _, num := range divides {
        result += abs(median - num)
    }
    return result 
}

func abs(x int) int {
    if x < 0 {
        x = -x
    }
    return x 
}

```