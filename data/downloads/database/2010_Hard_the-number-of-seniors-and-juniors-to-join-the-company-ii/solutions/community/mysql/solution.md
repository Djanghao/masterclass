# Easy to understand MySQL solution

**Author:** madibarsrch
**Votes:** 6
**Link:** [https://leetcode.com/problems/the-number-of-seniors-and-juniors-to-join-the-company-ii/solutions/2254363/](https://leetcode.com/problems/the-number-of-seniors-and-juniors-to-join-the-company-ii/solutions/2254363/)

---

Whatever and however we want to achieve the final result, we need some sort of iterative sum of salary. One easy way is to create the running sum is with WINDOW function
```
WITH salary_ranker AS (
    SELECT
        *,
        SUM(salary) OVER(PARTITION BY experience ORDER BY salary) AS running_sum
    FROM candidates
)
```
First we need all the `employee_id`'s who are `Senior` and having `running_sum` below 70000
```
seniors AS(
    SELECT 
        employee_id, 
        running_sum 
    FROM salary_ranker where experience="senior" and running_sum <= 70000
)
```
Then the final task is to bring the `Junior`s. For juniors, we need to know what was the highest `running_sum` from seniors. Then we select the `employee_id`'s whose `running_sum` is less than `70000 - MAX(running_sum) from seniors`. The query should look like this
```
juniors AS(
    SELECT 
        employee_id, 
        running_sum
    FROM salary_ranker 
    WHERE running_sum <= 70000 - (SELECT IFNULL(MAX(running_sum), 0) FROM seniors)
)
```
**IFNULL(MAX(running_sum), 0) is needed because there might be cases when we shall not have any seniors who has expected salary <= 70000**

Finally, we have to join the `employee_id`s from both of these two tables.
```
SELECT employee_id FROM seniors
UNION
SELECT employee_id FROM juniors
```
**UNION is used to avoid duplications, UNION ALL will not work**

The final query looks like this:
```
WITH salary_ranker AS (
    SELECT
        *,
        SUM(salary) OVER(PARTITION BY experience ORDER BY salary) AS running_sum
    FROM candidates
)
, seniors AS(
    SELECT 
        employee_id, 
        running_sum 
    FROM salary_ranker where experience="senior" and running_sum <= 70000
)
, juniors AS(
    SELECT 
        employee_id, 
        running_sum
    FROM salary_ranker 
    WHERE running_sum <= 70000 - (SELECT IFNULL(MAX(running_sum), 0) FROM seniors)
)
SELECT employee_id FROM seniors
UNION
SELECT employee_id FROM juniors
```