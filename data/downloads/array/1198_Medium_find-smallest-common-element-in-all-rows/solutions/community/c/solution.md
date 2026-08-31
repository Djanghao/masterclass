# count element

**Author:** a226612345
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-smallest-common-element-in-all-rows/solutions/2506499/](https://leetcode.com/problems/find-smallest-common-element-in-all-rows/solutions/2506499/)

---

class Solution {
public:
    int smallestCommonElement(vector<vector<int>>& mat) {
        
        map<int,int> m;
        for(int i=0;i<mat.size();i++)
            for(int j=0;j<mat[i].size();j++)
                ++m[mat[i][j]];
        
    for (const auto& s : m) {
        if(s.second == mat.size())
            return s.first;
    }
        return -1;
    }
};