# Clean implementation using LEFT JOIN, GROUP BY, CAST, ROUND

**Author:** younus_baig
**Votes:** 25
**Link:** [https://leetcode.com/problems/confirmation-rate/solutions/3558663/](https://leetcode.com/problems/confirmation-rate/solutions/3558663/)

---

Honestly, this problem took a lot of my time searching the right commands and implementing them. Follow along to understand what I learned during implementation! 

# Code
``` MS_SQL []
SELECT              s.user_id,
ROUND(CAST(COUNT(CASE WHEN action = 'confirmed' THEN 1 ELSE NULL END) AS FLOAT) / COUNT(*), 2) as confirmation_rate
FROM                Signups s
LEFT JOIN     Confirmations c
ON                  s.user_id = c.user_id
GROUP BY            s.user_id
```
# Approach

1. Since we need **all the values including NULL**, we have to use a `LEFT JOIN` with all values from Signups table.
2. For the purpose of finding `COUNT`, we have to group the id. Therefore, we use a `GROUP BY on s.user_id`.
3. To find the required **confirmation rate**, divide the rows with `action = 'confirmed'` by all the rows for the grouped s.user_id.
4. To find the rows with a given value, we use 
`COUNT(CASE WHEN <condition> THEN x ELSE y END)`
5. Do not use `ELSE 0`. COUNT returns the count of rows with a value and '0' is a value. So the output will be nothing but **COUNT(*)**. 
6. The `output of INT / INT is INT`. Therefore, we have to cast/convert one of the value to a FLOAT/DECIMAL/NUMERIC. We do that using 
`CAST(val as FLOAT)`
7. Finally, round the value to 2 decimal places using
`ROUND(val, 2)`

##### I like checking out other approaches, drop in your approach for me and others to refer!