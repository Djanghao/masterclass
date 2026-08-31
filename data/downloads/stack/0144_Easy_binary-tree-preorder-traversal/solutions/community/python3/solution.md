# Solution

**Author:** deleted_user
**Votes:** 218
**Link:** [https://leetcode.com/problems/binary-tree-preorder-traversal/solutions/3025711/](https://leetcode.com/problems/binary-tree-preorder-traversal/solutions/3025711/)

---

```C++ []
class Solution {
public:
    vector<int> preorderTraversal(TreeNode* root) {
        vector<int> preorder;
        stack<TreeNode*> stack;
        if (root == NULL)
            return preorder;
        stack.push(root);
        while(!stack.empty()) {
            TreeNode* curr = stack.top();
            stack.pop();
            preorder.push_back(curr->val);
            if (curr->right != NULL)
                stack.push(curr->right);
            if (curr->left != NULL)
                stack.push(curr->left);
        }
        return preorder;
    }
};
```

```Python3 []
class Solution:
    def preorderTraversal(self, root: Optional[TreeNode]) -> List[int]:
        head = root
        stack = []
        res = []

        while head or stack:
            if head:
                res.append(head.val)
                if head.right:
                    stack.append(head.right)
                head = head.left
            else:
                head = stack.pop()

        return res        
```

```Java []
class Solution {
    List<Integer> preorderTraverse(TreeNode root,List<Integer> list) {

        if(root==null)
            return list;
        list.add(root.val);
        preorderTraverse(root.left,list);
        preorderTraverse(root.right,list);
        return list;
    }
    public List<Integer> preorderTraversal(TreeNode root) {
        List<Integer> list = new ArrayList<Integer>();
        list = preorderTraverse(root,list);
        return list;
    }
}
```
