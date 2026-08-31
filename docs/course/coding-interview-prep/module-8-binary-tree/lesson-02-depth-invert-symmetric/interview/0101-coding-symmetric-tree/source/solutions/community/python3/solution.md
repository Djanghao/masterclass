# Easy || 0 ms 100% (Fully Explained)(Java, C++, Python, JS, Python3)

**Author:** PratikSen07
**Votes:** 146
**Link:** [https://leetcode.com/problems/symmetric-tree/solutions/2423766/](https://leetcode.com/problems/symmetric-tree/solutions/2423766/)

---

# **Java Solution:**
Runtime: 0 ms, faster than 100.00% of Java online submissions for Symmetric Tree.
```
class Solution {
    public boolean isSymmetric(TreeNode root) {
        // Soecial case...
        if (root == null)
		    return true;
        // call the function  recursively...
	    return isSymmetric(root.left, root.right);
    }
    // After division the tree will be divided in two parts...
    // The root of the left part is rootleft & the root of the right part is rootright...
    public boolean isSymmetric(TreeNode rootleft, TreeNode rootright) {
        // If root of the left part & the root of the right part is same, return true...
	    if (rootleft == null && rootright == null) {
		    return true;
	    }
        // If root of any part is null, then the binary tree is not symmetric. So return false...
        else if (rootright == null || rootleft == null) {
		    return false;
	    }
        // If the value of the root of the left part is not equal to the value of the root of the right part...
        if (rootleft.val != rootright.val)
		    return false;
        // In case of not symmetric...
        if (!isSymmetric(rootleft.left, rootright.right))
		    return false;
	    if (!isSymmetric(rootleft.right, rootright.left))
		    return false;
        // Otherwise, return true...
        return true;
    }
}
```

# **C++ Solution:**
```
class Solution {
public:
    bool isSymmetric(TreeNode* root) {
        // Special case...
        if(root == nullptr) return true;
        // Return the function recursively...
        return isSymmetric(root->left,root->right);
    }
    // A tree is called symmetric if the left subtree must be a mirror reflection of the right subtree...
    bool isSymmetric(TreeNode* leftroot,TreeNode* rightroot){
        // If both root nodes are null pointers, return true...
        if(!leftroot && !rightroot)  return true;
        // If exactly one of them is a null node, return false...
        if(!leftroot || !rightroot)  return false;
        // If root nodes haven't same value, return false...
        if(leftroot->val != rightroot->val)  return false;
        // Return true if the values of root nodes are same and left as well as right subtrees are symmetric...
        return isSymmetric(leftroot->left, rightroot->right) && isSymmetric(leftroot->right, rightroot->left);
    }
};
```

# **Python Solution:**
```
class Solution(object):
    def isSymmetric(self, root):
        # Special case...
        if not root:
            return true;
        # Return the function recursively...
        return self.isSame(root.left, root.right)
    # A tree is called symmetric if the left subtree must be a mirror reflection of the right subtree...
    def isSame(self, leftroot, rightroot):
        # If both root nodes are null pointers, return true...
        if leftroot == None and rightroot == None:
            return True
        # If exactly one of them is a null node, return false...
        if leftroot == None or rightroot == None:
            return False
        # If root nodes haven't same value, return false...
        if leftroot.val != rightroot.val:
            return False
        # Return true if the values of root nodes are same and left as well as right subtrees are symmetric...
        return self.isSame(leftroot.left, rightroot.right) and self.isSame(leftroot.right, rightroot.left)
```
            
# **JavaScript Solution:**
Runtime: 66 ms, faster than 97.80% of JavaScript online submissions for Symmetric Tree.
```
var isSymmetric = function(root) {
    // Special case...
    if (!root)
        return true;
    // Return the function recursively...
    return isSame(root.left, root.right);
};
// A tree is called symmetric if the left subtree must be a mirror reflection of the right subtree...
var isSame = function (leftroot, rightroot) {
    // If both root nodes are null pointers, return true...
    // If exactly one of them is a null node, return false...
    // If root nodes haven't same value, return false...
    if ((!leftroot && rightroot) || (leftroot && !rightroot) || (leftroot && rightroot && leftroot.val !== rightroot.val))
        return false;
    // Return true if the values of root nodes are same and left as well as right subtrees are symmetric...
    if (leftroot && rightroot)
        return isSame(leftroot.left, rightroot.right) && isSame(leftroot.right, rightroot.left);
    return true;
};
```

# **Python3 Solution:**
```
class Solution:
    def isSymmetric(self, root: Optional[TreeNode]) -> bool:
        # Special case...
        if not root:
            return true;
        # Return the function recursively...
        return self.isSame(root.left, root.right)
    # A tree is called symmetric if the left subtree must be a mirror reflection of the right subtree...
    def isSame(self, leftroot, rightroot):
        # If both root nodes are null pointers, return true...
        if leftroot == None and rightroot == None:
            return True
        # If exactly one of them is a null node, return false...
        if leftroot == None or rightroot == None:
            return False
        # If root nodes haven't same value, return false...
        if leftroot.val != rightroot.val:
            return False
        # Return true if the values of root nodes are same and left as well as right subtrees are symmetric...
        return self.isSame(leftroot.left, rightroot.right) and self.isSame(leftroot.right, rightroot.left)
```
**I am working hard for you guys...
Please upvote if you find any help with this code...**