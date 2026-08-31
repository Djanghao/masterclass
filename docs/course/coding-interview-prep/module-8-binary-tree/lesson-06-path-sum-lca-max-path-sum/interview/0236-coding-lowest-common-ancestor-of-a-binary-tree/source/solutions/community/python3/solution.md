# 236: Solution with step by step explanation

**Author:** Marlen09
**Votes:** 240
**Link:** [https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/solutions/3231708/](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/solutions/3231708/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
1. The function lowestCommonAncestor takes in three parameters: the root of a binary tree (root) and two nodes of the binary tree (p and q).

2. The first if statement checks if the root is None or if it is equal to either p or q. If either of these conditions is true, it means that we have found one of the nodes we are looking for, and we return the root.

3. Next, we recursively call the lowestCommonAncestor function on the left and right subtrees of the root, passing in the same nodes p and q. We store the results of these recursive calls in variables l and r, respectively.

4. The second if statement checks if both l and r are not None. If this condition is true, it means that we have found both p and q in different subtrees of the current root, and therefore the current root is the lowest common ancestor. We return the current root.

5. If the second if statement is not satisfied, we return either l or r, depending on which one is not None. This is because if only one of l and r is not None, it means that the other node is not in the subtree of the current root, so we return the node that is in the subtree.

6. If none of the previous conditions is satisfied, it means that both l and r are None, so we return None. This happens when we have reached the end of a branch of the binary tree without finding either p or q.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution:
  def lowestCommonAncestor(self, root: 'TreeNode', p: 'TreeNode', q: 'TreeNode') -> 'TreeNode':
    if not root or root == p or root == q:
      return root

    l = self.lowestCommonAncestor(root.left, p, q)
    r = self.lowestCommonAncestor(root.right, p, q)

    if l and r:
      return root
    return l or r

```