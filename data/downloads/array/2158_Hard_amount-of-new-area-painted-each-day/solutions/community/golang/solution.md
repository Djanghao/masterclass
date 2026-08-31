# Use BST to store start and end of segments. Use BST predecessor and succeessor methods to search.

**Author:** janakagoon
**Votes:** 0
**Link:** [https://leetcode.com/problems/amount-of-new-area-painted-each-day/solutions/3037880/](https://leetcode.com/problems/amount-of-new-area-painted-each-day/solutions/3037880/)

---

# Intuition
Use two BSTs. Store pained segments as nodes in the tree. 

# Approach

The first tree is ordered by the start point of the segment. The second by the end point. Merge segments using insert and delete node methods. Find the segments to merge using BST successor and precessor methods.

# Complexity
- Time complexity:
O(N Log (N))

- Space complexity:
O(N)

# Code
```
type BST struct {
    Root *Node
}

type Node struct {
    Val int
    StartEnd *StartEnd
    Left *Node
    Right *Node
    Parent *Node
}

type StartEnd struct {
    Start int
    End int
}

func (bst *BST) Insert(val int, startEnd *StartEnd) {
    n := &Node{
        val,
        startEnd,
        nil,
        nil,
        nil,
    }

    if bst.Root == nil {
        bst.Root = n
    } else {
        bst.InsertNode(bst.Root, n)
    }
}

func (bst *BST) InsertNode(node *Node, n *Node) {
    if node.Val >= n.Val {
        if node.Left == nil {
            n.Parent = node
            node.Left = n
        } else {
            bst.InsertNode(node.Left, n)
        }
    } else {
        if node.Right == nil {
            n.Parent = node
            node.Right = n
        } else {
            bst.InsertNode(node.Right, n)
        }
    }
}

func (bst *BST) Delete(node *Node) {
    if node == nil {
        return
    }

    if node.Left == nil && node.Right == nil {
        if node == bst.Root {
            bst.Root = nil
        } else if node.Parent.Left == node {
            node.Parent.Left = nil
        } else {
            node.Parent.Right = nil
        }
    } else if node.Left != nil && node.Right != nil {
        n := node.Right
        for n.Left != nil {
            n = n.Left
        }

        node.Val = n.Val
        node.StartEnd = n.StartEnd

        bst.Delete(n)
    } else {
        rep := node.Right

        if node.Left != nil {
            rep = node.Left
        }

        if node == bst.Root {
            bst.Root = rep
            bst.Root.Parent = nil
        } else if node.Parent.Left == node {
            rep.Parent = node.Parent
            node.Parent.Left = rep
        } else {
            rep.Parent = node.Parent
            node.Parent.Right = rep
        }
    }
}

func (bst *BST) Find(val int) *Node {
    return FindRec(bst.Root, val)
}

func FindRec(node *Node, val int) *Node {
    if node == nil {
        return nil
    }

    if node.Val == val {
        return node
    } else if node.Val > val {
        return FindRec(node.Left, val)
    } else {
        return FindRec(node.Right, val)
    }
}

func (bst *BST) Predecessor(val int) *Node {
    return PredecessorNode(val, bst.Root)
}

func PredecessorNode(val int, node *Node) *Node {
    if node == nil {
        return nil
    }

    if node.Val == val {
        return node
    } else if node.Val < val {
        if node.Right != nil {
            return PredecessorNode(val, node.Right)
        } else {
            return node
        }
    } else {
        if node.Left != nil {
            return PredecessorNode(val, node.Left)
        } else {
            for node.Parent != nil {
                if node.Parent.Right == node {
                    return node.Parent
                }
                node = node.Parent
            }
            return nil
        }
    }
}

func (bst *BST) Successor(val int) *Node {
    return SuccessorNode(val, bst.Root)
}

func SuccessorNode(val int, node *Node)  *Node  {
    if node == nil {
        return nil
    }

    if node.Val == val {
        return node
    } else if node.Val < val {
        if node.Right != nil {
             return SuccessorNode(val, node.Right)
        } else {
            for node.Parent != nil {
                if node.Parent.Left == node {
                    return node.Parent
                }
                node = node.Parent
            }
            return nil
        }
    } else {
        if node.Left != nil {
            return SuccessorNode(val, node.Left)
        } else {
            return node
        }
    }

    return nil
}

func amountPainted(paint [][]int) []int {
    res := []int{}

    startBST := &BST{
        nil,
    }

    endBST := &BST{
        nil,
    }

    for _, v := range paint {
        new := &StartEnd{v[0],v[1]}

        n := startBST.Predecessor(new.Start)
        if n != nil && n.StartEnd.End >= new.End {
            res = append(res, 0)
            continue
        }

        deletedNodes := make(map[StartEnd]bool)

        for n := endBST.Predecessor(new.End); n != nil && n.StartEnd.End >= new.Start; n = endBST.Predecessor(new.End){
            nodeStartEnd := *n.StartEnd
            if nodeStartEnd.Start < new.Start {
                new.Start = nodeStartEnd.Start
            }

            endBST.Delete(n)

            ns := startBST.Find(nodeStartEnd.Start)

            startBST.Delete(ns)

            deletedNodes[nodeStartEnd] = true
        }

        for n := startBST.Successor(new.Start); n != nil && n.StartEnd.Start <= new.End; n = startBST.Successor(new.Start) {

            nodeStartEnd := *n.StartEnd
            if nodeStartEnd.End > new.End {
                new.End = nodeStartEnd.End
            }

            startBST.Delete(n)
            endBST.Delete(endBST.Find(nodeStartEnd.End))
            deletedNodes[nodeStartEnd] = true
        }

        alreadyPainted := 0
        for k := range deletedNodes {
            alreadyPainted += k.End - k.Start
        }

        res = append(res, new.End - new.Start - alreadyPainted)
        
        startBST.Insert(new.Start, new)
        endBST.Insert(new.End, new)
    }

    return res
}
```