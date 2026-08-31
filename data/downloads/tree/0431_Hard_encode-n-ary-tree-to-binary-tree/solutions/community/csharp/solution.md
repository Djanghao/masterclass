# Original solution

**Author:** winston_wolfe
**Votes:** 0
**Link:** [https://leetcode.com/problems/encode-n-ary-tree-to-binary-tree/solutions/4978256/](https://leetcode.com/problems/encode-n-ary-tree-to-binary-tree/solutions/4978256/)

---

# Intuition
Idea is to compress children nodes into chain. So starting from root iterate over children and iteratively create new nodes where each new node is right child of the previous. After it's done recurisvely do the same thing for each children but as left children.

So starting from root you will get long chain going to the right. Then from each child node there will start long chain going in left direction. Then next level of children will form chaing going to the right and so on.

# Code
```
/*
// Definition for a Node.
public class Node {
    public int val;
    public IList<Node> children;

    public Node() {}

    public Node(int _val) {
        val = _val;
    }

    public Node(int _val, IList<Node> _children) {
        val = _val;
        children = _children;
    }
}
*/

/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     public int val;
 *     public TreeNode left;
 *     public TreeNode right;
 *     public TreeNode(int x) { val = x; }
 * }
 */

public class Codec {
    // Encodes an n-ary tree to a binary tree.
    public TreeNode encode(Node root, bool goLeft = false) 
    {
        if (root == null) return null;
        
        var node = new TreeNode(root.val);
        var previous = node;
        
        foreach (var child in root.children)
        {
            if (goLeft)
            {
                previous.left = encode(child, false);
                previous = previous.left;
            }
            else
            {
                previous.right = encode(child, true);
                previous = previous.right;
            }
        }
        
        return node;
    }
    
    // Decodes your binary tree to an n-ary tree.
    public Node decode(TreeNode root, bool goLeft = false) 
    {
        if (root == null) return null;
        
        var node = new Node(root.val, new List<Node>());
        if (root.left == root.right) return node;
        
        var previous = goLeft ? root.left : root.right;
        
        while (previous != null)
        {
            node.children.Add(decode(previous, !goLeft));
            
            if (goLeft)
                previous = previous.left;
            else
                previous = previous.right;
        }
            
        return node;
    }
}

// Your Codec object will be instantiated and called as such:
// Codec codec = new Codec();
// codec.decode(codec.encode(root));
```