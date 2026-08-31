# ✅ Video | Clean code | Correct

**Author:** Piotr_Maminski
**Votes:** 0
**Link:** [https://leetcode.com/problems/immediate-food-delivery-i/solutions/6037188/](https://leetcode.com/problems/immediate-food-delivery-i/solutions/6037188/)

---

# Upvote if I should write premium solutions and if anyone reads them. That way I will know.

https://youtu.be/j-aZU8X4fzg?si=F14KbBkwDDzpAuYf
![image.png](./images/0.png)



# Clear Code
```pythondata [Pandas]
import pandas as pd
from typing import Optional

def food_delivery(delivery_data: pd.DataFrame) -> pd.DataFrame:
    """
    Calculate the percentage of orders delivered on the customer's preferred delivery date.
    
    Args:
        delivery_data: DataFrame containing order_date and customer_pref_delivery_date columns
        
    Returns:
        DataFrame with a single column 'immediate_percentage' containing the calculated percentage
    """
    # Check if delivery date matches customer's preferred date
    on_time_deliveries = delivery_data['order_date'] == delivery_data['customer_pref_delivery_date']
    
    # Calculate metrics
    total_deliveries = len(delivery_data)
    immediate_deliveries = on_time_deliveries.sum()
    
    # Calculate percentage with 2 decimal places
    immediate_percentage = round(
        100 * immediate_deliveries / total_deliveries, 
        2
    )
    
    return pd.DataFrame({'immediate_percentage': [immediate_percentage]})
```
```pythondata [Pandas short]
import pandas as pd

def food_delivery(df: pd.DataFrame) -> pd.DataFrame:
    matched_dates = df['order_date'] == df['customer_pref_delivery_date']
    percentage = round(100 * matched_dates.mean(), 2)
    return pd.DataFrame({'immediate_percentage': [percentage]})
```
```mysql [MySQL]
SELECT 
    ROUND(
        100 * AVG(
            order_date = customer_pref_delivery_date
        ), 
        2
    ) AS immediate_percentage
FROM 
    Delivery;
```
```oraclesql [Oracle,PostreSQL,MySQL]
SELECT 
    ROUND(
        100 * AVG(
            CASE 
                WHEN order_date = customer_pref_delivery_date THEN 1 
                ELSE 0 
            END
        ), 
        2
    ) AS immediate_percentage
FROM 
    Delivery;
```
```mysql [MSServer,Oracle,PostreSQL,MySQL]
SELECT 
    ROUND(
        100.0 * AVG(
            CASE 
                WHEN order_date = customer_pref_delivery_date THEN 1.0 
                ELSE 0.0 
            END
        ), 
        2
    ) AS immediate_percentage
FROM 
    Delivery;
```
# I'll expand if someone even reads it.
# Have a nice day! <3
![image.png](./images/1.png)
