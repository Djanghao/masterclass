# SUBQUERRY and LISTAGG

**Author:** iliyas1903
**Votes:** 0
**Link:** [https://leetcode.com/problems/build-the-equation/solutions/6101184/](https://leetcode.com/problems/build-the-equation/solutions/6101184/)

---




SELECT 
        LISTAGG (cte_expr.expr, '') WITHIN GROUP
        (ORDER BY cte_expr.power DESC) || '=0' AS equation
FROM (
        SELECT 
            cte.power AS power,
            cte.num,
            CASE 
                WHEN cte.power=0 THEN cte.sign || cte.num
                WHEN cte.power=1 THEN cte.sign || cte.num || 'X'
                WHEN cte.power>1 THEN cte.sign || cte.num || 'X^' || cte.power 
            END AS expr 
        FROM (
        SELECT 
                power,
                abs(factor) AS num,
                CASE 
                    WHEN factor >= 0 THEN '+'
                    ELSE '-' 
                END AS sign
        FROM terms 
) cte 
) cte_expr
```