# [MySQL + MS SQL + Oracle] LEFT JOIN + GROUP BY + SUM

**Author:** domthedeveloper
**Votes:** 8
**Link:** [https://leetcode.com/problems/top-travellers/solutions/1985787/](https://leetcode.com/problems/top-travellers/solutions/1985787/)

---

**[MySQL] IFNULL**:
```
SELECT name,IFNULL(SUM(distance),0) AS travelled_distance
FROM Users U 
LEFT JOIN rides R ON U.id=R.user_id 
GROUP BY R.user_id
ORDER BY travelled_distance DESC, name ASC
```

**[MS SQL] ISNULL**:
```
SELECT name,ISNULL(SUM(distance),0) AS travelled_distance
FROM Users U 
LEFT JOIN rides R ON U.id=R.user_id 
GROUP BY R.user_id, name
ORDER BY travelled_distance DESC, name ASC
```

**[MySQL + MS SQL + Oracle] COALESCE**:
```
SELECT name,COALESCE(SUM(distance),0) AS travelled_distance
FROM Users U 
LEFT JOIN rides R ON U.id=R.user_id 
GROUP BY R.user_id, name
ORDER BY travelled_distance DESC, name ASC
```