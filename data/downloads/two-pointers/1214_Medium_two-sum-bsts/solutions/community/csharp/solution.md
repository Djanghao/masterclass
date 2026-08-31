# 85% solution, HashSet with dfs

**Author:** Yellowbananabus
**Votes:** 0
**Link:** [https://leetcode.com/problems/two-sum-bsts/solutions/4646777/](https://leetcode.com/problems/two-sum-bsts/solutions/4646777/)

---

# Intuition
Since dealing with binary tree node, my first thought was to use either dfs or bfs. This is a dfs implementation. 

# Approach
My initial approach was using dfs for both TreeNodes add their values to two lists, then it would be a two sums problem. But that had Time $$O(n^2)$$ and instead of solving two sums after the lists, I realized to solve for target(two sums) while processing each node in tree2. Used a HashSet in order to achieve $$O(1)$$ where a List would resulted $$O(n)$$. 

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(n)$$

# Code
```
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     public int val;
 *     public TreeNode left;
 *     public TreeNode right;
 *     public TreeNode(int val=0, TreeNode left=null, TreeNode right=null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
public class Solution {
    public bool TwoSumBSTs(TreeNode root1, TreeNode root2, int target) {
        HashSet<int> values = new HashSet<int>();

        Queue<TreeNode> q1 = new Queue<TreeNode>();
        Queue<TreeNode> q2 = new Queue<TreeNode>();

        q1.Enqueue(root1);
        q2.Enqueue(root2);

        while (q1.Count != 0) { 
            TreeNode node = q1.Dequeue();
            if(node == null) break;
            if (node.left != null) {
                q1.Enqueue(node.left);
            }

            values.Add(node.val); 
            
            if (node.right != null) {
                q1.Enqueue(node.right);
            }
        }
        while (q2.Count != 0) { 
            TreeNode node = q2.Dequeue();
            if(node == null) break;
            if (node.left != null) {
                q2.Enqueue(node.left);
            }
            
            if (values.Contains(target - node.val)) return true;
            
            
            if (node.right != null) {
                q2.Enqueue(node.right);
            }
        }
        return false;
    }
}
```