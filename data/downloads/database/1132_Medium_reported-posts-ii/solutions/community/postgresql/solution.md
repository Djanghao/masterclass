# Simple and straightforward solution. Wording of question confusing

**Author:** little_explorer
**Votes:** 0
**Link:** [https://leetcode.com/problems/reported-posts-ii/solutions/5866176/](https://leetcode.com/problems/reported-posts-ii/solutions/5866176/)

---

# Intuition
The solution itself is straightforward:
Calculate the daily removal percentages;
Take an average of them. 

The question confused me because it mentioned that the `actions`    table might have duplicate rows. I thus looked for them and only kept the first date when the same post_id was reported as a spam. However, I learned that this was unnecessary because the test cases didn't care when the same post_id was reported on several different days. 

# Approach
See query

# Complexity
- Time complexity:
O(N)

- Space complexity:
O(N)

# Code
```postgresql []
-- Write your PostgreSQL query statement below

select round(avg(daily_removal_rate), 2) as average_daily_percent from 
(
     select a.action_date, count(distinct r.post_id) * 100.0/ count(distinct a.post_id) as daily_removal_rate
        from (
        select * from actions where action = 'report' and extra = 'spam'
        ) a left join removals r
        on a.post_id = r.post_id
        group by 1
) dr;
```