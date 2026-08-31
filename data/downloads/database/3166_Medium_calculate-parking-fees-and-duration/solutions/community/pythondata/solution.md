# pandas

**Author:** huilinchen055
**Votes:** 1
**Link:** [https://leetcode.com/problems/calculate-parking-fees-and-duration/solutions/5430422/](https://leetcode.com/problems/calculate-parking-fees-and-duration/solutions/5430422/)

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

def calculate_fees_and_duration(parking_transactions: pd.DataFrame) -> pd.DataFrame:
    parking_transactions['diff']=(parking_transactions['exit_time']-parking_transactions['entry_time']).dt.total_seconds()/ 3600
    # result = parking_transactions.groupby('car_id').agg(total_fee_paid=pd.NamedAgg(column="fee_paid", aggfunc="sum"),avg_hourly_fee=pd.NamedAgg(column=["diff"], aggfunc="mean"))
    df1 = parking_transactions.groupby(['car_id']).agg(
    total_fee_paid=pd.NamedAgg(column="fee_paid", aggfunc="sum"),
    total_hours=pd.NamedAgg(column="diff", aggfunc="sum")
).reset_index()
    df2 = parking_transactions.groupby(['car_id','lot_id'])['diff'].sum().reset_index().sort_values(by=['car_id','diff'], ascending = [True, False]).drop_duplicates(subset=['car_id']).drop(columns = ['diff'])
    result = df1.merge(df2, how = 'left', on='car_id')
    result['avg_hourly_fee']=round(result['total_fee_paid']/result['total_hours'],2)
    result = result[['car_id', 'total_fee_paid', 'avg_hourly_fee', 'lot_id']].rename(columns={'lot_id': 'most_time_lot'})
    return result
```