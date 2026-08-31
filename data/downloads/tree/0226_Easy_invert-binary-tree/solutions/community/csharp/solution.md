# ✅Easy Solution🔥Python/C/C#/C++/Java🔥WTF⁉️1 Line Code⁉️

**Author:** MrAke
**Votes:** 38
**Link:** [https://leetcode.com/problems/invert-binary-tree/solutions/3977962/](https://leetcode.com/problems/invert-binary-tree/solutions/3977962/)

---

![Screenshot 2023-08-20 065922.png](./images/0.png)


```python3 []
class Solution:
    def invertTree(self, root: Optional[TreeNode]) -> Optional[TreeNode]:
        return root and TreeNode(root.val, self.invertTree(root.right), self.invertTree(root.left))
```
```Python []
class Solution:
    def invertTree(self, root: Optional[TreeNode]) -> Optional[TreeNode]:
        return root and TreeNode(root.val, self.invertTree(root.right), self.invertTree(root.left))
```
```C# []
public class Solution {
    public TreeNode InvertTree(TreeNode root) {
        if (root == null) {
            return null;
        }
        
        TreeNode temp = root.left;
        root.left = InvertTree(root.right);
        root.right = InvertTree(temp);
        
        return root;
    }
}
```
```C++ []
class Solution {
public:
    TreeNode* invertTree(TreeNode* root) {
        if (root == nullptr) {
            return nullptr;
        }
        
        std::swap(root->left, root->right);
        invertTree(root->left);
        invertTree(root->right);
        
        return root;
    }
};
```
```Java []
class Solution {
    public TreeNode invertTree(TreeNode root) {
        if (root == null) {
            return null;
        }
        
        TreeNode temp = root.left;
        root.left = invertTree(root.right);
        root.right = invertTree(temp);
        
        return root;
    }
}
`
``
