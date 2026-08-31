# string_to_array and then string_agg

**Author:** vitocomido
**Votes:** 3
**Link:** [https://leetcode.com/problems/finding-the-topic-of-each-post/solutions/5154645/](https://leetcode.com/problems/finding-the-topic-of-each-post/solutions/5154645/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
-- Write your PostgreSQL query statement below

with words as (
    Select
    post_id,
    unnest(string_to_array(lower(content),' ')) as content
    from
    Posts
),
valid as (
    Select distinct
    post_id, 
    topic_id
    from
    words w 
    left join keywords kw on w.content = lower(kw.word)
    order by post_id, topic_id
),
combine as 
(
    Select 
    post_id,
    string_agg(topic_id::text,',') as topic
    from 
    valid
    group by post_id
)
select
post_id,
case when topic is null then 'Ambiguous!'
else topic end as topic
from
combine
order by post_id

```