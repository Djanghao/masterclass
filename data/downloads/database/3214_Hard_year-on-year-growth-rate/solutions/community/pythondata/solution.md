# step by step detail comment | groupby()[].shift(-1) = lag() in mysql

**Author:** zhangmanyuzmy
**Votes:** 0
**Link:** [https://leetcode.com/problems/year-on-year-growth-rate/solutions/5492502/](https://leetcode.com/problems/year-on-year-growth-rate/solutions/5492502/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
import pandas as pd

def calculate_yoy_growth(user_transactions: pd.DataFrame) -> pd.DataFrame:
    # 1. convert transaction date to year
    user_transactions['year'] = pd.to_datetime(user_transactions['transaction_date']).dt.year
    # 2. group by year and product_id to get curr_year_spend
    user_transactions = user_transactions.groupby(['year', 'product_id']).agg(
        curr_year_spend = ('spend', 'sum')
    ).reset_index()
    # 3. first sort and then get prev year spend
    user_transactions = user_transactions.sort_values(by = ['product_id', 'year'], ascending = [1, 1])
    user_transactions['prev_year_spend'] = user_transactions.groupby('product_id')['curr_year_spend'].shift(periods = 1)
    # 4. compute yoy_rate
    user_transactions['yoy_rate'] = round(100.0 * (user_transactions['curr_year_spend'] - user_transactions['prev_year_spend']) / user_transactions['prev_year_spend'], 2)
    # 5. sort and return
    return user_transactions.sort_values(by = ['product_id', 'year'], ascending = [1, 1])
```