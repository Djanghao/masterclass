# Java | JavaScript | TypeScript | C++ | C# | Kotlin Solution.

**Author:** LachezarTsK
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-rectangles-to-cover-points/solutions/5022197/](https://leetcode.com/problems/minimum-rectangles-to-cover-points/solutions/5022197/)

---

```Java []
import java.util.Arrays;

public class Solution {

    public int minRectanglesToCoverPoints(int[][] points, int maxDistanceBewteenPointsAt_x_axis) {
        Arrays.sort(points, (x, y) -> x[0] - y[0]);
        int countRectangles = 0;
        int index = 0;

        while (index < points.length) {
            int x = points[index][0];
            while (index < points.length && points[index][0] - x <= maxDistanceBewteenPointsAt_x_axis) {
                ++index;
            }
            ++countRectangles;
        }
        return countRectangles;
    }
}
```
```JavaScript []
/**
 * @param {number[][]} points
 * @param {number} maxDistanceBewteenPointsAt_x_axis
 * @return {number}
 */
var minRectanglesToCoverPoints = function (points, maxDistanceBewteenPointsAt_x_axis) {
    points.sort((x, y) => x[0] - y[0]);
    let countRectangles = 0;
    let index = 0;

    while (index < points.length) {
        let x = points[index][0];
        while (index < points.length && points[index][0] - x <= maxDistanceBewteenPointsAt_x_axis) {
            ++index;
        }
        ++countRectangles;
    }
    return countRectangles;
};
```
```TypeScript []
function minRectanglesToCoverPoints(points: number[][], maxDistanceBewteenPointsAt_x_axis: number): number {
    points.sort((x, y) => x[0] - y[0]);
    let countRectangles = 0;
    let index = 0;

    while (index < points.length) {
        let x = points[index][0];
        while (index < points.length && points[index][0] - x <= maxDistanceBewteenPointsAt_x_axis) {
            ++index;
        }
        ++countRectangles;
    }
    return countRectangles;
};
```
```C++ []
#include <ranges>
#include <vector>
using namespace std;

class Solution {

public:
    int minRectanglesToCoverPoints(vector<vector<int>>& points, int maxDistanceBewteenPointsAt_x_axis) const {
        ranges::sort(points);
        int countRectangles = 0;
        int index = 0;

        while (index < points.size()) {
            int x = points[index][0];
            while (index < points.size() && points[index][0] - x <= maxDistanceBewteenPointsAt_x_axis) {
                ++index;
            }
            ++countRectangles;
        }
        return countRectangles;
    }
};
```
```C# []
using System;

public class Solution
{
    public int MinRectanglesToCoverPoints(int[][] points, int maxDistanceBewteenPointsAt_x_axis)
    {
        Array.Sort(points, (x, y) => x[0] - y[0]);
        int countRectangles = 0;
        int index = 0;

        while (index < points.Length)
        {
            int x = points[index][0];
            while (index < points.Length && points[index][0] - x <= maxDistanceBewteenPointsAt_x_axis)
            {
                ++index;
            }
            ++countRectangles;
        }
        return countRectangles;
    }
}
```
```Kotlin []
class Solution {
    fun minRectanglesToCoverPoints(points: Array<IntArray>, maxDistanceBewteenPointsAt_x_axis: Int): Int {
        points.sortWith { x, y -> x[0] - y[0] };
        var countRectangles = 0;
        var index = 0;

        while (index < points.size) {
            val x = points[index][0];
            while (index < points.size && points[index][0] - x <= maxDistanceBewteenPointsAt_x_axis) {
                ++index;
            }
            ++countRectangles;
        }
        return countRectangles;
    }
}
```