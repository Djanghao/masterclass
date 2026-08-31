# Iterative approach with comments

**Author:** benottoman
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/solutions/5581862/](https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/solutions/5581862/)

---

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
import 'dart:math';

extension on List<int> {
  int get start => this[0];
  int get end => this[1];
}

// Note: The [points] are really intervals, so I will refer to them as such.
class Solution {
  int findMinArrowShots(List<List<int>> points) {
    points.sort((a, b) => a.start.compareTo(b.start));
    
    // The most shots we would have to take is 1 for each balloon
    int arrowShots = points.length;
    List<int> prevPoint = points.first;
    
    for (int i = 1; i < points.length; i++) {
      final [currStart, currEnd] = points[i];

      // Our [prevPoint] interval comes completely before the current interval.
      // So we update the [prevPoint] interval to be the current interval and continue.
      // This will not modify [arrowShots].
      if (prevPoint.end < currStart) {
        prevPoint = points[i];
      } 
      // Our intervals overlap meaning we need one less arrow shot.
      // We update the [prevPoint] interval to it's minimum extent.
      // Essentially this means that [prevPoint.end] will be the last point at
      // which 1 arrow shot will pop both of the overlapping balloons.
      // Since we can pop two balloons with 1 arrow we decrement [arrowShots].
      //  
      //  Example:
      //  points = [[1,6],[2,8],[7,12],[10,16]]
      //                          \u21E1
      //                          \u21E1               \u2022-----------------------\u2022
      //                          \u21E1   \u2022-------------------\u2022
      //          \u2022-----------------------\u2022
      //                          \u21E1
      //      \u2022-------------------\u2022
      //  |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |
      //  0       2       4       6       8       10      12      14      16
      //                          \u21E1
      //          \u2022---prevPoint---\u2022
      //                          \u21E1
      //                          \u21E1  
      //                Pops two ballons at this point.
      //
      // This is [prevPoint] after the SECOND iteration.
      // Setting the [end] point to the min of the two overlapping intervals ensures
      // that when we check the next iteration i.e. [7,12] it either comes completely
      // after the [prevInterval] or overlaps BOTH of the intervals that make up the [prevPoint].             
      else {
        arrowShots--;
        prevPoint = [currStart, min(prevPoint.end, currEnd)];
      }
    }

    return arrowShots;
  }
}
```