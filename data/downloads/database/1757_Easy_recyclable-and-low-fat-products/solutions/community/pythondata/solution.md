# Very Simple Easy to understand pandas code.

**Author:** sriganesh777
**Votes:** 133
**Link:** [https://leetcode.com/problems/recyclable-and-low-fat-products/solutions/3848319/](https://leetcode.com/problems/recyclable-and-low-fat-products/solutions/3848319/)

---

# Approach
- Use boolean indexing to filter the rows where both the "low_fats" column is 'Y' and the "recyclable" column is 'Y'.
- Select only the "product_id" column from the filtered DataFrame.
- Return the resulting DataFrame containing the ids of products that are both low fat and recyclable.


# Code
```
import pandas as pd

def find_products(products: pd.DataFrame) -> pd.DataFrame:
    result_df = products[(products['low_fats'] == 'Y') & (products['recyclable'] == 'Y')]
    return result_df[['product_id']]

```

![upvote img.jpg](./images/0.jpeg)
