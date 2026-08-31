# [faster than 99.42% of C++][easy understanding]

**Author:** rajat_gupta_
**Votes:** 32
**Link:** [https://leetcode.com/problems/maximum-binary-tree/solutions/1017855/](https://leetcode.com/problems/maximum-binary-tree/solutions/1017855/)

---

**Runtime: 76 ms, faster than 99.42% of C++ online submissions
Memory Usage: 42.2 MB, less than 86.62% of C++ online submissions**
```
class Solution {
public:
    TreeNode* constructMaximumBinaryTree(vector<int>& nums) {
        return constructMaximumBinaryTree(nums,0,nums.size()-1);
    }
    TreeNode* constructMaximumBinaryTree(vector<int>& nums,int start,int end) {
        if(start>end) return nullptr;
        int index=-1;
        int val=-1;
        for(int i=start;i<=end;i++){
            if(nums[i]>val){
                index=i;
                val=nums[i];
            }
        }
        TreeNode* root=new TreeNode(val);
        root->left=constructMaximumBinaryTree(nums,start,index-1);
        root->right=constructMaximumBinaryTree(nums,index+1,end);
        return root;
    }
};
```
**Feel free to ask any question in the comment section.**
I hope that you've found the solution useful.
In that case, **please do upvote and encourage me** to on my quest to document all leetcode problems\uD83D\uDE03
Happy Coding :)
