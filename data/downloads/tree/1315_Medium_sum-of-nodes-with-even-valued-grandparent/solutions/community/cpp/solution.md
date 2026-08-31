# [c++][easy understanding][faster than 99.77% ]

**Author:** rajat_gupta_
**Votes:** 82
**Link:** [https://leetcode.com/problems/sum-of-nodes-with-even-valued-grandparent/solutions/1017710/](https://leetcode.com/problems/sum-of-nodes-with-even-valued-grandparent/solutions/1017710/)

---

**Runtime: 32 ms, faster than 99.77% of C++ online submissions**
**Memory Usage: 38 MB, less than 99.53% of C++ online submissions**
```
class Solution {
public:
    int sumEvenGrandparent(TreeNode* root) {
	
        if(root==NULL) 
		     return 0;
        
        int sum=0;
        
		//check node with even-valued grandparent add grandchildren value in sum if exist
		
        if(root->val%2==0){
            if(root->left!=NULL && root->left->left!=NULL)
                sum+=root->left->left->val;
            if(root->left!=NULL && root->left->right!=NULL)
                sum+=root->left->right->val;
            if(root->right!=NULL && root->right->right!=NULL)
                sum+=root->right->right->val;
            if(root->right!=NULL && root->right->left!=NULL)
                sum+=root->right->left->val;
        }
		
		//dfs
        sum+=sumEvenGrandparent(root->left); 
        sum+=sumEvenGrandparent(root->right); 
		
        return sum;
    }
};
```
**Feel free to ask any question in the comment section.**
I hope that you've found the solution useful.
In that case, **please do upvote and encourage me** to on my quest to document all leetcode problems\uD83D\uDE03
Happy Coding :)
