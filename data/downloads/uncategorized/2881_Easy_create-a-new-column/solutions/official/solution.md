# Official Solution

**Link:** [https://leetcode.com/problems/create-a-new-column/solution/](https://leetcode.com/problems/create-a-new-column/solution/)

---

[TOC]

## Solution
--- 
### Overview
This problem requires us to create a new column 'bonus' in the DataFrame `employees`. The new column should contain  double the value of each employee's salary.

**Key Concepts:**

1. **pandas Series:** a one dimensional data structure provided by the pandas library. A Series can be thought of as a column of data in a pandas DataFrame. A Series can contain of a wide-range of data types, however they are homogenous, meaning that all elements within one pandas Series must be of the same data type. Like DataFrames, Series are indexed and can be labeled for easy data retrieval.
2. **pandas DataFrame:** similar to a SQL table, a DataFrame is a collection of Series displayed as columns. They are size-mutable, meaning we can add, delete, and alter values, rows, and columns in a DataFrame.
3. **column-wise operations:** operations that can be performed on each individual element in a DataFrame Series. A few examples of types of column-wise operations are  arithmetic operations, aggregate functions, filtering and conditional operations, and string operations.

### Intuition

To solve this problem, we can create a new column and calculate the bonus using the column-wise operation `*` to multiply the salary column by 2. 

The simplest way to create a new column will be to assign the new column to the `employees` DataFrame using the column name. Then, we will set it equal to the value of the `salary` column multiplied by two. 

**Visualization of column-wise operations**

![fig](../Figures/3310/3310-1.png)


**Example:**
If you have the following DataFrame:

<table>
  <tr>
    <th>name</th>
    <th>salary</th>
  </tr>
  <tr>
    <td>Piper</td>
    <td>4548</td>
  </tr>
  <tr>
    <td>Grace</td>
    <td>28150</td>
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
    <td>4548</td>
  </tr>
  <tr>
    <td>1</td>
    <td>28150</td>
  </tr>
</table>
<br>

pandas allows for vectorized operations. When you multiply a Series by a scalar (a single number), it multiplies every single element in the Series by that number. In our case, we want to use this to double each value in the `salary` column.

Using the previous DataFrame, `employees['salary'] * 2` would result in:

<table>
  <tr>
    <th>index</th>
    <th>bonus</th>
  </tr>
  <tr>
    <td>0</td>
    <td>9096</td>
  </tr>
  <tr>
    <td>1</td>
    <td>56300</td>
  </tr>
</table>
<br> 

We can assign these values to a new (or existing) column in the DataFrame. If the column `bonus` doesn't already exist, pandas will create it. 

When we do `employees['bonus'] = employees['salary'] * 2`, we're creating a new column called `bonus` in the DataFrame `employees`, and populating it with the doubled values of the `salary` column.

### Implementation

<iframe src="https://leetcode.com/playground/4LjjuZqG/shared" frameBorder="0" width="100%" height="140" name="4LjjuZqG"></iframe>