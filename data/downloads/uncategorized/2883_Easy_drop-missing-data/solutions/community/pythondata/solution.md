# Easy Solution Beginner Friendly || Pandas || LIne By Line Explanation |||

**Author:** Pratikk_Rathod
**Votes:** 20
**Link:** [https://leetcode.com/problems/drop-missing-data/solutions/4141046/](https://leetcode.com/problems/drop-missing-data/solutions/4141046/)

---

# Intuition
The problem appears to ask for a solution to remove rows with missing values in a specific column ('name') in a given Pandas DataFrame named 'students'.

# Approach
To solve this problem, we can utilize the Pandas library in Python. We can use the `.notnull()` method on the 'name' column of the 'students' DataFrame to identify rows with non-null values in the 'name' column. Then, we can create a new DataFrame containing only those rows.

# Complexity
- Time complexity:
  - The time complexity depends on the size of the 'students' DataFrame but can be considered as O(n), where n is the number of rows in the DataFrame.

- Space complexity:
  - The space complexity is O(n) as we are creating a new DataFrame containing only the rows with non-null 'name' values.

# Code
```python
import pandas as pd

def dropMissingData(students: pd.DataFrame) -> pd.DataFrame:
    return pd.DataFrame(students)[students['name'].notnull()]
