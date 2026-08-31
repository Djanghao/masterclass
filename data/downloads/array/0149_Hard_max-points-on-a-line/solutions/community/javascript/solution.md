# Java || C++ || JavaScript || Beats 90% || Map || O(n^2) time

**Author:** nishant7372
**Votes:** 16
**Link:** [https://leetcode.com/problems/max-points-on-a-line/solutions/3016303/](https://leetcode.com/problems/max-points-on-a-line/solutions/3016303/)

---

```java []
class Solution {
    public int maxPoints(int[][] points) {
        int max=0;
        // x -> x[0],x[1]  (x1,y1)
        for(int[] x:points)
        {
            Map<Double,Integer> map= new HashMap<>();
            // y -> y[0],y[1]  (x2,y2)
            for(int[] y:points){
                if(x==y)
                  continue;
                
                double slope=0;
                // if (x2 - x1 == 0) 
                if(y[0]-x[0]==0)
                   slope=Double.POSITIVE_INFINITY; 
                else
                   // slope = (y2 - y1) / (x2 - x1)
                   slope = (y[1]-x[1])/(double)(y[0]-x[0]);
                
                map.put(slope,map.getOrDefault(slope,0)+1);
                max=Math.max(max,map.get(slope));
            }
        }
        return max+1;
    }
}
```
```C++ []
class Solution {
public:
    int maxPoints(vector<vector<int>>& points) {
        int maxi = 0;
        // x -> x[0],x[1]  (x1,y1)
        for (auto& x : points) {
            map<double, int> slopes;
            // y -> y[0],y[1]  (x2,y2)
            for (auto& y : points) {
                if (x == y) continue;
                double slope = numeric_limits<double>::infinity();
                // if (x2 - x1 != 0)
                if (y[0] - x[0] != 0) {
                    // slope = (y2 - y1) / (x2 - x1)
                    slope = (double)(y[1] - x[1]) / (y[0] - x[0]);
                }
                ++slopes[slope];
                maxi = max(maxi, slopes[slope]);
            }
        }
        return maxi + 1;
    }
};
```
```javascript []
var maxPoints = function(points) {
  let max = 0;
    // x -> x[0],x[1]  (x1,y1)
    for (const x of points) {
      const slopes = new Map();
    // y -> y[0],y[1]  (x2,y2)
    for (const y of points) {
      if (x === y) continue;
      let slope = Infinity;
      // if (x2 - x1 != 0)
      if (y[0] - x[0] !== 0) {
        // slope = (y2 - y1) / (x2 - x1)
        slope = (y[1] - x[1]) / (y[0] - x[0]);
      }
      if (slopes.has(slope)) {
        slopes.set(slope, slopes.get(slope) + 1);
      } else {
        slopes.set(slope, 1);
      }
      max = Math.max(max, slopes.get(slope));
    }
  }
  return max + 1;
};
```