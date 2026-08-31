# LIne By Line Explanation || Easy Solution Beginner Friendly || Pandas ||

**Author:** Pratikk_Rathod
**Votes:** 20
**Link:** [https://leetcode.com/problems/change-data-type/solutions/4141063/](https://leetcode.com/problems/change-data-type/solutions/4141063/)

---

# Intuition
The problem appears to ask for a solution to change the data type of a specific column ('grade') in a given Pandas DataFrame named 'students' from a non-integer type to an integer type.

# Approach
To solve this problem, we can utilize the Pandas library in Python. We create a new DataFrame 'df' based on the 'students' DataFrame and then use the `.astype()` method to change the data type of the 'grade' column to integer.

# Complexity
- Time complexity:
  - The time complexity depends on the size of the 'students' DataFrame but can be considered as O(n) because it involves creating a new DataFrame and converting the 'grade' column.

- Space complexity:
  - The space complexity is also O(n) because we are creating a new DataFrame 'df' that has the same size as the 'students' DataFrame.

# Code
```python
import pandas as pd

def changeDatatype(students: pd.DataFrame) -> pd.DataFrame:
    df = pd.DataFrame(students)
    df['grade'] = df[['grade']].astype(int) # changing datatype to int.
    return df
