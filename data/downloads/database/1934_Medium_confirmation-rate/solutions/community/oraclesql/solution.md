# ✅ 100% EASY || FAST 🔥|| CLEAN SOLUTION 🌟

**Author:** kartik_ksk7
**Votes:** 36
**Link:** [https://leetcode.com/problems/confirmation-rate/solutions/3863062/](https://leetcode.com/problems/confirmation-rate/solutions/3863062/)

---

IF THIS WILL BE HELPFUL TO YOU, PLEASE UPVOTE !

# Code
```
/* Write your PL/SQL query statement below */
SELECT S.user_id, ROUND(AVG(CASE WHEN (C.action='confirmed') THEN 1 

ELSE 0 END),2) AS confirmation_rate FROM Signups S LEFT OUTER JOIN 

Confirmations C ON S.user_id=C.user_id GROUP BY S.user_id

```
![5kej8w.jpg](./images/0.jpeg)

