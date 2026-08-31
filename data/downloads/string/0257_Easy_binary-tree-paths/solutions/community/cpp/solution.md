# [C++] Using recursion {Short and easy to understand}

**Author:** shubhambhatt__
**Votes:** 113
**Link:** [https://leetcode.com/problems/binary-tree-paths/solutions/671194/](https://leetcode.com/problems/binary-tree-paths/solutions/671194/)

---

***Pls upvote if you find this helpful  :)***
The basic idea is to traverse the tree keeping the path in the string **curr** and when you find a leaf then substituting curr in the answer.We need vector **answer** to be same in all the calls in the call stack, therefore we use address operator while we need separate curr for each step,hence not using address operator.
```
class Solution {
public:
    void helper(TreeNode* root,vector<string>& answer,string curr){
        if(!root)return;
        if(root->left||root->right)curr+=(to_string(root->val)+"->");
        else{
            curr+=(to_string(root->val));
            answer.push_back(curr);
        }
        helper(root->left,answer,curr);
        helper(root->right,answer,curr);  
    }
    vector<string> binaryTreePaths(TreeNode* root) {
        vector<string> answer;
        string curr="";
        helper(root,answer,curr);
        return answer;
    }
};
```