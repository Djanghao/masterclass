# Official Solution

**Link:** [https://leetcode.com/problems/reshape-data-concatenate/solution/](https://leetcode.com/problems/reshape-data-concatenate/solution/)

---

[TOC]

## Solution
--- 
### Overview
In the task presented, the goal is to concatenate two DataFrames, `df1` and `df2`, vertically. The DataFrames have the same structure with columns `student_id`, `name`, and `age`.

**Key Concepts**: 
 - `pd.concat()`: A convenient function within pandas used to concatenate DataFrames either vertically (by rows) or horizontally (by columns).
   - The `objs` parameter is a sequence or mapping of Series or DataFrame objects to be concatenated.
   - The `axis` parameter determines the direction of concatenation:
      - `axis=0` is set as the default value, which means it will concatenate DataFrames vertically (by rows).
      - `axis=1` will concatenate DataFrames horizontally (by columns).

### Intuition

The process of concatenating DataFrames vertically involves stacking one DataFrame on top of the other, ensuring the order of columns is consistent.

Inside the `concatenateTables` function, we utilize the `pd.concat()` function to concatenate the DataFrames. Since we are concatenated `df1` and `df2` we pass the list `[df1, df2]` as the first argument for `objs`; and since we are concatenating vertically, we set `axis=0`.

**Visualization of the `pd.concat()` function applied to the `df1` and `df2` DataFrames:**

![fig](../Figures/3308/3308-1.png)

### Implementation

<iframe src="https://leetcode.com/playground/jKLWjbze/shared" frameBorder="0" width="100%" height="123" name="jKLWjbze"></iframe>