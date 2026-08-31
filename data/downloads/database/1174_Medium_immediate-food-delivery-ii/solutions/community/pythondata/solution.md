# pandas || 3 lines with explanation || T/S: 99% / 99%

**Author:** Spaulding_
**Votes:** 11
**Link:** [https://leetcode.com/problems/immediate-food-delivery-ii/solutions/4258208/](https://leetcode.com/problems/immediate-food-delivery-ii/solutions/4258208/)

---

Here's the plan:
1. Filter `delivery` for *first buys* to determine `df`. The denominator of the answer is `len(df)`.

1. Filter `df` for those rows which indicate an *immediate delivery*. The length of this frame is the numerator of the answer.
1. Round the ratio of these two quantities and return it as a percentage.
```
import pandas as pd

def immediate_food_delivery(delivery: pd.DataFrame) -> pd.DataFrame:

    den = len(df:= delivery.groupby("customer_id").min())                       #  <-- 1

    num = len(df[df.order_date == df.customer_pref_delivery_date]))             #  <-- 2

    return pd.DataFrame({"immediate_percentage": [num / den *100]}).round(2))   #  <-- 3
```
[https://leetcode.com/problems/immediate-food-delivery-ii/submissions/1093121422/?lang=pythondata](https://leetcode.com/problems/immediate-food-delivery-ii/submissions/1093121422/?lang=pythondata)



I could be wrong, but I think that time complexity is *O*(*N*) and space complexity is *O*(*N*), in which *N* ~ `len(delivery)`.