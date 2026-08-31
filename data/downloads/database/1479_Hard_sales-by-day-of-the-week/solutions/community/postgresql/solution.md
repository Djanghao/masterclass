# Solution with pivot_table

**Author:** Inveterate_Enthusiast
**Votes:** 0
**Link:** [https://leetcode.com/problems/sales-by-day-of-the-week/solutions/6075455/](https://leetcode.com/problems/sales-by-day-of-the-week/solutions/6075455/)

---

# Code on Python
```python
import pandas as pd

def sales_by_day(orders: pd.DataFrame, items: pd.DataFrame) -> pd.DataFrame:
    week_days = pd.DataFrame({
        "day": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "num": [1, 2, 3, 4, 5, 6, 7]
    })
    crossed = pd.merge(
        left=week_days,
        right=items[["item_category"]].drop_duplicates(keep="first"),
        how="cross"
    )
    orders["day"] = orders["order_date"].dt.day_name()
    merged = pd.merge(
        left=orders,
        right=items,
        how="left",
        on="item_id"
    )
    grouped = merged.groupby(by=["item_category", "day"], as_index=False).agg(values=("quantity", "sum"))
    merged_2 = pd.merge(
        left=crossed,
        right=grouped,
        how="left",
        on=["day", "item_category"]
    ).rename(columns={"item_category": "Category"})
    pivot = merged_2.pivot_table(values="values", index="Category", columns="day", fill_value=0, dropna=False)
    pivot = pivot[week_days["day"].tolist()]
    return pivot.reset_index().sort_values(by="Category", ascending=True)
```
---
# Code on PostgreSQL
```postgresql []
-- Write your PostgreSQL query statement below
SELECT
    main.item_category AS Category,
    SUM(CASE WHEN EXTRACT(DOW FROM order_date) = 1 THEN COALESCE(sub.quantity, 0) ELSE 0 END) AS Monday,
    SUM(CASE WHEN EXTRACT(DOW FROM order_date) = 2 THEN COALESCE(sub.quantity, 0) ELSE 0 END) AS Tuesday,
    SUM(CASE WHEN EXTRACT(DOW FROM order_date) = 3 THEN COALESCE(sub.quantity, 0) ELSE 0 END) AS Wednesday,
    SUM(CASE WHEN EXTRACT(DOW FROM order_date) = 4 THEN COALESCE(sub.quantity, 0) ELSE 0 END) AS Thursday,
    SUM(CASE WHEN EXTRACT(DOW FROM order_date) = 5 THEN COALESCE(sub.quantity, 0) ELSE 0 END) AS Friday,
    SUM(CASE WHEN EXTRACT(DOW FROM order_date) = 6 THEN COALESCE(sub.quantity, 0) ELSE 0 END) AS Saturday,
    SUM(CASE WHEN EXTRACT(DOW FROM order_date) = 0 THEN COALESCE(sub.quantity, 0) ELSE 0 END) AS Sunday
FROM Items AS main

LEFT JOIN Orders AS sub
    ON sub.item_id = main.item_id

GROUP BY main.item_category
ORDER BY main.item_category ASC;
```