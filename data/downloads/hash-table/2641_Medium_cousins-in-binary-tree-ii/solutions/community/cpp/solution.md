# Simple BFS & tracking sum of child || Very simple & easy to understand

**Author:** kreakEmp
**Votes:** 130
**Link:** [https://leetcode.com/problems/cousins-in-binary-tree-ii/solutions/3420099/](https://leetcode.com/problems/cousins-in-binary-tree-ii/solutions/3420099/)

---

<b>Please Up Vote if you like the solution
```
/*
1. Run BFS 
2. While traversing take the sum of the child nodes & also keep storing the node in a buffer
3. After each stage of the BFS, traverse the buf & update the node with value sum - (child's sum)
*/

TreeNode* replaceValueInTree(TreeNode* root) {
    root->val = 0;
    queue<TreeNode*> q;  q.push(root);
    while(!q.empty()){
        int n = q.size(), sum = 0;
        vector<TreeNode*> buf;
        while(n--){
            TreeNode* node = q.front(); q.pop();
            buf.push_back(node);
            if(node->left) { q.push(node->left); sum += node->left->val; }
            if(node->right){ q.push(node->right); sum += node->right->val; }
        }
        for(auto node: buf){
            int  t = sum;
            if(node->left)  t -= node->left->val;
            if(node->right) t -= node->right->val;
            if(node->left)  node->left->val = t;
            if(node->right) node->right->val = t;
        }
    }
    return root;
}
```

Here is an article of my recent interview experience - A Journey to FAANG Company, I recomand you to go through this to know which all resources I have used & how I cracked interview at Amazon:
https://leetcode.com/discuss/interview-experience/3171859/Journey-to-a-FAANG-Company-Amazon-or-SDE2-(L5)-or-Bangalore-or-Oct-2022-Accepted