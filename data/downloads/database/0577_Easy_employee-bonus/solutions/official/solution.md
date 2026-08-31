# Official Solution

**Link:** [https://leetcode.com/problems/employee-bonus/solution/](https://leetcode.com/problems/employee-bonus/solution/)

---

[TOC]

# Solution

---




## pandas

### Approach 1: Filter and Retrieve 

##### Algorithm

1. Define the `employee_bonus` function that takes two DataFrames, `employee` and `bonus`, as input parameters and specifies that it returns a DataFrame.

2. Use the Pandas merge function to combine the `employee` and `bonus` DataFrames on the `empId` column using a left join. This combines employee data with their respective bonuses.

3. Apply a filter to the merged DataFrame to include only rows where the bonus is less than 1000 or where the bonus is missing (NaN). Use boolean indexing for filtering.

4. Choose the `name` and `bonus` columns from the filtered DataFrame to extract the relevant information.

5. Return the filtered DataFrame as the output of the function.

##### Code

```python
import pandas as pd

def employee_bonus(employee: pd.DataFrame, bonus: pd.DataFrame) -> pd.DataFrame:
    # Merge Employee and Bonus tables using a left join
    result_df = pd.merge(employee, bonus, on='empId', how='left')

    # Filter rows where bonus is less than 1000 or missing
    result_df = result_df[(result_df['bonus'] < 1000) | result_df['bonus'].isnull()]

    # Select "name" and "bonus" columns
    result_df = result_df[['name', 'bonus']]

    return result_df



```

<br>

## Database


### Approach 1: Using `OUTER JOIN` and `WHERE` clause


#### Algorithm

1. Initialize Query: Start an SQL query.

2. Since foreign key **Bonus.empId** refers to **Employee.empId** and some employees do not have bonus records, we can use `OUTER JOIN` to link these two tables as the first step.


```sql
SELECT
    Employee.name, Bonus.bonus
FROM
    Employee
        LEFT OUTER JOIN
    Bonus ON Employee.empid = Bonus.empid
;
```
>Note: "LEFT OUTER JOIN" could be written as "LEFT JOIN".

The output to run this code with the sample data is as below.

```
| name   | bonus |
|--------|-------|
| Dan    | 500   |
| Thomas | 2000  |
| Brad   |       |
| John   |       |
```
The bonus value for `Brad` and `John` is empty, which is actually `NULL` in the database. "Conceptually, NULL means “a missing unknown value” and it is treated somewhat differently from other values." Check the [Working with NULL Values](https://dev.mysql.com/doc/refman/5.7/en/working-with-null.html) in MySQL manual for more details. In addition, we have to use `IS NULL` or `IS NOT NULL` to compare a value with `NULL`.

3. At last, we can add a `WHERE` clause with the proper conditions to filter these records.

#### Implementation

```mysql []
SELECT
    Employee.name, Bonus.bonus
FROM
    Employee
        LEFT JOIN
    Bonus ON Employee.empid = Bonus.empid
WHERE
    bonus < 1000 OR bonus IS NULL
;
```


<br>