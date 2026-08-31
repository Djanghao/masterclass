# pandas || filter and sort ||

**Author:** Spaulding_
**Votes:** 10
**Link:** [https://leetcode.com/problems/not-boring-movies/solutions/5618541/](https://leetcode.com/problems/not-boring-movies/solutions/5618541/)

---

Here's the plan:
1. We filter for odd ids.

2. We filter for `not boring`.
3. We sort as directed.
```
import pandas as pd

def not_boring_movies(cinema: pd.DataFrame) -> pd.DataFrame:

    return (cinema[(cinema.id%2 == 1)                   # <-- 1.
            & (cinema.description != 'boring')]         # <-- 2.
            .sort_values('rating', ascending = False))  # <-- 3.
```