# Don't complicate- Just use range between

**Author:** ksivasai
**Votes:** 2
**Link:** [https://leetcode.com/problems/find-bursty-behavior/solutions/5549494/](https://leetcode.com/problems/find-bursty-behavior/solutions/5549494/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
WITH CTE AS (
        Select *, count(*) over(partition by user_id)/4 as avg_weekly_posts
        from Posts
        where post_date between '2024-02-01' and '2024-02-28'
),

CTE2 AS (
    Select *, count(post_id) over(partition by user_id order by post_date range between interval 6 day preceding and current row) as max_7day_posts 
    from CTE
)



select distinct user_id , max(max_7day_posts) as max_7day_posts , avg_weekly_posts 
from CTE2
where max_7day_posts >=2*avg_weekly_posts 
group by 1
order by 1
```