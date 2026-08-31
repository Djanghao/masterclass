# 👍 Solution Using JOIN + Filtering

**Author:** vadlamudinaveen999
**Votes:** 4
**Link:** [https://leetcode.com/problems/form-a-chemical-bond/solutions/2850891/](https://leetcode.com/problems/form-a-chemical-bond/solutions/2850891/)

---

```
# Code Author Naveen Kumar Vadlamudi
# The idea here is to filter the records and then perform a cross product.

SELECT M.SYMBOL AS METAL, NM.SYMBOL AS NONMETAL
FROM 
( SELECT SYMBOL FROM ELEMENTS AS E WHERE E.TYPE = 'Metal' ) AS M ,
( SELECT SYMBOL FROM ELEMENTS AS E  WHERE E.TYPE = 'Nonmetal' ) AS NM 


```