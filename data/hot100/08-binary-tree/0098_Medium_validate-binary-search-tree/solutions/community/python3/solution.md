# Solution

**Author:** deleted_user
**Votes:** 497
**Link:** [https://leetcode.com/problems/validate-binary-search-tree/solutions/3169560/](https://leetcode.com/problems/validate-binary-search-tree/solutions/3169560/)

---

```C++ []
class Solution {

bool isPossible(TreeNode* root, long long l, long long r){
    if(root == nullptr)  return true;
    if(root->val < r and root->val > l)
        return isPossible(root->left, l, root->val) and 
                                isPossible(root->right, root->val, r);
    else return false;
}

public:
    bool isValidBST(TreeNode* root) {
        long long int min = -1000000000000, max = 1000000000000;
        return isPossible(root, min, max);
    }
};
```

```Python3 []
class Solution:
    def isValidBST(self, root: Optional[TreeNode]) -> bool:
        prev = float('-inf')
        def inorder(node):
            nonlocal prev
            if not node:
                return True
            if not (inorder(node.left) and prev < node.val):
                return False
            prev = node.val
            return inorder(node.right)
        return inorder(root)
```

```Java []
class Solution {
    private long minVal = Long.MIN_VALUE;
    public boolean isValidBST(TreeNode root) {
        if (root == null) return true; 
        if (!isValidBST(root.left)) return false;
        
        if (minVal >= root.val) return false; 

        minVal = root.val;

        if (!isValidBST(root.right)) return false;

        return true;
    } 
}
```
