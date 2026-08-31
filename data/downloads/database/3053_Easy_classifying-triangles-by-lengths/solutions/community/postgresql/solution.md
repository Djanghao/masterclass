# Simple solution using CASE

**Author:** elefant1805
**Votes:** 0
**Link:** [https://leetcode.com/problems/classifying-triangles-by-lengths/solutions/5102482/](https://leetcode.com/problems/classifying-triangles-by-lengths/solutions/5102482/)

---



# Code
```
-- Write your PostgreSQL query statement below
SELECT (
    CASE 
    WHEN A = B AND B = C AND C = A AND A + B > C AND B + C > A AND A + C > B THEN 'Equilateral'
    WHEN (A = B AND B != C OR B = C AND A != B OR A = C AND C != B) AND A + B > C AND B + C > A AND A + C > B THEN 'Isosceles'
    WHEN A != B AND B != C AND A != C AND A + B > C AND B + C > A AND A + C > B THEN 'Scalene'
    ELSE 'Not A Triangle'
    END
) AS triangle_type
FROM Triangles
```