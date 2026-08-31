# [MySQL] JOIN

**Author:** ye15
**Votes:** 5
**Link:** [https://leetcode.com/problems/evaluate-boolean-expression/solutions/1071720/](https://leetcode.com/problems/evaluate-boolean-expression/solutions/1071720/)

---

with CTE
```
WITH temp AS (
    SELECT 
        left_operand, 
        v0.value AS left_value, 
        operator, 
        right_operand, 
        v1.value AS right_value
    FROM 
        Expressions e
        LEFT JOIN Variables v0 ON e.left_operand = v0.name
        LEFT JOIN Variables v1 ON e.right_operand = v1.name
)
SELECT 
    left_operand, 
    operator, 
    right_operand, 
    CASE WHEN operator = ">" THEN IF(left_value > right_value, "true", "false")
         WHEN operator = "<" THEN IF(left_value < right_value, "true", "false")
         WHEN operator = "=" THEN IF(left_value = right_value, "true", "false")
    END AS value
FROM temp 
```

without CTE
```
SELECT 
    left_operand, 
    operator, 
    right_operand, 
    CASE WHEN operator = ">" AND v0.value > v1.value THEN "true"
         WHEN operator = "<" AND v0.value < v1.value THEN "true"
         WHEN operator = "=" AND v0.value = v1.value THEN "true"
    ELSE "false" END AS value 
FROM 
    Expressions e
    LEFT JOIN Variables v0 ON e.left_operand = v0.name 
    LEFT JOIN Variables v1 ON e.right_operand = v1.name 
```