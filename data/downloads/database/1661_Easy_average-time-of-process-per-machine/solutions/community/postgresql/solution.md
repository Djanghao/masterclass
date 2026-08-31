# 🌟 PostgreSQL solution 🚀 With only one GROUP BY, and one aggregator function, without JOIN 🔥

**Author:** MathieuSoysal
**Votes:** 42
**Link:** [https://leetcode.com/problems/average-time-of-process-per-machine/solutions/5030025/](https://leetcode.com/problems/average-time-of-process-per-machine/solutions/5030025/)

---

# Code
```
SELECT  machine_id,
        ROUND(
            AVG(
            CASE 
                WHEN activity_type = 'start' THEN -timestamp 
                ELSE timestamp
            END)::decimal * 2 # there are two rows per process_id
            , 3) AS processing_time
FROM Activity
GROUP BY machine_id
ORDER BY machine_id ASC;
```

> This query is more concise and might execute faster because it avoids a self-join and processes the data in a single pass. It uses a CASE statement within an aggregate function (AVG) to compute the average processing time directly.
____

If it was useful don't hesitate to upvote \uD83C\uDF20 Or keep it in your favorite \uD83C\uDF1F
![Upvote invitation](./images/0.png)