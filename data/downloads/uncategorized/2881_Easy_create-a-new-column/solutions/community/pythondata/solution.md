# Easy Solution Beginner Friendly || Pandas || LIne By Line Explanation ||

**Author:** vaish_1929
**Votes:** 25
**Link:** [https://leetcode.com/problems/create-a-new-column/solutions/4141035/](https://leetcode.com/problems/create-a-new-column/solutions/4141035/)

---

# Intuition
The problem appears to ask for a solution to create a new column named 'bonus' in a given Pandas DataFrame named 'employees'. The 'bonus' column should contain values that are twice the values in the 'salary' column.

# Approach
To solve this problem, we can utilize the Pandas library in Python. We can use the `.assign()` method to create a new 'bonus' column in the 'employees' DataFrame, and the values in this column can be calculated as 2 times the values in the 'salary' column.

# Complexity
- Time complexity:
  - The time complexity depends on the size of the 'employees' DataFrame but can be considered as O(n), where n is the number of rows in the DataFrame.

- Space complexity:
  - The space complexity is also dependent on the size of the 'employees' DataFrame but can be considered as O(n), where n is the number of rows in the DataFrame.

# Code
```python
import pandas as pd

def createBonusColumn(employees: pd.DataFrame) -> pd.DataFrame:
    return employees.assign(bonus=2 * employees['salary'])
    # OR
    employees['bonus'] = employees['salary'] * 2
    return employees
