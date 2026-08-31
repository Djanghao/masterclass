# Straight forward BFS Solution in Java

**Author:** lonewolf91
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-level-of-tree-with-minimum-sum/solutions/5834825/](https://leetcode.com/problems/find-the-level-of-tree-with-minimum-sum/solutions/5834825/)

---

# Intuition
On first look, it looked like a straight forward BFS problem

# Approach
Calculate sum at each level and compare it with the minimum till this level. If the current value is lower than the minimum value, replace the result level to the current level and the value of min to current sum

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(n)

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
    public int minimumLevel(TreeNode root) {
        int level = 1,result = 1;
        long min = Long.MAX_VALUE;
        Queue<TreeNode> q = new LinkedList<>();
        q.add(root);
        while(!q.isEmpty()){
            int size = q.size();
            long sum = 0;
            for(int i=0;i<size;i++){
                TreeNode cur = q.remove();
                sum += cur.val;
                if(cur.left!=null)
                    q.add(cur.left);
                if(cur.right!=null)
                    q.add(cur.right);
            }
            if(sum<min){
                result = level;
                min=sum;
            }
            level++;
        }
        return result;
    }
}
```