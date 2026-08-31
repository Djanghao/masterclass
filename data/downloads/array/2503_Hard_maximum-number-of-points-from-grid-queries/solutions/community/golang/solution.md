# Golang

**Author:** dynasty919
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-number-of-points-from-grid-queries/solutions/3934711/](https://leetcode.com/problems/maximum-number-of-points-from-grid-queries/solutions/3934711/)

---



# Code
```
func maxPoints(grid [][]int, queries []int) []int {
    m := len(grid)
    n := len(grid[0])

    h :=  &minheap{
        grid: grid,
    }
    heap.Push(h, [2]int{0, 0})

    visited := make([][]bool, m)
    for i := 0; i < m; i++ {
        visited[i] = make([]bool, n)
    }

    visited[0][0] = true

    q2 := make([]int, len(queries))
    for i := 0; i < len(q2); i++ {
        q2[i] = i
    }
    sort.Slice(q2, func(i int, j int) bool {
        return queries[q2[i]] < queries[q2[j]]
    })

    cur := 0
    res := make([]int, len(queries))
    offset := [][]int{{0, -1}, {0, 1}, {1, 0}, {-1, 0}}
    for _, q := range q2 {
        for h.Len() > 0 && grid[h.Peek()[0]][h.Peek()[1]] < queries[q] {
            cur++
            cell := heap.Pop(h).([2]int)
            x, y := cell[0], cell[1]
            for _, dir := range offset {
                xx, yy := x + dir[0], y + dir[1]
                if xx >= 0 && yy >= 0 && xx < m && yy < n && !visited[xx][yy] {
                    visited[xx][yy] = true
                    heap.Push(h, [2]int{xx, yy})
                }
            }
        }
        res[q] = cur
    }
    return res
}

type minheap struct{
    list [][2]int
    grid [][]int
}

func(h minheap) Len() int {
    return len(h.list)
}

func(h minheap) Peek() [2]int {
    return h.list[0]
}

func(h minheap) Swap(i int, j int) {
    h.list[i], h.list[j] = h.list[j], h.list[i]
}

func(h minheap) Less(i int, j int) bool {
    return h.grid[h.list[i][0]][h.list[i][1]] < h.grid[h.list[j][0]][h.list[j][1]]
}

func(h *minheap) Push(a interface{}) {
    (*h).list = append((*h).list, a.([2]int))
}

func(h *minheap) Pop() interface{} {
    l := len((*h).list)
    res := (*h).list[l - 1]
    (*h).list = (*h).list[:l - 1]
    return res
}
```