# Maximum Area Rectangle With Point Constraints I - Simple Java Solution | Beats 100%

**Author:** Royal4365
**Votes:** 3
**Link:** [https://leetcode.com/problems/maximum-area-rectangle-with-point-constraints-i/solutions/6124577/](https://leetcode.com/problems/maximum-area-rectangle-with-point-constraints-i/solutions/6124577/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The problem requires us to find the maximum area of a rectangle that can be formed using four points from a given set, where the rectangle's edges must be parallel to the axes and no point should lie inside or on the rectangle.

We can identify valid rectangles by:

1. Using two points as diagonal corners and checking if the other two corners exist.
2. Ensuring no other points lie inside the rectangle, which is automatically guaranteed if the rectangle is formed by axis-aligned edges and the diagonal points exist in the set.

# Approach
<!-- Describe your approach to solving the problem. -->
1. Store Points in a Set: Use a HashSet to store points for constant time lookups.
2. Iterate Over Point Pairs: Select pairs of points to be diagonal corners of the rectangle. For each pair, check if the other two corners also exist in the set.
3. Rectangle Validation: Ensure that no points lie inside or on the boundary of the rectangle.
4. Max Area Calculation: Calculate the area of each valid rectangle and track the maximum area.

# Complexity
### Time complexity: 
-  Iterating over all pairs of points: $$O(n^2)$$
- Validating points inside the rectangle: $$(O(n))$$
- Total = $$(O(n^2))$$ * $$(O(n))$$ = $$(O(n^3))$$
where n is number of points.

### Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
- $$O(n)$$ for storing the points in the HashSet, where n is the number of points.

# Code
```java []
class Solution {
    public int maxRectangleArea(int[][] points) {
        // Step 1: Store points in a HashSet for fast lookup
        HashSet<String> pointSet = new HashSet<>();
        int n = points.length;

        for (int i = 0; i < n; i++) {
            pointSet.add(points[i][0] + "," + points[i][1]);
        }

        long maxArea = -1;

        // Step 2: Check all pairs of points to form rectangles
        for (int i = 0; i < n; i++) {
            for (int j = i + 1; j < n; j++) {
                int x1 = points[i][0], y1 = points[i][1];
                int x2 = points[j][0], y2 = points[j][1];

                // Step 3: Ensure the points are diagonally opposite
                if (x1 != x2 && y1 != y2) {
                    // Step 4: Check if the other two corners exist
                    if (pointSet.contains(x1 + "," + y2) && pointSet.contains(x2 + "," + y1)) {
                        // Calculate the area of the rectangle
                        long area = (long) Math.abs(x2 - x1) * Math.abs(y2 - y1);

                        // Step 5: Ensure that no other points lie inside the rectangle
                        boolean validRectangle = true;
                        for (int k = 0; k < n; k++) {
                            int x = points[k][0], y = points[k][1];

                            // Skip the four corners of the rectangle
                            if ((x == x1 || x == x2) && (y == y1 || y == y2)) {
                                continue;
                            }

                            // Check if the point lies inside the rectangle
                            if (x > Math.min(x1, x2) && x < Math.max(x1, x2) && y > Math.min(y1, y2) && y < Math.max(y1, y2)) {
                                validRectangle = false;
                                break;
                            }

                            // Ensure no points lie on the edges of the rectangle
                            if ((x == x1 || x == x2) && (y >= Math.min(y1, y2) && y <= Math.max(y1, y2))) {
                                validRectangle = false;
                                break;
                            }
                            if ((y == y1 || y == y2) && (x >= Math.min(x1, x2) && x <= Math.max(x1, x2))) {
                                validRectangle = false;
                                break;
                            }
                        }
                        if (validRectangle) {
                            maxArea = Math.max(maxArea, area);
                        }
                    }
                }
            }
        }
        return (int) maxArea;
    }
}


```