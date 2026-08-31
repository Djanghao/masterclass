# Faster than 100% | C++ | DFS | Easy to Understand

**Author:** zia_123
**Votes:** 49
**Link:** [https://leetcode.com/problems/sum-of-left-leaves/solutions/1147089/](https://leetcode.com/problems/sum-of-left-leaves/solutions/1147089/)

---

**Please upvote if you find this helpful**
```
class Solution {
public:
    int sum=0;
    int traverse(TreeNode* root,bool val)
    {
        if(root==NULL)
        {
            return sum;
        }
        traverse(root->left,true);
        traverse(root->right,false);
        if(root->left==NULL && root->right==NULL && val==true)
        {
            sum=sum+root->val;
        }
        return sum;
    }
    int sumOfLeftLeaves(TreeNode* root) {
        bool flag=false;
        traverse(root,flag);
        return sum;
    }
};
//When we traverse to the left side make the flag value true and right side make the flag value false and witht the if condition check if it is leaf node and also check if flag value is true to make sure it is from left side and initially pass the value as false so that root node is not accounted in sum this is an edge case
```
