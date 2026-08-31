# C++ 2 Simple and Concise Solutions, 4 Lines

**Author:** YehudisK
**Votes:** 31
**Link:** [https://leetcode.com/problems/convert-1d-array-into-2d-array/solutions/1503079/](https://leetcode.com/problems/convert-1d-array-into-2d-array/solutions/1503079/)

---

**Solution I:**
```
class Solution {
public:
    vector<vector<int>> construct2DArray(vector<int>& original, int m, int n) {
        if (m * n != original.size()) return {};
        
        vector<vector<int>> res;
        for (int i = 0; i < m*n; i+=n)
            res.push_back(vector<int>(original.begin()+i, original.begin()+i+n));
            
        return res;
    }
};
```
****
**Solution II:** For some reason, this is much faster than the first solution
```
class Solution {
public:
    vector<vector<int>> construct2DArray(vector<int>& original, int m, int n) {
        if (m * n != original.size()) return {};
        
        vector<vector<int>> res;
        for (int i = 0; i < m*n;) {
            vector<int> tmp;
            for (int j = 0; j < n; j++) tmp.push_back(original[i++]);
            res.push_back(tmp);
        }

        return res;
    }
};
```
**Like it? please upvote!**