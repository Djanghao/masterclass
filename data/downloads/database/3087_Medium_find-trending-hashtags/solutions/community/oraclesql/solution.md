# Oracle solution - regexp_substr + connect by to parse tweets

**Author:** adamrbeier
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-trending-hashtags/solutions/4890308/](https://leetcode.com/problems/find-trending-hashtags/solutions/4890308/)

---

[Here](https://leetcode.com/problems/count-occurrences-in-text/solutions/3663508/oracle-multiple-solutions-explanation-of-problem-quirks/) is a solution that I posted to a prior problem ([2738: Count occurrences in text](https://leetcode.com/problems/count-occurrences-in-text/description/)).  That problem involved parsing rows of string data, and that immediately came to mind here, where we need to parse rows of tweet strings.  My solution there outlines a few approaches to parse string rows, and I adapted one of those solutions here to break the tweets into their component words based on spaces.  From there, words starting with the "#" character are hashtags, and then we can use simple aggregation functions to determine the top 3 hashtags used.

# Approach
As touched on in the intro, the first queries used parse rows of strings into a result set with one record per word in each tweet.  Using the first tweet in the first example, the input of

| tweet                                        |
| -------------------------------------------- |
| Enjoying a great start to the day. #HappyDay |

becomes

| tweet_words                                        |
| -------------------------------------------- |
| Enjoying|
|a|
|great|
|start|
|to|
|the|
|day.|
|#HappyDay |

The first two CTEs, `tweets_agg` and `sep_words`, perform this using regexp_substr and connect by, using the space as the delimiter.  The tweet_date field is also included as the requirements dictate that Feb 2024 is the time period.

The next CTE, `hashtags`, uses like to filter the tweet word components to only have those beginning with '#'.  The next step (`hashtags_agg`) involves aggregation using count(*), as well as the tweet_date filtering.  The final step performs a select of `hashtags_agg`, adds a ROW_NUMBER() ordering by the hashtag count descending, and the hashtag descending (given in the requirements), and filters for only the top 3 rows, i.e., ROW_NUMBER (RN) <= 3.




# Code
```
/* Write your PL/SQL query statement below */

with tweets_agg as (
  select 
    tweet_id,
    tweet_date,
    tweet
  from 
    Tweets
), 
sep_words as (
  select 
    tweet_id,
    tweet_date,
    trim(
      regexp_substr(
        tweet, '[^ ]+', 1, lines.column_value
      )
    ) as word 
  from 
    tweets_agg, 
    table(
      cast(
        multiset(
          select 
            level 
          from 
            dual connect by (tweet_id = PRIOR tweet_id
            AND prior sys_guid() is not null
            and level <= regexp_count(tweet, ' ')+ 1)
        ) as sys.odciNumberList
      )
    ) lines
),
hashtags as (select tweet_id, tweet_date, word as hashtag from sep_words
where word like '#%'),
hashtags_agg as (select hashtag, count(*) as hashtag_ct from hashtags
where to_char(tweet_date, 'yyyymm') = '202402'
group by hashtag)
select hashtag, HASHTAG_CT as hashtag_count from 
(select hashtag, HASHTAG_CT, row_number() over (order by hashtag_ct desc, hashtag desc) AS RN
from hashtags_agg)
where RN <= 3
```