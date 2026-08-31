# 🔥💯 [Pandas] An Effortless and Simple Approach! (With Comments) 🔥💯

**Author:** sriganesh777
**Votes:** 98
**Link:** [https://leetcode.com/problems/second-highest-salary/solutions/3859199/](https://leetcode.com/problems/second-highest-salary/solutions/3859199/)

---

# Approach
<!-- Describe your approach to solving the problem. -->
- **Drop Duplicates and Get Unique Salaries:** To find the second highest salary, we should drop any duplicate salary values as we don't want to consider duplicates as separate salary ranks. Use the drop_duplicates() function on the 'salary' column to get unique salary values.

- **Sort Salaries in Descending Order:** After obtaining the unique salaries, sort them in descending order using the nlargest function with an argument of 2. This will give us the two highest salaries, with the first being the highest and the second being the second highest.

- **Retrieve the Second Highest Salary:** Check if the unique salaries contain at least two values (length >= 2). If it does, then the second highest salary exists, and we can retrieve it using iloc[-1], which gets the last element of the sorted unique salaries. If there are fewer than two unique salaries (length < 2), it means there is no second highest salary, and we set the second_highest variable to None.

- **Return the Result:** Finally, create a new DataFrame result_df containing the second highest salary, and return it. The resulting DataFrame will have a single row containing the second highest salary under the column name 'SecondHighestSalary'. If there is no second highest salary, the DataFrame will have a single row containing 'None'.

# Code
```
import pandas as pd

def second_highest_salary(employee: pd.DataFrame) -> pd.DataFrame:
    # Drop any duplicate salary values to avoid counting duplicates as separate salary ranks
    unique_salaries = employee['salary'].drop_duplicates()

    # Sort the unique salaries in descending order and get the second highest salary
    second_highest = unique_salaries.nlargest(2).iloc[-1] if len(unique_salaries) >= 2 else None

    # If the second highest salary doesn't exist (e.g., there are fewer than two unique salaries), return None
    if second_highest is None:
        return pd.DataFrame({'SecondHighestSalary': [None]})

    # Create a DataFrame with the second highest salary
    result_df = pd.DataFrame({'SecondHighestSalary': [second_highest]})

    return result_df
```

![upvote img.jpg](./images/0.jpeg)
