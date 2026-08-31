# Official Solution

**Link:** [https://leetcode.com/problems/modify-columns/solution/](https://leetcode.com/problems/modify-columns/solution/)

---

[TOC]

## Solution
--- 
### Overview
Our objective is to modify the `salary` column in the DataFrame `employees` so that each employee's salary is doubled.

**Key Concepts**:
 - **column-wise operations:** operations that can be performed on each individual element in a DataFrame Series. A few examples of types of column-wise operations are arithmetic operations, aggregate functions, filtering and conditional operations, and string operations.

### Intuition

We double the salary for each employee by multiplying the `salary` column by 2. In pandas, operations can be applied column-wise, affecting each element in the column.

```python
employees['salary'] = employees['salary'] * 2
```

**Visualization of column-wise operations**

![fig](../Figures/3311/3311-1.png)

This line modifies the `salary` column of the `employees` DataFrame by doubling each value. Let's break it down piece by piece:

**1. employees['salary']:** 

This is how you access a specific column of a DataFrame in pandas. `employees` is the DataFrame, and `['salary']` refers to the column named "salary". It will return a pandas Series, which is a one-dimensional labeled array.

So, `employees['salary']` will give you all the values in the `salary` column of the DataFrame `employees`.

**Example:**
If you have the following DataFrame:

<table>
  <tr>
    <th>name</th>
    <th>salary</th>
  </tr>
  <tr>
    <td>Jack</td>
    <td>19666</td>
  </tr>
  <tr>
    <td>Piper</td>
    <td>74754</td>
  </tr>
  <tr>
    <td>Mia</td>
    <td>62509</td>
  </tr>
  <tr>
    <td>Ulysses</td>
    <td>54866</td>
  </tr>
</table>
<br>

`employees['salary']` would give:

<table>
  <tr>
    <th>index</th>
    <th>salary</th>
  </tr>
  <tr>
    <td>0</td>
    <td>19666</td>
  </tr>
  <tr>
    <td>1</td>
    <td>74754</td>
  </tr>
  <tr>
    <td>2</td>
    <td>62509</td>
  </tr>
  <tr>
    <td>3</td>
    <td>54866</td>
  </tr>
</table>
<br>

**2. employees['salary']**

pandas allows for vectorized operations. When you multiply a Series by a scalar (a single number), it multiplies every single element in the Series by that number.

In our case, it's doubling each value in the `salary` column.

**Example:**
Using the previous DataFrame, `employees['salary'] * 2` would result in:

<table>
  <tr>
    <th>index</th>
    <th>salary</th>
  </tr>
  <tr>
    <td>0</td>
    <td>39332</td>
  </tr>
  <tr>
    <td>1</td>
    <td>149508</td>
  </tr>
  <tr>
    <td>2</td>
    <td>125018</td>
  </tr>
  <tr>
    <td>3</td>
    <td>109732</td>
  </tr>
</table>
<br>

**3. employees['salary'] = ...:**

This line updates the values in an existing column of the DataFrame. If the column `salary` didn't exist for some reason, pandas would create it.

In the statement `employees['salary'] = employees['salary'] * 2`, what we're essentially doing is taking each salary value from the `salary` column, doubling it, and then updating the original `salary` column with these newly calculated values.

The DataFrame `employees` retains its `salary` column, but the values within this column have now been updated to be twice their original amounts.

### Implementation

<iframe src="https://leetcode.com/playground/XBLmBxPW/shared" frameBorder="0" width="100%" height="140" name="XBLmBxPW"></iframe>