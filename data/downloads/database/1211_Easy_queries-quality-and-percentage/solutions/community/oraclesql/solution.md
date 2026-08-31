# ✅ 100% EASY || FAST 🔥|| CLEAN SOLUTION 🌟

**Author:** kartik_ksk7
**Votes:** 22
**Link:** [https://leetcode.com/problems/queries-quality-and-percentage/solutions/3871160/](https://leetcode.com/problems/queries-quality-and-percentage/solutions/3871160/)

---

IF THIS WILL BE HELPFUL TO YOU, PLEASE UPVOTE !
# Code
```
SELECT query_name, ROUND(AVG((rating) / position), 2)  quality,

ROUND(AVG(CASE WHEN rating < 3 THEN 1 ELSE 0 END) * 100, 2)

poor_query_percentage FROM Queries  GROUP BY query_name

```
![5kej8w.jpg](./images/0.jpeg)
