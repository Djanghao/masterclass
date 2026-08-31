# C++ O(N) solution Using Monotonic Stack with intution

**Author:** __Phoenix
**Votes:** 37
**Link:** [https://leetcode.com/problems/maximum-binary-tree/solutions/1317713/](https://leetcode.com/problems/maximum-binary-tree/solutions/1317713/)

---

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
    TreeNode* constructMaximumBinaryTree(vector<int>& nums) {
        stack<TreeNode*> st; //monotonic stack (decreasing)
        //int this que we need to work seperately on the left side of max element and on the right side of maxElement
        //so we required a data structure that give us this functionality that while going from left to right if there is any max element between left and right then
        //we can separate them
        //here monotonic Stack can help us if we will put element in decreasing order then 
        //if any max element comes then we will pop the element from stack untill stackTop is less than max element and we will make
		//(stack max element) (which is last poped max element)  to the left child of maxelement         
        //if lesser element comes then we will make it right child of stackTOp
        
        for(int i=0;i<nums.size();i++){
            TreeNode* curr=new TreeNode(nums[i]);
            while(st.size() && st.top()->val<nums[i]){
                curr->left=st.top();
                st.pop();
            }
            if(st.size()){
                st.top()->right=curr;
            }
            st.push(curr);
        }
        while(st.size()!=1) st.pop();   
        return st.top();  //maximum element will be our root
    }
};
```