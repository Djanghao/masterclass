# Beats 100% | Easy Java Solution

**Author:** Ikapoor123
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-rectangles-to-cover-points/solutions/5017124/](https://leetcode.com/problems/minimum-rectangles-to-cover-points/solutions/5017124/)

---



# Code
```
class Solution {
    public int minRectanglesToCoverPoints(int[][] points, int w) {
        Arrays.sort(points, (a,b)->a[0]-b[0]);
        int ans = 0;
        for(int i=0;i<points.length;i++){
            int j=i+1;
           
            for( j=i+1;j<points.length;j++){
                if(points[j][0]-points[i][0]<=w)    continue;
                else break;
            }
            ans++;
            i=j-1;
        }
        return ans;
        
    }
}
```