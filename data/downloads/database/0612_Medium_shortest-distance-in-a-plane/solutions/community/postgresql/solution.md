# Beat 100%, No CTE, simple maths

**Author:** cko22
**Votes:** 0
**Link:** [https://leetcode.com/problems/shortest-distance-in-a-plane/solutions/5707391/](https://leetcode.com/problems/shortest-distance-in-a-plane/solutions/5707391/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```postgresql []
-- Write your PostgreSQL query statement below
SELECT
    ROUND(MIN(SQRT((p.x1 - p.x2)*(p.x1 - p.x2) + (p.y1 - p.y2)*(p.y1 - p.y2)))::numeric,2) AS shortest
FROM
    (SELECT
        p1.x as x1,
        p2.x as x2,
        p1.y as y1,
        p2.y as y2
    FROM
        Point2D p1
    CROSS JOIN
        Point2D p2
    WHERE
        p1.x = p2.x AND p1.y != p2.y 
        OR p1.x != p2.x AND p1.y = p2.y 
        OR p1.x != p2.x AND p1.y != p2.y
        ) AS p

```