# Oracle Solution | Faster Than 100%

**Author:** minabeshay
**Votes:** 3
**Link:** [https://leetcode.com/problems/finding-the-topic-of-each-post/solutions/1850034/](https://leetcode.com/problems/finding-the-topic-of-each-post/solutions/1850034/)

---

The simple idea with adding spaces before and after ***content*** is to handle if the matching word is in the begining or the end of the ***content*** column.
```
select post_id, nvl(listagg(topic_id, ',')within group(order by topic_id asc), 'Ambiguous!') topic from (
select distinct  post_id, topic_id 
from posts left outer join keywords  on ' '|| lower(content) || ' ' like '% ' || lower(word) || ' %')
group by post_id
```