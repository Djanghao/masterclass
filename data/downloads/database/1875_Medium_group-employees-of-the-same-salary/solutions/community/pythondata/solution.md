# Pandas Solution

**Author:** qichen0320
**Votes:** 2
**Link:** [https://leetcode.com/problems/group-employees-of-the-same-salary/solutions/4090365/](https://leetcode.com/problems/group-employees-of-the-same-salary/solutions/4090365/)

---


# Approach
<!-- Describe your approach to solving the problem. -->
I am more fluent in SQL, and in a SQL problem I would use the dense_rank command to solve this problem. Therefore, in Pandas, I used df.rank instead. and set parameters method='dense',ascending=True for the purpose of this problem.

I did use the df.rank twice as I drop the unique values after the first ranking actions.

# Code
```
import pandas as pd

def employees_of_same_salary(employees: pd.DataFrame) -> pd.DataFrame:
    employees['rank'] = employees['salary'].rank(method='dense',ascending=True)
    employees=employees[employees.duplicated(subset=['rank'],keep=False)]
    employees['rank'] = employees['salary'].rank(method='dense',ascending=True) # rank again to make sure the group numbers are correct
    employees['team_id']=employees['rank'].rank(method='dense',ascending=True).astype(int)
    return(employees[['employee_id','name','salary','team_id']].sort_values(['team_id','employee_id']))
```