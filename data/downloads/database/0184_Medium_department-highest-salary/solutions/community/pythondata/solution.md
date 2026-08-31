# 🔥💯 [Pandas] Very simple Step by step Process (detailed)🔥💯

**Author:** sriganesh777
**Votes:** 142
**Link:** [https://leetcode.com/problems/department-highest-salary/solutions/3861495/](https://leetcode.com/problems/department-highest-salary/solutions/3861495/)

---


# Approach
<!-- Describe your approach to solving the problem. -->
The approach involves merging the DataFrames, grouping by department, and then finding the employees with the highest salary within each group using the max function and boolean indexing. The function handles empty table scenarios and correctly renames the columns as specified.

# Detailed procedure
- Check if either the employee or department DataFrame is empty. If either of them is empty, return an empty DataFrame with the column names ['Department', 'Employee', 'Salary'].
```
    if employee.empty or department.empty:
        return pd.DataFrame(columns=['Department','Employee', 'Salary'])
```
- Merge the employee and department DataFrames on 'departmentId' and 'id' columns, respectively, using the merge function.
```
    merged_df = employee.merge(department, left_on='departmentId', right_on='id', suffixes=('_employee', '_department'))
```
- Use the groupby function to group data in merged_df by 'departmentId' and apply a lambda function to find employees with the highest salary in each group.
```
    highest_salary_df = merged_df.groupby('departmentId').apply(lambda x: x[x['salary'] == x['salary'].max()])
```
- Reset the index of highest_salary_df to remove the group labels and obtain a flat DataFrame.
```
    highest_salary_df = highest_salary_df.reset_index(drop=True)
```
- Select the required columns 'name_department', 'name_employee', and 'salary' from highest_salary_df to get the department name, employee name, and salary of employees with the highest salary in each department.
```
    result_df = highest_salary_df[['name_department', 'name_employee', 'salary']]
```
- Rename the columns of the resulting DataFrame to ['Department', 'Employee', 'Salary'] as specified.
```
    result_df.columns = ['Department','Employee', 'Salary']
```
- Return the resulting DataFrame result_df containing employees with the highest salary in each department.



# Code
```
import pandas as pd

def department_highest_salary(employee: pd.DataFrame, department: pd.DataFrame) -> pd.DataFrame:
    if employee.empty or department.empty:
        return pd.DataFrame(columns=['Department','Employee', 'Salary'])
    
    # Merge the employee and department DataFrames on 'departmentId' and 'id' columns
    merged_df = employee.merge(department, left_on='departmentId', right_on='id', suffixes=('_employee', '_department'))
    
    # Use groupby to group data by 'departmentId' and apply a lambda function to get employees with highest salary in each group
    highest_salary_df = merged_df.groupby('departmentId').apply(lambda x: x[x['salary'] == x['salary'].max()])
    
    # Drop the duplicate 'departmentId' column and reset the index
    highest_salary_df = highest_salary_df.reset_index(drop=True)
    
    # Select the required columns and return the result
    result_df = highest_salary_df[['name_department', 'name_employee', 'salary']]
    
    # Rename the columns as specified
    result_df.columns = ['Department','Employee', 'Salary']
    
    return result_df
```

# Please upvote the solution which motivates me to share high quality solutions like this \uD83E\uDD7A Thank You \u2764\uFE0F.