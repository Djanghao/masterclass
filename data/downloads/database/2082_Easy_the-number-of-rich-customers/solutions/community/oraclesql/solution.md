# ✅ Clean code, Correct

**Author:** Piotr_Maminski
**Votes:** 0
**Link:** [https://leetcode.com/problems/the-number-of-rich-customers/solutions/6037128/](https://leetcode.com/problems/the-number-of-rich-customers/solutions/6037128/)

---

# Upvote if I should write premium solutions and if anyone reads them. That way I will know.
![image.png](./images/0.png)

# Clean code
```pythondata [Pandas]
import pandas as pd

def count_rich_customers(store: pd.DataFrame) -> pd.DataFrame:
    rich_customers = store[store['amount'] > 500]
    count = rich_customers['customer_id'].nunique()
    answer = pd.DataFrame({'rich_count': [count]})
    return answer
```
```mysql [MySQL,PostreSQL,Oracle,MSServer]
SELECT
    COUNT(DISTINCT customer_id) AS rich_count
FROM
    Store
WHERE
    amount > 500;
```
# I'll expand if someone even reads it.
# Have a nice day! <3
![image.png](./images/1.png)