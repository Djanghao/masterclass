# mssql SOLUTION with CTE and STUFF FOR XML

**Author:** Th0mas_Raoult
**Votes:** 1
**Link:** [https://leetcode.com/problems/finding-the-topic-of-each-post/solutions/1841084/](https://leetcode.com/problems/finding-the-topic-of-each-post/solutions/1841084/)

---


```
with cte(post_id,topic_id) as (select distinct post_id,topic_id
from Keywords,Posts where content LIKE '% '+word+' %' 
or word+' '=substring(content,1,len(word)+1)
or ' '+word = substring(content,len(content)-len(word),len(content))
or word=content
)

(select post_id,
  stuff((SELECT ',' + cast(topic_id as varchar(10))
           FROM cte t2 
           where t2.post_id = t1.post_id
         order by topic_id
           FOR XML PATH('')),1,1,'') as topic
from cte t1
group by post_id)
union (select post_id, 'Ambiguous!' as topic from posts where post_id not in (select post_id from cte))order by post_id
