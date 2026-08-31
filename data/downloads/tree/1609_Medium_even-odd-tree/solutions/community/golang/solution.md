# BFS with Go

**Author:** tuanbieber
**Votes:** 2
**Link:** [https://leetcode.com/problems/even-odd-tree/solutions/2283973/](https://leetcode.com/problems/even-odd-tree/solutions/2283973/)

---

```
func isEvenOddTree(root *TreeNode) bool {
    var queue []*TreeNode
    queue = append(queue, root)
    currentLevel := -1
    
    for len(queue) > 0 {
        currentLevel++
        
        length, prev := len(queue), queue[0].Val

        for i := 0; i < length; i++ {
            if currentLevel % 2 == 0 {
                if queue[i].Val % 2 == 0 {
                    return false
                }
                
                if queue[i].Val <= prev && i >= 1 {
                    return false
                }
            } else {
                if queue[i].Val % 2 == 1 {
                    return false
                }
                
                if queue[i].Val >= prev && i >= 1 {
                    return false
                }
            }
            
            prev = queue[i].Val
            
            if queue[i].Left != nil {
                queue = append(queue, queue[i].Left)
            }
            
            if queue[i].Right != nil {
                queue = append(queue, queue[i].Right)
            }
        }
        
        queue = queue[length:]
    }
    
    return true
}
```