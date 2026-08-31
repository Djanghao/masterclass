# O(1) for struct and O(1) TC & O(1) SC for insert operation

**Author:** bachngocson0812
**Votes:** 0
**Link:** [https://leetcode.com/problems/complete-binary-tree-inserter/solutions/5099273/](https://leetcode.com/problems/complete-binary-tree-inserter/solutions/5099273/)

---

# Result

![image.png](./images/0.png)

# Intuition
We can use current number of nodes to find the path from root node to node which need to insert to

# Approach
We want to make use of that, so each time we encounter `0`, go left, otherwise go right. For convenience, we assume root node starts with bit `1`

# Complexity
- Time complexity: $$O(1)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
type CBTInserter struct {
    dummy *TreeNode
    numNode int
}


func Constructor(root *TreeNode) CBTInserter {
    // count number of nodes
    numNode := 0
    stk := make([]*TreeNode, 0)
    stk = append(stk, root)
    for len(stk) > 0 {
        cur := stk[len(stk)-1]
        stk = stk[:len(stk)-1]
        numNode++

        if cur.Left != nil {
            stk = append(stk, cur.Left)
        }
        if cur.Right != nil {
            stk = append(stk, cur.Right)
        }
    }
    return CBTInserter{
        dummy: &TreeNode{
            Right: root,
        },
        numNode: numNode,
    }
}


func (this *CBTInserter) Insert(val int) int {
    this.numNode++

    prev, cur := (*TreeNode)(nil), this.dummy
    i := 15
    // find root node index
    for i >= 0 && this.numNode & (1<<i) == 0 {
        i--
    }
    
    for i >= 0 {
        if this.numNode & (1<<i) == 0 {
            prev, cur = cur, cur.Left
        } else {
            prev, cur = cur, cur.Right
        }
        i--
    }

    if prev.Left == nil {
        prev.Left = &TreeNode{
            Val: val,
        }
    } else {
        prev.Right = &TreeNode{
            Val: val,
        }
    }

    return prev.Val
}


func (this *CBTInserter) Get_root() *TreeNode {
    return this.dummy.Right
}


/**
 * Your CBTInserter object will be instantiated and called as such:
 * obj := Constructor(root);
 * param_1 := obj.Insert(val);
 * param_2 := obj.Get_root();
 */
```