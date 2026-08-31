# Easy Solution Beginner Friendly || Pandas || Beats 90%

**Author:** vaish_1929
**Votes:** 31
**Link:** [https://leetcode.com/problems/get-the-size-of-a-dataframe/solutions/4140949/](https://leetcode.com/problems/get-the-size-of-a-dataframe/solutions/4140949/)

---

# Intuition
The problem asks us to find the size (number of rows and columns) of a given DataFrame.

# Approach
To solve this problem, we can use the Pandas library in Python. We can directly use the `.shape` attribute of the DataFrame to get the number of rows and columns. We return the result as an array containing the number of rows and columns.

# Complexity
- Time complexity: The time complexity is O(1) because accessing the `.shape` attribute of a DataFrame is a constant-time operation.
- Space complexity: The space complexity is O(1) as we only return a small array containing two integers.

# Code
```python
import pandas as pd

def getDataframeSize(players: pd.DataFrame) -> List[int]:
    return [players.shape[0], players.shape[1]]
    # OR
    return list(players.shape)
