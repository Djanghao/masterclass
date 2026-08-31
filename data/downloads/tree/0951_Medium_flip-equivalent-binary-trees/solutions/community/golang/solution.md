# ✨ Simple DFS || 3 Lines Solution || Beats 100% ✨

**Author:** UK07
**Votes:** 7
**Link:** [https://leetcode.com/problems/flip-equivalent-binary-trees/solutions/5960086/](https://leetcode.com/problems/flip-equivalent-binary-trees/solutions/5960086/)

---

# Intuition
The problem asks to determine if two binary trees are "flip equivalent." This means that the two trees are either structurally identical or can be made identical by flipping some of the subtrees. My first thought is that I need to compare the two trees recursively, considering both the direct and the flipped cases at each node.

# Approach
We can use a recursive depth-first search (DFS) to compare the two trees. For each node pair, there are two possibilities:
1. The `left child` of the first tree matches the `left child` of the second tree, and the `right child` of the first tree matches the `right child` of the second tree.
2. The `left child` of the first tree matches the `right child` of the second tree, and the `right child` of the first tree matches the `left child` of the second tree (flipped).

The base case for recursion is when both nodes are `nullptr` (in which case they are trivially equivalent), or when only one of the nodes is `nullptr` (in which case they are not equivalent). At each recursive step, we check if the current node values match, and we continue recursively down the children, considering both the direct and flipped cases.

# Complexity
- Time complexity:  
  The time complexity is $$O(n)$$, where $$n$$ is the number of nodes in the smaller of the two trees. In the worst case, we have to traverse all the nodes in both trees to determine their equivalence.

- Space complexity:  
  The space complexity is $$O(h)$$, where $$h$$ is the height of the tree. This is due to the recursive call stack.



# Code
```cpp []
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
    bool dfs(TreeNode* node1, TreeNode* node2) {
        // If both nodes are null, they are equivalent
        if(!node1 && !node2) return true;
        // If only one is null, they are not equivalent
        else if(!node1 || !node2) return false;

        // Check if current nodes have the same value and 
        // (1) their children match directly or 
        // (2) their children match when flipped
        return (node1->val == node2->val) && ((dfs(node1->left, node2->left) && dfs(node1->right, node2->right)) || (dfs(node1->left, node2->right) && dfs(node1->right, node2->left)));
    }
public:
    bool flipEquiv(TreeNode* root1, TreeNode* root2) {
        return dfs(root1, root2);
    }
};
```
```java []
class Solution {
    private boolean dfs(TreeNode node1, TreeNode node2) {
        // If both nodes are null, they are equivalent
        if (node1 == null && node2 == null) return true;
        // If only one is null, they are not equivalent
        if (node1 == null || node2 == null) return false;

        // Check if current nodes have the same value and 
        // (1) their children match directly or 
        // (2) their children match when flipped
        return node1.val == node2.val &&
               ((dfs(node1.left, node2.left) && dfs(node1.right, node2.right)) || 
                (dfs(node1.left, node2.right) && dfs(node1.right, node2.left)));
    }

    public boolean flipEquiv(TreeNode root1, TreeNode root2) {
        return dfs(root1, root2);
    }
}
```
```python []
class Solution:
    def dfs(self, node1: TreeNode, node2: TreeNode) -> bool:
        # If both nodes are null, they are equivalent
        if not node1 and not node2:
            return True
        # If only one is null, they are not equivalent
        if not node1 or not node2:
            return False

        # Check if current nodes have the same value and 
        # (1) their children match directly or 
        # (2) their children match when flipped
        return (node1.val == node2.val and 
               ((self.dfs(node1.left, node2.left) and self.dfs(node1.right, node2.right)) or 
                (self.dfs(node1.left, node2.right) and self.dfs(node1.right, node2.left))))

    def flipEquiv(self, root1: TreeNode, root2: TreeNode) -> bool:
        return self.dfs(root1, root2)
```
```javascript []
var dfs = function(node1, node2) {
    // If both nodes are null, they are equivalent
    if (!node1 && !node2) return true;
    // If only one is null, they are not equivalent
    if (!node1 || !node2) return false;

    // Check if current nodes have the same value and 
    // (1) their children match directly or 
    // (2) their children match when flipped
    return node1.val === node2.val && 
           ((dfs(node1.left, node2.left) && dfs(node1.right, node2.right)) || 
            (dfs(node1.left, node2.right) && dfs(node1.right, node2.left)));
};

var flipEquiv = function(root1, root2) {
    return dfs(root1, root2);
};
```
```golang []
func dfs(node1 *TreeNode, node2 *TreeNode) bool {
    // If both nodes are null, they are equivalent
    if node1 == nil && node2 == nil {
        return true
    }
    // If only one is null, they are not equivalent
    if node1 == nil || node2 == nil {
        return false
    }

    // Check if current nodes have the same value and 
    // (1) their children match directly or 
    // (2) their children match when flipped
    return node1.Val == node2.Val &&
        ((dfs(node1.Left, node2.Left) && dfs(node1.Right, node2.Right)) || 
         (dfs(node1.Left, node2.Right) && dfs(node1.Right, node2.Left)))
}

func flipEquiv(root1 *TreeNode, root2 *TreeNode) bool {
    return dfs(root1, root2)
}
```
```rust []
impl Solution {
    fn dfs(node1: Option<&Box<TreeNode>>, node2: Option<&Box<TreeNode>>) -> bool {
        match (node1, node2) {
            (None, None) => true,
            (Some(_), None) | (None, Some(_)) => false,
            (Some(n1), Some(n2)) => {
                n1.val == n2.val && 
                ((Solution::dfs(n1.left.as_ref(), n2.left.as_ref()) && 
                  Solution::dfs(n1.right.as_ref(), n2.right.as_ref())) || 
                 (Solution::dfs(n1.left.as_ref(), n2.right.as_ref()) && 
                  Solution::dfs(n1.right.as_ref(), n2.left.as_ref())))
            }
        }
    }

    pub fn flip_equiv(root1: Option<Box<TreeNode>>, root2: Option<Box<TreeNode>>) -> bool {
        Solution::dfs(root1.as_ref(), root2.as_ref())
    }
}
```

![image.png](./images/0.png)
