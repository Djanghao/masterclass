# [Kotlin, Python3] My solution with time O(N) and space O(1)

**Author:** hj-core
**Votes:** 3
**Link:** [https://leetcode.com/problems/check-if-it-is-a-straight-line/solutions/3599165/](https://leetcode.com/problems/check-if-it-is-a-straight-line/solutions/3599165/)

---

The idea is to use the line formed by the first two points to examine all the points in `coordinates`. If all points lie on the line, they can make a straight line and we return true; otherwise, we return false. Try to avoid comparing Doubles due to potential precision issues, and be cautious of special cases involving vertical or horizontal lines. Additionally, since we are performing multiplication, we should check whether type Int can hold the values.

Below is my solution in kotlin,
```
class Solution {
    /* Complexity:
     * Time O(N) and Space O(1) where N is the size of coordinates;
     */
    fun checkStraightLine(coordinates: Array<IntArray>): Boolean {
        val point1 = coordinates[0]
        val point2 = coordinates[1]
        return coordinates.all { point -> isStraightLine(point1, point2, point) }
    }

    private fun isStraightLine(point1: IntArray, point2: IntArray, point3: IntArray): Boolean {
        val (x1, y1) = point1
        val (x2, y2) = point2
        val (x3, y3) = point3
        return (x2 - x1) * (y3 - y1) == (y2 - y1) * (x3 - x1)
    }
}
```
And the solution in python 3,
```
class Solution:
    def checkStraightLine(self, coordinates: list[list[int]]) -> bool:
        point1 = coordinates[0]
        point2 = coordinates[1]
        for point in coordinates:
            if not self.is_straight_line(point1, point2, point):
                return False
        return True

    def is_straight_line(self, point1: list[int], point2: list[int], point3: list[int]) -> bool:
        (x1, y1) = point1
        (x2, y2) = point2
        (x3, y3) = point3
        return (x2 - x1) * (y3 - y1) == (y2 - y1) * (x3 - x1)
```