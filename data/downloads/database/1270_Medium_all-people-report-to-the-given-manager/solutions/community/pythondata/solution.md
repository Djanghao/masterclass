# Pandas for loop.

**Author:** piocarz
**Votes:** 2
**Link:** [https://leetcode.com/problems/all-people-report-to-the-given-manager/solutions/4101047/](https://leetcode.com/problems/all-people-report-to-the-given-manager/solutions/4101047/)

---

# Intuition
Self join 3 times in for loop. everytime pick only empoyee_id  who was manager, at first time equal to 1. Also everytime change this column name to manager, to avoid automatic suffixes. Best to explain on example.

# Approach
Let's take for example official one:
1. First we filter employees where employee_id == 1, we have something like this: 
```
employee_id employee_name  manager_id
          1          Boss           1
```
2. From prevoius managers, we take only, `employee_id` and change its name to `manager`. Join it with original employees, and we got this:
```
employee_id employee_name  manager_id  manager
          1          Boss           1        1
          2           Bob           1        1
         77        Robert           1        1
```
3. Again, we take only first column, now potential new managers on `ALL levels` = `previous`+ `recent new level` (notice we still have 1 as manager, so its not like we are goin deeper and deeper, we just widen our search). After another inner join we got this:
```
employee_id employee_name  manager_id  manager
          1          Boss           1        1
          2           Bob           1        1
         77        Robert           1        1
          4        Daniel           2        2
```
4. Thanks to inner join, and fact that `employee_id` are not duplicated (and we are using every time this `employee_id` to create `manager` column / dataframe ), it doesn't, have to be limited to 3 times. It could go 100 times, and still, we will get only relevant people, without duplicates.
```
employee_id employee_name  manager_id  manager
          1          Boss           1        1
          2           Bob           1        1
         77        Robert           1        1
          4        Daniel           2        2
          7          Luis           4        4
```

# Code
```
import pandas as pd

def find_reporting_people(employees: pd.DataFrame) -> pd.DataFrame:

    managers = employees.query("employee_id == 1")
    for _ in range(3):
        managers = managers["employee_id"].to_frame("manager")
        managers = employees.merge(managers, left_on = "manager_id", right_on = "manager")
    return managers[["employee_id"]].query("employee_id != 1")
```