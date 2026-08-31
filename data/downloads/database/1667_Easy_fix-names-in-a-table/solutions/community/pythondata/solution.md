# 🔥💯 2 steps Pandas approach || MySQL: (With Comments and explanation) 🔥💯

**Author:** sriganesh777
**Votes:** 74
**Link:** [https://leetcode.com/problems/fix-names-in-a-table/solutions/3853461/](https://leetcode.com/problems/fix-names-in-a-table/solutions/3853461/)

---

# Pandas Approach
- Use the str.capitalize() method to fix the names
- Sort the result table by 'user_id' in ascending order
- Return the result_df, which will contain the fixed names and sorted by 'user_id' in ascending order.
# Pandas Code
```
import pandas as pd

def fix_names(users: pd.DataFrame) -> pd.DataFrame:
    # Apply the str.capitalize() function to fix the names
    users['name'] = users['name'].str.capitalize()
    
    # Sort the result table by user_id in ascending order
    result_df = users.sort_values(by='user_id', ascending=True)
    
    return result_df
```

# MySQL code
```
UPDATE Users
SET name = CONCAT(UPPER(LEFT(name, 1)), LOWER(SUBSTRING(name, 2)));
```
In the MySQL query, we use the UPPER, LEFT, and LOWER functions to fix the names. The UPPER function converts the first character of the name to uppercase, the LEFT function extracts the first character, and the LOWER function converts the rest of the characters to lowercase. We then use CONCAT to combine the fixed first character with the fixed rest of the name.

After executing the query, the 'name' column in the 'Users' table will be updated with the fixed names.
![upvote img.jpg](./images/0.jpeg)
