# Golang BFS, easy to understand, double 100% solution

**Author:** JieBai
**Votes:** 5
**Link:** [https://leetcode.com/problems/populating-next-right-pointers-in-each-node-ii/solutions/932947/](https://leetcode.com/problems/populating-next-right-pointers-in-each-node-ii/solutions/932947/)

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

func connect(root *Node) *Node {
    if root == nil {
        return nil
    }
    queue := make([]*Node, 0) //BFS queue
    queue = append(queue, root)
    
    for len(queue) > 0 {
        l := len(queue) 
        for i := 0; i < l; i++ {  //iterate the length of queue only
            node := queue[0]
            queue = queue[1:]
            if i < l - 1 {
                node.Next = queue[0] //not the last node in this layer
            } else if i == l - 1 {
                node.Next = nil //the last node in this layer
            }
            
            if node.Left != nil {
                queue = append(queue, node.Left)
            }
            if node.Right != nil {
                queue = append(queue, node.Right)
            }
        }
    }
    return root
} 
```