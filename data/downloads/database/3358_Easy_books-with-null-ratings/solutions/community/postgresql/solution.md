# Solution with filtering

**Author:** Inveterate_Enthusiast
**Votes:** 0
**Link:** [https://leetcode.com/problems/books-with-null-ratings/solutions/6066567/](https://leetcode.com/problems/books-with-null-ratings/solutions/6066567/)

---

# Code on Python
```pythondata []
import pandas as pd

def find_unrated_books(books: pd.DataFrame) -> pd.DataFrame:
    return (books
            .loc[books["rating"].isna()]
            .drop(labels="rating", axis=1)
            .sort_values(by="book_id", ascending=True))
```
---
# Code on PostgreSQL
```sql
SELECT
    book_id,
    title,
    author,
    published_year
FROM books
WHERE rating IS NULL
ORDER BY book_id ASC;
```