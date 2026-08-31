# Avoiding Global Variables with Clean, Simplified Solutions in JAVA

**Author:** seungwonlee03
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-nodes-equal-to-sum-of-descendants/solutions/5889007/](https://leetcode.com/problems/count-nodes-equal-to-sum-of-descendants/solutions/5889007/)

---

# Intuition
In an interview setting, the interviewer might ask you to avoid using global variables. Below is the simplest form of a solution without using global variables, suitable for interview settings. This does in-place modification of node values.

# Code
```java []
class Solution {
    public int equalToDescendants(TreeNode root) {
        return postOrder(root);
    }

    private int postOrder(TreeNode root) {
        if (root == null) return 0;

        int left = postOrder(root.left);
        int right = postOrder(root.right);

        int sumOfChildren = 0;
        if (root.left != null) sumOfChildren += root.left.val;
        if (root.right != null) sumOfChildren += root.right.val;

        int result = left + right;
        if (root.val == sumOfChildren) result++;

        root.val += sumOfChildren;
        return result;
    }
}
```