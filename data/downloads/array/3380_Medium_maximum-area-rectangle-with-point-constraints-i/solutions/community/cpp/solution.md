# Easy Brute Force Solution

**Author:** rajvir_singh
**Votes:** 9
**Link:** [https://leetcode.com/problems/maximum-area-rectangle-with-point-constraints-i/solutions/6124533/](https://leetcode.com/problems/maximum-area-rectangle-with-point-constraints-i/solutions/6124533/)

---

# Complexity
- Time complexity: O(n^4 * log(4) + n^5)

- Space complexity: O(1)

# Code
```cpp []
class Solution {
public:
    int findArea(vector<vector<int>> &points){
        vector<int> bl, tl, br, tr;
        bl = points[0], tl = points[1];
        br = points[2], tr = points[3];
    
        if(bl[0] != tl[0] || br[0] != tr[0]) return -1;
        if(bl[1] != br[1] || tl[1] != tr[1]) return -1;
        return (abs(bl[0]-br[0])) * (abs(tl[1]-bl[1]));
    }
    bool hasBetweenPoints(vector<vector<int>> &points, vector<vector<int>> &vals){
        vector<int> bl, tl, br, tr;
        bl = vals[0], tl = vals[1];
        br = vals[2], tr = vals[3];
        
        for(vector<int> it: points){
            if(it == bl || it == tl || it == br || it == tr) continue;
            int x = it[0], y = it[1];
            if(x >= bl[0] && x <= br[0] && y >= bl[1] && y <= tl[1]){
                return true;
            }
        }
        return false;
    }
public:
    int maxRectangleArea(vector<vector<int>>& points) {
        int ans = -1;
        int n = points.size();
        if(n < 4) return ans;
        for(int i = 0; i < n; i++){
            for(int j = i+1; j < n; j++){
                for(int k = j+1; k < n; k++){
                    for(int l = k+1; l < n; l++){
                        vector<vector<int>> vals = {points[i], points[j], points[k], points[l]};
                        sort(vals.begin(), vals.end());
                        int area = findArea(vals);
                        if(area == -1) continue;
                        if(hasBetweenPoints(points, vals)) continue;
                        ans = max(ans, area);
                    }
                }
            }
        }
        return ans;
    }
};
```