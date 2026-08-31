# 8 Line | C++

**Author:** Vhalen_G
**Votes:** 0
**Link:** [https://leetcode.com/problems/squirrel-simulation/solutions/4969338/](https://leetcode.com/problems/squirrel-simulation/solutions/4969338/)

---



# Code
```
class Solution {
public:
    int minDistance(int height, int width, vector<int>& tree, vector<int>& squirrel, vector<vector<int>>& nuts) {
        int res = INT_MAX, sum = 0;
        vector<int> toTree;
        for(auto n : nuts) {
            toTree.push_back(abs(squirrel[0] - n[0]) + abs(squirrel[1] - n[1]) + abs(tree[0] - n[0]) + abs(tree[1] - n[1]));
            sum += ((abs(tree[0] - n[0]) + abs(tree[1] - n[1])) * 2);
        }
        for(int i = 0; i < nuts.size(); i++) 
            res = min(res, sum - ((abs(tree[0] - nuts[i][0]) + abs(tree[1] - nuts[i][1])) * 2) + toTree[i]);
        return res;
    }
};
```