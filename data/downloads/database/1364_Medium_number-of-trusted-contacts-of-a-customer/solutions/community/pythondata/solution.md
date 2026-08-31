# Solution with merging and grouping

**Author:** Inveterate_Enthusiast
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-trusted-contacts-of-a-customer/solutions/6063562/](https://leetcode.com/problems/number-of-trusted-contacts-of-a-customer/solutions/6063562/)

---

# Code on Python
```python
import pandas as pd

def count_trusted_contacts(customers: pd.DataFrame, contacts: pd.DataFrame, invoices: pd.DataFrame) -> pd.DataFrame:
    set_customers = set(customers["email"].values)
    merged = pd.merge(
        left=customers[["customer_id", "customer_name"]].rename(columns={"customer_id": "user_id"}),
        right=contacts[["user_id", "contact_email"]],
        on="user_id",
        how="left",
        copy=False
    )
    grouped = (merged
               .groupby(by=["user_id", "customer_name"], as_index=False)
               .agg(
                    contacts_cnt=("contact_email", "nunique"),
                    trusted_contacts_cnt=("contact_email", lambda x: x[x.isin(set_customers)].nunique())))
    return pd.merge(
        left=invoices,
        right=grouped,
        on="user_id",
        how="left"
    ).sort_values(by="invoice_id", ascending=True)[["invoice_id", "customer_name", "price", "contacts_cnt", "trusted_contacts_cnt"]]
```
---
# Code on PostgreSQL
```postgresql []
-- Write your PostgreSQL query statement below
SELECT
    main.invoice_id,
    cus_sub.customer_name,
    MAX(main.price) AS price,
    COUNT(con_sub.contact_name) AS contacts_cnt,
    COUNT(trust_sub.customer_name) AS trusted_contacts_cnt
FROM Invoices AS main

LEFT JOIN Customers AS cus_sub
    ON cus_sub.customer_id = main.user_id

LEFT JOIN Contacts AS con_sub
    ON con_sub.user_id = cus_sub.customer_id

LEFT JOIN Customers AS trust_sub
    ON trust_sub.email = con_sub.contact_email

GROUP BY main.invoice_id, cus_sub.customer_name
ORDER BY main.invoice_id ASC;
```