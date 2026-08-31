# Easiest JavaScript Solution With More Optimization

**Author:** RockstarPabitra
**Votes:** 4
**Link:** [https://leetcode.com/problems/self-crossing/solutions/3490803/](https://leetcode.com/problems/self-crossing/solutions/3490803/)

---

```
Please Give An Up-Vote If This Solution Helps You !!!
```

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The given code implements a solution to check whether a given set of points (represented as an array) form a self-crossing polygon or not.

# Approach
<!-- Describe your approach to solving the problem. -->
The approach used in the code is to traverse the points array and check if any line segments intersect with any previous line segments. The code starts by checking if the number of points is greater than 3, which is the minimum required to form a self-crossing polygon. If the number of points is less than or equal to 3, the code returns false indicating that no self-crossing is possible.

The code then traverses the points array and checks if the points are spiraling outward or inward. It maintains an index 'i' which is initialized to 2, and then moves forward until the points are no longer spiraling outward. If the points are no longer spiraling outward, the code checks if they are spiraling inward. If they are, it checks if the current line segment intersects with any of the previous line segments. If it does, the code returns true indicating that a self-crossing has occurred. Otherwise, it continues to traverse the points array until the end and returns false indicating that no self-crossing has occurred.


# Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
- The code traverses the entire points array once, which takes `O(n)` time where n is the number of points in the array.

- The code checks if the points are spiraling outward, which can take up to n-2 iterations in the worst case. Therefore, the time complexity of this operation is `O(n)`.

- The code then checks if the points are spiraling inward, which can take up to n-4 iterations in the worst case. Therefore, the time complexity of this operation is also `O(n)`.

- Finally, the code checks if the current line segment intersects with any of the previous line segments, which takes constant time.

Therefore, the overall time complexity of the code is `O(n)`.

# Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
The code uses a single variable 'i' to maintain the index of the current point, which takes constant space.

Therefore, the space complexity of the code is `O(1)`.

# Mind It
Therefore, both the time and space complexity of the code are constant with respect to the number of points.

# JavaScript Code
```
/**
 * @param {number[]} distance
 * @return {boolean}
 */
var isSelfCrossing = function(x) {
    if (x.length <= 3) {
            return false;
        }
        let i = 2;
        // keep spiraling outward
        while (i < x.length && x[i] > x[i - 2]) {
            i++;
        }
        if (i >= x.length) {
            return false;
        }
        // transition from spiraling outward to spiraling inward
        if ((i >= 4 && x[i] >= x[i - 2] - x[i - 4]) ||
                (i == 3 && x[i] == x[i - 2])) {
            x[i - 1] -= x[i - 3];
        }
        i++;
        // keep spiraling inward
        while (i < x.length) {
            if (x[i] >= x[i - 2]) {
                return true;
            }
            i++;
        }
        return false;
};
```