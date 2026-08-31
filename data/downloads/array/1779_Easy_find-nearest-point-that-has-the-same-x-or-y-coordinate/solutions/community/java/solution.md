# Simple for Beginners Java Approach

**Author:** jainshubham766
**Votes:** 48
**Link:** [https://leetcode.com/problems/find-nearest-point-that-has-the-same-x-or-y-coordinate/solutions/1859878/](https://leetcode.com/problems/find-nearest-point-that-has-the-same-x-or-y-coordinate/solutions/1859878/)

---

##### Q & A
##### Q1: Why have you initialized index with -1 and not 0?
##### 
##### A1: Make the code more general. e.g., If no point has the same x or y coordinate, then we can still detect it by the return value. Otherwise, if the return value is 0, we would NOT know whether the point at index 0 is the solution or not.

```
class Solution {
    public int nearestValidPoint(int x, int y, int[][] points) {
        int min=Integer.MAX_VALUE, index=-1, i;
        
        for ( i=0;i<points.length;i++){
            if (x==points[i][0] ||  y==points[i][1]){
                 int d = Math.abs(x - points[i][0]) + Math.abs(y - points[i][1]);
                if (d<min){
                    min=d;
                    index=i;
                }
            }
            
        }
        // if ( min== Integer.MAX_VALUE) return -1; --> no longer needed as index is initialized as -1 in the declartion.
        return  index;
        
    }
}
```

Please Upvote if it help :) (it boost my confidence!)