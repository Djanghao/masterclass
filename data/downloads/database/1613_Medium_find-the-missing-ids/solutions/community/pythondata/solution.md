# Very easy and memory/calculation efficient solution (100%/94%) using Pandas + Python;

**Author:** printmail9876
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-the-missing-ids/solutions/5835143/](https://leetcode.com/problems/find-the-missing-ids/solutions/5835143/)

---

# Intuition
Very easy and memory/calculation efficient solution (100%/94%) using Pandas + Python;

# Code
```pythondata []
import pandas as pd

def find_missing_ids(customers: pd.DataFrame) -> pd.DataFrame:
    mm = customers['customer_id'].max()
    cl =  customers['customer_id'].to_list()
    ran = list(range(1,mm))
    ml = []
    for x in ran:
        if x not in cl:
            ml.append(x)
    return pd.DataFrame(ml, columns=['ids'])
```