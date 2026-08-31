# join friends with pages and then filter out user likes

**Author:** vitocomido
**Votes:** 1
**Link:** [https://leetcode.com/problems/page-recommendations-ii/solutions/5158596/](https://leetcode.com/problems/page-recommendations-ii/solutions/5158596/)

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
-- Write your PostgreSQL query statement below

with allFriends as (
    Select 
    user1_id as user,
    user2_id as friend
    from
    Friendship
    Union
    Select
    user2_id as user,
    user1_id as friend
    from
    Friendship
)
Select
    af.user as user_id,
    page_id,
    count(distinct friend) as friends_likes
from
AllFriends af
left join Likes l on af.friend = l.user_id
where (af.user,page_id) not in (Select * from likes)
group by af.user, page_id
order by af.user, page_id

```