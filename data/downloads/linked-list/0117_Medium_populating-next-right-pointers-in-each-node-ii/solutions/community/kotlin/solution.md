# Go BFS - Also apply to N-ary tree

**Author:** tuanbieber
**Votes:** 2
**Link:** [https://leetcode.com/problems/populating-next-right-pointers-in-each-node-ii/solutions/2203078/](https://leetcode.com/problems/populating-next-right-pointers-in-each-node-ii/solutions/2203078/)

---

```
/**
 * Definition for a Node.
 * type Node struct {
 *     Val int
 *     Left *Node
 *     Right *Node
 *     Next *Node
 * }
 */

/**
 * Definition for a Node.
 * type Node struct {
 *     Val int
 *     Left *Node
 *     Right *Node
 *     Next *Node
 * }
 */

func connect(root *Node) *Node {
    if root == nil {
        return nil
    }
    
    var queue []*Node
    enqueue(&queue, root)
    
    for len(queue) > 0 {
        queueSize := len(queue)
        
        var prev *Node
        
        for i := 0; i < queueSize; i++ {   
            dequeuedItem := dequeue(&queue)
            
            if prev != nil {
                prev.Next = dequeuedItem
            }
            
            prev = dequeuedItem
            
            if dequeuedItem.Left != nil {
                enqueue(&queue, dequeuedItem.Left)
            }

            if dequeuedItem.Right != nil {
                enqueue(&queue, dequeuedItem.Right)
            }
        }
    }
    
    return root
}

func enqueue(queue *[]*Node, item *Node) {
    if queue == nil {
        panic("nil pointer")
    }
    
    *queue = append(*queue, item)
}

func dequeue(queue *[]*Node) *Node {
    if queue == nil {
        panic("nil pointer")
    }
    
    if len(*queue) == 0 {
        panic("empty queue")
    }
    
    dequeuedItem := (*queue)[0]
    *queue = (*queue)[1:]
    
    return dequeuedItem
}

// Runtime: 2 ms, faster than 81.95% of Go online submissions for Populating Next Right Pointers in Each Node II.
// Memory Usage: 6.9 MB, less than 6.51% of Go online submissions for Populating Next Right Pointers in Each Node II.
```