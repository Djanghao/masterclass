# EASY SOLUTION FOR PostgreSQL BEATS 96.69%

**Author:** sirojxolturaev36
**Votes:** 3
**Link:** [https://leetcode.com/problems/swap-sex-of-employees/solutions/5377468/](https://leetcode.com/problems/swap-sex-of-employees/solutions/5377468/)

---



# Code
```
UPDATE Salary
SET sex = CASE
WHEN sex = 'm' THEN 'f'
WHEN sex = 'f' THEN 'm'
END;
```