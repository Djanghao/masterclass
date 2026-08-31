# Official Solution

**Link:** [https://leetcode.com/problems/employees-with-missing-information/solution/](https://leetcode.com/problems/employees-with-missing-information/solution/)

---

[TOC]

# Solution

---

## pandas

### Approach 1: Using `XOR` ("exclusive or")

The use of set operations significantly simplifies the logic needed to identify discrepancies between the two datasets. Instead of iterating over both tables and manually checking for the presence or absence of each `employee_id`, the solution elegantly leverages Python's built-in set functionalities.

#### Intuition

Here's the breakdown of the code's logic and intuition:

**Understanding the DataFrames**

- **`employees` DataFrame**: Contains employee records with at least two columns: `employee_id` and `name`.
- **`salaries` DataFrame**: Contains salary information with at least two columns: `employee_id` and `salary`.

  Both DataFrames are indexed by `employee_id`, which is unique across entries within each table but may not be consistently present across both tables.

**Key Steps and Their Intuition**

1. **Conversion to Sets**: The first step involves converting the `employee_id` column of each DataFrame into a set:
   - `set(employees.employee_id)`: Creates a set of employee IDs from the `employees` DataFrame.
   - `set(salaries.employee_id)`: Creates a set of employee IDs from the `salaries` DataFrame.

   This conversion is crucial for leveraging the properties of sets, which inherently remove duplicates and allow for efficient set operations like the symmetric difference.

2. **Symmetric Difference (`^`)**: The operation `set(employees.employee_id) ^ set(salaries.employee_id)` computes the symmetric difference between the two sets of IDs. The symmetric difference between two sets returns a set containing elements present in either set but not in both. In the context of this problem, it identifies:
   - Employee IDs present in the `employees` DataFrame but not in the `salaries` DataFrame (indicating missing salary information).
   - Employee IDs present in the `salaries` DataFrame but not in the `employees` DataFrame (indicating missing employee information, such as names).

3. **Sorting and Creating a DataFrame**: The sorted list of IDs from the symmetric difference operation ensures that the output is ordered by `employee_id` in ascending order, as required by the problem statement. This list is then used to create a new DataFrame:
   - `pd.DataFrame({"employee_id": sorted(...)})`: Constructs a new DataFrame with a single column, `employee_id`, containing the sorted IDs of employees with missing information.

#### Implementation

<iframe src="https://leetcode.com/playground/5pt9jfA2/shared" frameBorder="0" width="100%" height="174" name="5pt9jfA2"></iframe>

### Approach 2: Using Outer Join

The use of an outer join in the merge operation is a strategic choice that ensures no `employee_id` is overlooked, capturing the full scope of the dataset across both tables. Filtering for rows with any missing data is a direct and efficient method to highlight discrepancies, leveraging pandas' built-in functionality for handling missing values. By focusing on the `employee_id` column and ordering the results, the implementation provides a clear, concise output that directly addresses the problem statement. This method hinges on the `merge` function with an `outer` join and then filtering for rows where data is missing.


#### Intuition

Let's review the intuition behind each step given the following input DataFrames:

Employees DataFrame (`employees`):

| employee_id | name     |
| ----------- | -------- |
| 2           | Crew     |
| 4           | Haven    |
| 5           | Kristian |

<br>

Salaries DataFrame (`salaries`):

| employee_id | salary |
| ----------- | ------ |
| 5           | 76071  |
| 1           | 22517  |
| 4           | 63539  |

<br>

1. **Merging DataFrames on `employee_id` with an Outer Join**

- This step creates a complete view of the dataset, combining both employee names and salaries. The use of an outer join is crucial for identifying missing information because it retains all `employee_id`s, irrespective of whether the corresponding data is available in both tables.

   ```python
   merged_df = pd.merge(employees, salaries, on="employee_id", how="outer")
   ```
- The `outer` join ensures that the merged DataFrame includes all records from both `employees` and `salaries` DataFrames. If an `employee_id` exists in one DataFrame but not the other, the merged DataFrame will still include a row for this `employee_id`, with missing values (`NaN`) in the columns from the DataFrame where the `employee_id` was absent.

`merged_df`:

| employee_id | name     | salary |
| ----------- | -------- | ------ |
| 2           | Crew     | null   |
| 4           | Haven    | 63539  |
| 5           | Kristian | 76071  |
| 1           | null     | 22517  |

<br>


2. **Identifying Rows with Missing Values**

- This step pinpoints exactly which employees are missing information (either their name in the `employees` table or their salary in the `salaries` table). By focusing on rows with missing data, this effectively filters out all complete records, leaving only those with discrepancies.

   ```python
   missing_data_df = merged_df[merged_df.isna().any(axis=1)]
   ```
- The `.isna()` method identifies `NaN` values in the DataFrame, and `.any(axis=1)` checks each row to see if it contains any `NaN` values. Rows that return `True` for this condition have missing information in at least one column.

`missing_data_df`:

| employee_id | name  | salary |
| ----------- | ----- | ------ |
| 2           | Crew  | null   |
| 1           | null  | 22517  |

<br>


3. **Identifying Rows with Missing Values**

- This step isolates the `employee_id` column, which is the primary piece of information requested. By narrowing down to this column, the result is streamlined to only include the necessary data.

   ```python
   result_df = missing_data_df[["employee_id"]].sort_values(by="employee_id")
   ```
- Sorting the values by `employee_id` ensures that the output is organized in ascending order, as per the problem's requirements.

`result_df`:

| employee_id |
| ----------- |
| 1           |
| 2           |

<br>


#### Implementation

<iframe src="https://leetcode.com/playground/J2oidV8M/shared" frameBorder="0" width="100%" height="293" name="J2oidV8M"></iframe>

---

## Database

### Approach 1: Simulate Full Join via Unioning a Left and Right Join

The provided SQL solution adeptly addresses the problem of identifying employees with missing information across two tables, `Employees` and `Salaries`, without directly using a `FULL JOIN` operation, which might not be supported in all SQL environments. It ingeniously simulates a full outer join by combining the results of a `LEFT JOIN` and a `RIGHT JOIN` between the two tables, using the `UNION` operator to merge these results while removing duplicates. This method ensures that all employee records are considered, capturing instances where an employee's name or salary information is missing by including rows with `NULL` values in either the `name` or `salary` fields. The query then filters these merged results to isolate records with missing information, specifically targeting rows where either `name` or `salary` is `NULL`. Finally, it orders the remaining records by `employee_id` in ascending order, thereby producing a structured and clear output that lists all employees lacking complete information.  


#### Intuition

Let's break down the SQL query step by step and explain the intuition behind each part:

1. **Full Join Using Left and Right Joins**

   SQL's `FULL JOIN` operation combines the results of both `LEFT JOIN` and `RIGHT JOIN`, including all records from both tables, and fills in `NULL`s where there are no matches. Since not all database systems support `FULL JOIN` directly, this solution cleverly simulates it using a combination of `LEFT JOIN` and `RIGHT JOIN`, followed by a `UNION`.

   - **Left Join `Employees` and `Salaries`**: This part of the query retrieves all records from `Employees` and their matching records from `Salaries`. If there is no matching `employee_id` in `Salaries`, the salary columns for those records will be `NULL`.
   ```sql
   SELECT * FROM Employees LEFT JOIN Salaries USING(employee_id)
   ```
     

   - **Right Join `Employees` and `Salaries`**: Conversely, this retrieves all records from `Salaries` and their matching records from `Employees`. If there is no matching `employee_id` in `Employees`, the employee name columns for those records will be `NULL`.
   ```sql
   SELECT * FROM Employees RIGHT JOIN Salaries USING(employee_id)
   ```
   

   -  **Union of Left and Right Joins**:
   The `UNION` operator is used to combine the results of the left and right joins. `UNION` automatically removes duplicate rows that might occur in the case where an `employee_id` exists in both tables. This effectively simulates a full outer join by ensuring all unique `employee_id`s from both tables are included in the result, with `NULL` values where information is missing.



2. **Filtering for Missing Information**
   - After simulating the full join, the query filters the results to include only those rows where either `salary` or `name` is `NULL`. This directly targets employees with missing information, aligning with the query's goal.

   ```sql
   WHERE T.salary IS NULL OR T.name IS NULL
   ```


3. **Ordering the Results**

   - Finally, the query orders the results by `employee_id` in ascending order, as per the problem's requirements.

   ```sql
   ORDER BY employee_id;
   ```


#### Implementation


```mysql []
SELECT 
  T.employee_id 
FROM 
  (
    SELECT 
      * 
    FROM 
      Employees 
      LEFT JOIN Salaries USING(employee_id) 
    UNION 
    SELECT 
      * 
    FROM 
      Employees 
      RIGHT JOIN Salaries USING(employee_id)
  ) AS T 
WHERE 
  T.salary IS NULL 
  OR T.name IS NULL 
ORDER BY 
  employee_id;
```

### Approach 2: `UNION` with `WHERE ... NOT IN`

This SQL solution methodically addresses the problem of identifying missing employee information by checking each table for the presence of `employee_id`s that are not found in the other. It utilizes `WHERE ... NOT IN` clauses to filter for these discrepancies and then merges and sorts the results. This approach is particularly effective for databases where direct comparison operations between two tables are needed to find mismatches, offering a clear and systematic method to highlight missing data points.

#### Intuition

Let's break down the SQL query step by step and explain the intuition behind each part:


1. **First Query: Finding Employees Missing Salary Information**

 - **Subquery**: The inner query `(SELECT employee_id FROM Salaries)` generates a list of all employee IDs present in the `Salaries` table.
 - **Main Query**: The main query selects `employee_id` from the `Employees` table where the `employee_id` is not found in the list produced by the subquery. 
 - This effectively identifies employees who have a record in the `Employees` table (i.e., they are known to the company by name) but do not have corresponding salary information in the `Salaries` table. The use of `NOT IN` is crucial here as it filters out employees whose IDs are present in the `Salaries` table, leaving only those missing salary data.

   ```sql
   SELECT employee_id FROM Employees WHERE employee_id NOT IN (SELECT employee_id FROM Salaries)
   ```

2. **Second Query: Finding Employees Missing in Employees Table**

 - **Subquery**: Similar to the first query, but this time it generates a list of all employee IDs present in the `Employees` table.
 - **Main Query**: Selects `employee_id` from the `Salaries` table where the `employee_id` is not found in the list from the `Employees` table.
 - This identifies the opposite situation from the first query; it finds employees who have salary information recorded in the `Salaries` table but do not have a corresponding entry in the `Employees` table (i.e., their name or other details might be missing).

   ```sql
   SELECT employee_id FROM Salaries WHERE employee_id NOT IN (SELECT employee_id FROM Employees)
   ```

3. **Combining Results with UNION**

- The `UNION` operator is used to combine the results of the two queries above. It ensures that each `employee_id` is listed only once, even if it might meet the criteria of both queries (though logically, an ID should only meet one of the criteria if the data integrity is maintained).
- By using `UNION`, the solution aggregates all unique instances of missing information across both tables into a single list of `employee_id`s, irrespective of the type of missing information (name or salary).

### Ordering the Results

- The final instruction orders the combined results by `employee_id` in ascending order, as per the problem's requirements.

   ```sql
   ORDER BY employee_id ASC
   ```


#### Implementation


```mysql []
SELECT 
  employee_id 
FROM 
  Employees 
WHERE 
  employee_id NOT IN (
    SELECT 
      employee_id 
    FROM 
      Salaries
  ) 
UNION 
SELECT 
  employee_id 
FROM 
  Salaries 
WHERE 
  employee_id NOT IN (
    SELECT 
      employee_id 
    FROM 
      Employees
  ) 
ORDER BY 
  employee_id ASC
```