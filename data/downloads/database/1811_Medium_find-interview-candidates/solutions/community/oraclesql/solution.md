# lead -> unpivot -> groupby -> union all

**Author:** c0dem0nger
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-interview-candidates/solutions/6062109/](https://leetcode.com/problems/find-interview-candidates/solutions/6062109/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->
For the 1st condition regarding user having 3 gold medals, did group by on gold_medal column with count aggregate function. Then filtered those having count >= 3.
For 2nd condition did lead(1) and lead(2) to bring all the data for 3 consecutive days in same row for 1 contest_id. Then did unpivot to the dataframe on contest_id. Then did groupby on contest_id and user_id to find the count of users having count >= 3 for any contest_id.
Then concated the 2 dataframes using union all and then joined with users table along with dropping the duplicate datas.

# Code
```oraclesql []
/* Write your PL/SQL query statement below */
WITH t_contest AS (
    SELECT  contest_id,
            gold_medal,
            silver_medal,
            bronze_medal,
            LEAD(gold_medal,1) OVER (ORDER BY contest_id ASC) gold_medal_1,
            LEAD(silver_medal,1) OVER (ORDER BY contest_id ASC) silver_medal_1,
            LEAD(bronze_medal,1) OVER (ORDER BY contest_id ASC) bronze_medal_1,
            LEAD(gold_medal,2) OVER (ORDER BY contest_id ASC) gold_medal_2,
            LEAD(silver_medal,2) OVER (ORDER BY contest_id ASC) silver_medal_2,
            LEAD(bronze_medal,2) OVER (ORDER BY contest_id ASC) bronze_medal_2
    FROM    contests
),
t_melt AS (
    SELECT  *
    FROM    t_contest
    UNPIVOT (
        user_id
        FOR medals
        IN  (
            gold_medal,
            silver_medal,
            bronze_medal,
            gold_medal_1,
            silver_medal_1,
            bronze_medal_1,
            gold_medal_2,
            silver_medal_2,
            bronze_medal_2
        )
    )
),
t_grp AS (
    SELECT  contest_id,
            user_id,
            COUNT(1)    cnt_
    FROM    t_melt
    GROUP BY
            contest_id,
            user_id
    HAVING  COUNT(1) >= 3
),
t_gold AS (
    SELECT  gold_medal  user_id,
            COUNT(1)    gold_cnt
    FROM    contests
    GROUP BY
            gold_medal
    HAVING  COUNT(1) >= 3
),
t_concat AS (
    SELECT  DISTINCT 
            user_id
    FROM    t_grp
    UNION ALL
    SELECT  DISTINCT 
            user_id
    FROM    t_gold
)
SELECT  DISTINCT
        name        "name",
        mail        "mail"
FROM    t_concat tc
INNER JOIN
        users u
ON      u.user_id   =   tc.user_id;
```