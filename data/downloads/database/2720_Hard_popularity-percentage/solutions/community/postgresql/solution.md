# simple and effective, beats 99%

**Author:** _jhowlett_
**Votes:** 0
**Link:** [https://leetcode.com/problems/popularity-percentage/solutions/5983446/](https://leetcode.com/problems/popularity-percentage/solutions/5983446/)

---

![image.png](./images/0.png)

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
find how many distinct friends each user first

# Approach
<!-- Describe your approach to solving the problem. -->
create an array of distinct userids that indicate friendships not including themselves, then use window function to calculate popularity percentage

# Code
```postgresql []
-- Write your PostgreSQL query statement below
with users as (
    select
        distinct user1 as userid
    from friends
    union 
    select
        distinct user2 as userid
    from friends
)

select
    userid as user1,
    round(100 * num_friends::decimal / total_friends, 2) as percentage_popularity
from (
    select
        userid,
        array_length(array_agg(distinct case when userid = user1 then user2 else user1 end),1) as num_friends,
        count(*) over () as total_friends
    from friends
    left join users on users.userid in (friends.user1, friends.user2)
    group by userid
) a
order by user1
```