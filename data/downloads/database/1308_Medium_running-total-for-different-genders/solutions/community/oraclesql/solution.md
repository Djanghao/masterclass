# Should Not be a Medium Question

**Author:** utleetcode
**Votes:** 1
**Link:** [https://leetcode.com/problems/running-total-for-different-genders/solutions/1628004/](https://leetcode.com/problems/running-total-for-different-genders/solutions/1628004/)

---

```
SELECT DISTINCT GENDER, TO_CHAR(DAY,'YYYY-MM-DD') AS DAY , SUM(SCORE_POINTS) OVER(PARTITION BY GENDER ORDER BY DAY ASC) AS TOTAL
FROM SCORES
ORDER BY GENDER, DAY;
```