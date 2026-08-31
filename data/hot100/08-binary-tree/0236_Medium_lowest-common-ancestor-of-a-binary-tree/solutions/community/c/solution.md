# [faster than 98.09%] [C++] [recursive]

**Author:** rajat_gupta_
**Votes:** 73
**Link:** [https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/solutions/777296/](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/solutions/777296/)

---


     class Solution {
     public:
         TreeNode* lowestCommonAncestor(TreeNode* root, TreeNode* p, TreeNode* q) {
             if(root==NULL) return NULL;
        
             if(root==p || root==q) return root;
        
             TreeNode* left=lowestCommonAncestor(root->left,p,q);
             TreeNode* right=lowestCommonAncestor(root->right,p,q);
        
             if(left!=NULL and right!=NULL) return root;
        
             return left!=NULL? left : right;
         }
     };
	 
**Feel free to ask any question in the comment section.**
I hope that you've found the solution useful.
In that case, **please do upvote and encourage me** to on my quest to document all leetcode problems\uD83D\uDE03
Happy Coding :)
