# a simple solution || 2 lines of code || Beats 86% ✅

**Author:** NullGuy-dev
**Votes:** 19
**Link:** [https://leetcode.com/problems/fill-missing-data/solutions/4497726/](https://leetcode.com/problems/fill-missing-data/solutions/4497726/)

---

# Intuition
DataFrame has a good method for filling null-values

# Approach
We can use simple method .fillna() for filling our null-values
Result:
![image.png](./images/0.png)
![\u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435_2024-01-03_120155683.png](./images/1.png)
# Complexity
- Time complexity:
$$O(1)$$ - 'cause we didn't use a cycle

- Space complexity:
$$O(1)$$

# Code
```
import pandas as pd
# DataFrame has a good method for filling null-values - .fillna(), and we'll put inside 0
def fillMissingValues(products: pd.DataFrame) -> pd.DataFrame:
    products['quantity'] = products['quantity'].fillna(0)
    return products
```