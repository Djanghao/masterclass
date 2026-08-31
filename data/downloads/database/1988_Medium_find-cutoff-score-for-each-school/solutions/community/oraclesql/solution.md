# Oracle SQL

**Author:** TK-X
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-cutoff-score-for-each-school/solutions/1525110/](https://leetcode.com/problems/find-cutoff-score-for-each-school/solutions/1525110/)

---

```
select s.school_id, min(NVL(e.score, -1)) score
from Schools s
left join Exam e
on s.capacity >= e.student_count
group by s.school_id
```