# postgresql, group by

**Author:** adamhimy19
**Votes:** 0
**Link:** [https://leetcode.com/problems/article-views-ii/solutions/5986636/](https://leetcode.com/problems/article-views-ii/solutions/5986636/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

The question is asking for id of views, who have viewed more than 2 articles, for any given day. We just need to see for any given day, any given viewer, we can grouping the data based on (`group by view_date, viewer_id`), and check in each grouping, whether exists 2 unique article_id.


# Approach
<!-- Describe your approach to solving the problem. -->

Since we have all the viewing record, we just need to
- grouping based on `view_date`, and then by `viewer_id`
- filter those group who has at least 2 unique `article_id` in it
- since it may exist someone who view 2 articles, more than just one day, we need deduplication in `select` statement with `select distinct`


# Code
```postgresql []
-- Write your PostgreSQL query statement below
select
    distinct viewer_id as id
from
    Views
group by view_date,viewer_id
having count(distinct article_id) >= 2
order by id asc;
```