# Official Solution

**Link:** [https://leetcode.com/problems/rearrange-products-table/solution/](https://leetcode.com/problems/rearrange-products-table/solution/)

---

<!-- Don't delete this -->
[TOC]

# Solution

---

## pandas

### Approach 1: Union Tables

#### Algorithm

The price `column` column in the output DataFrame appears to be a stacked combination of the three columns `store1`, `store2`, and `store3` from the input DataFrame `products`. To achieve this, a simple strategy involves creating three separate DataFrames for each store and then concatenating them together into one DataFrame.

Starting with `store1`, we create a new DataFrame `a` by selecting rows from the `products` DataFrame where the `store1` column is not null. We use the `notna()` method to create a boolean mask, which is used to filter out rows with null values in the `store1` column. The `loc` method is then used to select the `product_id` and `store1` columns for the filtered rows. The resulting DataFrame `a` will only contain rows with valid values in the `store1` column.

```python
# Filter rows that have a null value in the 'store1' column
# and select columns 'product_id' and 'store1'.
a = products.loc[products['store1'].notnull(), ['product_id', 'store1']]
```

We will obtain the filtered DataFrame `a` as follows:
| product_id | store1 |
|------------|--------|
| 0          | 95     |
| 1          | 70     |

<br>

In the next step, we modify the `a` by adding a new column `store`, and renaming the column `store1` to `price`.

- `a['store'] = "store1"`: We create a new column `store` to the DataFrame `a` and set all its values to the string "store1". 

- `a.rename(columns={'store1':'price'}, inplace=True)`: We rename the column `store1` to `price`.


```python
a['store'] = "store1"
a.rename(columns={'store1':'price'}, inplace=True)
```

After these two operations, the DataFrame `a` will have three columns: `product_id`, `price`, and `store`. 

| product_id | price | store  |
|------------|-------|--------|
| 0          | 95    | store1 |
| 1          | 70    | store1 |


<br>

Since the order of the columns may not be in the desired sequence, the last step is to rearrange the columns to the desired order. Now the order of the `store` and `price` columns has been rearranged to match the expected output.

```python
a = a[['product_id', 'store', 'price']]
```
| product_id | store  | price |
|------------|--------|-------|
| 0          | store1 | 95    |
| 1          | store1 | 70    |

<br>

The above process is repeated on all three stores, resulting in the DataFrames as shown below:

`b`
| product_id | store  | price |
|------------|--------|-------|
| 0          | store2 | 100   |

<br>

`c`

| product_id | store  | price |
|------------|--------|-------|
| 0          | store3 | 105   |
| 1          | store3 | 80    |

<br>

Lastly, we use the `concat()` function to splice the three DataFrames `a`, `b`, and `c` together. We stack them along the column axis, which is indicated by setting the parameter `axis` to 1 in the `concat()` function.  Since the three DataFrames have matching column names and order, we can seamlessly concatenate them in this manner. As a result, we obtain the expected output `answer`. The complete code is presented below.

#### Implementation

<iframe src="https://leetcode.com/playground/db2fpa95/shared" frameBorder="0" width="100%" height="395" name="db2fpa95"></iframe>

| product_id | store  | price |
|------------|--------|-------|
| 0          | store1 | 95    |
| 1          | store1 | 70    |
| 0          | store2 | 100   |
| 0          | store3 | 105   |
| 1          | store3 | 80    |


<br>

--- 

### Approach 2: Pivot Table

While the previous approach may work for a small number of stores, it can become cumbersome and inefficient when dealing with a large number of columns (Imagine if there are 100 columns from `store1` to `store100`).

#### Algorithm

A more efficient and scalable approach for stacking multiple columns is to use the `melt()` method in Pandas, which could unpivot a DataFrame from wide to long format, optionally leaving identifiers set. It could specify the columns to be stacked and their respective names, making it much easier to handle a large number of columns in a single operation. 

The parameters for our case are set as follows. `id_vars` denotes the columns used as identifier variables, which is `product_id` in this case. `value_vars` represents the columns to unpivot. `var_name = store` indicates that the column containing `value_vars` is named as `store`. `value_name=price` indicates the column of 'value' is named as `price`.

```python
df = products.melt(
    id_vars='product_id', 
    value_vars=['store1', 'store2', 'store3'],
    var_name='store', 
    value_name='price'
    )
```

Furthermore, if the parameter `value_vars` is not specified, it will automatically include all columns (`store1`, `store2`, and `store3`) that are not `id_vars`, which perfectly suits our requirement. As a result, the syntax can be made even more concise:

```python
df = products.melt(
    id_vars='product_id', 
    var_name='store', 
    value_name='price'
    )
```

We will obtain the following pivoted DataFrame `df`:

| product_id | store  | price |
|------------|---------|--------|
| 0          | store1  | 95     |
| 1          | store1  | 70     |
| 0          | store2  | 100    |
| 1          | store2  | NA   |
| 0          | store3  | 105    |
| 1          | store3  | 80     |

<br>

Our objective is to retain only the rows where the `price` column has valid values and eliminate the ones with missing values. To achieve this, we employ the `dropna()` function, specifying `axis=0` to indicate that we want to drop rows containing null values along the vertical axis. By doing so, we effectively filter out the rows with missing price values, resulting in a DataFrame `df` that contains only the desired rows. 

The complete code, taking these steps into consideration, is presented below:

#### Implementation

<iframe src="https://leetcode.com/playground/28swaTvQ/shared" frameBorder="0" width="100%" height="157" name="28swaTvQ"></iframe>

| product_id | store  | price |
|------------|---------|--------|
| 0          | store1  | 95     |
| 1          | store1  | 70     |
| 0          | store2  | 100    |
| 0          | store3  | 105    |
| 1          | store3  | 80     |

<br>


## Database

### Approach: Union Tables

#### Algorithm

We are asked to rearrange the table, which can be treated as stacking the three store columns into a single column and keeping the price corresponding to each `product_id`. To accomplish this, we can use the UNION operation to concatenate the data.

UNION operation combines the results of multiple SELECT statements into a single result set. We can use three SELECT statements to get the data for each store column separately and merge them using UNION.

Take the first table as an example, where we use the SELECT statement to retrieve the data from the table `Produce` where the value in the `store1` column is not null, use the string "store1" as the values for the `store` column, and rename the column `store1` to `price`.

```sql
SELECT product_id, 'store1' AS store, store1 AS price 
FROM Products 
WHERE store1 IS NOT NULL
```
| product_id | store  | price |
| ---------- | ------ | ----- |
| 0          | store1 | 95    |
| 1          | store1 | 70    |

<br>

Finally, the results of the three queries are unioned into a single table with columns `product_id`, `store`, and `price`.

#### Implementation

```sql
SELECT product_id, 'store1' AS store, store1 AS price 
FROM Products 
WHERE store1 IS NOT NULL

UNION 
SELECT product_id, 'store2' AS store, store2 AS price 
FROM Products 
WHERE store2 IS NOT NULL

UNION 
SELECT product_id, 'store3' AS store, store3 AS price 
FROM Products 
WHERE store3 IS NOT NULL
```