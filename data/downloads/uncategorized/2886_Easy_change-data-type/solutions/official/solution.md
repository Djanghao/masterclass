# Official Solution

**Link:** [https://leetcode.com/problems/change-data-type/solution/](https://leetcode.com/problems/change-data-type/solution/)

---

[TOC]

## Solution
--- 
### Overview

In this problem, we have a DataFrame named `students` that contains student data. However, the grades are stored as floats instead of integers. The goal is to change the grade type from floats to integers.

**Key Concepts**:

1. **DataFrame:** a 2D table-like structure, similar to a spreadsheet or SQL table. Each row represents an individual record and each column represents a different attribute. It is size-mutable and designed to handle a mix of different types of data. 
2. **`astype` Function:** The `astype` function is used to cast a pandas object to a specified dtype (data type). `astype` can be used to cast a pandas object to any dtype. The `astype` function does not modify the original DataFrame in place. Instead, it returns a new DataFrame with the specified data type changes. If you want to reflect changes in the original DataFrame, you need to reassign the result back to it or use the `copy` parameter accordingly. The function’s syntax is:

```python
DataFrame.astype(dtype, copy=True, errors='raise')
```

Where:

- `dtype`: It's a data type, or dict of column name -> data type. 
- `copy`: By default, astype always returns a newly allocated object. If `copy` is set to `False`, a new object will only be created if the old object cannot be casted to the required type.
- `errors`: Controls the raising of exceptions on invalid data for the provided dtype. By default, `raise` is set which means exceptions will be raised.

So in our case we want to cast the `grade` column from float to int and we can do so with the following line:
```python
students = students.astype({'grade': int})
```

### Intuition

**Visualization of `astype` function**

![fig](../Figures/3313/3313-1.png)

In the provided solution:
```python
students = students.astype({'grade': int})
```
This line is casting the `grade` column from float to int.

Let’s go step by step through the provided solution:

1. **Importing pandas**:
   ```python
   import pandas as pd
   ```
   This line imports the pandas library and gives it an alias name `pd`. The pandas library provides fast, flexible, and expressive data structures designed to work with structured (tabular, multidimensional, potentially heterogeneous) data.

2. **Function Definition**:
   ```python
   def changeDatatype(students: pd.DataFrame) -> pd.DataFrame:
   ```
   This line defines a function named `changeDatatype` that takes in a DataFrame `students` as an argument and returns a DataFrame.

3. **Changing Data Type of a Column**:
   ```python
   students = students.astype({'grade': int})
   ```
   This line of code is the heart of the solution. It changes the data type of the `grade` column to integer using the `astype` function. The `{'grade': int}` is a dictionary where the key is the column name and the value is the desired data type.

4. **Return Statement**:
   ```python
   return students
   ```
   This line returns the modified DataFrame.

**Using the Solution**

When you pass this DataFrame to the function:

<table>
  <tr>
    <th>student_id</th>
    <th>name</th>
    <th>age</th>
    <th>grade</th>
  </tr>
  <tr>
    <td>1</td>
    <td>Ava</td>
    <td>6</td>
    <td>73.0</td>
  </tr>
  <tr>
    <td>2</td>
    <td>Kate</td>
    <td>15</td>
    <td>87.0</td>
  </tr>
</table>
<br>

It will return:

<table>
  <tr>
    <th>student_id</th>
    <th>name</th>
    <th>age</th>
    <th>grade</th>
  </tr>
  <tr>
    <td>1</td>
    <td>Ava</td>
    <td>6</td>
    <td>73</td>
  </tr>
  <tr>
    <td>2</td>
    <td>Kate</td>
    <td>15</td>
    <td>87</td>
  </tr>
</table>
<br>

### Implementation

<iframe src="https://leetcode.com/playground/KmEJXfKS/shared" frameBorder="0" width="100%" height="140" name="KmEJXfKS"></iframe>