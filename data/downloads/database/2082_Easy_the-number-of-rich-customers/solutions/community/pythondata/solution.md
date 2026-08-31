# 🔥[Pandas]Very simple Approach🔥

**Author:** sriganesh777
**Votes:** 35
**Link:** [https://leetcode.com/problems/the-number-of-rich-customers/solutions/3883540/](https://leetcode.com/problems/the-number-of-rich-customers/solutions/3883540/)

---

# Approach
<!-- Describe your approach to solving the problem. -->
### Filter Rich Customers:
Within the function, the DataFrame is filtered to include only rows where the amount column is greater than 500. This is done using boolean indexing.
### Calculate Unique Customer Count:
The number of unique customer IDs in the filtered DataFrame (rich_customers) is calculated using the nunique() method.
### Create Result DataFrame:
A new DataFrame named result_df is created with a single column named 'rich_count'. The calculated num_rich_customers value is added to this DataFrame.
# Code
```
import pandas as pd

def count_rich_customers(store: pd.DataFrame) -> pd.DataFrame:
    # Filter the DataFrame to include only rows with amount > 500
    rich_customers = store[store['amount'] > 500]
    
    # Get the number of unique customer IDs in the filtered DataFrame
    num_rich_customers = rich_customers['customer_id'].nunique()
    
    # Create a new DataFrame with the result
    result_df = pd.DataFrame({'rich_count': [num_rich_customers]})
    
    return result_df
```
![upvote img.jpg](./images/0.jpeg)
