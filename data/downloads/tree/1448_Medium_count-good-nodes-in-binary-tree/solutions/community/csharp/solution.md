# C# - Stack - Easy To Understand

**Author:** teddysmithdev
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-good-nodes-in-binary-tree/solutions/5221341/](https://leetcode.com/problems/count-good-nodes-in-binary-tree/solutions/5221341/)

---

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

 class Pair {
    public TreeNode node;
    public int maxSoFar;
    
    public Pair(TreeNode node, int maxSoFar) {
        this.node = node;
        this.maxSoFar = maxSoFar;
    }
}

public class Solution {
    public int GoodNodes(TreeNode root) {
        int numGoodNodes = 0;
        Stack<Pair> stack = new();
        stack.Push(new Pair(root, Int32.MinValue));

        while(stack.Count > 0)
        {
            Pair curr = stack.Pop();
            if(curr.maxSoFar <= curr.node.val)
            {
                numGoodNodes++;
            }
            if(curr.node.left != null)
            {
                stack.Push(new Pair(curr.node.left, Math.Max(curr.node.val, curr.maxSoFar)));
            }
            if(curr.node.right != null)
            {
                stack.Push(new Pair(curr.node.right, Math.Max(curr.node.val, curr.maxSoFar)));
            }
        }
        return numGoodNodes;
    }
}
```