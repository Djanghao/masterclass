# C# using Recursion with comments

**Author:** mando2022
**Votes:** 2
**Link:** [https://leetcode.com/problems/convert-binary-search-tree-to-sorted-doubly-linked-list/solutions/4283510/](https://leetcode.com/problems/convert-binary-search-tree-to-sorted-doubly-linked-list/solutions/4283510/)

---

# Problem Intuition
- The problem is asking to convert a Binary Search Tree (BST) into a sorted circular doubly-linked list.
- In a BST, all nodes to the left of a node have values less than the node, and all nodes to the right have values greater than the node.
- A doubly-linked list is a list in which each node has two links: one to the previous node and one to the next node.
- A circular doubly-linked list is a more complex type of linked list which organizes items in a circle. The last item has a link to the first item and vice versa.

# Approach
- The approach is to perform an in-order traversal of the BST. In an in-order traversal, we first visit the left subtree, then the root node, and finally the right subtree.
- While performing the in-order traversal, we can keep track of the previous node and the head of the doubly linked list.
- For each node we visit, we make its left child a reference to the previous node, and we make the right child of the previous node a reference to the current node.
- We update the previous node to the current node we are visiting.
- We continue this process until we have traversed all the nodes of the tree.
- After the traversal, we have a doubly linked list, and we just need to connect the head and tail to make it circular.

# Complexity
## Time Complexity:
- The time complexity of this solution is O(n), where n is the number of nodes in the tree. This is because we are visiting each node exactly once.

## Space Complexity
- The space complexity of this solution is O(h), where h is the height of the tree. This space is used for the recursion stack during the in-order traversal. In the worst case (when the tree is skewed), h can be n, so the space complexity is O(n).

# Code
```
/*
// Definition for a Node.
public class Node {
    public int val;
    public Node left;
    public Node right;

    public Node() {}

    public Node(int _val) {
        val = _val;
        left = null;
        right = null;
    }

    public Node(int _val,Node _left,Node _right) {
        val = _val;
        left = _left;
        right = _right;
    }
}
*/

public class Solution {
    // Node to keep track of the head of the doubly linked list
    private Node head = null;
    // Node to keep track of the previous node in the doubly linked list
    private Node prev = null;

    public Node TreeToDoublyList(Node root) {
        // If the root is null, return null
        if(root == null){
            return null;
        }

        // Call the helper function to traverse the tree and build the doubly linked list
        TraverseTree(root);

        // Connect the head and tail to make it circular
        head.left = prev;
        prev.right = head;

        // Return the head of the doubly linked list
        return head;
    }

    private void TraverseTree(Node node){
        // If the node is null, return
        if(node == null){
            return;
        }

        // Recursively traverse the left subtree
        TraverseTree(node.left);

        // If prev is null, it means we are at the head of the doubly linked list
        if(prev == null){
            head = node;
        } else{
            // Otherwise, connect the current node to the prev node and vice versa
            node.left = prev;
            prev.right = node;
        }

        // Update the prev node to the current node
        prev = node;

        // Recursively traverse the right subtree
        TraverseTree(node.right);
    }
}
```