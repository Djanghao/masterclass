# Pandas oneliner, tail and head

**Author:** piocarz
**Votes:** 5
**Link:** [https://leetcode.com/problems/get-the-second-most-recent-activity/solutions/4108640/](https://leetcode.com/problems/get-the-second-most-recent-activity/solutions/4108640/)

---

# Intuition
The second most recent is the oldest of the two most recent
# Approach
Both `head` and `tail` can be used as aggregate functions - get first X or last X out of each group. But to get desired outcome, first you have to sort dataframe in right order - in this example by `endDate`, ascending.

# Code
```
import pandas as pd

def second_most_recent(user_activity: pd.DataFrame) -> pd.DataFrame:
    return user_activity.sort_values("endDate").groupby("username").tail(2).groupby("username").head(1)
```
...or, it seems tables are already sorted, so `head` and `tail` are enough::

```
import pandas as pd

def second_most_recent(user_activity: pd.DataFrame) -> pd.DataFrame:
    return user_activity.groupby("username").tail(2).groupby("username").head(1)
```
