# The only solution that makes sense | O(n^3) | JS & TS

**Author:** deleted_user
**Votes:** 0
**Link:** [https://leetcode.com/problems/largest-triangle-area/solutions/4962608/](https://leetcode.com/problems/largest-triangle-area/solutions/4962608/)

---

# Intuition
To find the area of the largest triangle formed by any three points in the given array, we need to consider all possible combinations of three points and calculate the area of the triangle formed by each combination. The largest area among all these triangles will be the answer.

# Approach
1. Define a helper function **area** to calculate the area of a triangle formed by three points.
2. Initialize a variable **maxArea** to store the maximum area found.
3. Iterate through all combinations of three points using three nested loops.
4. For each combination of points, calculate the area of the triangle formed by them using the **area** function and update **maxArea** if the calculated **area** is greater.
5. Return **maxArea** as the result.

# Complexity
- Time complexity: $$O(n^3)$$ where **n** is the number of points.
- Space complexity: $$O(1)$$ constant space.


# Code
```TypeScript []
function largestTriangleArea(points: number[][]): number {
    function area(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number) {
        return 0.5 * Math.abs(x1 * (y2 - y3) + x2 * (y3 - y1) + x3 * (y1 - y2));
    }

    let maxArea = 0;
    for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
            for (let k = j + 1; k < points.length; k++) {
                const [x1, y1] = points[i];
                const [x2, y2] = points[j];
                const [x3, y3] = points[k];
                maxArea = Math.max(maxArea, area(x1, y1, x2, y2, x3, y3));
            }
        }
    }

    return maxArea;
};
```
```JavaScript []
function largestTriangleArea(points) {
    function area(x1, y1, x2, y2, x3, y3) {
        return 0.5 * Math.abs(x1 * (y2 - y3) + x2 * (y3 - y1) + x3 * (y1 - y2));
    }

    let maxArea = 0;
    for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
            for (let k = j + 1; k < points.length; k++) {
                const [x1, y1] = points[i];
                const [x2, y2] = points[j];
                const [x3, y3] = points[k];
                maxArea = Math.max(maxArea, area(x1, y1, x2, y2, x3, y3));
            }
        }
    }

    return maxArea;
};
```

