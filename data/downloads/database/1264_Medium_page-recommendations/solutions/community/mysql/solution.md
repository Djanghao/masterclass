# Simple MySQL Solution | Easy to understand | Faster than 99%

**Author:** deb_dutta_
**Votes:** 8
**Link:** [https://leetcode.com/problems/page-recommendations/solutions/1963528/](https://leetcode.com/problems/page-recommendations/solutions/1963528/)

---

```
select distinct page_id as recommended_page
from likes
where page_id NOT IN (select page_id from likes where user_id = 1)
and user_id IN 
(
 select user1_id from friendship where user2_id = 1
 UNION
 select user2_id from friendship where user1_id = 1
)
```