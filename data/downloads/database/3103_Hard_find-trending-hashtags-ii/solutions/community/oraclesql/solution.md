# Oracle Solution

**Author:** Bug910
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-trending-hashtags-ii/solutions/4959692/](https://leetcode.com/problems/find-trending-hashtags-ii/solutions/4959692/)

---


```
WITH temp0 AS (SELECT listagg(REGEXP_REPLACE(tweet, '.*?([#][A-Za-z0-9]+)', '\\1 '),'') WITHIN GROUP (ORDER BY tweet)  AS tweet
                 FROM Tweets
                where to_char(tweet_date,'yyyymm') = '202402'),
    temp1 as (select regexp_substr(tweet, '[^ ]+', 1, level) hashtag 
                from temp0
             connect by regexp_substr(tweet, '[^ ]+', 1, level) is not null),
    temp2 as (select hashtag, sum(1) as count, row_number() over(order by sum(1) desc,hashtag desc ) as  rn
                from temp1 
               group by hashtag)
    select hashtag, count 
      from temp2
     where rn <= 3


```