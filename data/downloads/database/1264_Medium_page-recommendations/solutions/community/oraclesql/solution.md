# No Subquery | No distinct keyword | Easy to understand solution

**Author:** minabeshay
**Votes:** 1
**Link:** [https://leetcode.com/problems/page-recommendations/solutions/1700988/](https://leetcode.com/problems/page-recommendations/solutions/1700988/)

---

```
with all_friendship as (
select user1_id , user2_id from friendship
    union all
select user2_id, user1_id from friendship
)
select a.page_id as recommended_page from likes a inner join all_friendship b on b.user2_id = a.user_id 
where b.user1_id = 1
minus 
select page_id from likes where user_id=1
```