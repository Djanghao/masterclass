# Python Solution Using roiling window

**Author:** subhrajyotinath98
**Votes:** 23
**Link:** [https://leetcode.com/problems/consecutive-numbers/solutions/4103210/](https://leetcode.com/problems/consecutive-numbers/solutions/4103210/)

---

# Intuition
When dealing with consecutive numbers in a dataset, it's often useful to look for patterns or sequences that can help identify these numbers. One way to identify consecutive numbers is by checking the variance over a rolling window. If the variance is zero, it means all numbers in that window are the same, indicating a sequence of consecutive identical numbers.

# Approach
Use the rolling method on the num column of the DataFrame to create a rolling window of size 3.
Calculate the variance for each window using the var method. This will give us the variance of the numbers in each window.
Add the variance as a new column named 'var' to the DataFrame.
Filter the rows where the variance is zero using the query method. This will give us the rows with consecutive identical numbers.
Extract the unique numbers from these rows using the unique method.
Return a new DataFrame with these unique consecutive numbers.
Complexity
# Time complexity:
The time complexity is primarily determined by the rolling variance calculation and the query operation. Both operations are linear with respect to the number of rows in the DataFrame, so the time complexity is O(n), where n is the number of rows in the DataFrame.
# Space complexity:
The space complexity is O(n) because we are creating a new column 'var' with the same number of rows as the original DataFrame.

```python []
import pandas as pd

def consecutive_numbers(logs: pd.DataFrame) -> pd.DataFrame:
    
    logs['var'] = logs.num.rolling(window=3).var()

    return pd.DataFrame(data = {'ConsecutiveNums' : logs.query('var == 0').num.unique()})

```
