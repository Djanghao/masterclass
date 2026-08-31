# easy to understand PANDA solution

**Author:** midttalbe
**Votes:** 11
**Link:** [https://leetcode.com/problems/product-price-at-a-given-date/solutions/4133923/](https://leetcode.com/problems/product-price-at-a-given-date/solutions/4133923/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
I used sort_values and drop_duplicates to keep last known price where change_date <= '2019-08-16'.

Then we need to get all the distinct product_id to do a merge with LEFT operator.

Finally, we need to fillna with 10 to replace null and rename the column to 'price'.

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

def price_at_given_date(products: pd.DataFrame) -> pd.DataFrame:
      last_price = products[products['change_date'] <= '2019-08-16'].sort_values(by=['product_id','change_date'],ascending=[True, False]).drop_duplicates(subset=['product_id'],keep='first')
      output = pd.merge(products[['product_id']].drop_duplicates(),last_price[['product_id','new_price']],how='left').fillna(10).rename(columns={'new_price':'price'})
      return output 
```