# Golang | Divide & Conquer

**Author:** pikachuu
**Votes:** 4
**Link:** [https://leetcode.com/problems/construct-quad-tree/solutions/3236877/](https://leetcode.com/problems/construct-quad-tree/solutions/3236877/)

---

# Code
```
/**
 * Definition for a QuadTree node.
 * type Node struct {
 *     Val bool
 *     IsLeaf bool
 *     TopLeft *Node
 *     TopRight *Node
 *     BottomLeft *Node
 *     BottomRight *Node
 * }
 */

func solve(grid [][]int, a, b, n int) *Node {
    if n == 0 {return nil}
    var count int = 0
    for i := 0; i < n; i++ {
        for j := 0; j < n; j++ {
            count += grid[a + i][b + j]
        }
    }
    if count == n * n {return &Node {true, true, nil, nil, nil, nil}}
    if count == 0 {return &Node{false, true, nil, nil, nil, nil}}
    n >>= 1
    return &Node {
        Val: true,
        IsLeaf: false,
        TopLeft: solve(grid, a, b, n), 
        TopRight: solve(grid, a, b + n, n),
        BottomLeft: solve(grid, a + n, b, n),
        BottomRight: solve(grid, a + n, b + n, n),
    }
}

func construct(grid [][]int) *Node {
    var n int = len(grid)
    return solve(grid, 0, 0, n)
}   
```