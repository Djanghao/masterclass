# Oracle | Easy Solution

**Author:** TK-X
**Votes:** 0
**Link:** [https://leetcode.com/problems/reported-posts/solutions/2137367/](https://leetcode.com/problems/reported-posts/solutions/2137367/)

---

```
select report_reason, count(*) report_count
from(
    select distinct post_id, extra report_reason
    from Actions
    where action_date + 1 = '2019-07-05' and extra is not null and action = 'report'
    )
group by report_reason
```