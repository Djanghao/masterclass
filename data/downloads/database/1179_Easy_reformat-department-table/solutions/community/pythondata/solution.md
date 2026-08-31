# Pandas FT 95%: Demonstrates and Explains .pivot, .reindex, .rename, .reset_index

**Author:** BiggestChungus
**Votes:** 29
**Link:** [https://leetcode.com/problems/reformat-department-table/solutions/4201457/](https://leetcode.com/problems/reformat-department-table/solutions/4201457/)

---

# Intuition: Reshape/Pivot

We know we want to end with a table where
* the rows are the `id` values
* the columns are the `month` values (plus a suffix)
* the values come from the `revenue` values

But we are given the table in a different form, which I call "row-column-value" table. (warning: I suspect nobody else uses that name. If you know the right term so I don't sound dumb in an interview, PLEASE LEAVE A COMMENT!!). We have a row for each entry in the table, where each row is the `(id, month, value)`.

If you're familiar with sparse matrices, the problem is basically asking us to covert sparse `(r, c, v)` entries to a dense matrix of size `R x C` with entries `v`.

So we want to convert
* rows of the form (r, c, v)
* into a table where `df[r][c] == v`

Any time you see this, the answer is **pivot**.
* `index = <colWithRowLabels> = 'id'`
* `columns = <colWithColumnLabels> = 'month'`
* `values = <colWithTheValues> = 'revenue'`

See the code for a more thorough example. This join is the hardest part.

# Tools

I like to think about learning Pandas (or any other framework) as a series of tools to be combined.

## Pivot

See above; generally useful when you have a "long and narrow" table of entries, and you want change its shape to "short and fat."

Again, you can think of this as "sparse entries => dense matrix"

## Reindex

Like many Pandas functions, `DataFrame.reindex` has some "hidden effects" that we can use. `.reindex(columns=<listOfColNames>)` does the following:
* the output `DataFrame` has output columns in the same order as `<listOfColNames>` somewhat surprising because you'd think `reindex` just does things with, y'know, *the index*. But it does more. Because Pandas I guess.
* any columns in `listOfColNames`, but not in your input `DataFrame` **are created and filled with NaN.** Pretty surprising: `reindex` also creates columns?? Sure - because Pandas strikes again.

Here I use this to both
* put all the months in the right order: Jan .. Dec
* and also to add all the missing columns. For example, if the input `DataFrame` doesn't have any entries for 'Mar', then `.pivot` won't create that column. So we have to add it.

It results in a really clean single line.

## Rename

The usual way people use rename is `df.rename(columns=<someDictionary>)` where `someDictionary` is a map of the form `{oldColName: newColName}`.

This works.

But you can also give it a callable (usually a lambda). That callable is called on each column, and the new name is the result.

The callable form is frequently used as follows:
* clean up names, replacing naughty punctuation like `.?:` with `_` or something: `columns=cleanColNames` where `cleanColNames` is a function you wrote earlier
* make all columns lower/upper case: `columns=str.lower`
* **append something to all column names:** `columns=lambda c: c + suffix`

This last one is nice. This way we don't need a separate map comprehension to make a dictionary of 12 entries like `Jan => Jan_Revenue`

## Reset Index

`.reset_index` is another case where Pandas has some surprises.

The obvious effect is that it *resets the index.* The new index values are 0..N-1 where the `DataFrame` has N rows.

But there's a sneaky effect too: it
* creates a new column, whose entries are the old index's entries
* that new column is placed FIRST; it's prepended to all existing columns
* the name of the new column is the name of the index

In this case, that's exactly what we want: the pivoted DF's index, called 'id', prepended before all the revenue columns.

The index's name is 'id' because we called `.pivot` with `index='id'`. So Pandas creates an index from the given column, and gives the index the same name as the column.

Side note: both the row index and the columns of a `DataFrame` have optional index names.
* row index names come from explicitly creating a row index, `.pivot(index='colname')`, or `.groupby('colname')`, and probably some other things
* column index names are a lot less common. If you call `.pivot` with multiple value columns, like `values=['revenue', 'favorite_color']` then you end up with a multi-level column index that is partly named.

Super side note: `Series` works the same way, except there's no column index because there aren't any columns - just the one data series. You can still name the series though to make is closer to being a single-column `DataFrame`. That's particularly helpful when joining a `DataFrame` with a `Series`: `df.merge(series, right='series_name')`

# Complexity
- Time complexity: $$O(N)$$
- Space complexity: $$O(N)$$

# Code
```
import pandas as pd

def reformat_table(department: pd.DataFrame) -> pd.DataFrame:
    prefixes = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]

    # PIVOT: terribly documented, but not actually that bad
    #   input: "row-col-val" table, i.e. a DF of the form
    #       Row Col  Value   [Other cols...]
    #       --------------------------------
    #       r1  c1   v11     ...
    #       r2  c2   v22     ...
    #       r1  c3   v13     ...
    #       r3  c3   v33     ...
    #
    # And you want the output to have the shape unique(row) x unique(col)
    # with values from the Value column, as shown here:
    #
    #           c1   c2   c3  
    #     Row
    #     -------------------
    #     r1    v11       v13
    #     r2         v22
    #     r3              v33
    #
    # Then you want df.pivot(index='Row', columns='Col', values='Value')
    #
    # Here: We want 
    #     rows for each 'id'                   # index='id'
    #     columns for each entry in 'month'    # columns='month'
    #     values to come from 'revenue'        # values='revenue'

    bymonth = department.pivot(index='id', columns='month', values='revenue')
    bymonth = bymonth.reindex(columns=prefixes) # put months in order, and add null cols for missing months
    bymonth.rename(columns=lambda prefix: prefix + "_Revenue", inplace=True) # e.g. Jan => Jan_Revenue
    bymonth.reset_index(inplace=True) # "Moves" the existing index, with name 'id', to a new column of the
                                      # same name in front of all existing columns. Which is where we want it.
                                      # It also creates a new index with entries 0..N-1. In this case the new
                                      # index is of no further use.

    # OPTIONAL: sort by id
    # bymonth.sort_values('id', inplace=True)

    return bymonth
```