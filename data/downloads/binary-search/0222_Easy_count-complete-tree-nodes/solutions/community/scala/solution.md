# Scala FP O(logN*logN) solution

**Author:** BeardmiRAl
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-complete-tree-nodes/solutions/4051504/](https://leetcode.com/problems/count-complete-tree-nodes/solutions/4051504/)

---

# Approach
<!-- Describe your approach to solving the problem. -->
The completeness of binary tree is guarantied so we don't have to worry about it. Special case of $$complete$$ binary tree is $$perfect$$ binary tree. It's nodes' count equals to $$ 2^h - 1$$ where $$h$$ is tree depth.
Core idea is to divide a problem to sum of trivial cases (complete trees). For each observing node we check if it's a root of a complete tree. If it's true we simply calculate count of nodes by formula. Otherwise we check each children (if exists) for being a root of a complete tree. Single node is also a complete tree of depth 1 so that's our the most base case.


# Complexity
- Time complexity:
$$O(log^2(n))$$

- Space complexity:
$$O(1)$$

# Code
```
object Solution {
    def countNodes(rootO: TreeNode): Int = {
        def getRightMax(root: TreeNode): Int = {
            Option(root) match {
                case None => 0
                case Some(node) => 1 + getRightMax(node.right)
            }
        }
        def getLeftMax(root: TreeNode): Int = {
            Option(root) match {
                case None => 0
                case Some(node) => 1 + getLeftMax(node.left)
            }
        }
        Option(rootO).fold(0)(root =>
            (getLeftMax(root), getRightMax(root)) match {
                case (left, right) if left == right => Math.pow(2, left).toInt - 1
                case (left, right) => countNodes(root.left) + countNodes(root.right) + 1
            }
        )   
    }
}
```