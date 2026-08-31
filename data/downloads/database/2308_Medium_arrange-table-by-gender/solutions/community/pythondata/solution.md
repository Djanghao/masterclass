# Pandas iloc

**Author:** true-detective
**Votes:** 2
**Link:** [https://leetcode.com/problems/arrange-table-by-gender/solutions/4230293/](https://leetcode.com/problems/arrange-table-by-gender/solutions/4230293/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
First sort all by `user_id`.
separate each gender into separate variables.
Just like python lists that can be updated with slices as follows:
`a = [1, 2, 3]`
`a[::2] = [4, 5]`
`a -> [4, 2, 5]`

we can update multiple rows at the same time using `iloc` accessor and slicing.

# Code
```
import pandas as pd

def arrange_table(genders: pd.DataFrame) -> pd.DataFrame:
    genders.sort_values('user_id', inplace=True)
    female = genders[genders.gender == 'female']
    male = genders[genders.gender == 'male']
    other = genders[genders.gender == 'other']
    genders.iloc[::3] = female
    genders.iloc[1::3] = other
    genders.iloc[2::3] = male
    return genders
```