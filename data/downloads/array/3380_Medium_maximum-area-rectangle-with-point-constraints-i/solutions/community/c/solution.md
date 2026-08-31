# Easy to understand | Bruteforce | T.C. O(n^2) | S.C. O(1)

**Author:** Aman786
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-area-rectangle-with-point-constraints-i/solutions/6135983/](https://leetcode.com/problems/maximum-area-rectangle-with-point-constraints-i/solutions/6135983/)

---

```
class Solution {
public:
    
    bool validate(int startInd, int endInd, int lowerLim, int upperLim, vector<vector<int>> &arr){
        if(endInd<startInd) return true;
        
        for(int i=startInd; i<=endInd; i++){
            if(arr[i][1] >= lowerLim and arr[i][1] <= upperLim)
                return false;
        }
        return true;
    }
    
    
    int maxRectangleArea(vector<vector<int>>& arr) {
        
        sort(arr.begin(),arr.end());
        int maxArea = -1;
        for(int i=0; i<arr.size()-3; i++){
            
            // 1st point
            int point1X = arr[i][0];
            int point1Y = arr[i][1];
            
            // 2nd point 
            int point2X = arr[i+1][0];
            int point2Y = arr[i+1][1];
            if(point1X!=point2X) continue;
            
            for(int j=i+2; j<arr.size()-1; j++){
                // 3rd point
                int point3X = arr[j][0];
                int point3Y = arr[j][1];
                
                // 4th point
                int point4X = arr[j+1][0];
                int point4Y = arr[j+1][1];
                
                if(point3X!=point4X) continue;
                
                if(point1Y==point3Y and point2Y==point4Y && validate(i+2,j-1,point1Y,point2Y,arr)){
                    maxArea = max(maxArea, (point3X-point1X)*(point2Y-point1Y));
                }
            }
            
        }
        return maxArea;
    }
};
```