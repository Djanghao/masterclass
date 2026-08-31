# ✅ 100% EASY || FAST 🔥|| CLEAN SOLUTION 🌟

**Author:** kartik_ksk7
**Votes:** 14
**Link:** [https://leetcode.com/problems/sales-person/solutions/3839728/](https://leetcode.com/problems/sales-person/solutions/3839728/)

---

IF THIS WILL BE HELPFUL TO YOU, PLEASE UPVOTE !
# Code
```
/* Write your PL/SQL query statement below */
SELECT name FROM SalesPerson  WHERE name NOT IN (SELECT S.name FROM

SalesPerson S, Company C,Orders O WHERE S.sales_id = O.sales_id 

AND C.com_id = O.com_id AND C.name='RED')
```
![5kej8w.jpg](./images/0.jpeg)
