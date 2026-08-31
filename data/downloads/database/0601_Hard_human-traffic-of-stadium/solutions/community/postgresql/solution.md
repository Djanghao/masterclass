# This query beats 99.38% users || With explanation

**Author:** jaysawant0011
**Votes:** 4
**Link:** [https://leetcode.com/problems/human-traffic-of-stadium/solutions/5755509/](https://leetcode.com/problems/human-traffic-of-stadium/solutions/5755509/)

---

**This query beats 99.38% users**
![image.png](./images/0.png)
Here's a detailed breakdown of the problem, approach, and complexities: 
### Intuition
To solve the problem, you need to identify groups of consecutive rows in the `Stadium` table where each row has `people` greater than or equal to 100. You want to find and return records where there are at least three such consecutive rows. 

The idea is to group rows based on their consecutive nature and filter out groups that have fewer than three rows.

### Approach
1. **Identify Consecutive Groups**:
   - Use a window function to create a group identifier for consecutive rows. The difference between the `id` and its row number in ascending order will be constant for consecutive rows.
   - Calculate this difference (`diff`) for rows where `people >= 100`.

2. **Filter Valid Groups**:
   - Group by the `diff` value and count the number of rows in each group.
   - Filter groups where the count is at least 3.

3. **Select Relevant Records**:
   - Retrieve records from the initial CTE that belong to the valid groups identified in the previous step.
   - Order the results by `visit_date` for a clear presentation.

### Complexity
- **Time Complexity**: \\(O(n)\\)
  - The time complexity is dominated by the window function and the aggregation operations, both of which are linear with respect to the number of rows \\(n\\) in the `Stadium` table.

- **Space Complexity**: \\(O(n)\\)
  - The space complexity is determined by the storage required for the CTE and intermediate results, which is proportional to the number of rows in the table.

### Code
```postgresql
WITH cte AS (
    SELECT id, 
           visit_date, 
           people, 
           id - ROW_NUMBER() OVER (ORDER BY id) AS diff
    FROM Stadium
    WHERE people >= 100
)
SELECT id, visit_date, people
FROM cte
WHERE diff IN (
    SELECT diff
    FROM cte
    GROUP BY diff
    HAVING COUNT(*) >= 3
)
ORDER BY visit_date;
```

### Explanation
1. **CTE Calculation**:
   - The `diff` column is computed as `id - ROW_NUMBER()`, which groups consecutive rows with the same `diff` value.

2. **Filtering Valid Groups**:
   - The inner `SELECT` statement identifies `diff` values with at least three rows.

3. **Final Selection**:
   - The outer query selects records from `cte` where the `diff` is one of the valid groups and orders the results by `visit_date`.

This approach ensures you correctly identify and retrieve groups of three or more consecutive rows where `people >= 100`.
### Intuition
To solve the problem, you need to identify groups of consecutive rows in the `Stadium` table where each row has `people` greater than or equal to 100. You want to find and return records where there are at least three such consecutive rows. 

The idea is to group rows based on their consecutive nature and filter out groups that have fewer than three rows.

### Approach
1. **Identify Consecutive Groups**:
   - Use a window function to create a group identifier for consecutive rows. The difference between the `id` and its row number in ascending order will be constant for consecutive rows.
   - Calculate this difference (`diff`) for rows where `people >= 100`.

2. **Filter Valid Groups**:
   - Group by the `diff` value and count the number of rows in each group.
   - Filter groups where the count is at least 3.

3. **Select Relevant Records**:
   - Retrieve records from the initial CTE that belong to the valid groups identified in the previous step.
   - Order the results by `visit_date` for a clear presentation.

### Complexity
- **Time Complexity**: \\(O(n)\\)
  - The time complexity is dominated by the window function and the aggregation operations, both of which are linear with respect to the number of rows \\(n\\) in the `Stadium` table.

- **Space Complexity**: \\(O(n)\\)
  - The space complexity is determined by the storage required for the CTE and intermediate results, which is proportional to the number of rows in the table.

### Code
```postgresql
WITH cte AS (
    SELECT id, 
           visit_date, 
           people, 
           id - ROW_NUMBER() OVER (ORDER BY id) AS diff
    FROM Stadium
    WHERE people >= 100
)
SELECT id, visit_date, people
FROM cte
WHERE diff IN (
    SELECT diff
    FROM cte
    GROUP BY diff
    HAVING COUNT(*) >= 3
)
ORDER BY visit_date;
```

### Explanation
1. **CTE Calculation**:
   - The `diff` column is computed as `id - ROW_NUMBER()`, which groups consecutive rows with the same `diff` value.

2. **Filtering Valid Groups**:
   - The inner `SELECT` statement identifies `diff` values with at least three rows.

3. **Final Selection**:
   - The outer query selects records from `cte` where the `diff` is one of the valid groups and orders the results by `visit_date`.

This approach ensures you correctly identify and retrieve groups of three or more consecutive rows where `people >= 100`.