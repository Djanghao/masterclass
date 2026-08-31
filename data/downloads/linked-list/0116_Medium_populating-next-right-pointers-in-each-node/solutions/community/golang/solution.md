# Go Recursive and Iterative

**Author:** casd82
**Votes:** 9
**Link:** [https://leetcode.com/problems/populating-next-right-pointers-in-each-node/solutions/561417/](https://leetcode.com/problems/populating-next-right-pointers-in-each-node/solutions/561417/)

---

Recursive:
```
func connect(root *Node) *Node {
    if root == nil {
        return nil
    }
    
    if root.Left != nil {
        root.Left.Next = root.Right
        if root.Next != nil {
            root.Right.Next = root.Next.Left
        }
    }
    
    connect(root.Left)
    connect(root.Right)
    
    return root
}
```

Iterative (BFS with Queue):
```
func connect(root *Node) *Node {
    if root == nil {
        return nil
    }
    
    type entry struct{
        level int
        node *Node
    }
    
    var queue []entry
    
    var prev *Node
    currLevel := -1
    
    queue = append(queue, entry{level: 0, node: root})
    
    for len(queue) != 0 {
        curr := queue[0]
        queue = queue[1:]
        
        if currLevel != curr.level {
            if prev != nil {
                prev.Next = nil
            }
            currLevel = curr.level
        } else {
            prev.Next = curr.node
        }
        
        prev = curr.node
        
        if curr.node.Left != nil {
            queue = append(queue, entry{level: curr.level+1, node: curr.node.Left})
        }
        
        if curr.node.Right != nil {
            queue = append(queue, entry{level: curr.level+1, node: curr.node.Right})
        }
    }
    
    return root
}
```