# Very Easy || 100% || Fully Explained (C++, Java, Python, JavaScript, Python3)

**Author:** PratikSen07
**Votes:** 398
**Link:** [https://leetcode.com/problems/balanced-binary-tree/solutions/2428871/](https://leetcode.com/problems/balanced-binary-tree/solutions/2428871/)

---

# **Java Solution:**
Runtime: 0 ms, faster than 100.00% of Java online submissions for Balanced Binary Tree.
Memory Usage: 41.9 MB, less than 94.34% of Java online submissions for Balanced Binary Tree.
```
class Solution {
    public boolean isBalanced(TreeNode root) {
        // If the tree is empty, we can say it\u2019s balanced...
        if (root == null)  return true;
        // Height Function will return -1, when it\u2019s an unbalanced tree...
		if (Height(root) == -1)  return false;
		return true;
	}
    // Create a function to return the \u201Cheight\u201D of a current subtree using recursion...
	public int Height(TreeNode root) {
        // Base case...
		if (root == null)  return 0;
        // Height of left subtree...
		int leftHeight = Height(root.left);
        // Height of height subtree...
		int rightHight = Height(root.right);
        // In case of left subtree or right subtree unbalanced, return -1...
		if (leftHeight == -1 || rightHight == -1)  return -1;
        // If their heights differ by more than \u20181\u2019, return -1...
        if (Math.abs(leftHeight - rightHight) > 1)  return -1;
        // Otherwise, return the height of this subtree as max(leftHeight, rightHight) + 1...
		return Math.max(leftHeight, rightHight) + 1;
    }
}
```

# **C++ Solution:**
```
class Solution {
public:
    bool isBalanced(TreeNode* root) {
        // If the tree is empty, we can say it\u2019s balanced...
        if (root == NULL)  return true;
        // Height Function will return -1, when it\u2019s an unbalanced tree...
		if (Height(root) == -1)  return false;
		return true;
	}
    // Create a function to return the \u201Cheight\u201D of a current subtree using recursion...
	int Height(TreeNode* root) {
        // Base case...
		if (root == NULL)  return 0;
        // Height of left subtree...
		int leftHeight = Height(root->left);
        // Height of height subtree...
		int rightHight = Height(root->right);
        // In case of left subtree or right subtree unbalanced or their heights differ by more than \u20181\u2019, return -1...
		if (leftHeight == -1 || rightHight == -1 || abs(leftHeight - rightHight) > 1)  return -1;
        // Otherwise, return the height of this subtree as max(leftHeight, rightHight) + 1...
		return max(leftHeight, rightHight) + 1;
    }
};
```

# **Python Solution:**
```
class Solution(object):
    def isBalanced(self, root):
        return (self.Height(root) >= 0)
    def Height(self, root):
        if root is None:  return 0
        leftheight, rightheight = self.Height(root.left), self.Height(root.right)
        if leftheight < 0 or rightheight < 0 or abs(leftheight - rightheight) > 1:  return -1
        return max(leftheight, rightheight) + 1
```
            
# **JavaScript Solution:**
```
var isBalanced = function(root) {
    // If the tree is empty, we can say it\u2019s balanced...
    if (root == null)  return true;
    // Height Function will return -1, when it\u2019s an unbalanced tree...
	if (Height(root) == -1)  return false;
	return true;
}
// Create a function to return the \u201Cheight\u201D of a current subtree using recursion...
var Height = function(root) {
    // Base case...
	if (root == null)  return 0;
    // Height of left subtree...
	let leftHeight = Height(root.left);
    // Height of height subtree...
	let rightHight = Height(root.right);
    // In case of left subtree or right subtree unbalanced, return -1...
	if (leftHeight == -1 || rightHight == -1)  return -1;
    // If their heights differ by more than \u20181\u2019, return -1...
    if (Math.abs(leftHeight - rightHight) > 1)  return -1;
    // Otherwise, return the height of this subtree as max(leftHeight, rightHight) + 1...
	return Math.max(leftHeight, rightHight) + 1;
};
```

# **Python3 Solution:**
```
class Solution:
    def isBalanced(self, root: Optional[TreeNode]) -> bool:
        return (self.Height(root) >= 0)
    def Height(self, root: Optional[TreeNode]) -> bool:
        if root is None:  return 0
        leftheight, rightheight = self.Height(root.left), self.Height(root.right)
        if leftheight < 0 or rightheight < 0 or abs(leftheight - rightheight) > 1:  return -1
        return max(leftheight, rightheight) + 1
```
**I am working hard for you guys...
Please upvote if you found any help with this code...**