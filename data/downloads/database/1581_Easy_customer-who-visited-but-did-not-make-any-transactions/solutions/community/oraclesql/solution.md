# ✅ 100% EASY || FAST 🔥|| CLEAN 2️⃣ SOLUTION 🌟

**Author:** kartik_ksk7
**Votes:** 86
**Link:** [https://leetcode.com/problems/customer-who-visited-but-did-not-make-any-transactions/solutions/3862015/](https://leetcode.com/problems/customer-who-visited-but-did-not-make-any-transactions/solutions/3862015/)

---

IF THIS WILL BE HELPFUL TO YOU, PLEASE UPVOTE !
# Code
```
/* Write your PL/SQL query statement below */
SELECT  customer_id, count(*) AS count_no_trans FROM Visits 
 
WHERE visit_id NOT IN (SELECT visit_id FROM Transactions ) 

GROUP BY customer_id
```
![5kej8w.jpg](./images/0.jpeg)
