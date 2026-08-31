# Fast Pandas no merge

**Author:** true-detective
**Votes:** 2
**Link:** [https://leetcode.com/problems/unpopular-books/solutions/4067485/](https://leetcode.com/problems/unpopular-books/solutions/4067485/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
You can convert the date strings to `pd.to_datetime` but it is not necessary and Pandas will do it behind the scenes.
find the orders that are popular, then filter the original dataframe by that column.


# Code
```
import pandas as pd

def unpopular_books(books: pd.DataFrame, orders: pd.DataFrame) -> pd.DataFrame:
    books = books[books['available_from'] < '2019-05-23']
    orders = orders[orders['dispatch_date'] > '2018-06-23']
    orders = orders.groupby('book_id')['quantity'].sum()
    orders = orders[orders >= 10]
    return books[~books['book_id'].isin(orders.index)][['book_id', 'name']]
```