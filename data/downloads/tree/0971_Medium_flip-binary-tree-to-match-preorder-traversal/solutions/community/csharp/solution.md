# A C# Solution

**Author:** jlccl
**Votes:** 0
**Link:** [https://leetcode.com/problems/flip-binary-tree-to-match-preorder-traversal/solutions/4015853/](https://leetcode.com/problems/flip-binary-tree-to-match-preorder-traversal/solutions/4015853/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

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
    public IList<int> FlipMatchVoyage(TreeNode root, int[] voyage) {
        var ans = new List<int>();
        ans.Add(-1);
        if (root.val != voyage[0]) return ans;
        var list = new List<int>();
        var st = new Stack<TreeNode>();
        st.Push(root);
        int count = 0, res = 0;
        while(st.Count > 0)
        {
            var node = st.Pop();
            if (node.val != voyage[count]) { res = -1; break; }
            if (node.left != null)
            {
                if (node.left.val != voyage[count + 1])
                {
                    if (node.right == null || node.right.val != voyage[count + 1])
                        {res = -1; break;}
                    else
                        {
                            var temp = node.left;
                            node.left = node.right;
                            node.right = temp;
                            list.Add(node.val);
                        }
                }
            }
            if (node.right != null) st.Push(node.right);
            if (node.left != null) st.Push(node.left);
            count++;
        }
        if (res == -1) return ans;
        return list;
    }
    
}
```