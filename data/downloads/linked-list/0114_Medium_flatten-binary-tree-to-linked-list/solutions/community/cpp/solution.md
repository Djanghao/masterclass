# C++ solution beats 100%

**Author:** Nand0028
**Votes:** 119
**Link:** [https://leetcode.com/problems/flatten-binary-tree-to-linked-list/solutions/288414/](https://leetcode.com/problems/flatten-binary-tree-to-linked-list/solutions/288414/)

---

```
class Solution {
public:
    void flatten(TreeNode* root) {
        if( root )
        {
            /*Move the left node to the right node*/
            TreeNode* temp = root->right;
            root->right = root->left;
            root->left = nullptr;
            TreeNode* node = root;
            
            /*Move to the end of the prev left node which is the new right node*/
            while( node->right )
            {
                node = node->right;
            }
            
            /*Append the right node to its end*/
            node->right = temp;
            flatten( root->right ); 
        } 
        return;
               
    }
};
```