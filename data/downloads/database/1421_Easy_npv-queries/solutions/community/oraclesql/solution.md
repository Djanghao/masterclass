# Oracle - NVL, LEFT JOIN

**Author:** alphageee
**Votes:** 0
**Link:** [https://leetcode.com/problems/npv-queries/solutions/1818503/](https://leetcode.com/problems/npv-queries/solutions/1818503/)

---

SELECT 
    Q.ID,
    Q.YEAR,
    NVL(N.NPV,0) AS NPV
FROM
    QUERIES Q
LEFT JOIN 
    NPV N
ON
    Q.YEAR = N.YEAR
AND 
    Q.ID = N.ID;