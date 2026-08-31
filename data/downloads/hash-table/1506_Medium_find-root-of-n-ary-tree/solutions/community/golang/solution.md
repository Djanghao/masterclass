# Clean golang solution | time O(n) & space O(1) | beet 100% cpu&mem

**Author:** klakovskiy
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-root-of-n-ary-tree/solutions/4817073/](https://leetcode.com/problems/find-root-of-n-ary-tree/solutions/4817073/)

---

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
/**
 * Definition for a Node.
 * type Node struct {
 *     Val int
 *     Children []*Node
 * }
 */

func findRoot(tree []*Node) *Node {
    rootVal := 0
    for _, node := range tree {
        rootVal ^= node.Val
        for _, child := range node.Children {
            rootVal ^= child.Val
        }
    }
    for _, node := range tree {
        if node.Val == rootVal {
            return node
        }
    }

    return nil
}
```