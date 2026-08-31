# Old school solution (iteration by rows)

**Author:** Inveterate_Enthusiast
**Votes:** 1
**Link:** [https://leetcode.com/problems/change-null-values-in-a-table-to-the-previous-value/solutions/5913063/](https://leetcode.com/problems/change-null-values-in-a-table-to-the-previous-value/solutions/5913063/)

---

# Code on Python
```python
import pandas as pd

def change_null_values(coffee_shop: pd.DataFrame) -> pd.DataFrame:
    tempDrink = None
    for index, row in coffee_shop.iterrows():
        if not tempDrink or pd.notna(row["drink"]):
            tempDrink = row["drink"]
        else:
            coffee_shop.loc[index, "drink"] = tempDrink

    return coffee_shop
```
```python
import pandas as pd

def change_null_values1(coffee_shop: pd.DataFrame) -> pd.DataFrame:
    return coffee_shop.fillna(method="ffill")
```
---
# Code on PostgreSQL
```postgresql []
-- Write your PostgreSQL query statement below
WITH bool AS (
    SELECT
        *,
        (CASE WHEN drink IS NULL THEN 0 ELSE 1 END) AS bool,
        ROW_NUMBER() OVER() AS row
    FROM CoffeeShop
),
groups AS (
    SELECT
        *,
        SUM(bool) OVER(ORDER BY row ASC) AS our_group
    FROM bool
)
SELECT
    id,
    COALESCE(drink, FIRST_VALUE(drink) OVER(PARTITION BY our_group)) AS drink
FROM groups
```