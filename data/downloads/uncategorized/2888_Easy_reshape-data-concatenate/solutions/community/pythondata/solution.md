# LIne By Line Explanation || Easy Solution Beginner Friendly || Pandas ||

**Author:** Pratikk_Rathod
**Votes:** 20
**Link:** [https://leetcode.com/problems/reshape-data-concatenate/solutions/4141091/](https://leetcode.com/problems/reshape-data-concatenate/solutions/4141091/)

---

# Intuition
The problem seems to ask for a solution to concatenate two given Pandas DataFrames, 'df1' and 'df2', into a single DataFrame.

# Approach
To solve this problem, we can utilize the Pandas library in Python. We use the `pd.concat()` function to concatenate 'df1' and 'df2' along the rows (vertically) and return the resulting DataFrame.

# Complexity
- Time complexity:
  - The time complexity depends on the sizes of 'df1' and 'df2' but can be considered as O(n), where n is the combined number of rows in both DataFrames.

- Space complexity:
  - The space complexity is O(n) because we create a new DataFrame containing the concatenated data.

# Code
```python
import pandas as pd

def concatenateTables(df1: pd.DataFrame, df2: pd.DataFrame) -> pd.DataFrame:
    return pd.concat([df1, df2])
