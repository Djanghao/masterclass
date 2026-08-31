# Using a matrix to store points.

**Author:** astubbs50
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-area-rectangle-with-point-constraints-i/solutions/6126542/](https://leetcode.com/problems/maximum-area-rectangle-with-point-constraints-i/solutions/6126542/)

---

# Intuition
Using a matrix to store all points and search in a clockwise direction to generate rects. Then loop through all the rects to check if the points are in the rect.

# Code
```javascript []
/**
 * @param {number[][]} points
 * @return {number}
 */
var maxRectangleArea = function(points) {
    const X = 101;
    const Y = 101;
    const matrix = [];
    for (let y = 0; y < Y; y += 1) {
        matrix.push([]);
        for(let x = 0; x < X; x += 1) {
            matrix[y].push(null);
        }
    }

    for (let i = 0; i < points.length; i += 1) {
        const x = points[i][0];
        const y = points[i][1];
        matrix[y][x] = points[i];
    }

    const rects = [];
    points.forEach(point1 => {
        const x1 = point1[0];
        const y1 = point1[1];

        // Search the points to the right
        const y2 = y1;
        for (let x2 = x1 + 1; x2 < X; x2 += 1) {

            // Is a Top Right
            if (matrix[y2][x2] !== null) {

                const point2 = matrix[y2][x2];

                // Find Bottom-Right Corner
                const x3 = x2;
                for (let y3 = y2 + 1; y3 < Y; y3 += 1) {
                    if (matrix[y3][x3] !== null) {
                        
                        const point3 = matrix[y3][x3];

                        // Find Bottom-Left Corner
                        const y4 = y3;
                        for (let x4 = x3 - 1; x4 >= 0; x4 -= 1) {
                            if (matrix[y4][x4] !== null) {
                                const point4 = matrix[y4][x4];
                                rects.push([point1, point2, point3, point4]);
                            }
                        } // Find Bottom-Left
                    }
                } // Find Bottom-Right
            }
        } // Search Right
    });

    let max = -1;
    rects.forEach(rect => {
        const x1 = Math.min(rect[0][0], rect[1][0], rect[2][0], rect[3][0]);
        const x2 = Math.max(rect[0][0], rect[1][0], rect[2][0], rect[3][0]);
        const y1 = Math.min(rect[0][1], rect[1][1], rect[2][1], rect[3][1]);
        const y2 = Math.max(rect[0][1], rect[1][1], rect[2][1], rect[3][1]);

        let isValid = true;
        points.forEach(point => {
            if (rect.indexOf(point) === -1) {
                const x = point[0];
                const y = point[1];
                if (x >= x1 && x <= x2 && y >= y1 && y <= y2) {
                    isValid = false;
                }
            }
        });
        if (isValid) {
            max = Math.max((x2 - x1) * (y2 - y1), max);
        }
    });
    
    return max;
};

```