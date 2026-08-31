# Simple Group By Solution MYSQL

**Author:** supunwijerathne
**Votes:** 16
**Link:** [https://leetcode.com/problems/number-of-calls-between-two-persons/solutions/1477370/](https://leetcode.com/problems/number-of-calls-between-two-persons/solutions/1477370/)

---

```
SELECT from_id as person1, to_id as person2, count(*) as call_count, sum(duration) as total_duration 
from Calls 
GROUP BY LEAST(from_id,to_id), GREATEST(from_id,to_id);
```