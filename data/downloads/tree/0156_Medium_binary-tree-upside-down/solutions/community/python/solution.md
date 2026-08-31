# Explain the question and my solution, Python

**Author:** orbuluh
**Votes:** 65
**Link:** [https://leetcode.com/problems/binary-tree-upside-down/solutions/49410/](https://leetcode.com/problems/binary-tree-upside-down/solutions/49410/)

---

I need to admit that I totally didn't get how to do the "upside-down"

After some struggling and googling, I saw the graph in [binary tree representation of trees](http://xlinux.nist.gov/dads/HTML/binaryTreeRepofTree.html).

It's not directly the same, but give me a sense of how to do it.

The transform of the base three-node case is like below: 
      
                             Root                   L
                             /  \\                  /  \\
                            L    R                R   Root

You can image you grab the L to the top, then the Root becomes it's right node, and  the R becomes its left node.

Knowing the base case, you can solve it recursively.

How? You keep finding the left most node, make it upside-down, then make its parent to be its right most subtree recursively.


**Here is a small point to be noticed, when you connect the root to the right subtree, you need to make sure you are not copying the original root, otherwise it will become cyclic!**

        
    def upsideDownBinaryTree(self, root):
        if not root or not root.left:
            return root
        lRoot = self.upsideDownBinaryTree(root.left)
        rMost = lRoot
        while rMost.right:
            rMost = rMost.right
        root, rMost.left, rMost.right = lRoot, root.right, TreeNode(root.val)
        return root