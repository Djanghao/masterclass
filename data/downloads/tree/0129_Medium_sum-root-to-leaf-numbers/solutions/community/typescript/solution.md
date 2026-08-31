# ✅DFS✨Beats 100% Easy Solution | Well Explained

**Author:** donquixote-doflamingo
**Votes:** 3
**Link:** [https://leetcode.com/problems/sum-root-to-leaf-numbers/solutions/5922061/](https://leetcode.com/problems/sum-root-to-leaf-numbers/solutions/5922061/)

---

# Intuition
The task requires us to find the sum of numbers formed by all root-to-leaf paths. Each path forms a number by combining the node values, where each deeper level represents the next digit. To solve this, we can use a depth-first search (DFS) traversal to explore every path from the root to the leaves.

# Approach
1. Traverse the tree using DFS.
2. At each node, multiply the current number (from the path) by 10 and add the node's value to form the new number.
3. If we reach a leaf node, add the formed number to the total sum.
4. Recursively explore the left and right subtrees, and stop when reaching a null node.

### Here is the step-by-step approach:
1. Start with a helper function `leafNum` to traverse the tree.
2. Maintain a cumulative number that stores the current path number.
3. When a leaf node is encountered, add the current cumulative number to the result.
4. Return the total sum after all paths are explored.

# Complexity
- ### Time complexity:
  The time complexity is $$O(n)$$, where `n` is the number of nodes, as we need to visit each node once.

- ### Space complexity:
  The space complexity is $$O(h)$$, where `h` is the height of the tree due to the recursion stack. In the worst case, for a skewed tree, it will be $$O(n)$$, while for a balanced tree, it will be $$O(\\log n)$$.

# Code
```c []
int dfs(struct TreeNode* node, int curr_number) {
    if (node == NULL) {
        return 0;
    }
    curr_number = curr_number * 10 + node->val;
    if (node->left == NULL && node->right == NULL) {
        return curr_number;
    }
    return dfs(node->left, curr_number) + dfs(node->right, curr_number);
}

int sumNumbers(struct TreeNode* root) {
    return dfs(root, 0);
}
```
```cpp []
class Solution {
public:
    int sumNumbers(TreeNode* root) {
        return dfs(root, 0);
    }
    
    int dfs(TreeNode* root, int currNum) {
        if (!root) return 0;
        currNum = currNum * 10 + root->val;
        if (!root->left && !root->right) return currNum;
        return dfs(root->left, currNum) + dfs(root->right, currNum);
    }
};
```
```java []
class Solution {
    int sum = 0;
    public int sumNumbers(TreeNode root) {
        leafNum(root, 0);
        return sum;
    }

    void leafNum(TreeNode root, int num) {
        TreeNode left = root.left, right = root.right;
        num = num * 10 + root.val;
        if (left != null) leafNum(left, num);
        if (right != null) leafNum(right, num);
        if (left == null && right == null) sum += num;
    }
}
```
```python []
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def sumNumbers(self, root):
        def dfs(node, curr_number):
            if not node:
                return 0
            curr_number = curr_number * 10 + node.val
            if not node.left and not node.right:
                return curr_number
            return dfs(node.left, curr_number) + dfs(node.right, curr_number)

        return dfs(root, 0)
```
```python3 []
class Solution:
    def sumNumbers(self, root: Optional[TreeNode]) -> int:
        def dfs(node, curr_number):
            if not node:
                return 0
            curr_number = curr_number * 10 + node.val
            if not node.left and not node.right:
                return curr_number
            return dfs(node.left, curr_number) + dfs(node.right, curr_number)

        return dfs(root, 0)
```
```javascript []
var sumNumbers = function(root) {
    const dfs = (node, currNum) => {
        if (!node) return 0;
        currNum = currNum * 10 + node.val;
        if (!node.left && !node.right) return currNum;
        return dfs(node.left, currNum) + dfs(node.right, currNum);
    };
    return dfs(root, 0);
};
```
``` typescript []
function sumNumbers(root: TreeNode | null): number {
    const dfs = (node: TreeNode | null, currNum: number): number => {
        if (!node) return 0;
        currNum = currNum * 10 + node.val;
        if (!node.left && !node.right) return currNum;
        return dfs(node.left, currNum) + dfs(node.right, currNum);
    };
    return dfs(root, 0);
}
```
