# Solution

**Author:** deleted_user
**Votes:** 498
**Link:** [https://leetcode.com/problems/binary-tree-inorder-traversal/solutions/3169549/](https://leetcode.com/problems/binary-tree-inorder-traversal/solutions/3169549/)

---

```C++ []
class Solution {
public:
    vector<int> inorderTraversal(TreeNode* root) {
    vector<int> ans;
    if (root == NULL) return ans;
    vector<int> left = inorderTraversal(root->left);
    ans.insert(ans.end(), left.begin(), left.end());
    ans.push_back(root->val);
    vector<int> right = inorderTraversal(root->right);
    ans.insert(ans.end(), right.begin(), right.end());
    return ans;
}

};
```

```Python3 []
class Solution:
    def inorderTraversal(self, root: Optional[TreeNode]) -> List[int]:
        st = []
        res = []

        while root or st:
            while root:
                st.append(root)
                root = root.left
            
            root = st.pop()
            res.append(root.val)

            root = root.right
        
        return res   
```

```Java []
class Solution {
    private List<Integer> res = new ArrayList<>();
    public List<Integer> inorderTraversal(TreeNode root) {
        traverse(root);
        return res;
    }
    
    private void traverse(TreeNode root) {
        if (root == null) {
            return;
        }
        traverse(root.left);
        res.add(root.val);
        traverse(root.right);
    }
}
```
