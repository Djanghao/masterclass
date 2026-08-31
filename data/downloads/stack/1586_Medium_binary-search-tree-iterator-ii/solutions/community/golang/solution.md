# recursive inorder

**Author:** zhouyuyz
**Votes:** 0
**Link:** [https://leetcode.com/problems/binary-search-tree-iterator-ii/solutions/4563080/](https://leetcode.com/problems/binary-search-tree-iterator-ii/solutions/4563080/)

---

# Intuition
recursive inorder

# Approach
recursive inorder

# Complexity
- Time complexity: O(N)

- Space complexity: O(N)

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
type BSTIterator struct {
    vals []int
    idx int
}


func Constructor(root *TreeNode) BSTIterator {
    vals := []int{}
    inorder(root, &vals)
    fmt.Println(vals)
    return BSTIterator{
        vals: vals,
        idx: -1,
    }
}


func (this *BSTIterator) HasNext() bool {
    return this.idx < len(this.vals)-1
}


func (this *BSTIterator) Next() int {
    this.idx++
    if !this.HasNext() {
        return this.vals[len(this.vals)-1]
    }
    return this.vals[this.idx]
}


func (this *BSTIterator) HasPrev() bool {
    return this.idx > 0
}


func (this *BSTIterator) Prev() int {
    this.idx-- 
    if !this.HasPrev() {
        return this.vals[0]
    }
    return this.vals[this.idx]
}

func inorder(node *TreeNode, vals *[]int) {
    if node == nil {
        return
    }
    inorder(node.Left, vals)
    *vals = append(*vals, node.Val)
    inorder(node.Right, vals)
}

/**
 * Your BSTIterator object will be instantiated and called as such:
 * obj := Constructor(root);
 * param_1 := obj.HasNext();
 * param_2 := obj.Next();
 * param_3 := obj.HasPrev();
 * param_4 := obj.Prev();
 */
```