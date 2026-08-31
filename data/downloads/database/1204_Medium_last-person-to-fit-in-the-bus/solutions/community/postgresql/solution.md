# PostgreSQL solution beating 99.34% of users

**Author:** embosfer
**Votes:** 8
**Link:** [https://leetcode.com/problems/last-person-to-fit-in-the-bus/solutions/4957437/](https://leetcode.com/problems/last-person-to-fit-in-the-bus/solutions/4957437/)

---



# Code
```
SELECT person_name
FROM (
    SELECT person_id, 
           person_name, 
           SUM(weight) OVER (ORDER BY turn) AS cum_sum
     FROM Queue
     ORDER BY turn DESC
)
WHERE cum_sum <= 1000
LIMIT 1
```