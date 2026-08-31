# 🔥Easiest Solution in 5 Lines of Code 💯

**Author:** No_one_can_stop_me
**Votes:** 35
**Link:** [https://leetcode.com/problems/merge-two-binary-trees/solutions/3317995/](https://leetcode.com/problems/merge-two-binary-trees/solutions/3317995/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
Plsssss Up Vote! -> \uD83D\uDE2D
# Code
```
class Solution {
    public TreeNode mergeTrees(TreeNode root1, TreeNode root2) {
        if(root1==null) return root2;
        if(root2==null) return root1;
        root1.val += root2.val;
        root1.left = mergeTrees(root1.left,root2.left);
        root1.right = mergeTrees(root1.right, root2.right);
        return root1;
    }
}
```