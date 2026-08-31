# [C++] DFS Solution - Track Only Distance

**Author:** himsingh11
**Votes:** 78
**Link:** [https://leetcode.com/problems/number-of-good-leaf-nodes-pairs/solutions/755763/](https://leetcode.com/problems/number-of-good-leaf-nodes-pairs/solutions/755763/)

---

```cpp
class Solution {
public:
    int ans = 0;
    int countPairs(TreeNode* root, int distance) {
        dfs(root, distance);
        return ans;
    }
    //Idea is to perform dfs & return a list of distances of all leaf nodes to the ancestor 
    //and let the ancestor compare the distances of all it's leaf nodes, add them to result
    vector<int> dfs(TreeNode*root, int d){
        vector<int> p = {};
        if(root == nullptr) return p;
        
        auto left = dfs(root->left, d);
        auto right = dfs(root->right, d);
        
        if(left.size() == 0 && right.size() ==0){
            p.push_back(1);
            return p;
        } 
        //Compare distance and add them to answer
        for(int i = 0; i<left.size(); i++){
            for(int j=0; j<right.size(); j++){
                if(left[i]+right[j] <=d ){
                    ans ++;
                }
            }
        }
        //Increase distance by one for all child and send them to parent
        for(int i=0; i<left.size(); i++){
            left[i]++;
            p.push_back(left[i]);
        }
          
         for(int i=0; i<right.size(); i++){
            right[i]++;
            p.push_back(right[i]);
        }
        
        return p;
    }
};
```

Time Complexity Analysis:

Assume that we are at root of a full binary tree.. then we can calculate it's time complexity easily.. let's total number of leaf nodes are L.. then left subtree will have L/2 leaves and right subtree will also have L/2 leaves. So.. as we are comparing all leaves.. it will be `O(N* L *L)`