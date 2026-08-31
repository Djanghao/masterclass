# Swift - BFS

**Author:** ksmirnovnn
**Votes:** 0
**Link:** [https://leetcode.com/problems/complete-binary-tree-inserter/solutions/5035795/](https://leetcode.com/problems/complete-binary-tree-inserter/solutions/5035795/)

---

# Intuition
The problem is asking to insert a new node into a complete binary tree such that the tree remains complete after the insertion. The first thought that comes to mind is to use a breadth-first search (BFS) to find the first empty spot where we can insert the new node. However, this would require traversing the entire tree every time we want to insert a new node, which is not efficient. A more efficient approach would be to keep track of the nodes that are not full (i.e., nodes that do not have both left and right children) so that we can directly insert the new node at the correct position.

# Approach
We maintain a deque of nodes whose left child or right child is not full (i.e., either the left child or the right child is nil). When we insert a new node, we always insert it to the left child or the right child of the front node in the deque. If the front node becomes full after the insertion, we remove it from the deque. The insert function returns the value of the parent node of the inserted node. The get_root function returns the root node of the tree.


# Complexity
- Time complexity:
The time complexity for the insert function is O(1) , as we can directly access the node where we need to insert the new node from the deque.

- Space complexity:
The space complexity is O(n) , where n is the number of nodes in the tree. This is because in the worst case, all nodes could be in the deque. However, in practice, the number of nodes in the deque would be much less than n. The deque only contains the nodes at the last two levels of the tree, so the space complexity is proportional to the width of the tree, which is much less than the total number of nodes for a complete binary tree. Therefore, the space complexity is effectively O(w), where w is the width of the tree. In the worst case, the width of the tree is n/2, so the space complexity is O(n).

# Code
```
class CBTInserter {
    var deque: [TreeNode]
    var root: TreeNode?

    init(_ root: TreeNode?) {
        self.root = root
        deque = [TreeNode]()
        if let root = root {
            var queue = [root]
            while !queue.isEmpty {
                let node = queue.removeFirst()
                if node.left == nil || node.right == nil {
                    deque.append(node)
                }
                if let left = node.left {
                    queue.append(left)
                }
                if let right = node.right {
                    queue.append(right)
                }
            }
        }
    }
    
    func insert(_ v: Int) -> Int {
        let node = TreeNode(v)
        let parentNode = deque.first!
        if parentNode.left == nil {
            parentNode.left = node
        } else {
            parentNode.right = node
            deque.removeFirst()
        }
        deque.append(node)
        return parentNode.val
    }
    
    func get_root() -> TreeNode? {
        return root
    }
}

```