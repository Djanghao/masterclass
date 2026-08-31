# ✅💯🔥Simple Code📌🚀| 🔥✔️Easy to understand🎯 | 🎓🧠Beginner friendly🔥| O(n) Time Complexity💀💯

**Author:** atishayj4in
**Votes:** 15
**Link:** [https://leetcode.com/problems/path-sum-iii/solutions/5670905/](https://leetcode.com/problems/path-sum-iii/solutions/5670905/)

---

Solution tuntun mosi ki photo ke baad hai. Scroll Down
![fd9d3417-20fb-4e19-98fa-3dd39eeedf43_1723794694.932518.png](./images/0.png)

# Code
```java []
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    int total = 0;
    public int pathSum(TreeNode root, int sum) {
        if(root == null) return 0;
        helper(root, sum, 0);
        pathSum(root.left, sum);
        pathSum(root.right, sum);
        return total;
    }

    void helper(TreeNode root, int sum, long curr) {
        if(root == null) return;
        curr += root.val;
        if(curr == sum) total++;
        helper(root.left, sum, curr);
        helper(root.right, sum, curr);
    }
}
```
![7be995b4-0cf4-4fa3-b48b-8086738ea4ba_1699897744.9062278.jpeg](./images/1.jpeg)