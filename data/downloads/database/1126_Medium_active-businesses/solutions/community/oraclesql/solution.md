# Best Oracle answer

**Author:** rajuncajuns
**Votes:** 1
**Link:** [https://leetcode.com/problems/active-businesses/solutions/1595046/](https://leetcode.com/problems/active-businesses/solutions/1595046/)

---

```
select business_id
  from (
select business_id
      ,avg(occurences) over(partition by event_type) event_avg_activity
      ,occurences
  from events
      )
 where occurences > event_avg_activity
group by business_id
having count(1) > 1
```