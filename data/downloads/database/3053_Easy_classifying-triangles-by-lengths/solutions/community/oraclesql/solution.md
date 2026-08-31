# CASE WHEN

**Author:** DJQTDJ
**Votes:** 1
**Link:** [https://leetcode.com/problems/classifying-triangles-by-lengths/solutions/4782664/](https://leetcode.com/problems/classifying-triangles-by-lengths/solutions/4782664/)

---

# Code
```
SELECT
    CASE 
        WHEN (A + B <= C) 
        OR (B + C <= A) 
        OR (A + C <= B) 
            THEN 'Not A Triangle' 
        WHEN (A = B AND B <> C) 
        OR (A = C AND A <> B) 
        OR (B = C AND A <> B) 
            THEN 'Isosceles' 
        WHEN (A = B AND B = C) 
            THEN 'Equilateral' 
        ELSE 'Scalene' 
        END AS triangle_type
FROM
    Triangles;

```