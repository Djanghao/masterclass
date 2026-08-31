# [Pandas] || Simple 2 steps code (Beginner Friendly) ...

**Author:** sriganesh777
**Votes:** 61
**Link:** [https://leetcode.com/problems/replace-employee-id-with-the-unique-identifier/solutions/3946968/](https://leetcode.com/problems/replace-employee-id-with-the-unique-identifier/solutions/3946968/)

---



# Code
```
import pandas as pd

def replace_employee_id(employees: pd.DataFrame, employee_uni: pd.DataFrame) -> pd.DataFrame:
    # Merge the two tables on the 'id' column using a left join
    merged = employees.merge(employee_uni, on='id', how='left')
    
    # Return the result table with the 'unique_id' column
    result = merged[['unique_id','name']]
    
    return result

```

![upvote img.jpg](./images/0.jpeg)
