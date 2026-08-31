# C++ short map/multiset solution; clarifying output order.

**Author:** IgorB
**Votes:** 37
**Link:** [https://leetcode.com/problems/vertical-order-traversal-of-a-binary-tree/solutions/515268/](https://leetcode.com/problems/vertical-order-traversal-of-a-binary-tree/solutions/515268/)

---

Carifying output order:
output is sorted by ```X```; 
all ```elements``` with the same ```X``` are grouped together;
grouped together ```elements``` are sorted by ```Y``` (closest to root first);
If ```elements``` have the same ```Y``` - they are sorted by ```value``` (accending).

```
class Solution {
    public:
        vector<vector<int>> verticalTraversal(TreeNode* root) 
        {
            map<int, multiset<pair<int, int>>> mp; // [x][y, val]
            traverse(root, 0, 0, mp);
            vector<vector<int>> res;
            for(auto& [x, st] : mp)
            {
                res.push_back({});
                for(auto& [y, val] : st) res.back().push_back(val);
            }
            return res;
        }
        
    protected:
        void traverse(TreeNode* node, int x, int y,  map<int, multiset<pair<int, int>>>& mp)
        {
            if(!node) return;
            mp[x].insert({y, node->val});
            traverse(node->left, x-1, y+1, mp);
            traverse(node->right, x+1, y+1, mp);
        }
};
```