# Official Solution

**Link:** [https://leetcode.com/problems/replace-employee-id-with-the-unique-identifier/solution/](https://leetcode.com/problems/replace-employee-id-with-the-unique-identifier/solution/)

---

<!-- Don't delete this -->
[TOC]

# Solution

---

## pandas

### Approach: Left Join on ID

#### Algorithm

To combine employee names with their unique ids and get the related data from two DataFrames, let's merge `employees` and `employee_uni` based on the common column `id`. This can be implemented using the `merge()` function in Pandas. Note that we need to set some parameters in `merge`:
- `employees` and `employee_uni`: these are the two DataFrames that we want to merge.
- `on='id'`, this specifies the column on which the merge operation will be performed. Both DataFrames contain the column `id`.
- `how='left'`: this defines the type of merge to be performed. The `left` merge means that all the rows from the `employees` DataFrame will be included in the result, and any matching rows from the `employee_uni` DataFrame will also be included. Hence, employees without unique IDs will also be retained, but their corresponding columns from `employee_uni` will be filled with `NaN` (Not a Number) values.

```python
employee_name_uni = pd.merge(employees, employee_uni, on='id', how='left')
```

This creates the `employee_name_uni` DataFrame as shown below, where all the rows from `employees` are preserved and additional information from `employee_uni` is included for the matching `id` values. For rows that don't have a matching `id` in `employee_uni`, the corresponding columns from `employee_uni` are filled with `NaN`. 

|   id | name     |   unique_id |
|-----|---------|------------|
|    1 | Alice    |         NaN |
|    7 | Bob      |         NaN |
|   11 | Meir     |         2.0 |
|   90 | Winston  |         3.0 |
|    3 | Jonathan |         1.0 |

<br>

The merged information from two DataFrames contains the `name` and `unique_id` for each employee (if they have one). Next, we will create a new DataFrame containing only the required columns `unique_id` and `name`, which can be accomplished by selecting the columns `unique_id` and `name` from the `employee_name_uni` DataFrame using double square brackets.


```python
answer = employee_name_uni[['unique_id', 'name']]
```

We will obtain the DataFrame `answer` as follows:

| unique_id | name     |
| --------- | -------- |
| null      | Alice    |
| null      | Bob      |
| 2         | Meir     |
| 3         | Winston  |
| 1         | Jonathan |

<br>

#### Implementation

<iframe src="https://leetcode.com/playground/EZrPUswc/shared" frameBorder="0" width="100%" height="174" name="EZrPUswc"></iframe>

<br>

---

## Database

### Approach: Left Join on ID

#### Algorithm

We first perform a LEFT JOIN operation to combine data from both tables based on the `id` column. Similarly, we use LEFT JOIN to ensure that all the rows from the `Employees` table are included in the result, even if there are no matching rows in the `EmployeeUNI` table.

```sql
SELECT 
    * 
FROM
    Employees 
LEFT JOIN 
    EmployeeUNI 
ON 
    Employees.id = EmployeeUNI.id;
```


| id | name     | id   | unique_id |
| -- | -------- | ---- | --------- |
| 1  | Alice    | null | null      |
| 7  | Bob      | null | null      |
| 11 | Meir     | 11   | 2         |
| 90 | Winston  | 90   | 3         |
| 3  | Jonathan | 3    | 1         |

<br>

Since we want to retrieve the columns `unique_id` and `name` from the combined table, we will select the `unique_id` column from the `EmployeeUNI` table and the `name` column from the `Employees` table. The complete code is as follows:

#### Implementation

```sql
SELECT 
    EmployeeUNI.unique_id, Employees.name
FROM 
    Employees
LEFT JOIN 
    EmployeeUNI 
ON 
    Employees.id = EmployeeUNI.id;
```