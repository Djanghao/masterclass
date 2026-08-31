# Visualized c++ code (Well Explained)

**Author:** harshghlt25
**Votes:** 69
**Link:** [https://leetcode.com/problems/balance-a-binary-search-tree/solutions/821240/](https://leetcode.com/problems/balance-a-binary-search-tree/solutions/821240/)

---

```
	Example:  [1,null,2,null,3,null,4,null,null]
	
	1. 	Create a vector Inorder to store the nodes. 
	
	2. 	Traverse the tree in such a way that the nodes stored in the vector are in ascending order i.e. Inorder Traversal. 
								Inorder: [ 1, 2, 3, 4 ]
								
	3. 	Then use this vector of nodes to find the root node of the balanced BST.
	
	4. 	The newRoot node will be mid element of the array;
								newRoot= Inorder[mid]=2
								
	5. Then recursively add the mid of first half to the left of the tree.
								newRoot->left=1
								
	6. And the mid of second half to the right of the tree.
								newRoot->right=3
								
```
**Code** 
```
/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */
class Solution {
public:
    vector<TreeNode*> inorder;
    void findInorder(TreeNode* root)
    {
        if(root==NULL)
            return;
        findInorder(root->left);
        inorder.push_back(root);
        findInorder(root->right);
    }
    TreeNode* buildTree(int start,int end)
    {
        if(start>end)
            return NULL;
        int mid=(start+end)/2;
        TreeNode* root=inorder[mid];
        root->left=buildTree(start,mid-1);
        root->right=buildTree(mid+1,end);
        return root;
    }
    TreeNode* balanceBST(TreeNode* root) 
    {
        if(root==NULL)
            return NULL;
        findInorder(root);
        int n=inorder.size();
        root=buildTree(0,n-1);
        return root;
    }
};
```
**Please Upvote if you find it useful.**