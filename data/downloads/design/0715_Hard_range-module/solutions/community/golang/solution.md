# [Golang] SegmentTree

**Author:** vasakris
**Votes:** 2
**Link:** [https://leetcode.com/problems/range-module/solutions/2690575/](https://leetcode.com/problems/range-module/solutions/2690575/)

---

```
type Node struct {
    Start int
    End int
    Tracked bool
    Lazy bool
    Left *Node
    Right *Node
}

type RangeModule struct {
    Root *Node
}


func Constructor() RangeModule {
    return RangeModule{Root : &Node{Start: 0, End: 1e9}}
}


func (this *RangeModule) AddRange(left int, right int)  {
    update(this.Root, left, right-1, true)
}


func (this *RangeModule) QueryRange(left int, right int) bool {
    return query(this.Root, left, right-1)
}


func (this *RangeModule) RemoveRange(left int, right int)  {
    update(this.Root, left, right-1, false)
}


func update(node *Node, r1, r2 int, value bool) {
    if r2 < node.Start || node.End < r1 {
        return
    }
    
    lazyUpdate(node)
    
    if r1 <= node.Start && node.End <= r2 {
        node.Tracked = value
        node.Lazy = true
        return
    }
    
    mid := (node.Start + node.End) / 2
    if r2 <= mid {
        if node.Left == nil {
            node.Left = &Node{Start: node.Start, End: mid}
        }
        update(node.Left, r1, r2, value)
    } else if r1 > mid {
        if node.Right == nil {
            node.Right = &Node{Start: mid+1, End: node.End}
        }
        update(node.Right, r1, r2, value)
    } else {
        if node.Left == nil {
            node.Left = &Node{Start: node.Start, End: mid}
        }
        if node.Right == nil {
            node.Right = &Node{Start: mid+1, End: node.End}
        }
        update(node.Left, r1, r2, value)
        update(node.Right, r1, r2, value)
    }
    
    if node.Left != nil && node.Right != nil {
        node.Tracked = node.Left.Tracked && node.Right.Tracked
    }
}

func query(node *Node, r1, r2 int) bool {
    if node == nil || r2 < node.Start || node.End < r1 {
        return false
    }
    
    lazyUpdate(node)
    
    if r1 <= node.Start && node.End <= r2 {
        return node.Tracked
    }
    
    mid := (node.Start + node.End) / 2
    if r2 <= mid {
        return query(node.Left, r1, r2)
    } else if r1 > mid {
        return query(node.Right, r1, r2)
    } else {
        return query(node.Left, r1, r2) && query(node.Right, r1, r2)
    }
}

func lazyUpdate(node *Node) {
    if node.Lazy {
        if node.Start != node.End {
            mid := (node.Start + node.End) / 2
            if node.Left == nil {
                node.Left = &Node{Start: node.Start, End: mid}
            }
            if node.Right == nil {
                node.Right = &Node{Start: mid+1, End: node.End}
            }
            node.Left.Tracked = node.Tracked
            node.Right.Tracked = node.Tracked
            node.Left.Lazy = true
            node.Right.Lazy = true
        }        
        node.Lazy = false
    }
}

/**
 * Your RangeModule object will be instantiated and called as such:
 * obj := Constructor();
 * obj.AddRange(left,right);
 * param_2 := obj.QueryRange(left,right);
 * obj.RemoveRange(left,right);
 */
```