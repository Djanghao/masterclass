# Optimized Solution (If the Table is Ordered) and General Approach

**Author:** alexander_oreshkevich
**Votes:** 0
**Link:** [https://leetcode.com/problems/shortest-distance-in-a-line/solutions/6094000/](https://leetcode.com/problems/shortest-distance-in-a-line/solutions/6094000/)

---

# Intuition
When looking for the shortest distance between points, the key observation is that the shortest distance must exist between two points that are closest on the number line. Hence, calculating distances between all possible pairs would work, but it is unnecessary if the points are sorted.

If the table is ordered (or can be ordered), the shortest distance is guaranteed to occur between consecutive points. This reduces the need for a pairwise comparison across all points, significantly improving efficiency.

---

# Approach
**1. Sorting:**

If the table is not already sorted, the points are ordered using the `ORDER BY` clause. Once sorted, the shortest distance is confined to consecutive points.

**2. Window Function:**

Use the `LAG` window function to access the value of the previous point for each row in the ordered sequence. Calculate the absolute difference `ABS` between the current point and the previous point.

**3. Filter and Aggregation:**

Exclude the first row (`LAG` returns `NULL` for the first row). Use the `MIN` function to find the smallest difference among the consecutive differences.

---
# Complexity
**Time complexity:**
- Sorting the points takes $$O(nlog(n))$$ 
- Calculating consecutive differences with a window function takes $$O(n)$$
- Finding the minimum value from $$n - 1$$ differences is $$O(n)$$
- **Overall Time Complexity:** $$O(nlog(n))$$

**Space complexity:** 
- The query uses a constant amount of space for intermediate results.
- Sorting might use additional space depending on the SQL engine.
- **Overall Space Complexity:** $$O(1)$$ or $$O(n)$$ depending on the implementation.

---
# Code
```
WITH consecutive_differences AS (
    SELECT x, ABS(x - LAG(x) OVER (ORDER BY x)) AS diff
    FROM Point
)
SELECT MIN(diff) AS shortest
FROM consecutive_differences
WHERE diff IS NOT NULL;
```
---
# General Solution (If the Table is NOT Ordered)
```
SELECT MIN(ABS(p1.x - p2.x)) AS shortest
FROM Point p1
JOIN Point p2
ON p1.x < p2.x;
```
