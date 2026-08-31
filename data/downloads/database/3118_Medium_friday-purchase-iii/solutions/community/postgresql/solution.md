# Long, but easy solution

**Author:** Inveterate_Enthusiast
**Votes:** 0
**Link:** [https://leetcode.com/problems/friday-purchase-iii/solutions/6006615/](https://leetcode.com/problems/friday-purchase-iii/solutions/6006615/)

---

# Code on Python
```python
import pandas as pd
from datetime import datetime

def friday_purchases(purchases: pd.DataFrame, users: pd.DataFrame) -> pd.DataFrame:
    start_date = datetime(2023, 11, 1)
    end_date = start_date + pd.offsets.MonthEnd(0)
    calendar = pd.DataFrame({
        "date": pd.date_range(start_date, end_date)
    })
    calendar["friday"] = calendar["date"].dt.day_name() == "Friday"
    calendar["first_date"] = calendar["date"].min()
    calendar["first_week"] = calendar["first_date"].dt.isocalendar().week
    calendar["week_of_month"] = calendar["date"].dt.isocalendar().week - calendar["first_week"] + 1
    calendar_merged = pd.merge(
        left=calendar.loc[calendar["friday"], ["date", "week_of_month"]],
        right=pd.DataFrame({"membership": ["VIP", "Premium"]}),
        how="cross"
    )

    purchases["friday"] = purchases["purchase_date"].dt.day_name() == "Friday"
    merged = pd.merge(
        left=purchases.loc[purchases["friday"]],
        right=users,
        how="left",
        on="user_id"
    )
    merged["membership"] = merged["membership"].astype("str")
    grouped = (merged
               .loc[merged["membership"].isin({"Premium", "VIP"})]
               .groupby(by=["membership", "purchase_date"], as_index=False).agg(total_amount=("amount_spend", "sum"))
               .rename(columns={"purchase_date": "date"}))

    result = pd.merge(
        left=calendar_merged,
        right=grouped,
        how="left",
        on=["date", "membership"]
    ).fillna(0)

    return result.drop(labels="date", axis=1).sort_values(by=["week_of_month", "membership"], ascending=[True, True])
```
---
# Code on PostgreSQL
```postgresql []
-- Write your PostgreSQL query statement below
WITH RECURSIVE calendar AS (
    SELECT '2023-11-1'::DATE AS date

    UNION ALL

    SELECT (date + INTERVAL '1 DAY')::DATE
    FROM calendar
    WHERE date < (('2023-11-1'::DATE + INTERVAL '1 MONTH') - INTERVAL '1 DAY')
),
merged_calendar AS (
    SELECT
        calendar.date,
        (EXTRACT(WEEK FROM date) - (EXTRACT(WEEK FROM (MIN(date) OVER()))) + 1) AS week_of_month,
        members.membership
    FROM calendar

    CROSS JOIN
        (SELECT UNNEST(ARRAY['VIP', 'Premium']) AS membership) AS members

    WHERE TRIM(TO_CHAR(date, 'Day')) = 'Friday'
),
grouped AS (
    SELECT
        pur.purchase_date,
        u.membership,
        SUM(amount_spend) AS total_amount
    FROM Purchases AS pur

    LEFT JOIN Users AS u
        ON u.user_id = pur.user_id

    WHERE u.membership IN ('Premium', 'VIP')
    AND TRIM(TO_CHAR(pur.purchase_date, 'Day')) = 'Friday'

    GROUP BY pur.purchase_date, u.membership
)
SELECT
    cal.week_of_month,
    cal.membership,
    COALESCE(gr.total_amount, 0) AS total_amount
FROM merged_calendar AS cal

LEFT JOIN grouped AS gr
    ON gr.purchase_date = cal.date
    AND gr.membership = cal.membership

ORDER BY cal.week_of_month ASC, membership ASC;
```