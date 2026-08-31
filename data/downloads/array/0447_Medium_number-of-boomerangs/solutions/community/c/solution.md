# C++ || Brute Force || O(n^2) Solution

**Author:** Anonymous_Kumar
**Votes:** 7
**Link:** [https://leetcode.com/problems/number-of-boomerangs/solutions/749826/](https://leetcode.com/problems/number-of-boomerangs/solutions/749826/)

---

***Runtime: 768 ms, faster than 75.40% of C++ online submissions for Number of Boomerangs.
Memory Usage: 85.4 MB, less than 92.59% of C++ online submissions for Number of Boomerangs..***
```
class Solution {
public:
    int numberOfBoomerangs(vector<vector<int>>& p) {
        int result = 0;
        unordered_map<int, int> umap;
        for(int i=0; i<p.size() ; i++){
            for(int j=0 ; j<p.size() ; j++){
                int d = pow(p[j][1] - p[i][1], 2) + pow(p[j][0] - p[i][0], 2);
                result += 2 * umap[d]++;
            }
            umap.clear();
        }
        return result;
    }
    
};
```