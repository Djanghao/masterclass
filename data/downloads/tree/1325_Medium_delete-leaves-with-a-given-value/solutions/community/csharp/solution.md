# 🔥 BEATS ~100% | DFS  | ✅ [ C++ / Java / Py / JS / GO / C / C# ]

**Author:** Neoni_77
**Votes:** 6
**Link:** [https://leetcode.com/problems/delete-leaves-with-a-given-value/solutions/5168314/](https://leetcode.com/problems/delete-leaves-with-a-given-value/solutions/5168314/)

---



```java []
class Solution {
    public TreeNode removeLeafNodes(TreeNode root, int target) {
	if (root == null) {
		return null;
	}
	
	root.left = removeLeafNodes(root.left, target);
	root.right = removeLeafNodes(root.right, target);
	return root.left == null && root.right == null && root.val == target ? null : root;
    }
}
```

```Python []
class Solution:
    def removeLeafNodes(self, root: Optional[TreeNode], target: int) -> Optional[TreeNode]:
        if not root:
            return None
        
        # Recursively call removeLeafNodes on the left and right children
        root.left = self.removeLeafNodes(root.left, target)
        root.right = self.removeLeafNodes(root.right, target)
        
        # Check if the current node is a leaf and if its value is the target
        if root.val == target and not root.left and not root.right:
            return None
        
        return root
```
```C++ []
class Solution {
public:
    TreeNode* removeLeafNodes(TreeNode* root, int target) {
        if(!root)
            return NULL;

        root->left = removeLeafNodes(root->left, target);
        root->right = removeLeafNodes(root->right, target);

        if(root->val == target && !root->left && !root->right)
            return NULL;

        return root;
    }
};
```
```C []
struct TreeNode* removeLeafNodes(struct TreeNode* root, int target) {
    if (root == NULL) {
        return NULL;
    }

    // Recursively call removeLeafNodes on the left and right children
    root->left = removeLeafNodes(root->left, target);
    root->right = removeLeafNodes(root->right, target);

    // Check if the current node is a leaf and if its value is the target
    if (root->val == target && root->left == NULL && root->right == NULL) {
        // Free the memory allocated for the leaf node
        free(root);
        return NULL;
    }

    return root;
}
```
```C# []
public class Solution {
    public TreeNode RemoveLeafNodes(TreeNode root, int target) {
        if (root == null) {
            return null;
        }

        // Recursively call RemoveLeafNodes on the left and right children
        root.left = RemoveLeafNodes(root.left, target);
        root.right = RemoveLeafNodes(root.right, target);

        // Check if the current node is a leaf and if its value is the target
        if (root.val == target && root.left == null && root.right == null) {
            return null;
        }

        return root;
    }
}
```
```Javascript []
var removeLeafNodes = function(root, target) {
    if (root === null) {
        return null;
    }

    // Recursively call removeLeafNodes on the left and right children
    root.left = removeLeafNodes(root.left, target);
    root.right = removeLeafNodes(root.right, target);

    // Check if the current node is a leaf and if its value is the target
    if (root.val === target && root.left === null && root.right === null) {
        return null;
    }

    return root;
};
```
```Go []
func removeLeafNodes(root *TreeNode, target int) *TreeNode {
    if root == nil {
        return nil
    }

    // Recursively call removeLeafNodes on the left and right children
    root.Left = removeLeafNodes(root.Left, target)
    root.Right = removeLeafNodes(root.Right, target)

    // Check if the current node is a leaf and if its value is the target
    if root.Val == target && root.Left == nil && root.Right == nil {
        return nil
    }

    return root
}
```
**NOTE: THE FOLLOWING IMPLEMENTATION BEATS 100% IN GO & Java .. DON'T KNOW ABOUT OTHER CODES** 
```
UPVOTE\u2B06\uFE0F IF IT HELPED\uD83D\uDE0A
```
