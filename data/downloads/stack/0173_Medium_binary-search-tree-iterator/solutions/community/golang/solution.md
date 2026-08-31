# [Golang] Stack. Time: O(n), Space: O(height)

**Author:** lacfo
**Votes:** 4
**Link:** [https://leetcode.com/problems/binary-search-tree-iterator/solutions/1364342/](https://leetcode.com/problems/binary-search-tree-iterator/solutions/1364342/)

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
type BSTIterator struct {
    st []*TreeNode
}


func Constructor(root *TreeNode) BSTIterator {
    iterator := BSTIterator{}
    for root != nil {
        iterator.st = append(iterator.st, root)
        root = root.Left
    }
    return iterator
}


func (this *BSTIterator) Next() int {
    n := len(this.st)
    cur := this.st[n-1]
    this.st = this.st[:n-1]
    res := cur.Val
    cur = cur.Right
    for cur != nil {
        this.st = append(this.st, cur)
        cur = cur.Left
    }
    return res
}


func (this *BSTIterator) HasNext() bool {
    return len(this.st) > 0
}


/**
 * Your BSTIterator object will be instantiated and called as such:
 * obj := Constructor(root);
 * param_1 := obj.Next();
 * param_2 := obj.HasNext();
 */
```