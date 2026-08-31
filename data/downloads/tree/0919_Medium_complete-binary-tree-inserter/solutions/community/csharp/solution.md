# C# BFS Based Insertion Algorithm

**Author:** GetRid
**Votes:** 0
**Link:** [https://leetcode.com/problems/complete-binary-tree-inserter/solutions/5447996/](https://leetcode.com/problems/complete-binary-tree-inserter/solutions/5447996/)

---

# Approach
<!-- Describe your approach to solving the problem. --> uses a Queue to keep track of nodes that are candidates for insertion. When a new node is inserted, it finds the next available position by checking the front of the queue and inserts the new node as a left or right child. If both children of a node are filled, it dequeues that node from the queue. The new node is then enqueued to keep track of future insertions.
___

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->O(N) for initialization, O(1) for insertion and getting the root.
___

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->O(N) for the queue used to track potential parents.
___

# Code
```
using System.Collections.Generic;

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
public class CBTInserter {
    private TreeNode root;
    private Queue<TreeNode> queue;

    public CBTInserter(TreeNode root) {
        this.root = root;
        this.queue = new Queue<TreeNode>();
        
        // Initialize the queue with all nodes at the last incomplete level
        Queue<TreeNode> tempQueue = new Queue<TreeNode>();
        tempQueue.Enqueue(root);
        while (tempQueue.Count > 0) {
            TreeNode node = tempQueue.Dequeue();
            if (node.left != null) tempQueue.Enqueue(node.left);
            if (node.right != null) tempQueue.Enqueue(node.right);
            if (node.left == null || node.right == null) queue.Enqueue(node);
        }
    }
    
    public int Insert(int val) {
        TreeNode newNode = new TreeNode(val);
        TreeNode parent = queue.Peek();
        
        if (parent.left == null) {
            parent.left = newNode;
        } else {
            parent.right = newNode;
            queue.Dequeue();
        }
        
        queue.Enqueue(newNode);
        return parent.val;
    }
    
    public TreeNode Get_root() {
        return this.root;
    }
}

/**
 * Your CBTInserter object will be instantiated and called as such:
 * CBTInserter obj = new CBTInserter(root);
 * int param_1 = obj.Insert(val);
 * TreeNode param_2 = obj.Get_root();
 */

 // This implementation uses a 'Queue' to keep track of nodes that are candidates for insertion.
 // When a new node is inserted, it finds the next abailable position by checking the fornt of the queue
 // and inserts the new node as a left or right child.
 // If both children of a node are filled, it dequeues that node from the queue. The new node is then
 // enqueued to keep track of future insertions.
```