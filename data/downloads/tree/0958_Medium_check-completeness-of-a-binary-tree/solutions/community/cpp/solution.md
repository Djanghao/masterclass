# Clean Codes🔥🔥|| Full Explanation✅|| B.F.S✅|| C++|| Java|| Python3

**Author:** N7_BLACKHAT
**Votes:** 202
**Link:** [https://leetcode.com/problems/check-completeness-of-a-binary-tree/solutions/3298346/](https://leetcode.com/problems/check-completeness-of-a-binary-tree/solutions/3298346/)

---

# Intuition :
- Given the root of a binary tree, determine if it is a complete binary tree.
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach : Breadth First Search
- Traverse the tree in `level-order` using a queue. At each level, we add the left and right child nodes of each node to the queue. 
- If we encounter a `null` node, we still add it to the queue so that we can check if there are any more nodes left in the next step. 
- Once we have traversed the entire tree, we check if there are any remaining nodes in the queue. 
- If there are, it means the tree is not complete, and we return `false`. 
- Otherwise, the tree is complete, and we return `true`.
<!-- Describe your approach to solving the problem. -->

# Complexity :
- Time complexity : O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Please Upvote\uD83D\uDC4D\uD83D\uDC4D
```
Thanks for visiting my solution.\uD83D\uDE0A
```
# Codes [C++ |Java |Python3] : With Comments
```Java []
// Define the Solution class
class Solution {
  
  // Define the isCompleteTree function that takes a TreeNode as input and returns a boolean
  public boolean isCompleteTree(TreeNode root) {
    // Check if the root node is null, if so, return true (an empty tree is complete)
    if (root == null)
      return true;

    // Create a queue to store the nodes of the tree in level order
    Queue<TreeNode> q = new LinkedList<>(Arrays.asList(root));

    // Traverse the tree in level order
    while (q.peek() != null) {
      // Remove the first node from the queue
      TreeNode node = q.poll();
      // Add the left and right child nodes of the current node to the queue
      q.offer(node.left);
      q.offer(node.right);
    }

    // Remove any remaining null nodes from the end of the queue
    while (!q.isEmpty() && q.peek() == null)
      q.poll();

    // Check if there are any remaining nodes in the queue
    // If so, the tree is not complete, so return false
    // Otherwise, the tree is complete, so return true
    return q.isEmpty();
  }
}

```
```C++ []
// Define the Solution class
class Solution {
public:
    // Define the isCompleteTree function that takes a TreeNode pointer as input and returns a boolean
    bool isCompleteTree(TreeNode* root) {
        // Check if the root node is null, if so, return true (an empty tree is complete)
        if (root == nullptr)
            return true;

        // Create a queue to store the nodes of the tree in level order
        queue<TreeNode*> q{{root}};

        // Traverse the tree in level order
        while (q.front() != nullptr) {
            // Remove the first node from the queue
            TreeNode* node = q.front();
            q.pop();
            // Add the left and right child nodes of the current node to the queue
            q.push(node->left);
            q.push(node->right);
        }

        // Remove any remaining null nodes from the front of the queue
        while (!q.empty() && q.front() == nullptr)
            q.pop();

        // Check if there are any remaining nodes in the queue
        // If so, the tree is not complete, so return false
        // Otherwise, the tree is complete, so return true
        return q.empty();
    }
};

```
```Python []
from collections import deque

class Solution:
    def isCompleteTree(self, root: TreeNode) -> bool:
        # Check if the root node is None, if so, return True (an empty tree is complete)
        if not root:
            return True

        # Create a deque to store the nodes of the tree in level order
        q = deque([root])

        # Traverse the tree in level order
        while q[0] is not None:
            # Remove the first node from the deque
            node = q.popleft()
            # Add the left and right child nodes of the current node to the deque
            q.append(node.left)
            q.append(node.right)

        # Remove any remaining None nodes from the beginning of the deque
        while q and q[0] is None:
            q.popleft()

        # Check if there are any remaining nodes in the deque
        # If so, the tree is not complete, so return False
        # Otherwise, the tree is complete, so return True
        return not bool(q)

```
# Please Upvote\uD83D\uDC4D\uD83D\uDC4D
![ezgif-3-22a360561c.gif](./images/0.gif)
