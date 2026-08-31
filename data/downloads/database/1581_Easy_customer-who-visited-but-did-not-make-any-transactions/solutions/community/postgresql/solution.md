# Solutions to 1581.  (Exists | Left join | All)

**Author:** ztt_09
**Votes:** 9
**Link:** [https://leetcode.com/problems/customer-who-visited-but-did-not-make-any-transactions/solutions/5468830/](https://leetcode.com/problems/customer-who-visited-but-did-not-make-any-transactions/solutions/5468830/)

---

## Method 1: LEFT JOIN

```
select v.customer_id,count(v.customer_id) as count_no_trans 
from visits v left join transactions t on v.visit_id = t.visit_id
where t.visit_id is null
group by v.customer_id
```

## Method 2: EXISTS (Beats 95.87%)
```
select v.customer_id, count(v.customer_id) as count_no_trans
from visits v
where not exists (
    select t.visit_id
    from transactions t
    where t.visit_id = v.visit_id
)
group by v.customer_id
```

## Method 3: ALL
```
select v.customer_id, count(v.customer_id) as count_no_trans
from visits v
where  v.visit_id != all(
    select distinct t.visit_id
    from transactions t
)
group by v.customer_id
```

___

\u2B06\uFE0F\u2B06\uFE0F Please upvote if you find this Solution helpful \u2B06\uFE0F\u2B06\uFE0F

![PussInBootsShrekGIF.gif](./images/0.gif)