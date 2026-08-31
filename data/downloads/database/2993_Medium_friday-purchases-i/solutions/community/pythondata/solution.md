# Solution with filtering and grouping

**Author:** Inveterate_Enthusiast
**Votes:** 1
**Link:** [https://leetcode.com/problems/friday-purchases-i/solutions/5975427/](https://leetcode.com/problems/friday-purchases-i/solutions/5975427/)

---

# Code on Python
```python
import pandas as pd

def friday_purchases(purchases: pd.DataFrame) -> pd.DataFrame:
    filtered = purchases.loc[
        (purchases["purchase_date"].dt.year == 2023)
        & (purchases["purchase_date"].dt.month == 11)
        & (purchases["purchase_date"].dt.weekday == 4)
    ]
    filtered["first_week"] = pd.to_datetime(filtered["purchase_date"].dt.strftime("%Y-%m-01")).dt.isocalendar().week
    filtered["week_of_month"] = filtered["purchase_date"].dt.isocalendar().week - filtered["first_week"] + 1
    grouped = filtered.groupby(by=["week_of_month", "purchase_date"], as_index=False).agg(total_amount=("amount_spend", "sum"))
    return grouped.sort_values(by="week_of_month")
```
---
# Code on PostgreSQL
```postgresql []
-- Write your PostgreSQL query statement below
WITH with_week_num AS (
    SELECT
        *,
        ((EXTRACT(WEEK FROM purchase_date)) - (EXTRACT(WEEK FROM MAKE_DATE(EXTRACT(YEAR FROM purchase_date)::INTEGER, EXTRACT(MONTH FROM purchase_date)::INTEGER, 1))) + 1) AS week_of_month
    FROM Purchases

    WHERE EXTRACT(YEAR FROM purchase_date) = 2023
    AND EXTRACT(MONTH FROM purchase_date) = 11
    AND EXTRACT(DOW FROM purchase_date) = 5
)
SELECT
    week_of_month,
    purchase_date,
    SUM(amount_spend) AS total_amount
FROM with_week_num
GROUP BY 1, 2
ORDER BY week_of_month ASC;
```