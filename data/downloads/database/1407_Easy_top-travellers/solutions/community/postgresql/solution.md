# A Simple Solution

**Author:** your8god
**Votes:** 5
**Link:** [https://leetcode.com/problems/top-travellers/solutions/5201444/](https://leetcode.com/problems/top-travellers/solutions/5201444/)

---



# MySQL
```
SELECT
    name,
    COALESCE(SUM(distance), 0) travelled_distance
FROM Users LEFT JOIN Rides ON Users.id = user_id
GROUP BY Users.id
ORDER BY 2 DESC, 1;
```

# PostgreSQL
```
SELECT
    name,
    COALESCE(SUM(distance), 0) travelled_distance
FROM Users LEFT JOIN Rides ON Users.id = user_id
GROUP BY Users.id, name
ORDER BY 2 DESC, 1;
```