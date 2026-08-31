# Official Solution

**Link:** [https://leetcode.com/problems/fill-missing-data/solution/](https://leetcode.com/problems/fill-missing-data/solution/)

---

[TOC]

## Solution
--- 
### Overview

In this problem, we have a DataFrame named `products` that contains product data. However, some of the `quantity` data is missing. The goal is to fill the missing quantity data with the value of 0.

**Key Concepts**:
1. **DataFrame:** a 2D table-like structure, similar to a spreadsheet or SQL table. Each row represents an individual record and each column represents a different attribute. It is size-mutable designed to handle a mix of different types of data.
2. **fillna Function:** `fillna` is a function in the pandas library, used primarily with pandas Series and DataFrame objects. It allows you to fill NA/NaN values using specified methods. In this context, we are using it to replace the `None` (or `NaN` in the usual dataframe representation) values.

**`fillna` Function Argument Definition:**

The `fillna` function has several arguments that you can utilize, but we'll focus on the most commonly used ones:

- **value:** Scalar, dict, Series, or DataFrame. The value to use to fill holes (e.g. 0). This is what we use in our solution.

- **method:** {‘backfill’, ‘bfill’, ‘pad’, ‘ffill’, None}. Method to use for filling holes in reindexed Series. Default is `None`. 

- **axis:** {0 or ‘index’, 1 or ‘columns’}. Axis along which to fill missing values. 

- **inplace:** Bool. If True, fills in place. Note: this will modify any other views on this object. Default is False.


### Intuition

In our solution, we use:

```python
products['quantity'].fillna(0, inplace=True)
```

- Since we are trying to fill missing data from the `quantity` column of the `products` DataFrame, we apply the `fillna` function to `products['quantity']`.
- Since we want to replace missing values (`NaN` or `None`) with `0`, we use the `value` argument as `0`.
- Finally, we want to return the original DataFrame, so we set `inplace=True` to modify the original DataFrame directly without returning a new one. Note that if you don't use `inplace=True`, you would have to capture the result like this: `products['quantity'] = products['quantity'].fillna(0)`

**Visualization of `fillna` function**

![fig](../Figures/3314/3314-1.png)

When you pass the following DataFrame to this function:

<table>
  <tr>
    <th>name</th>
    <th>quantity</th>
    <th>price</th>
  </tr>
  <tr>
    <td>Wristwatch</td>
    <td>32</td>
    <td>135</td>
  </tr>
  <tr>
    <td>WirelessEarbuds</td>
    <td>None</td>
    <td>821</td>
  </tr>
  <tr>
    <td>GolfClubs</td>
    <td>None</td>
    <td>9319</td>
  </tr>
  <tr>
    <td>Printer</td>
    <td>849</td>
    <td>3051</td>
  </tr>
</table>
<br>

It will return:

<table>
  <tr>
    <th>name</th>
    <th>quantity</th>
    <th>price</th>
  </tr>
  <tr>
    <td>Wristwatch</td>
    <td>32</td>
    <td>135</td>
  </tr>
  <tr>
    <td>WirelessEarbuds</td>
    <td>0</td>
    <td>821</td>
  </tr>
  <tr>
    <td>GolfClubs</td>
    <td>0</td>
    <td>9319</td>
  </tr>
  <tr>
    <td>Printer</td>
    <td>849</td>
    <td>3051</td>
  </tr>
</table>
<br>

### Implementation

<iframe src="https://leetcode.com/playground/HGGybHvG/shared" frameBorder="0" width="100%" height="157" name="HGGybHvG"></iframe>