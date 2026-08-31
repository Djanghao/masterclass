# C++ and Java solutions based on BFS

**Author:** steffi_keran
**Votes:** 96
**Link:** [https://leetcode.com/problems/find-bottom-left-tree-value/solutions/345876/](https://leetcode.com/problems/find-bottom-left-tree-value/solutions/345876/)

---

```C++ []
class Solution {
public:
    int findBottomLeftValue(TreeNode* root) {
        queue<TreeNode*> q;
        q.push(root);
        
        while(!q.empty()) {
            root=q.front(); // get the value before pop coz pop will not return anyy val
            q.pop();
            if (root->right) q.push(root->right);
            if(root->left) q.push(root->left);
        }
        return root->val;
        
    }
};
```
```Java []
class Solution {
    public int findBottomLeftValue(TreeNode root) {
        Queue<TreeNode> q = new LinkedList<>();
        q.offer(root);

        while(q.peek() != null) {
            root = q.poll();
            if(root.right !=null) q.offer(root.right);
            if(root.left !=null) q.offer(root.left);
        }
        return root.val;
    }
}
```