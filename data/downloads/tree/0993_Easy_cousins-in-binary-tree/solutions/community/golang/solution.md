# Go BFS

**Author:** srgbl
**Votes:** 3
**Link:** [https://leetcode.com/problems/cousins-in-binary-tree/solutions/621326/](https://leetcode.com/problems/cousins-in-binary-tree/solutions/621326/)

---

Modified BFS: we dequeue elements only when current level of the tree is checked.
```
func isCousins(root *TreeNode, x int, y int) bool {
    var q []*TreeNode
    
    q = append(q, root)
    for len(q) > 0 {
        res := 0
        shift := len(q)
        for i := 0; i < shift; i++ {
            if q[i] != nil {
                l := q[i].Left
                r := q[i].Right
                // check that only one of childs value is x or y
                if l != nil && (l.Val == x || l.Val == y) {
                    res++
                } else if r != nil && (r.Val == x || r.Val == y) {
                    res++
                }
                q = append(q, l, r)
            }
        }
        if res == 2 {
            return true
        }
		// dequeue current level
        q = q[shift:]
    }
    return false
}
```