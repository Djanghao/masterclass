# ✔️✔️Easy Solutions in Java ✔️✔️, Python ✔️, and C++ ✔️🧐Look at once 💻 with Exaplanation

**Author:** Vikas-Pathak-123
**Votes:** 46
**Link:** [https://leetcode.com/problems/longest-zigzag-path-in-a-binary-tree/solutions/3433417/](https://leetcode.com/problems/longest-zigzag-path-in-a-binary-tree/solutions/3433417/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
>To find the longest zigzag path in a binary tree, we can traverse the tree using DFS (Depth-First-Search) and at each node, keep track of the maximum length of the zigzag path seen so far.

# Approach
<!-- Describe your approach to solving the problem. -->
>1. Initialize a variable ans to 0 to keep track of the maximum length of the zigzag path seen so far.
>2. Initialize a stack with the root node and two additional values n (the length of the zigzag path seen so far) and left (a boolean value indicating if the last traversal was to the left or not, where None represents the root node).
>3. Pop a node, n, and left from the stack.
>4. If the node is not None, update ans to max(ans, n).
>5. Add the left child to the stack with n + 1 as the new length and set left to 1 (indicating the last traversal was to the left) if the previous node was to the left or None, else set left to 0 (indicating the last traversal was to the right).
>6. Add the right child to the stack with n + 1 as the new length and set left to 0 (indicating the last traversal was to the right) if the previous node was to the right or None, else set left to 1 (indicating the last traversal was to the left).
>7. Repeat steps 3-6 until the stack is empty.
>8. Return ans

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
 >O(N) where N is the number of nodes in the tree, as we visit every node exactly once.

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
>O(N) as we need to store all the nodes in the worst case (i.e., a skewed tree).

![image.png](./images/0.png)


# Please Upvote\uD83D\uDC4D\uD83D\uDC4D
```
Thanks for visiting my solution.\uD83D\uDE0A Keep Learning
Please give my solution an upvote! \uD83D\uDC4D
It's a simple way to show your appreciation and
keep me motivated. Thank you! \uD83D\uDE0A
```
# Code
```java []
class Solution {
    public int longestZigZag(TreeNode root) {
        int ans = 0;
        Stack<Triplet> stack = new Stack<>();
        stack.push(new Triplet(root, 0, null));
        while (!stack.isEmpty()) {
            Triplet triplet = stack.pop();
            TreeNode node = triplet.node;
            int n = triplet.n;
            Integer left = triplet.left;
            if (node != null) {
                ans = Math.max(ans, n);
                stack.push(new Triplet(node.left, left != null && left == 0 ? n + 1 : 1, 1));
                stack.push(new Triplet(node.right, left != null && left == 1 ? n + 1 : 1, 0));
            }
        }
        return ans;
    }
}

class Triplet {
    TreeNode node;
    int n;
    Integer left;
    
    public Triplet(TreeNode node, int n, Integer left) {
        this.node = node;
        this.n = n;
        this.left = left;
    }
}

```
```python []
# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution(object):
    def longestZigZag(self, root):
        """
        :type root: TreeNode
        :rtype: int
        """
        ans = 0
        stack = [(root, 0, None)]
        while stack:
            node, n, left = stack.pop()
            if node:
                ans = max(ans, n)
                stack.append((node.left, 1 if left else n + 1, 1))
                stack.append((node.right, n + 1 if left else 1, 0))
        return ans

```


```javascript []
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var longestZigZag = function(root) {
    let ans = 0;
    const stack = [[root, 0, null]];
    while (stack.length > 0) {
        const [node, n, left] = stack.pop();
        if (node) {
            ans = Math.max(ans, n);
            stack.push([node.left, left != null && left == 0 ? n + 1 : 1, 1]);
            stack.push([node.right, left != null && left == 1 ? n + 1 : 1, 0]);
        }
    }
    return ans;
};

```
# Please Comment\uD83D\uDC4D\uD83D\uDC4D
```
Thanks for visiting my solution comment below if you like it.\uD83D\uDE0A
```