# Fastest (100%) || Easy || Clean & Concise || Dry-Run

**Author:** gameboey
**Votes:** 80
**Link:** [https://leetcode.com/problems/evaluate-boolean-binary-tree/solutions/5162736/](https://leetcode.com/problems/evaluate-boolean-binary-tree/solutions/5162736/)

---

![Screenshot 2024-05-16 053506.png](./images/0.png)

# Intuition
To recursively evaluate the boolean expression represented by the binary tree, propagating the results from leaf nodes upwards and applying the corresponding boolean operations at non-leaf nodes.

# Approach: DFS


In a DFS traversal, we explore as far as possible along each branch before backtracking, the recursive `helper` function performs a DFS traversal by recursively evaluating the left and right subtrees (children) of each non-leaf node.

Here's how the DFS traversal works:


1. **Base Cases**:
   - If a node has no children (i.e., it's a leaf), we return its boolean value directly.
   - If a node has two children, we determine whether it represents an OR operation (if its value is 2) or an AND operation (if its value is 3).

2. **Recursion**:
   - For non-leaf nodes, we evaluate its left and right children recursively.

3. **Combine Results**:
   - For OR nodes, we return true if either the left or right child evaluates to true.
   - For AND nodes, we return true only if both the left and right child evaluate to true.

4. **Return**:
   - And at last we return the final boolean result obtained from evaluating the root node.

So, we check whether a node is a leaf (no children), an OR node (value 2), or an AND node (value 3), and we then recursively evaluates its children accordingly.


---


 
# Dry-Run:

Lets dry run for the given example:

```
        2
       / \\
      1   3
         / \\
        0   1
```

Step 1: Evaluate the leaf nodes.
- Node with value 1 evaluates to `true`.
- Node with value 0 evaluates to `false`.
- Node with value 1 evaluates to `true`.

Step 2: Evaluate the non-leaf node with value 3 (AND operation).
- Left child (value 0) evaluates to `false`.
- Right child (value 1) evaluates to `true`.
- Perform AND operation: `false AND true` = `false`.

Step 3: Evaluate the root node with value 2 (OR operation).
- Left child (value 1) evaluates to `true`.
- Right child (value 3) evaluates to `false` (from Step 2).
- Perform OR operation: `true OR false` = `true`.

Step 4: Return the final result.
- The root node evaluates to `true`, so the output is `true`.

Thus, the output for the given binary tree is `true`.

---



# Complexity
- Time complexity: O(n)

- Space complexity: O(n)

# Code
```java []
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    public boolean helper(TreeNode root) {
        if(root.val == 0 || root.val == 1) {
            return root.val == 1;
        } else if(root.val == 2) {
            return helper(root.left) || helper(root.right);
        } else if(root.val == 3) {
            return helper(root.left) && helper(root.right);
        } 

        return false;
    }
    public boolean evaluateTree(TreeNode root) {
        return helper(root);
    }
}
```
```C++ []
/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */
class Solution {
public:
    bool helper(TreeNode* root) {
        if(root -> val == 0 || root -> val == 1) {
            return root -> val == 1;
        } else if(root -> val == 2) {
            return helper(root -> left) || helper(root -> right);
        } else if(root -> val == 3) {
            return helper(root -> left) && helper(root -> right);
        } 

        return false;
    }

    bool evaluateTree(TreeNode* root) {
        return helper(root);
    }
};
```
```python []
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def helper(self, root):
        if root.val == 0 or root.val == 1:
            return root.val == 1
        elif root.val == 2:
            return self.helper(root.left) or self.helper(root.right)
        elif root.val == 3:
            return self.helper(root.left) and self.helper(root.right)
        return False
        
    def evaluateTree(self, root: Optional[TreeNode]) -> bool:
        return self.helper(root)
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
 * @return {boolean}
 */
var evaluateTree = function(root) {
    function helper(node) {
        if (node.val === 0 || node.val === 1) {
            return node.val === 1;
        } else if (node.val === 2) {
            return helper(node.left) || helper(node.right);
        } else if (node.val === 3) {
            return helper(node.left) && helper(node.right);
        }
        return false;
    }
    
    return helper(root);
};
```
```Go []
/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func evaluateTree(root *TreeNode) bool {
    if root.Val == 1 {
        return true
    }
    if root.Val == 0 {
        return false
    }
    if root.Val == 2 {
        return evaluateTree(root.Left) || evaluateTree(root.Right)
    }
    if root.Val == 3 {
        return evaluateTree(root.Left) && evaluateTree(root.Right)
    }

    return true
}

```
```kotlin []
/**
 * Definition for a binary tree node.
 * class TreeNode(var `val`: Int) {
 *     var left: TreeNode? = null
 *     var right: TreeNode? = null
 * }
 */
class Solution {
    fun evaluateTree(root: TreeNode?): Boolean {
        if (root?.`val` == 1) return true
        if (root?.`val` == 0) return false

        if (root?.`val` == 2) return evaluateTree(root.left) || evaluateTree(root.right)

        if (root?.`val` == 3) return evaluateTree(root.left) && evaluateTree(root.right)
        
        return true
    }
}
```

---

**Kakashi: "Boolean expressions, Guy? Feels like unraveling a riddle wrapped in an enigma."**

**Guy: "Exactly, Kakashi! Like trying to decipher your mysterious books."**

**Kakashi: "And when that root node finally speaks, it's like waiting for your dramatic poses. The suspense!"**

**Guy: "Haha, Kakashi, you never fail to amuse! Like our banter, this algorithm keeps us entertained. Believe it!" \uD83C\uDF65**

![kakashi x guy.jpg](./images/1.jpeg)
