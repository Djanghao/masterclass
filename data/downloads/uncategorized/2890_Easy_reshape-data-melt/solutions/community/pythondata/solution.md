# LIne By Line Explanation || Easy Solution Beginner Friendly || Pandas ||

**Author:** Pratikk_Rathod
**Votes:** 25
**Link:** [https://leetcode.com/problems/reshape-data-melt/solutions/4141084/](https://leetcode.com/problems/reshape-data-melt/solutions/4141084/)

---

# Intuition
The problem seems to ask for a solution to reshape (melt) a given Pandas DataFrame named 'report'. The goal is to convert the table from a wide format to a long format where the 'product' column remains as-is, and the columns corresponding to different quarters are melted into a single column 'quarter', with the corresponding sales values in the 'value' column.

# Approach
To solve this problem, we can utilize the Pandas library in Python. We use the `.melt()` function to reshape the 'report' DataFrame. We specify the 'product' column as the identifier variable using the `id_vars` parameter, and the column names for different quarters as the variable names to be melted using the `var_name` parameter. The melted sales values are stored in the 'value' column.

# Complexity
- Time complexity:
  - The time complexity depends on the size of the 'report' DataFrame but can be considered as O(n), where n is the number of cells in the DataFrame.

- Space complexity:
  - The space complexity is O(n) because we create a new DataFrame in the melted format.

# Code
```python
import pandas as pd

def meltTable(report: pd.DataFrame) -> pd.DataFrame:
    return pd.melt(report, id_vars=['product'], var_name='quarter', value_name='sales')
