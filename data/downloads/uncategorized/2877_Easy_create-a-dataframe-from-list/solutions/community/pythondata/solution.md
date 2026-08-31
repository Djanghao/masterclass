# Easy Beginner Friendly || Pandas || Beats 90% ||

**Author:** vaish_1929
**Votes:** 36
**Link:** [https://leetcode.com/problems/create-a-dataframe-from-list/solutions/4140937/](https://leetcode.com/problems/create-a-dataframe-from-list/solutions/4140937/)

---

# Intuition
The problem asks us to create a DataFrame from a given 2D list containing student IDs and ages. We need to ensure that the DataFrame has two columns named 'student_id' and 'age' and is in the same order as the original 2D list.

# Approach
To solve this problem, we can use the Pandas library in Python. We first define the column names as 'student_id' and 'age', and then create a DataFrame using the provided student_data and these column names.

# Complexity
- Time complexity: Creating the DataFrame from the 2D list takes O(n) time, where n is the number of rows in the student_data list.
- Space complexity: The space complexity is also O(n) as we create a DataFrame to store the data.

# Code
```python
import pandas as pd

def createDataframe(student_data: List[List[int]]) -> pd.DataFrame:
    column_names = ['student_id', 'age']
    result = pd.DataFrame(student_data, columns=column_names)
    return result
