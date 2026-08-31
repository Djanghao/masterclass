# Official Solution

**Link:** [https://leetcode.com/problems/calculate-special-bonus/solution/](https://leetcode.com/problems/calculate-special-bonus/solution/)

---

<!-- Don't delete this -->
[TOC]

# Solution

---

## pandas

### Approach: If-Else Conditional Statement


#### Algorithm

Let's take a look at the bonus calculation conditions: the bonus is equal to the salary **only when** the employee's ID is odd **and** his name does not start with the letter `M`. Otherwise, the bonus is set to 0. This can be represented as a straightforward `if-else` statement:

```python
bonus = salary if (id % 2 and not name.startwith('M')) else 0
```

How do we implement this expression to each row of the DataFrame `employee`? 

To accomplish this task, we could use a loop to iterate through the DataFrame rows one by one. Instead of writing an explicit Python loop, we can use the `apply()` method to process rows more concisely. While this isn’t true vectorization (which would rely on pandas’ column-wise operations), it is often clearer to read and still avoids writing manual loops.

By defining a custom function that calculates the bonus based on the conditions and utilizing `apply()` with the `axis=1` argument, we can effortlessly process each row and compute the corresponding bonus. The custom function is outlined as follows:

```python
lambda x: x['salary'] if x['employee_id'] % 2 and not x['name'].startswith('M') else 0
```

It implements our `if-else` logic statement by checking the conditions based on the employee's ID and the first letter of their name and returning the corresponding bonus value. We set the first parameter of `apply()` to this lambda function and set the parameter `axis` to 1, indicating that the function should be applied along the row.


```python
employees['bonus'] = employees.apply(
    lambda x: x['salary'] if x['employee_id'] % 2 and not x['name'].startswith('M') else 0, 
    axis=1
)
```

The above code creates a new column `bonus`:

|   employee_id   |   name    |   salary  |   bonus  |
|-----------------|-----------|----------|---------|
|   0              |    Meir    |   3000    |     0     |
|   1              |  Michael |   3800    |     0     |
|   2              |  Addilyn |   7400    |   7400  |
|   3              |    Juan   |   6100    |     0     |
|   4              |  Kannon |   7700    |   7700  |

<br>

Next, we select the required columns `employee_id` and `bonus` and sort the DataFrame `df` in ascending order of `employee_id`.

```python
df = employees[['employee_id', 'bonus']].sort_values('employee_id')
```
We will obtain `df` as follows:

| employee_id | bonus |
| ----------- | ----- |
| 2           | 0     |
| 3           | 0     |
| 7           | 7400  |
| 8           | 0     |
| 9           | 7700  |

<br>

#### Implementation

<iframe src="https://leetcode.com/playground/m9CfDhBB/shared" frameBorder="0" width="100%" height="225" name="m9CfDhBB"></iframe>

<br>
<br>


## Database

### Approach: If Statement

#### Algorithm
In SQL, we use the conditional function IF to perform conditional checks and return different values based on the condition's result. The syntax of the IF function is as follows:

```sql
IF(condition, value_if_true, value_if_false)
```

The `condition` consists of two parts separated by the keyword AND:

- `employee_id % 2 = 1`: this condition checks whether `employee_id` is an odd number. 
- `name NOT REGEXP '^M'`: we use the keyword REGEXP for regular expression pattern matching, which checks whether the name **does not** start with the letter "M" (`^M` represents a regular expression pattern that matches any name **not** starting with "M").

Therefore, the IF function in our case is as follows:

```sql
IF(employee_id % 2 = 1 AND name NOT REGEXP '^M', salary, 0)
```

The AS clause is used to give an alias `bonus` to the calculated column above. If both conditions are met, the `bonus` will be set to the employee's salary. Otherwise, it will be set to 0. Then the result set is sorted based on the `employee_id` column in ascending order. The complete code is as follows:


#### Implementation

```sql
SELECT 
    employee_id,
    IF(employee_id % 2 = 1 AND name NOT REGEXP '^M', salary, 0) AS bonus 
FROM 
    employees 
ORDER BY 
    employee_id
```

| employee_id | bonus |
| ----------- | ----- |
| 2           | 0     |
| 3           | 0     |
| 7           | 7400  |
| 8           | 0     |
| 9           | 7700  |