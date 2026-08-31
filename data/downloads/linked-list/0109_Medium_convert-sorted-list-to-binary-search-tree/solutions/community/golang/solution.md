# Golang Recursive Solution O(n), O(1)

**Author:** nathannaveen
**Votes:** 4
**Link:** [https://leetcode.com/problems/convert-sorted-list-to-binary-search-tree/solutions/1370438/](https://leetcode.com/problems/convert-sorted-list-to-binary-search-tree/solutions/1370438/)

---

``` go
func sortedListToBST(head *ListNode) *TreeNode {
    if head == nil {
        return nil
    }
    
    prev, turtle, hare := head, head, head

    for hare != nil && hare.Next != nil {
        hare = hare.Next.Next
        prev = turtle
        turtle = turtle.Next
    }

    res := &TreeNode{ Val : turtle.Val, }
    
    if turtle.Next != nil {
        res.Right = sortedListToBST(turtle.Next)
    }

    if prev.Next != nil {
        prev.Next = nil
        res.Left = sortedListToBST(head)
    }
    
    return res
}
```