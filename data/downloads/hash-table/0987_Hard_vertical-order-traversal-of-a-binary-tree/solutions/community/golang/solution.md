# Go BFS beats 100%

**Author:** tuanbieber
**Votes:** 5
**Link:** [https://leetcode.com/problems/vertical-order-traversal-of-a-binary-tree/solutions/2530081/](https://leetcode.com/problems/vertical-order-traversal-of-a-binary-tree/solutions/2530081/)

---

```
type item struct {
    node *TreeNode
    row, col int
}

func verticalTraversal(root *TreeNode) [][]int {
    var result [][]int
    
    m := make(map[int][]int)
    minCol, maxCol := 1<<63-1, -1<<63
    
    var queue []item
    queue = append(queue, item {
        node: root,
        row: 0,
        col: 0,
    })
    
    for len(queue) > 0 {
        length := len(queue)
        
        nodesByColumn := make(map[int][]int)
        
        for i := 0; i < length; i++ {
            minCol = min(minCol, queue[i].col - 1)
            maxCol = max(maxCol, queue[i].col + 1)
            
            nodesByColumn[queue[i].col] = append(nodesByColumn[queue[i].col], queue[i].node.Val)
            
            if queue[i].node.Left != nil {
                queue = append(queue, item {
                    node: queue[i].node.Left,
                    row: queue[i].row + 1,
                    col: queue[i].col - 1,
                })
            }
            
            if queue[i].node.Right != nil {
                queue = append(queue, item {
                    node: queue[i].node.Right,
                    row: queue[i].row + 1,
                    col: queue[i].col + 1,
                })
            }
        }
        
        for row, nodes := range nodesByColumn {
            sort.Ints(nodes)
            m[row] = append(m[row], nodes...)
        }
        
        if len(queue) == length {
            break
        }
        
        queue = queue[length:]
    }

    for col := minCol; col <= maxCol; col++ {
        if len(m[col]) > 0 {
            result = append(result, m[col])
        }
    }
    
    return result
}

func min(a, b int) int {
    if a < b {
        return a
    }
    
    return b
}

func max(a, b int) int {
    if a > b {
        return a
    }
    
    return b
}

```