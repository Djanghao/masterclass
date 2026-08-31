# pandas isnull()

**Author:** oat_milk_americano
**Votes:** 0
**Link:** [https://leetcode.com/problems/books-with-null-ratings/solutions/6126764/](https://leetcode.com/problems/books-with-null-ratings/solutions/6126764/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```pythondata []
import pandas as pd

def find_unrated_books(books: pd.DataFrame) -> pd.DataFrame:
    books = books.loc[books['rating'].isnull(), ['book_id', 'title', 'author', 'published_year']]
    return books
    
```