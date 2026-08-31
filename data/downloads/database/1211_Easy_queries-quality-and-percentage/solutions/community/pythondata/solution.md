# pandas || 3 lines, Counter || T/S: 81% / 51%

**Author:** Spaulding_
**Votes:** 14
**Link:** [https://leetcode.com/problems/queries-quality-and-percentage/solutions/5167355/](https://leetcode.com/problems/queries-quality-and-percentage/solutions/5167355/)

---

The judge throws an error in certain rounding operations on what seems to be a bug with pandas's rounding results. For example, `round(4.5) = 4`, but `round(5.5) = 6`

Actually, it's not a bug, it's a feature. Pandas follows the "round to even" rule intentionally, because it reduces the bias in rounding.

For example: `average(1.5, 2.5, 3.5, 4.5, 5.5) = 3.5`

rounding up: `average(2, 3, 4, 5, 6) = 4.0`

rounding to even: `average(2, 2, 4, 4, 6) = 3.6`

It's really a *LeetCode* issue about how pandas testcases are judged; they should allow for this feature in judging the test cases.
```
import pandas as pd

round2 = lambda x: round(x + 1e-9, 2)

def queries_stats(queries: pd.DataFrame) -> pd.DataFrame:

    queries['quality'] = queries.rating/queries.position
    queries['poor_query_percentage'] = (queries.rating < 3)*100

    return queries.groupby('query_name')[['quality',
          'poor_query_percentage']].mean().apply(round2).reset_index()
```

[https://leetcode.com/problems/queries-quality-and-percentage/submissions/1450795152/](https://leetcode.com/problems/queries-quality-and-percentage/submissions/1450795152/)

I could be wrong, but I think that time complexity is *O*(*N*) and space complexity is *O*(*N*), in which *N* ~ `len(queries)`.