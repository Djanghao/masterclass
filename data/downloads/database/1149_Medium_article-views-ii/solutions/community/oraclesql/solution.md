# It should be labelled "Easy"

**Author:** minabeshay
**Votes:** 1
**Link:** [https://leetcode.com/problems/article-views-ii/solutions/1563434/](https://leetcode.com/problems/article-views-ii/solutions/1563434/)

---

```
select 
distinct viewer_id as id
from 
views 
group by viewer_id, view_date 
having count(distinct article_id) >1
order by 1 
```