# Hints + Solution ✅

**Author:** Ofekuch
**Votes:** 0
**Link:** [https://leetcode.com/problems/inorder-successor-in-bst-ii/solutions/4895873/](https://leetcode.com/problems/inorder-successor-in-bst-ii/solutions/4895873/)

---

Hints
(scroll down for hits and more for the solution)
.
.
.
.
.
.
.
.
.
.
Hint 1:
Think about how an in-order traversal works and try to "reverse engineer" it
.
.
.
.
.
.
.
.
.
Hint 2:
Here's one step of the logic: The successor of a specific node is the leftmost node of the
right subtree. What if there is no right subtree, though?


# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->
InorderSuccessor Method:

This method takes a node x as input and returns its in-order successor.
If the input node x is null, indicating there is no node, the method returns null.
If the node x has a right child (x.right != null), it means that the in-order successor of x lies somewhere in its right subtree. So, the method calls the LeftMost method to find the leftmost node in x's right subtree, which is the node with the smallest value greater than x. This node becomes the in-order successor of x.
If x does not have a right child, it means that the in-order successor of x lies somewhere in its ancestors. So, the method calls the Parent method to find the first ancestor whose left child is also an ancestor of x. This ancestor node is the in-order successor.
Parent Method:

This method takes a node root as input and iterates up the tree through the parent pointers until it finds a node whose left child is the current node root. This node is the in-order successor of the original node passed to the InorderSuccessor method.
LeftMost Method:

This method takes a node root as input and iterates down the left subtree until it finds the leftmost node. This node is the in-order successor of the original node passed to the InorderSuccessor method if the original node does not have a right child.
# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
/*
// Definition for a Node.
public class Node {
    public int val;
    public Node left;
    public Node right;
    public Node parent;
}
*/

public class Solution {
    public Node InorderSuccessor(Node x) {
         if(x == null) return null;
         if(x.right!=null)
         {
            return LeftMost(x.right);
         }
         else
         {
            return Parent(x);
         }
    }

private Node Parent(Node root)
    {
        while(root.parent !=null)
        {
            if(root.parent.left == root)
            {
                return root.parent;
            }
            else
            {
                root = root.parent;
            }
        }
        return null;
    }

    private Node LeftMost(Node root)
    {
        if(root == null) return null;
        while(root.left!=null)
        {
            root = root.left;
        }
        return root;
    }
}
```