# Oracle | Join | Easy Solution

**Author:** TK-X
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-comments-per-post/solutions/2207875/](https://leetcode.com/problems/number-of-comments-per-post/solutions/2207875/)

---

```
select x.post_id, count(distinct s.sub_id) number_of_comments
from Submissions s
right join
(
    select distinct sub_id post_id
    from Submissions
    where parent_id is null
) x
on s.parent_id = x.post_id
group by x.post_id
order by x.post_id
```