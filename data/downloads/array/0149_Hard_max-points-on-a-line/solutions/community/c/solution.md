# ✅ Simple C++ solution | 2 Approaches | Brute force as well using using hashmap | 16ms

**Author:** HustlerNitin
**Votes:** 45
**Link:** [https://leetcode.com/problems/max-points-on-a-line/solutions/1739295/](https://leetcode.com/problems/max-points-on-a-line/solutions/1739295/)

---

**1.Brute force Approach:**
Time complexity : O(n^3)
**Runtime : 8ms**
![image](./images/0.png)

```
class Solution{
public :
    
    int maxPoints(vector<vector<int>>& points) 
    {
        if(points.size()<=2) return points.size();
        int res=0;
        int n=points.size();
        for(int i=0;i<n;i++){

            for(int j=i+1;j<n;j++){

                int x1 = points[i][0];
                int x2 = points[j][0];
                int y1 = points[i][1];
                int y2 = points[j][1];    

                // double slope = double(y2 - y1)/double(x2 - x1);
                int total=2;
                for(int k=0;k<n && k!=i && k!=j;k++){
                    
                    int x = points[k][0];
                    int y = points[k][1];
                    // third point
                    // double(y - y1)/double(x1 - x1)
                    if((y2 - y1)*(x - x1) == (x2 - x1)*(y - y1))
                        total++;
                }
                res = max(res, total);
            }
        }
        return res;
    }
};
```

**2. using hashmap**
Time Complexity : O(n^2)
**Runtime : 20ms**
![image](./images/1.png)

```
class Solution {
public:
    
    // According to constraint we are allowed with maximum time complexity of O(n^3)
    // 1 <= points.length <= 300
    ///////   All the points are unique.
    int maxPoints(vector<vector<int>>& points) {
        
        if(points.size()<=2) return points.size(); // only two points are always on the same line, beacuse using 2 points
                                                    // line is made
        int res = 0;
        for(int i = 0; i < points.size(); i++)
        {
            unordered_map<double, int> mp;
            int duplicate = 0;
            double slope = 0.0;
            for(int j = 0; j < points.size(); j++)
            {
                int x1 = points[i][0];
                int x2 = points[j][0];
                int y1 = points[i][1];
                int y2 = points[j][1];    
                
                // slope = dy/dx.
                int dy = y2 - y1;
                int dx = x2 - x1;
                if(dy == 0 && dx == 0){  // same overlapping point --> consider 2 same point as single point
                    duplicate++; 
                    continue;
                }
                
                if(dx != 0)
                    slope = dy*1.0/dx; // store in double
                else // dx==0 means slope is infinity
                    slope = INT_MAX;
                
                mp[slope]++;
            }

            if(mp.size() == 0)
                res = duplicate;
            else
            {
                for(auto slope : mp){
                    
                    res = max(res, slope.second + duplicate);
                }
            }
        }
        return res;
    }
};
```

**if you like my approach please don't forget to hit upvote button ! : )**
\uD83D\uDE07\uD83D\uDE07\uD83D\uDE07