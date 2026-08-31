# Pandas: Agg, Merge, Slice. Beware "Bankers Rounding"/"Round to Even" X(

**Author:** BiggestChungus
**Votes:** 10
**Link:** [https://leetcode.com/problems/the-number-of-employees-which-report-to-each-employee/solutions/4270643/](https://leetcode.com/problems/the-number-of-employees-which-report-to-each-employee/solutions/4270643/)

---

# Intuition

Most of this problem is relatively straightforward with some experience.

We know we want to get results for each manager, and managers IDs are in the `reports_to` column. So we group by `reports_to` (i.e. by manager ID) and so some aggregations.

Then we need the name for each manager. When you have a table/DF with information, and you need to "map" one value (ID) to another (name) with a table, you should immediately think "I need a left merge" (`LEFT JOIN` in SQL lingo)
* if you want results for all rows in the left, even if there's no data in the right, use `how='left'` (the default, SQL `LEFT [OUTER] JOIN`)
* if you want results only where there are rows in both DFs, use `how='inner'` (SQL `[INNER] JOIN`)

Side note: IMO Pandas really screwed up the method names
* `pd.merge` is the equivalent of SQL's `JOIN` statements. They should have used `pd.join` for this.
* `pd.join` is more or less a `JOIN` but only works on the DF index. They should have used `pd.merge` or `pd.combine` or something
* and the Pandas notion of an index is not the same thing as a SQL engine's notion of an index

# Approach

The details are fairly straightforward; see the code and the intuition above.

## Banker's Rounding

This "feature" of Pandas is just infuriating.

For those unfamiliar, Numpy and thus Pandas both use "banker's rounding" or "round-to-even." So `<int>.5` rounds to
* `int` if `int` is even
* `int+1` if `int` is odd

which is obviously different from the sane everyday concept of "0.5 rounds up."

### Fixing Banker's Rounding

You can hack your way around it by adding a "fudge factor" of `1e-10` or so to the result. Something that will make e.g. `2.5` become `2.5000000001` so it rounds up to 3 as desired, not down to 2. But not so large that numbers like `2.49` get pushed up to `2.51` and thus get rounded the wrong direction.

### Why Does This Exist?

The reason this exists is if you have a column of many numbers of the form `<int>.5`, then you round, all those numbers will have 0.5 added to them. So sums and averages on that column can increase significantly. So to prevent such bias and error when aggregating rounded columns, Numpy (and other software packages) use round-to-even. The idea is they assume about half the int parts will be even, and the other half odd, such that the +0.5 added to odds will mostly cancel the -0.5 added to evens.

**Is this a good idea:** almost never. The *real* solution is always to *keep as many digits of precision as possible for as long as possible*. Round-before-aggregate is a cardinal sin. Rounding is for display or regularatory reasons only (e.g. if your file is required by law to be rounded to the nearest penny or dollar).

**Further rant topic:** The lack of a `how='add'` versus `how='even'` option or something in the `round` method IMO is inexcusable. It causes a lot of confusion.

# Code
```
import pandas as pd

def count_employees(employees: pd.DataFrame) -> pd.DataFrame:
    by_manager = employees.groupby('reports_to', as_index=False).agg(reports_count=('employee_id', 'size'), average_age=('age', 'mean'))
    # round has no inplace parameter X(
    # + <fudge factor> to defeat banker's/round-to-even rule X( X(
    by_manager.average_age = (by_manager.average_age + 1e-12).round(0)

    merged = by_manager.merge(employees, how='left', left_on='reports_to', right_on='employee_id')
    merged.rename(columns={'reports_to': 'employee_id'}, inplace=True)

    return merged[['employee_id', 'name', 'reports_count', 'average_age']]
```