# Beat 100%

**Author:** sankai
**Votes:** 0
**Link:** [https://leetcode.com/problems/the-category-of-each-member-in-the-store/solutions/6086715/](https://leetcode.com/problems/the-category-of-each-member-in-the-store/solutions/6086715/)

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
```pythondata []
import pandas as pd

def find_categories(members: pd.DataFrame, visits: pd.DataFrame, purchases: pd.DataFrame) -> pd.DataFrame:
    merged_df1 = visits.merge(purchases, how='left', on='visit_id')
    merged_df2 = merged_df1.merge(members, how='right', on='member_id')
    grouped_df1 = merged_df2.groupby(['member_id', 'name']).agg(total_visits=('visit_date', 'count'), total_purchases=('charged_amount', 'count')).reset_index()
    grouped_df1['conversion_rate'] = grouped_df1.total_purchases / grouped_df1.total_visits
    grouped_df1['category'] = grouped_df1.conversion_rate.apply(lambda x: 'Diamond' if x>= 0.8 else ('Gold' if 0.8>x>=0.5 else ('Silver' if x<0.5 else 'Bronze')))

    return grouped_df1[['member_id', 'name', 'category']]

    
```