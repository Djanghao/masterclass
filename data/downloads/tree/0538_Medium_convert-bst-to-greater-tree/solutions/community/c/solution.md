# C++ | Reverse Inorder Traversal | O(n), 0ms, Beats 100% | Explanation

**Author:** akash2099
**Votes:** 24
**Link:** [https://leetcode.com/problems/convert-bst-to-greater-tree/solutions/1057416/](https://leetcode.com/problems/convert-bst-to-greater-tree/solutions/1057416/)

---

**EXPLANATION**

- Since, the input is a **BST**, the **right-most node** in the tree is the **maximum** value present in the tree. So we first recursively go to the **right-most node** of the tree then **process** that node then **go left**.
That is, **[ Go right ]** then **[ Process node ]** then **[ Go left ]** *recursively*. **( Reverse Inorder Traversal )**
- \xA0While **processing** each ```node```, we need to *add the current node's val* to the ```curr_sum``` ( **```curr_sum+=node->val```** ) and also *update current node's val* to ```curr_sum``` ( **```node->val=curr_sum```** ).
- After the whole traversal of the tree, return **root**.


**CODE IMPLEMENTATION**

```
class Solution {
public:
    int curr_sum;
    void traverse(TreeNode* node){
        // Go right
        if(node->right) traverse(node->right);
        
        // Process node, add curr value to the right most node recursively
        curr_sum+=node->val;
        node->val=curr_sum;
        
        // Go left
        if(node->left) traverse(node->left);
    }
    
    TreeNode* convertBST(TreeNode* root) {
        // if root is null return root
        if(!root) return root;
        
        // curr will store the sum of node-values higher than current node
        curr_sum=0;
        traverse(root);
        return root;
    }
};
```

**TIME COMPELXITY**
**O(n)** *[As each node is traversed exactly once]*

**SPACE COMPLEXITY**
**O(n)** *[For recursion stack]*