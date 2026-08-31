# 🔥💯Very Simple and clean Pandas  (With Comments) 🔥💯

**Author:** sriganesh777
**Votes:** 173
**Link:** [https://leetcode.com/problems/nth-highest-salary/solutions/3858402/](https://leetcode.com/problems/nth-highest-salary/solutions/3858402/)

---


# Approach
- Drop any duplicate salary values: Use the drop_duplicates() function on the 'salary' column to remove any duplicate salary values, if present. This step is essential to avoid counting duplicates as separate salary ranks.

- Sort the unique salaries: Use the sort_values() function on the unique salary values to sort them in descending order.

- Check if N is within the valid range: Verify if the desired Nth highest salary is within the range of unique salary values available in the DataFrame. If N exceeds the number of unique salaries, there is no Nth highest salary, and we return 'None'.

- Get the Nth highest salary: Use iloc[N - 1] to access the Nth highest salary from the sorted salaries. Subtract 1 from N because Python uses zero-based indexing
# Code
```
import pandas as pd

def nth_highest_salary(employee: pd.DataFrame, N: int) -> pd.DataFrame:

    # Drop any duplicate salary values to avoid counting duplicates as separate salary ranks
    unique_salaries = employee['salary'].drop_duplicates()

    # Sort the unique salaries in descending order and get the Nth highest salary
    sorted_salaries = unique_salaries.sort_values(ascending=False)

    # If N exceeds the number of unique salaries, return None
    if N > len(sorted_salaries):
        return pd.DataFrame({'Nth Highest Salary': [None]})
    
    # Get the Nth highest salary from the sorted salaries
    nth_highest = sorted_salaries.iloc[N - 1]
    
    return pd.DataFrame({'Nth Highest Salary': [nth_highest]})
```
![upvote img.jpg](./images/0.jpeg)
