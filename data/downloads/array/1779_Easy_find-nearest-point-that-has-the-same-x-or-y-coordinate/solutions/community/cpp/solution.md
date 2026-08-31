# [C++] Easy solution || 100% Time || 100% Space

**Author:** _A_Man
**Votes:** 14
**Link:** [https://leetcode.com/problems/find-nearest-point-that-has-the-same-x-or-y-coordinate/solutions/1097674/](https://leetcode.com/problems/find-nearest-point-that-has-the-same-x-or-y-coordinate/solutions/1097674/)

---

Simple solution in `O(n)` complexity.

**C++**
```
class Solution {
public:
    int nearestValidPoint(int x, int y, vector<vector<int>>& points) {
        int pos = -1;
        int ans = INT_MAX;
        
        for(int i=0; i<points.size(); i++){
            if(points[i][0] == x or points[i][1] == y){
                int dist = abs(x-points[i][0]) + abs(y-points[i][1]);
                if(dist < ans){
                    pos = i;
                    ans = dist;
                }
            }   
        }
       return pos;
    }
};
```