# Connect by to create date range and then find week and days

**Author:** avinash2196
**Votes:** 0
**Link:** [https://leetcode.com/problems/friday-purchases-ii/solutions/5860938/](https://leetcode.com/problems/friday-purchases-ii/solutions/5860938/)

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
```oraclesql []
/* Write your PL/SQL query statement below */

WITH DATES AS (
                select date '2023-11-01' + level - 1 dt
                from   dual
                connect by level <= (date '2023-11-30' - date '2023-11-01' + 1)
               ),
WEEK_DAY AS (
                select  to_char(A.DT,'YYYY-MM-DD') AS P_DATE,
                        to_char(A.DT,'W') AS P_WEEK,
                        TO_CHAR(DT,'DY') AS P_DAY,
                        NVL(B.AMOUNT_SPEND,0) AS AMOUNT
                from DATES A LEFT JOIN PURCHASES B
                    ON B.PURCHASE_DATE=A.DT
                WHERE TO_CHAR(DT,'DY') = 'FRI'
                ORDER BY 1
            )
SELECT  DISTINCT TO_NUMBER(P_WEEK) AS WEEK_OF_MONTH,
        P_DATE AS PURCHASE_DATE,
        SUM(AMOUNT) OVER (PARTITION BY P_WEEK) AS TOTAL_AMOUNT
FROM WEEK_DAY            
ORDER BY P_WEEK
```