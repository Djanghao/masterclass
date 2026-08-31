# Find root, loop and merge

**Author:** linda2024
**Votes:** 0
**Link:** [https://leetcode.com/problems/merge-bsts-to-create-single-bst/solutions/5913439/](https://leetcode.com/problems/merge-bsts-to-create-single-bst/solutions/5913439/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(N)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(N)
# Code
```csharp []
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
    private bool IsBST(TreeNode root, int low, int high)
    {
        if(root == null)
            return true;
        if(root.left == null && root.right == null)
            return root.val > low && root.val < high;

        if(root.val >= high || root.val <= low)
            return false;

        return IsBST(root.left, low, root.val) && IsBST(root.right, root.val, high);
    }

    public TreeNode CanMerge(IList<TreeNode> trees) {
        int len = trees.Count;
        
        // cornor cases:
        if(len == 0)
            return null;

        if(len == 1)
            return trees[0];

        Dictionary<int, TreeNode> dict = new();
        HashSet<int> leaves = new();
        HashSet<TreeNode> roots = new();

        foreach(TreeNode node in trees)
        {
            dict.Add(node.val, node);
            roots.Add(node);
            if(node.left != null && !leaves.Add(node.left.val)) // has dup leaves ?
                return null;

            if(node.right!= null && !leaves.Add(node.right.val))
                return null;
        }

        // Check how many roots:
        TreeNode rootNode = null;
        int cnt = 0;
        foreach(TreeNode node in trees)
        {
            if(!leaves.Contains(node.val))
            {
                if(++cnt > 1)
                    return null;

                rootNode = node;
            }
        }

        if(rootNode == null)
            return null;

        roots.Remove(rootNode);
        Queue<TreeNode> que = new();
        que.Enqueue(rootNode);
        while(que.Count > 0)
        {
            int size = que.Count;
            for(int i = 0; i < size; i++)
            {
                var curNode = que.Dequeue();
                if(curNode.left == null && curNode.right == null) // find leaf node and merge it with the other Node with same value
                {
                    if(leaves.Contains(curNode.val) && dict.ContainsKey(curNode.val))
                    {
                        curNode.left = dict[curNode.val].left;
                        curNode.right = dict[curNode.val].right;

                        roots.Remove(dict[curNode.val]);
                    }
                }

                if(curNode.left != null)
                    que.Enqueue(curNode.left);

                if(curNode.right != null)
                    que.Enqueue(curNode.right);
            }
        }

        if(roots.Count > 0)
            return null;

        return IsBST(rootNode, int.MinValue, int.MaxValue) ? rootNode : null;
    }
}
```