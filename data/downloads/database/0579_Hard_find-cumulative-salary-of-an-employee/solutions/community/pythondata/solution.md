# rolling window with day trick

**Author:** Joooooooooooo
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-cumulative-salary-of-an-employee/solutions/5667148/](https://leetcode.com/problems/find-cumulative-salary-of-an-employee/solutions/5667148/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```pythondata []
import pandas as pd

def cumulative_salary(employee: pd.DataFrame) -> pd.DataFrame:
    # filter out latest month
    employee['rank'] = employee.groupby('id')['month'].rank(ascending=False)
    employee = employee.query('rank!=1')
    
    # date time feature with day trick
    employee['month'] = pd.to_datetime(employee.month,format='%d')
    employee.sort_values(['id','month'],inplace=True)
    employee = employee.set_index('month')

    # rolling window
    result =  employee.groupby('id')['salary'].rolling(window='3d').sum().reset_index()
    result['month'] = result['month'].dt.day
    return result.sort_values(['id','month'],ascending=[True,False])

```