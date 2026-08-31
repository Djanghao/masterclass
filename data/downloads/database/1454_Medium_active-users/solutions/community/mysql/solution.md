# (^_^) Mysql Solutions: 3 easy ways + 1 RECURSIVE CTE way to solve N

**Author:** 120668385
**Votes:** 110
**Link:** [https://leetcode.com/problems/active-users/solutions/644808/](https://leetcode.com/problems/active-users/solutions/644808/)

---

Related Questions: 
1321. Restaurant Growth
601. Human Traffic of Stadium
********************************
**Choice 1(I like this one):**

```
SELECT DISTINCT l1.id,
(SELECT name FROM Accounts WHERE id = l1.id) AS name
FROM Logins l1
JOIN Logins l2 ON l1.id = l2.id AND DATEDIFF(l2.login_date, l1.login_date) BETWEEN 1 AND 4
GROUP BY l1.id, l1.login_date
HAVING COUNT(DISTINCT l2.login_date) = 4
```
_________________

**Choice 2:**

```
SELECT *
FROM Accounts
WHERE id IN
    (SELECT DISTINCT t1.id 
     FROM Logins t1 INNER JOIN Logins t2 on t1.id = t2.id AND DATEDIFF(t1.login_date, t2.login_date) BETWEEN 1 AND 4
     GROUP BY t1.id, t1.login_date
     HAVING COUNT(DISTINCT(t2.login_date)) = 4)
ORDER BY id
```

_________________

**Choice 3:**

```
WITH temp AS (SELECT l1.id, l1.login_date, COUNT(DISTINCT l2.login_date) AS cnt
FROM Logins l1
LEFT JOIN Logins l2 ON l1.id = l2.id AND DATEDIFF(l2.login_date, l1.login_date) BETWEEN 1 AND 4
GROUP BY 1,2
HAVING cnt>=4)

SELECT DISTINCT temp.id, name
FROM temp
JOIN Accounts ON temp.id = Accounts.id
ORDER BY 1;
```

_________________


**Recursive CTE solution** to solve the follow up question(just for test):

```
WITH RECURSIVE
rec_t AS
(SELECT id, login_date, 1 AS days FROM Logins 
 UNION ALL
 SELECT l.id, l.login_date, rec_t.days+1 FROM rec_t
 INNER JOIN Logins l 
 ON rec_t.id = l.id AND DATE_ADD(rec_t.login_date, INTERVAL 1 DAY) = l.login_date
)

SELECT * FROM Accounts
WHERE id IN
(SELECT DISTINCT id FROM rec_t WHERE days = 5)
ORDER BY id
```

_________________

**Explanation** for RECURSIVE CTE solution:

First, you need a recursive cte query to get the data as the following:

*-TEST CODE:*

```
WITH RECURSIVE
rec_t AS
(SELECT id, login_date, 1 AS days FROM Logins 
 UNION ALL
 SELECT l.id, l.login_date, rec_t.days+1 FROM rec_t
 INNER JOIN Logins l 
 ON rec_t.id = l.id AND DATE_ADD(rec_t.login_date, INTERVAL 1 DAY) = l.login_date
)

SELECT * FROM rec_t
```

*-RESULT:*

{"headers": 
["id", "login_date", "days"], "values": [
[7, "2020-05-30", 1], 
[1, "2020-05-30", 1], 
[7, "2020-05-31", 1], 
[7, "2020-06-01", 1], 
[7, "2020-06-02", 1], 
[7, "2020-06-02", 1], 
[7, "2020-06-03", 1], 
[1, "2020-06-07", 1], 
[7, "2020-06-10", 1],
Above rows are all the login records, which is same as the original Logins Table.  1 is what we add for recording which level it belongs to.
[7, "2020-05-31", 2], 
[7, "2020-06-01", 2], 
[7, "2020-06-02", 2], 
[7, "2020-06-02", 2], 
[7, "2020-06-03", 2], 
[7, "2020-06-03", 2], 
Above rows are those have a second day login
[7, "2020-06-01", 3], 
[7, "2020-06-02", 3], 
[7, "2020-06-02", 3], 
[7, "2020-06-03", 3], 
[7, "2020-06-03", 3], 
Above rows are those have a third day login
[7, "2020-06-02", 4], 
[7, "2020-06-02", 4], 
[7, "2020-06-03", 4], 
[7, "2020-06-03", 4], 
Above rows are those have a fourth day login
[7, "2020-06-03", 5], 
[7, "2020-06-03", 5]]}
Above rows are those have a fifth day login

Second, if your N is 5, then you add this number to your query like this:

*-TEST CODE(clear the previous one):*

```
WITH RECURSIVE
rec_t AS
(SELECT id, login_date, 1 AS days FROM Logins 
 UNION ALL
 SELECT l.id, l.login_date, rec_t.days+1 FROM rec_t
 INNER JOIN Logins l 
 ON rec_t.id = l.id AND DATE_ADD(rec_t.login_date, INTERVAL 1 DAY) = l.login_date
)

SELECT DISTINCT id FROM rect WHERE days = 5
```

*-RESULT:*

{"headers": ["id"], "values": [[7]]}

Finally,  you can get the id and name from the Accounts table:

*-TEST CODE(clear the previous one):*

```
WITH RECURSIVE
rec_t AS
(SELECT id, login_date, 1 AS days FROM Logins 
 UNION ALL
 SELECT l.id, l.login_date, rec_t.days+1 FROM rec_t
 INNER JOIN Logins l 
 ON rec_t.id = l.id AND DATE_ADD(rec_t.login_date, INTERVAL 1 DAY) = l.login_date
)

SELECT * FROM Accounts
WHERE id IN
(SELECT DISTINCT id FROM rec_t WHERE days = 5)
ORDER BY id
```

*-RESULT:*

And you will get the final result shown below (if you submit it, it may run timeout):

{"headers": ["id", "name"], "values": [[7, "Jonathan"]]}
