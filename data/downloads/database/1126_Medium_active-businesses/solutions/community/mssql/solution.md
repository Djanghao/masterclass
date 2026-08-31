# MS SQL | No Joins , group by having, window function

**Author:** nikhil_katoch
**Votes:** 2
**Link:** [https://leetcode.com/problems/active-businesses/solutions/2516057/](https://leetcode.com/problems/active-businesses/solutions/2516057/)

---

```
select  business_id from 
(select business_id,occurences,
 avg(occurences) over (partition by event_type) as avg_activity
from Events ) as t
where occurences > avg_activity
group by business_id
having count(business_id)>1