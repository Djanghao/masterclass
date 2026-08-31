# Kotlin, O(n) commented solution using HashSet

**Author:** glukharev
**Votes:** 2
**Link:** [https://leetcode.com/problems/line-reflection/solutions/965629/](https://leetcode.com/problems/line-reflection/solutions/965629/)

---

```
class Solution {
    fun isReflected(points: Array<IntArray>): Boolean {
        // Min and Max value of X coord of our points (left and right borders)
        var min = Int.MAX_VALUE
        var max = Int.MIN_VALUE
        
        // This set we need to store coordinates of each point. We need HashSet to be able to access in O(1) time
        val pointsSet = HashSet<Long>()
        
        for(point in points) {
            // calculate min and max X values
            min = Math.min(min, point[0])
            max = Math.max(max, point[0])
            
            // store each point to set
            val encodedCoord = coordsToLong(point[0], point[1])
            pointsSet.add(encodedCoord)
        }
        
        // let's find the center of the reflect line (or X coord)
        val centerlinePositionX : Float = (min + max) / 2.0f
        
        // traverse the list of points. Check that each point has reflected via the centerline (linePositionX) on the opposite point 
        for(point in points) {
            val pointX = point[0].toFloat()
            val pointY = point[1]
            
            // if current point is greater (located righter) of centerline position
            val isPointOnRightSide = pointX > centerlinePositionX
            
            // calculate coordinates of opposite point
            val oppositePointX = if(isPointOnRightSide) {
                // distance from current point to center point
                val distanceToCenterline = pointX - centerlinePositionX 
                // X coords of opposit point position
                centerlinePositionX - distanceToCenterline
            }
            else {
                // distance from current point to center point
                 val distanceToCenterline = centerlinePositionX - pointX  
                centerlinePositionX + distanceToCenterline
            }
            val oppositePointY : Int = pointY
            
            // get encoded Long from coods of opposite point
            val oppositePointEndodedCoords = coordsToLong(oppositePointX.toInt(), oppositePointY)
            
            // if there is no such point in the Set means that there is no such line
            if(!pointsSet.contains(oppositePointEndodedCoords)) {
                return false
            }
        }
        
        return true
    }
    
    // encode two Int coords in one Long value
    private fun coordsToLong(x : Int, y : Int) : Long =
        x.toLong().shl(32).or( y.toLong() )
}
```