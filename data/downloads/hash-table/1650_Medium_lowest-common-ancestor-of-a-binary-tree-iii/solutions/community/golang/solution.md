# Go | Beats 100.00%

**Author:** iamacod3r
**Votes:** 1
**Link:** [https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree-iii/solutions/4890619/](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree-iii/solutions/4890619/)

---

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(1)$$

# Code
```
/**
 * Definition for Node.
 * type Node struct {
 *     Val int
 *     Left *Node
 *     Right *Node
 *     Parent *Node
 * }
 */

func lowestCommonAncestor(p *Node, q *Node) *Node {
    // https://github.com/iamacod3r
    a, b := p, q
    for a != b {
        if a == nil {
            a = q
        } else {
            a = a.Parent
        }

        if b == nil {
            b = p
        } else {
            b = b.Parent
        }
    }
    return a
}
```