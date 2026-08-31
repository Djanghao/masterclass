# Official Solution

**Link:** [https://leetcode.com/problems/median-employee-salary/solution/](https://leetcode.com/problems/median-employee-salary/solution/)

---

​
<!-- Don't delete this -->
[TOC]
​
# Solution
​
---
​
## pandas

<!-- h3 for approaches -->
### Approach 1: Finding Median Using rank()

<!-- h4 for sections -->
#### Algorithm

<!-- Describe your approach to solving the problem. -->
Since we are looking for the median salary of each company and the median is the value in the middle of a sorted list of values, the first thing we need to do is sort the salaries accordingly. Here we use `cumcount() + 1` as a workaround for ranking because `cumcount()` starts from 0. We also add a column `rank` to store the ranking of `salary` for each `company`. Column `id` is included when sorting the `salary` since employees are making the same salary in one company. 

```python
employee['rank'] = pd.to_numeric(employee.sort_values(['salary', 'id']).groupby('company').cumcount() + 1)
```


Here's part of the output from this step: 

| id | company | salary | rank |
| -- | ------- | ------ | ---- |
| 1  | A       | 2341   | 5    |
| 2  | A       | 341    | 2    |
| 3  | A       | 15     | 1    |
| 4  | A       | 15314  | 6    |
| 5  | A       | 451    | 3    |
| 6  | A       | 513    | 4    |


To know which record(s) is the middle one(s) of the list, we need to know how many records each list contains. For this step, we count the number of employees of each company. The count is stored in the column `cnt` of this new DataFrame. 


```python
 df = employee.groupby('company', as_index=False)['id'].count().rename(columns={'id': 'cnt'})
```

Below is the output from this step. 

| company | cnt |
| ------- | --- |
| A       | 6   |
| B       | 6   |
| C       | 5   |

We then merge the `rank` and the count (`cnt`) created above in another new DataFrame `df2` for later calculation. 

```python
df2 = df.merge(employee, on='company')
```
​
Now, we can identify the median salaries for each company. Since companies might have an odd or even number of employees, we can create a filter that includes both scenarios:

- If the company has an **even** number of employees (`cnt` equals an even number), the median salaries will be the salaries ranked as `(cnt / 2)` and `(cnt / 2 + 1)`; 
- if the company has an **odd** number of employees, the median salary will be the salary ranked as `(cnt / 2 + 0.5)`

To satisfy both criteria, we can add a filter to select the salaries with rank between `(cnt / 2)` and `(cnt / 2 + 1)` since `(cnt / 2) < (cnt / 2 + 0.5) < (cnt / 2 + 1)` and both scenarios are included with this filter. This way, we can always get the median salaries no matter if the company has an even or odd number of employees. 

```python
df2 = df2.loc[(df2['rank'] >= df2['cnt'] / 2) & (df2['rank'] <= df2['cnt'] / 2 + 1)]
```
Below is the output from this step. 

| company | cnt | id | salary | rank |
| ------- | --- | -- | ------ | ---- |
| A       | 6   | 5  | 451    | 3    |
| A       | 6   | 6  | 513    | 4    |
| B       | 6   | 9  | 1154   | 4    |
| B       | 6   | 12 | 234    | 3    |
| C       | 5   | 14 | 2645   | 3    |

To get the final output, we select only the requested columns for the final output. 

```python
return df2[['id', 'company', 'salary']]
```

<!-- h4 for sections -->
#### Implementation
​<iframe src="https://leetcode.com/playground/dBAMWvHv/shared" frameBorder="0" width="100%" height="276" name="dBAMWvHv"></iframe>
<!-- an empty line to separate approaches -->
​
<!-- h3 for approaches -->
### Approach 2: Finding Median Using len() and ':' for slicing

<!-- h4 for sections -->
#### Algorithm

<!-- Describe your approach to solving the problem. -->
This solution is similar to the previous one, with the difference being that we didn't use `rank` but instead used another method `.iloc` to locate the rows that belong to the median.

Since we are looking for the median salary of each company and the median is the middle salary of a sorted list of salaries, this approach examines each salary and its index after sorting using `iloc` and `lambda` to select only the salaries in the middle. 

To do this, we first sort the `salary` within each `company` using `groupby`. Column `id` is included since there might be employees making the same salary in the same company. 

```python
df = employee.sort_values(['salary', 'id']).groupby('company')
```

With the sorted salaries, we can identify the salaries in the middle of each company. Since companies can have an even or odd number of employees, we need to create a filter that considers both scenarios:

- If the company has an **even** number of salaries (`len(x)` equals an equal number), the median salaries will be the salaries with an indexing of `(((len(x) - 1) / 2) - 0.5)` and `(len(x) / 2)`; for example, if the company has 4 salaries, the median salaries will be the salaries with an index of 1 and 2 as the indexing starts from 0.

- if the company has an **odd** number of salaries, the median salary will be the salary with an index of `((len(x) - 1) / 2)`; for example, if the company has 3 salaries, the median salary will be the salary an index of 1.

As we can see, there is a shared index from both scenarios (index equals 1 from the example above), so we leverage the function double slash (`//`) to perform floor division and make the index `(((len(x) - 1) / 2) - 0.5)` equals to `((len(x) - 1) / 2)` as the function rounds the result down to the nearest integer and removed the difference from `-0.5`. We can pass the transformed formula to the start parameter of the slicing `([[(len(x) - 1) // 2:])` so it will always be included no matter if the company has an even or odd number of salaries. 

Now we need to include the next salary for the companies with an even number of salaries. Since the items start through `stop - 1` for `x[start: stop]`, we will need to add 1 to len(x) / 2 (the next salary) so the slicing includes `len(x) / 2`. Here we use a double slash (`//`) again to avoid the non-integer value from the companies with odd numbers of salaries. The completed slicing is `[(len(x) - 1) // 2 : len(x) // 2 + 1]`. 

```python
df = employee.sort_values(['salary', 'id']).groupby('company').apply(lambda x: x.iloc[(len(x) - 1) // 2: len(x) // 2 + 1])
```

<!-- h4 for sections -->
#### Implementation
​<iframe src="https://leetcode.com/playground/FkgvRhPX/shared" frameBorder="0" width="100%" height="157" name="FkgvRhPX"></iframe>

----
​
​
## Database

<!-- h3 for approaches -->
### Approach: Finding Median Using RANK() 

<!-- h4 for sections -->
#### Algorithm

<!-- Describe your approach to solving the problem. -->
Since we are looking for the median salary of each company and the median is the value in the middle of a sorted list of values, the first thing we need to do is sort the salaries accordingly. In a CTE, we append a rank to each salary from low to high within each company:

```sql
WITH add_rank AS
    (SELECT id, company, salary,
        ROW_NUMBER()OVER(PARTITION BY company ORDER BY salary) AS rnk
    FROM Employee)
```

Below is part of the output from this step. As we can see, each salary is ranked from low to high within the company. 

| Id | Company | Salary | rnk |
| -- | ------- | ------ | --- |
| 3  | A       | 15     | 1   |
| 2  | A       | 341    | 2   |
| 5  | A       | 451    | 3   |
| 6  | A       | 513    | 4   |
| 1  | A       | 2341   | 5   |
| 4  | A       | 15314  | 6   |

To know which record(s) is the middle one(s) of the list, we need to know how many records each list contains. In another CTE, we count how many employees each company has. 

```sql
 add_count AS
    (SELECT company, COUNT(DISTINCT id) AS cnt
    FROM Employee
    GROUP BY company)
```

Below is the output from this step.

| company | cnt |
| ------- | --- |
| A       | 6   |
| B       | 6   |
| C       | 5   |

With both the rank (`rnk`) of salaries and the total number of employees in each company (`cnt`), we can identify the median salaries for each company. Since companies might have an odd or even number of employees, we can create a filter that includes both scenarios:

- If the company has an **even** number of employees (`cnt` equals an even number), the median salaries will be the salaries ranked as (cnt / 2) and (cnt / 2+1); 
- if the company has an **odd** number of employees, the median salary will be the salary ranked as (cnt / 2 + 0.5)

To satisfy both criteria, we can add a filter to select the salaries with rank between `cnt / 2` and `cnt / 2 + 1` in the main query since `(cnt / 2) < (cnt / 2 + 0.5) < (cnt / 2 + 1)` and both scenarios are included with this filter. This way, we can always get the median salaries no matter if the company has an even or odd number of employees. 

```sql
SELECT a.id, a.company, a.salary
FROM add_rank a
JOIN add_count b
ON a.company = b.company
AND a.rnk BETWEEN b.cnt / 2 AND b.cnt / 2 + 1
```

<!-- h4 for sections -->
#### Implementation

```sql
WITH add_rank AS
    (SELECT id, company, salary,
        ROW_NUMBER()OVER(PARTITION BY company ORDER BY salary) AS rnk
    FROM Employee)
, add_count AS
    (SELECT company, COUNT(DISTINCT id) AS cnt
    FROM Employee
    GROUP BY company)
SELECT a.id, a.company, a.salary
FROM add_rank a
JOIN add_count b
ON a.company = b.company
AND a.rnk BETWEEN b.cnt / 2 AND b.cnt / 2 + 1
```
​
<!-- an empty line to separate approaches -->
----