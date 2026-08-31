# Faster than 100%

**Author:** aishwaryasreenivas94
**Votes:** 1
**Link:** [https://leetcode.com/problems/the-winner-university/solutions/1803931/](https://leetcode.com/problems/the-winner-university/solutions/1803931/)

---

```

select 
(case when tmp_ny.NY_student >tmp_cf.CF_student then 'New York University'
      when tmp_cf.CF_student > tmp_ny.NY_student then 'California University'
      when tmp_cf.CF_student = tmp_ny.NY_student then 'No Winner' end) as winner
from
(select count(*) as NY_student
from NewYork ny
where ny.score >= 90)tmp_ny,
(select count(*) as CF_student
from California cf
where cf.score >= 90 )tmp_cf
```