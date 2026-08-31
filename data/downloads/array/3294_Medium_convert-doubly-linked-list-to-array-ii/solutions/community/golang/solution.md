# Simple Go Solution 🚀

**Author:** fcmdias
**Votes:** 0
**Link:** [https://leetcode.com/problems/convert-doubly-linked-list-to-array-ii/solutions/5995007/](https://leetcode.com/problems/convert-doubly-linked-list-to-array-ii/solutions/5995007/)

---

# Code
```golang []
/**
 * Definition for a Node.
 * type Node struct {
 *     Val int
 *     Next *Node
 *     Prev *Node
 * }
 */

func toArray(head *Node) []int {
    for head.Prev != nil {
        head = head.Prev
    }

    var res []int
    for head != nil {
        res = append(res, head.Val)
        head = head.Next
    }

    return res
}
```