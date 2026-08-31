# PostGreSQL solution with a single CASE with OR statement

**Author:** bothell_mm
**Votes:** 1
**Link:** [https://leetcode.com/problems/evaluate-boolean-expression/solutions/5731317/](https://leetcode.com/problems/evaluate-boolean-expression/solutions/5731317/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Join the Expressions table with Variables on the left and right side.
Then compare the values as per the operand

# Approach
<!-- Describe your approach to solving the problem. -->
Double join both on left and right
Use a case statement with each CASE as per the operand or, use the OR condition in a single CASE as shown.


# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```postgresql []
-- Write your PostgreSQL query statement below


SELECT
    LV.name as left_operand
    ,E.operator
    ,RV.name as right_operand
    ,CASE 
        WHEN ((E.operator = '=' AND LV.value = RV.value) 
            OR (E.operator = '<' AND LV.value < RV.value)
            OR (E.operator = '>' AND LV.value > RV.value))
        THEN 'true'
        ELSE 'false' END as value
FROM Expressions E
    INNER JOIN Variables LV
    ON E.left_operand = LV.name
    INNER JOIN Variables RV
    ON E.right_operand  = RV.name
```