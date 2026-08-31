# Easy solution with Count and Distinct.

**Author:** VishalSarvagod
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-followers-count/solutions/5594146/](https://leetcode.com/problems/find-followers-count/solutions/5594146/)

---


# Code
```
-- Write your PostgreSQL query statement below

select user_id, count(distinct follower_id) as followers_count from followers group by user_id;
```

![upvote.jpeg](./images/0.jpeg)
