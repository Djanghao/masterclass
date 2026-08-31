# Simple and Clean!

**Author:** domthedeveloper
**Votes:** 9
**Link:** [https://leetcode.com/problems/swap-sex-of-employees/solutions/1887765/](https://leetcode.com/problems/swap-sex-of-employees/solutions/1887765/)

---

**IF (MySQL)**:
```
UPDATE salary SET sex = IF(sex = 'm', 'f', 'm')
```

**IIF (MS SQL)**:
```
UPDATE salary SET sex = IIF(sex = 'm', 'f', 'm')
```

**CASE WHEN (MySQL + MS SQL + Oracle)**:
```
UPDATE salary SET sex = CASE WHEN sex = 'm' THEN 'f' ELSE 'm' END
```