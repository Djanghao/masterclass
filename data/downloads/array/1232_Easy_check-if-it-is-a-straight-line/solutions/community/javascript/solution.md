# Short JavaScript solution using Mathematics with O(1) space and O(n) time complexity

**Author:** Go1dExperience
**Votes:** 10
**Link:** [https://leetcode.com/problems/check-if-it-is-a-straight-line/solutions/1378842/](https://leetcode.com/problems/check-if-it-is-a-straight-line/solutions/1378842/)

---

Using mathematics, we can sketch a line that will always cross the first and second point in the list of coordinates, then simply check if the rest of the points also lie on that line:
```
var checkStraightLine = function(coordinates) {
    let a = -(coordinates[1][1] - coordinates[0][1]);
    let b = coordinates[1][0] - coordinates[0][0];
    return coordinates.every(
        item =>
            a * (item[0] - coordinates[0][0]) +
                b * (item[1] - coordinates[0][1]) ===
            0
    );
};
```
For a and b we are calculating a vector that is perpendicular to the above mentioned line, then the equation for the line is ``` a*( x - x0 ) + b*( y- y0 ) = 0 ```, with x0 and y0 being the first or second point in the list of coordinates. **Array.every()** returns true if a condition is true with **every single member** of the array.