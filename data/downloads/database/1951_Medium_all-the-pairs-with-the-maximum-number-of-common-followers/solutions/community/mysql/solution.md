# ✅faster than 93.21%: easy solution with cte and self-join

**Author:** bec1122
**Votes:** 4
**Link:** [https://leetcode.com/problems/all-the-pairs-with-the-maximum-number-of-common-followers/solutions/2014962/](https://leetcode.com/problems/all-the-pairs-with-the-maximum-number-of-common-followers/solutions/2014962/)

---

```
with t1 as (select r1.user_id as user1_id, r2.user_id as user2_id, count(*) as ct
from relations r1 join relations r2
on r1.follower_id = r2.follower_id and r1.user_id < r2.user_id
group by 1,2)

select user1_id, user2_id from t1
where ct = (select max(ct) from t1)