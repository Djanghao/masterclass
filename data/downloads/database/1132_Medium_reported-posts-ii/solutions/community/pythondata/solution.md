# Pandas succint code: count vs size

**Author:** piocarz
**Votes:** 1
**Link:** [https://leetcode.com/problems/reported-posts-ii/solutions/4096640/](https://leetcode.com/problems/reported-posts-ii/solutions/4096640/)

---

# Approach
1. We are interested only in reports that are tagged as spam, so we ignore the rest. Select only needed columns - `post_id` and `action_date`. Additionaly, each post could be reported as spam more than once per day, so we drop duplicates.
2. Merging this cleared df with removals on post_id : in this way we would know which reported post was removed. Don't fill Nulls, they will be usefull in next step.
3. Group by day, and since we have nulls, we can calculate total number of reported entries per day, and total removed number of entries per day: `size` is counting Nulls, `count` doesn't.
4. Return new dataframe, created from mean of `removed`/`total` column.

# Code
```
import pandas as pd

def reported_posts(actions: pd.DataFrame, removals: pd.DataFrame) -> pd.DataFrame:
    df = actions.query("extra=='spam'")[["action_date","post_id"]].drop_duplicates().merge(removals,"left","post_id")
    df = df.groupby("action_date").agg(removed=("remove_date","count"), total=("remove_date","size"))
    return pd.DataFrame({"average_daily_percent":[(df["removed"]/df["total"]).mean()*100]}).round(2)
```