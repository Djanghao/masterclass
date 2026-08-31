# 16 ms C++ solution

**Author:** samoshka
**Votes:** 111
**Link:** [https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/solutions/35242/](https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/solutions/35242/)

---


    class Solution {
        TreeNode* sortedArrayToBST(vector<int>& nums, int start, int end){
            if(end<=start) return NULL; 
            int midIdx=(end+start)/2;
            TreeNode* root=new TreeNode(nums[midIdx]);
            root->left=sortedArrayToBST(nums, start, midIdx);
            root->right=sortedArrayToBST(nums, midIdx+1,end);
            return root;
        }
    public:
        TreeNode* sortedArrayToBST(vector<int>& nums) {
            return sortedArrayToBST(nums, 0,nums.size());
        }
    };