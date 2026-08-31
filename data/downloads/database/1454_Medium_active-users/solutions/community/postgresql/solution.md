# A common approach for "Gaps and Islands" questions

**Author:** little_explorer
**Votes:** 1
**Link:** [https://leetcode.com/problems/active-users/solutions/5900867/](https://leetcode.com/problems/active-users/solutions/5900867/)

---

# Intuition
This is a typical "gaps and islands" question. The consecutive sequences are the islands. 

A common approach is to assign a unique row number to each entry within certain partitions of the data, and create a grouping key to identify consecutive sequences. 

For this question, the `login_date`s are ordered within the partition of each `id`, and are assigned a row number. The difference between each `login_date` and its row number (cast into `interval` by `day`) is the grouping key. The data is then filtered by the counts of rows in each group by `id` and the grouping key. 

Make sure to de-dup for the `logins` table. Otherwise, the grouping will not work.  

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
-- formatted using a SQL formatter for easier reading

SELECT DISTINCT tbl.id,
                name
FROM   (SELECT id,
               login_date,
               login_date - ( Row_number()
                                over (
                                  PARTITION BY id
                                  ORDER BY login_date)
                              || ' day' ) :: interval AS gr
        FROM   (SELECT DISTINCT *
                FROM   logins) t) tbl
       join accounts USING (id)
GROUP  BY tbl.id,
          gr,
          name
HAVING Count(*) >= 5
ORDER  BY 1; 

```