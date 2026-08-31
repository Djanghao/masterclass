# Intuitive //, %, nothing hard.

**Author:** Elvis_XV
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximize-items/solutions/5107421/](https://leetcode.com/problems/maximize-items/solutions/5107421/)

---

# Intuition
find the area for prime eligible: 500,000 divided by the area used for 1 unit of prime eligible package. We want an integer so we used //. Then we get the number of prime package and multiple by the number inside the package.

Same idea for no prime: We want the remaining area, which is the remainder of 500,000 divided by prime packages. Hence we use %. Then we find the number of no prime package by //. And multiple package number by package item to get total items.


# Code
```
import pandas as pd

def maximize_items(inventory: pd.DataFrame) -> pd.DataFrame:
    #Calculate the square used for combination prime & no prime, and the number of items in each package
    #Also sort to let prime be first for later np calculations
    df = inventory.groupby('item_type').agg(foot=('square_footage','sum'),cnt = ('square_footage','count')).reset_index().sort_values('item_type',ascending=False)

    #Find the area used for prime eligible then calculate area for no prime
    df['item_count'] = np.where(
        df['item_type'] == 'prime_eligible', 500000//df['foot'] * df['cnt'], 500000%df['foot'][1]//df['foot'] * df['cnt']
    )

    return df[['item_type','item_count']]
```