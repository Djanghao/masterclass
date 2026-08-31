# Pandas 100% working solution

**Author:** d_sushkov
**Votes:** 10
**Link:** [https://leetcode.com/problems/employee-bonus/solutions/5652487/](https://leetcode.com/problems/employee-bonus/solutions/5652487/)

---

# Code
```
import pandas as pd

def employee_bonus(employee: pd.DataFrame, bonus: pd.DataFrame) -> pd.DataFrame:
    # Perform a left join on the 'empId' column
    merged_df = pd.merge(employee, bonus, on='empId', how='left')
    
    # Filter rows where bonus is less than 1000 or is NaN
    result = merged_df[(merged_df['bonus'] < 1000) | (merged_df['bonus'].isna())]
    
    # Select only the 'name' and 'bonus' columns
    return result[['name', 'bonus']]    
```