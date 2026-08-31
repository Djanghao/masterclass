# UNION, one CTE, and ROW_NUMBER &. follow up question 2

**Author:** little_explorer
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-interview-candidates/solutions/5928330/](https://leetcode.com/problems/find-interview-candidates/solutions/5928330/)

---

# Intuition
To me, this question is a combo of two sub-questions:
1. find the users that have won 3 golds
2. get the users that have won any medals in 3 or more consecutive contests

So, I constructed one `CTE` for the second sub-question, and `UNION` the results from the two parts. 

Specifically, sub-question 2 looks familiar when it asks for any medals in 3 or more consecutive contests, as this is again a `gaps and islands` question, for which one needs to find the `islands`. Solving it involves assigning a `row number` to each row for every `user_id` and order by the `contest_id`s and calculating the `diff` between each pair of `contest_id` and `row number`. Next, `group by` `diff` while selecting only those `islands` with 3 more more counts. 

# Approach
See query. 

# Complexity
- Time complexity:
O(NLogN)

- Space complexity:
O(N)

# Code
```postgresql []
-- Write your PostgreSQL query statement below

WITH cte AS (
  SELECT 
    contest_id, 
    gold_medal AS UID 
  FROM 
    contests 
  UNION ALL 
  SELECT 
    contest_id, 
    silver_medal AS UID 
  FROM 
    contests 
  UNION ALL 
  SELECT 
    contest_id, 
    bronze_medal AS UID 
  FROM 
    contests
) 
SELECT 
  DISTINCT name, 
  mail 
FROM 
  users 
WHERE 
  user_id IN (
    SELECT 
      gold_medal 
    FROM 
      contests 
    GROUP BY 
      1 
    HAVING 
      count(*) >= 3
  ) 
UNION 
SELECT 
  DISTINCT name, 
  mail 
FROM 
  users 
WHERE 
  user_id IN (
    SELECT 
      UID 
    FROM 
      (
        SELECT 
          *, 
          row_number() OVER (
            PARTITION BY UID 
            ORDER BY 
              contest_id
          ) AS rn, 
          contest_id - row_number() OVER (
            PARTITION BY UID 
            ORDER BY 
              contest_id
          ) AS diff 
        FROM 
          cte 
        ORDER BY 
          2
      ) 
    GROUP BY 
      UID, 
      diff 
    HAVING 
      count(*) >= 3
  );
```