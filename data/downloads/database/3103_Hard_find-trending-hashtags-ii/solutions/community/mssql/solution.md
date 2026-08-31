# Simple Solution with Recursion

**Author:** YuB85
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-trending-hashtags-ii/solutions/5343569/](https://leetcode.com/problems/find-trending-hashtags-ii/solutions/5343569/)

---

# Code
```
/* Write your T-SQL query statement below */
with recur_tmp as
(
    select   1 as iter
            ,substring(tweet, (charindex('#', tweet, 0) + 1), (len(tweet) - charindex('#', tweet, 0))) as tweet_substr
    from tweets
    where isnull(charindex('#', tweet, 0), 0) > 0
        and tweet_date >= '2024-02-01' and tweet_date < '2024-03-01'
    union all
    select   iter + 1 as iter
            ,substring(tweet_substr, (charindex('#', tweet_substr, 0) + 1), (len(tweet_substr) - charindex('#', tweet_substr, 0))) as tweet_substr
    from recur_tmp
    where isnull(charindex('#', tweet_substr, 0), 0) > 0
)
,tmp as
(
    select case isnull(charindex(' ', tweet_substr, 0), 0) 
                when 0 then '#' + tweet_substr
                else '#' + substring(tweet_substr, 1, charindex(' ', tweet_substr, 0) - 1)  end as hashtag   
    from recur_tmp
)
select   top 3
         hashtag
        ,count(*) as count
from tmp
group by hashtag
order by count desc
        ,hashtag desc
```