# 🔥 DOT 🔥 CROSS 🔥 BRUTEFORCE 🔥

**Author:** distructfruct
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-area-rectangle-ii/solutions/5496664/](https://leetcode.com/problems/minimum-area-rectangle-ii/solutions/5496664/)

---


# Code
```
class Solution {
public:
    double minAreaFreeRect(vector<vector<int>>& points) 
    {
        double res = 1e9;
        int n = points.size();
        set<pair<int, int>> st;

        for(int i = 0; i < n; i++) st.insert({points[i][0], points[i][1]});

        for(int i = 0; i < n; i++)
        {
            for(int j = 0; j < n; j++)
            {   
                if(i == j) continue;
                
                for(int k = 0; k < n; k++)
                {
                    if(j == k || i == k) continue;

                    // IF DOT PROD EQUAL ZERO => VECTORS PERPENDICULAR
                    int dot = (points[j][0] - points[i][0]) * (points[k][0] - points[i][0]) + 
                    (points[j][1] - points[i][1]) * (points[k][1] - points[i][1]); 
                    
                    if(dot != 0) continue;

                    // MAKE THE VIRTUAL FOURTH POINT
                    pair<int, int> sum = {points[j][0] + points[k][0] - points[i][0], 
                    points[j][1] + points[k][1] - points[i][1]};
                    
                    //CHECK IF THE FOURTH POINT EXIST
                    if(st.find(sum) != st.end())
                    {
                        // CROSS PROD OF TWO VECTORS EQUALS THE AREA OF RECTANGLE
                        int cross = (points[j][0] - points[i][0]) * (points[k][1] - points[i][1]) - 
                        (points[j][1] - points[i][1]) * (points[k][0] - points[i][0]);

                        res = min(res, abs(double(cross)));
                    }               
                }
            }
        }
        return res == 1e9 ? 0 : res;
    }
};
```