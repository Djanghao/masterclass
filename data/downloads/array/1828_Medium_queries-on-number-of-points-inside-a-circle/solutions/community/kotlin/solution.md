# [Java / Kotlin] Points inside a circle beats 100 %

**Author:** chenon
**Votes:** 4
**Link:** [https://leetcode.com/problems/queries-on-number-of-points-inside-a-circle/solutions/1163233/](https://leetcode.com/problems/queries-on-number-of-points-inside-a-circle/solutions/1163233/)

---

The basis idea to find if a point is inside the area of a circle is  **Pythagorean theorem**.

> The point is inside the circle if the distance from it to the center is less than *radius*
>  (Xpoint - Xcenter)^2 + (Ypoint - Ycenter)^2 <= radius ^2 

`Reminder:  queries[j] = [xj, yj, rj] `
*[xj,yj]* is the center.
*rj* is the radius.

# Solutions
Time complexity: O(p*q) , p the number of points and q is the number of queries
Space complexity: O(1) , the output is O(n) but the output is not counted.

## Java
```
class Solution {
    public int[] countPoints(int[][] points, int[][] queries) {
        int len = queries.length;
        int[] ans = new int[len];
         
        for(int i=0;i<len;i++){
            int count = 0;
            int radius2 = queries[i][2] * queries[i][2];
            for(int p=0; p<points.length;p++){
                int[] point = points[p];
                if(radius2(point,queries[i]) <= radius2){
                    count += 1;
                }
            }
            ans[i] = count;
        }
        
        return ans;
    }
    
    private int radius2(int[] point, int[] center){
        int x = point[0] - center[0];
        int y = point[1] - center[1];
        return x*x + y*y;
    }
}
```

## Kotlin
```
class Solution {
    fun countPoints(points: Array<IntArray>, queries: Array<IntArray>): IntArray {
        val queriesSize = queries.size
        val ans =  IntArray(queriesSize)
        for( i in 0 until queriesSize){
            var count = 0
            val radius2 = queries[i][2] * queries[i][2]
            for(point in points){
                if(getRadius2(point, queries[i]) <= radius2){
                    count += 1
                }
            }
            ans[i] = count
        }
        
        return ans
    }
    
    fun getRadius2(point: IntArray, center: IntArray): Int {
        val x = (point[0] - center[0])
        val y = (point[1] - center[1])
        return (x*x + y*y)
    }
}
```

## Python
```
class Solution:
    def countPoints(self, points: List[List[int]], queries: List[List[int]]) -> List[int]:
        def radius2(point: List[int], center: List[int]) -> int:
            x = point[0] - center[0]
            y = point[1] - center[1]
            return x*x + y*y
    
        ans = [0 for i in range(len(queries))]
        for i, query in enumerate(queries):
            count = 0
            rad2 = queries[i][2] * queries[i][2]
            for point in points:
                if radius2(point, queries[i]) <= rad2:
                    count += 1
            ans[i] = count
        return ans
    
```