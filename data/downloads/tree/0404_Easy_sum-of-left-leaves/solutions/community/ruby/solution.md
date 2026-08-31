# Go BFS with hashmap

**Author:** tuanbieber
**Votes:** 1
**Link:** [https://leetcode.com/problems/sum-of-left-leaves/solutions/2203822/](https://leetcode.com/problems/sum-of-left-leaves/solutions/2203822/)

---

```
/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */

func sumOfLeftLeaves(root *TreeNode) int {
    if root.Left == nil && root.Right == nil {
        return 0
    }
    
    var res int
    
    var queue []*TreeNode
    enqueue(&queue, root)
    
    m := make(map[*TreeNode]struct{})
    
    for len(queue) > 0 {
        queueSize := len(queue)
        
        for i := 0; i < queueSize; i++ {
            dequeuedItem := dequeue(&queue)
            
            if dequeuedItem.Left == nil && dequeuedItem.Right == nil {
                if _, ok := m[dequeuedItem]; ok {
                    res += dequeuedItem.Val
                }
            }
            
            if dequeuedItem.Left != nil {
                m[dequeuedItem.Left] = struct{}{}
                enqueue(&queue, dequeuedItem.Left)
            }

            if dequeuedItem.Right != nil {
                enqueue(&queue, dequeuedItem.Right)
            }
        }
    }
    
    return res
}

func enqueue(queue *[]*TreeNode, item *TreeNode) {
    if queue == nil {
        panic("nil pointer dereference")
    }
    
    *queue = append(*queue, item)
} 

func dequeue(queue *[]*TreeNode) *TreeNode {
    if queue == nil {
        panic("nil pointer derefenrece")
    }
    
    if len(*queue) == 0 {
        panic("empty queue")
    }
    
    x := (*queue)[0]
    *queue = (*queue)[1:]
    
    return x
}
```