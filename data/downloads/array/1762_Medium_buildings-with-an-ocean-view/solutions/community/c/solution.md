# C++ 0ms Scanning from End

**Author:** vwo50
**Votes:** 3
**Link:** [https://leetcode.com/problems/buildings-with-an-ocean-view/solutions/1072960/](https://leetcode.com/problems/buildings-with-an-ocean-view/solutions/1072960/)

---

```
class Solution {
public:
    vector<int> findBuildings(vector<int>& heights) {
        int localMax = -1;
        
        vector<int> res; int n = heights.size();
        
        for (int i = n - 1; i >= 0; i--) {
            if (heights[i] > localMax) {
                localMax = heights[i]; 
                res.push_back(i);
            }
        }
        
        reverse(res.begin(), res.end());
        
        return res;
    }
};
```