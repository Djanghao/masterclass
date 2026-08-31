# Clear Explanation for date_sub & row_number Function - Simplified Code

**Author:** Rcll
**Votes:** 6
**Link:** [https://leetcode.com/problems/report-contiguous-dates/solutions/5106888/](https://leetcode.com/problems/report-contiguous-dates/solutions/5106888/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
- The code aims to identify continuous intervals of days in the year **2019** and report whether tasks within these intervals failed or succeeded. 
- It'll provide the `period_state` along with the corresponding `start_date` and `end_date` for each interval.
# Approach
<!-- Describe your approach to solving the problem. -->
1. **CTE 1 (Common Table Expression 1):**
- Create a CTE named *cte1* to combine the fail dates and success dates from the `failed` and `succeeded` tables respectively.
- Use the `UNION` operator to merge the two datasets, assigning 'failed' or 'succeeded' as the `period_state` for each row.
2. **CTE 2 (Common Table Expression 2):**
- Create another CTE named *cte2* to add a row number to each row within the same `period_state` group, ordered by `task_date`.
- Use the `ROW_NUMBER()` window function to assign a unique row number to each row within its partition.
- Filter the data to only include rows from the year **2019**.
3. **Main Query:**
- Select the period_state, **minimum task_date** as `start_date`, and **maximum task_date** as `end_date`.
- Group the data by the result of subtracting the `row_number` from the `task_date`, effectively grouping consecutive dates into the same interval.
- Order the result by `start_date`.

# Function Explanation:
- `ROW_NUMBER() OVER()`: Assigns a unique sequential integer to each row within its partition. Here, it's used to create a unique identifier for each row within the `period_state` groups, ordered by `task_date`.
- `DATE_SUB()`: Subtracts an interval from a date. In this case, it's used to subtract the row number (rn) days from the task_date to group consecutive dates into the same interval.

### Note:
- As shown below, the `date_sub()` function helps us group consecutive dates. It calculates a new date by subtracting the row number (`rn`) from the task date.
- This new date, stored in the `date_sub` column, acts as a reference point for **grouping** the data by `period_state`.

```
| task_date  | period_state | rn | date_sub   |
| ---------- | ------------ | -- | ---------- |
| 2019-01-04 | failed       | 1  | 2019-01-03 |
| 2019-01-05 | failed       | 2  | 2019-01-03 |
| 2019-01-01 | succeeded    | 1  | 2018-12-31 |
| 2019-01-02 | succeeded    | 2  | 2018-12-31 |
| 2019-01-03 | succeeded    | 3  | 2018-12-31 |
| 2019-01-06 | succeeded    | 4  | 2019-01-02 |
```


# Code
```
# MySQL 
with cte1 as (
    select fail_date as task_date, 'failed' as period_state from failed
    union
    select success_date as task_date, 'succeeded' as period_state from succeeded
),
cte2 as (
    select *, 
           row_number() over(partition by period_state order by task_date) as rn
    from cte1
    where year(task_date) = 2019
)
select period_state, 
       min(task_date) as start_date,
       max(task_date) as end_date
from cte2
group by date_sub(task_date, interval rn day), 1
order by 2
```
# Complexity
- Time complexity: O(nlogn), where n is the total number of records in the combined failed and succeeded tables.
- Space complexity: O(n), as the CTEs and the main query require additional space proportional to the number of records processed.


**Please upvote if you find this helpful, thank you!**