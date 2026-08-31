# Pandas 2 lines - count & nunique

**Author:** piocarz
**Votes:** 1
**Link:** [https://leetcode.com/problems/unique-orders-and-customers-per-month/solutions/4125827/](https://leetcode.com/problems/unique-orders-and-customers-per-month/solutions/4125827/)

---

# Intuition
Its basically just creating 3 new columns:
- month - represented as year/month
- count of orders with invoices > 20 by that year/month
- number of unique customers responsible for those grouped by month orders

# Code
```
import pandas as pd

def unique_orders_and_customers(orders: pd.DataFrame) -> pd.DataFrame:
    df = orders.assign(month=orders.order_date.dt.strftime("%Y-%m")).query("invoice > 20")
    return df.groupby("month",as_index=0).agg(order_count=("order_id","count"),customer_count=("customer_id","nunique"))
```