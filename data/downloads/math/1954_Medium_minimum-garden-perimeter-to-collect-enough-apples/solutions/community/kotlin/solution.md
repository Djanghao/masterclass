# Kotlin fast solution

**Author:** fran
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-garden-perimeter-to-collect-enough-apples/solutions/2463873/](https://leetcode.com/problems/minimum-garden-perimeter-to-collect-enough-apples/solutions/2463873/)

---

This solution iterate for each perimeter until apples count reach what are needed.

Perimeter is calculated using Gauss method on all numbers in half of perimeter, then multiply it by 8 and discount them the corner and axis that are only repeated 4 times instead of 8.

For a perimeter of size 5 this is the square:
```
4 3 2 3 4
3       3
2       2
3       3
4 3 2 3 4
```
Corners and axis is repeated 4 times, the rest 8 times

Zoom in a side we can see that 2,3,4 is and interval between i and i*2 - 2

perimeter sum is this interval by 8 minus corners and axis.

The sum of the interval can be calculated using Gauss:
``
3+4+5+6 is equal to 1+2+3+4+5+6-1-2
1+2+3+4+5+6 by Guass is 6*7/2
1+2 by Gauss is 2*3/2
``
so each half side is: ``(i * 2 - 2)*(i * 2 - 1) shr 1) - ((i-2)*(i-1) shr 1)``
Note that instead of divide by 2 i use a bitshift that it's faster.

```
class Solution {
    fun minimumPerimeter(neededApples: Long): Long {
        fun applesInPerimeter(i: Long): Long {
            var sum = ((i * 2 - 2)*(i * 2 - 1) shr 1) - ((i-2)*(i-1) shr 1)
            sum *= 8
            return sum - (i-1) * 4 - (i * 2 - 2) * 4
        } 
        
        if (neededApples == 0L) return 0
        
        var applesSoFar = 0L
        var perimeter = 1L
        
        while (applesSoFar < neededApples) {
            applesSoFar += applesInPerimeter(perimeter)
            perimeter++
        }
        
        return (perimeter - 2) * 8 
    }
} 
```