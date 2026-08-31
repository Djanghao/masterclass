# SQL ✅ |Subquery, MAX ✅✅✅| Easy to understand

**Author:** jasurbekaktamov081
**Votes:** 313
**Link:** [https://leetcode.com/problems/biggest-single-number/solutions/3811592/](https://leetcode.com/problems/biggest-single-number/solutions/3811592/)

---

![image.png](./images/0.png)


# Code
```
SELECT MAX(num) AS num
FROM (
    SELECT num
    FROM MyNumbers
    GROUP BY num
    HAVING COUNT(num) = 1
) AS unique_numbers;

```