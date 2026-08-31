# Official Solution

**Link:** [https://leetcode.com/problems/drop-missing-data/solution/](https://leetcode.com/problems/drop-missing-data/solution/)

---

[TOC]

## Solution
--- 
### Overview

The problem pertains to the handling of missing data in a pandas DataFrame representing student information. Specifically, there are some rows in the `name` column that have missing values (`None` or `NaN`). The objective is to remove those rows with missing names from the DataFrame using the `dropna` function of pandas.

**Key Concepts:**
1. **`dropna` Function:** The `dropna` function belongs to the pandas DataFrame and is used to remove missing values. Missing data in pandas is generally represented by the `NaN` (short for Not a Number) value, though in your example it appears as `None` which is also considered a missing value by pandas.

Here's the general usage of the `dropna` function:
```python
DataFrame.dropna(axis=0, how='any', thresh=None, subset=None, inplace=False)
```

**`dropna` Function Argument Definition:**

 1. `axis`: It can be `{0 or 'index', 1 or 'columns'}`. By default it's `0`. If `axis=0`, it drops rows which contain missing values, and if `axis=1`, it drops columns which contain missing value.
 2. `how`: Determines if row or column is removed from DataFrame, when we have at least one NA or all NA.
    - `how='any'` : If any NA values are present, drop that row or column (default).
    - `how='all'` : If all values are NA, drop that row or column.
 3. `thresh`: Require that many non-NA values. This is an integer argument which requires a minimum number of non-NA values to keep the row/column.
 4. `subset`: Labels along the other axis to consider, e.g. if you are dropping rows these would be a list of columns to include. This is particularly useful when you only want to consider NA values in certain columns.
 5. `inplace`: It's a boolean which makes the changes in data frame itself if `True`. Always remember when using the `inplace=True` argument, you're modifying the original DataFrame. If you need to retain the original data for any reason, avoid using `inplace=True` and instead assign the result to a new DataFrame.

### Intuition

We need to use the `dropna` function to remove rows with missing data in the `name` column. We can do this by setting the required parameters based on the "Function Argument Definition" section mentioned earlier; here is the breakdown:

- We are only considering the `name` column, so we set `subset=['name']`. This argument tells `dropna` to consider only the `name` column when looking for missing values. So, only rows where the `name` column has missing values will be dropped.
- We need to modify the original DataFrame, so set `inplace=True`. By setting `inplace` to `True`, we're modifying the original `students` DataFrame directly. If you set it to `False` (or omitted it), then a new DataFrame with the dropped rows would be returned, and the original `students` DataFrame would remain unchanged.

```python
students.dropna(subset=['name'], inplace=True)
```

**Visualization of `dropna` function**

![fig](../Figures/3319/3319-1.png)

When you pass this DataFrame to the function:

<table>
  <tr>
    <th>student_id</th>
    <th>name</th>
    <th>age</th>
  </tr>
  <tr>
    <td>32</td>
    <td>Piper</td>
    <td>5</td>
  </tr>
  <tr>
    <td>217</td>
    <td>Grace</td>
    <td>19</td>
  </tr>
  <tr>
    <td>779</td>
    <td>None</td>
    <td>20</td>
  </tr>
  <tr>
    <td>849</td>
    <td>None</td>
    <td>14</td>
  </tr>
</table>
<br>

It will return:

<table>
  <tr>
    <th>student_id</th>
    <th>name</th>
    <th>age</th>
  </tr>
  <tr>
    <td>32</td>
    <td>Piper</td>
    <td>5</td>
  </tr>
  <tr>
    <td>217</td>
    <td>Grace</td>
    <td>19</td>
  </tr>
</table>
<br>

### Implementation

<iframe src="https://leetcode.com/playground/PrPoqTfz/shared" frameBorder="0" width="100%" height="140" name="PrPoqTfz"></iframe>