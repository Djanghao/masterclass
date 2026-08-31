# ✅ 100% EASY || FAST 🔥|| CLEAN SOLUTION 🌟

**Author:** kartik_ksk7
**Votes:** 18
**Link:** [https://leetcode.com/problems/percentage-of-users-attended-a-contest/solutions/3871144/](https://leetcode.com/problems/percentage-of-users-attended-a-contest/solutions/3871144/)

---


IF THIS WILL BE HELPFUL TO YOU, PLEASE UPVOTE !
# Code
```
/* Write your PL/SQL query statement below */
SELECT contest_id, ROUND(COUNT(R.contest_id) * 100 / (SELECT COUNT(*) 

FROM Users), 2)  percentage  FROM  Register R  GROUP BY contest_id 

ORDER BY percentage DESC, contest_id

```
![5kej8w.jpg](./images/0.jpeg)
