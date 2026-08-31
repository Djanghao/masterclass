# c++ , postorder, get no of children and sum of their values, find avg

**Author:** goelrishabh5
**Votes:** 13
**Link:** [https://leetcode.com/problems/maximum-average-subtree/solutions/334153/](https://leetcode.com/problems/maximum-average-subtree/solutions/334153/)

---

```
class Solution {
    
    vector<int> util(TreeNode* root, double &ans){        
    if(root!=NULL){
        vector<int> dp1 = util(root->left, ans);
        vector<int> dp2 = util(root->right, ans);
        double avg = ((double)(dp1[0]+dp2[0]+root->val))/((double)(1+dp1[1]+dp2[1]));
        ans = max(avg, ans); 
        return {dp1[0]+dp2[0]+root->val,1+dp1[1]+dp2[1]}; 
    }
    return {0,0};
}
    
public:
    double maximumAverageSubtree(TreeNode* root) {
        double res=0;
        util(root,res);
        return res;
    }
};
```