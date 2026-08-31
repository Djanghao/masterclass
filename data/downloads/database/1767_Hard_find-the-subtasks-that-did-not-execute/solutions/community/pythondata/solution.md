# Pandas succinct code, 100%

**Author:** piocarz
**Votes:** 6
**Link:** [https://leetcode.com/problems/find-the-subtasks-that-did-not-execute/solutions/4171548/](https://leetcode.com/problems/find-the-subtasks-that-did-not-execute/solutions/4171548/)

---

# Intuition
In Pandas there is function opposite to `.count()` -> `.repeat()`.
`.repeat(X)` as you may guess, repeats every value specific number of times.
- If `X` is integer, every value is repeated `X` times
- If `X` is list/series, then value with index `i` is repeated by `i'th` value in list/series - but the list/series length must be exact same as length of our values.

`.repeat()` works only on Series, not entire dataframe, and it returns Series.

For example (im using lists instead of series but I hope you know what I mean):
```
[1,2,3].repeat(2) => [1,1,2,2,3,3]
[1,2,3].repeat([3,1,4]) => [1,1,1,2,3,3,3,3]
```
# Approach
1. Using `subtasks_count` as our repeat, multiply `task_id`
2. Then use `.cumcount()+1` on grouped `task_id` to get values from 1 to len of group.
3. Since we created our `df` with the same column names as `executed`, if we concat(union) them, unique rows will represent  missing values from `executed`. If we drop duplicates, and use `keep = False`, all duplicates will be removed, leaving only non executed tasks.

# Code
```
import pandas as pd

def find_subtasks(tasks: pd.DataFrame, executed: pd.DataFrame) -> pd.DataFrame:
    df = tasks["task_id"].repeat(tasks["subtasks_count"]).to_frame('task_id')
    df["subtask_id"] = df.groupby("task_id").cumcount() + 1
    return pd.concat([df,executed]).drop_duplicates(keep=False)
```