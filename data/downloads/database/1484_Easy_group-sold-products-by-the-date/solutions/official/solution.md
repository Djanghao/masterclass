# Official Solution

**Link:** [https://leetcode.com/problems/group-sold-products-by-the-date/solution/](https://leetcode.com/problems/group-sold-products-by-the-date/solution/)

---

<!-- Don't delete this -->
[TOC]

# Solution

---

## pandas

### Approach: Grouping and aggregation of strings

#### Algorithm

The question requires us to group and aggregate data based on dates. To achieve this, we first need to use the `groupby` function to group the DataFrame `activities` by date via `groups = activities.groupby('sell_date')`, this creates a new DataFrameGroupBy object.

Then we perform aggregation operations on each group in this DataFrameGroupBy object using `agg()`, where we specify two aggregation tasks using named aggregations:

- `num_sold=('product', 'nunique')`: this creates a new column `num_sold` in the output DataFrame represents the number of unique products sold on each sell date. The 'nunique' function counts the distinct elements in the `product` column within each group.

- `products=('product', lambda x: ','.join(sorted(set(x))))`: this line is a bit complicated, we are asked to sort and join all unique names within each group. However, there is no defined function that can handle this task, but fortunately, we can replace it with a custom function `lambda x: ','.join(sorted(set(x)))`. Here `x` denotes the Series representing the column `product` in each group. We convert it into a set to remove duplicates, sort the unique product names, and then join them into a single string with commas.



```python
groups = activities.groupby('sell_date')

stats = groups.agg(
    num_sold=('product', 'nunique'), 
    products=('product', lambda x: ','.join(sorted(set(x))))
    ).reset_index()
```

This creates the `stats` DataFrame as shown below, 

| sell_date  | num_sold | products                     |
| ---------- | -------- | ---------------------------- |
| 2020-05-30 | 3        | Basketball,Headphone,T-Shirt |
| 2020-06-01 | 2        | Bible,Pencil                 |
| 2020-06-02 | 1        | Mask                         |

<br>

Next, we need to sort the `stats` DataFrame based on the `sell_date` column in ascending order (earliest date first). The `inplace=True` parameter ensures that the sorting is applied directly to the DataFrame.


```python
stats.sort_values('sell_date', inplace=True)
```

We will obtain the DataFrame `answer` as follows (In this example, the `stats` DataFrame remains unchanged before and after sorting. However, it does not necessarily apply to other cases.)

| sell_date   | num_sold | products                      |
|-------------|----------|-------------------------------|
| 2020-05-30  | 3        | Basketball, Headphone, T-shirt |
| 2020-06-01  | 2        | Bible, Pencil                 |
| 2020-06-02  | 1        | Mask                          |


<br>

#### Implementation

<iframe src="https://leetcode.com/playground/6QWyFc2b/shared" frameBorder="0" width="100%" height="276" name="6QWyFc2b"></iframe>

<br>



## Database

### Approach: Grouping and aggregation of strings

#### Algorithm

We group the data by the `sell_date` column, to get the `num_sold` column, we use `COUNT(DISTINCT product)` to count the number of unique products sold on each sell date. 

The most challenging part is sorting and joining all unique names in each group to get the column `products`. We can use the function `GROUP_CONCAT` to combine multiple values from multiple rows into a single string. The following shows the syntax of the `GROUP_CONCAT()` function:

```sql
GROUP_CONCAT(
    DISTINCT expression1
    ORDER BY expression2
    SEPARATOR sep
);
```

The keyword `DISTINCT` ensures that each name in the column `expression1` is included only once in the concatenated string. Note that we need to sort unique names in ascending order, which is the default order, so we can omit the parameter `expression2`. The keyword `SEPARATOR` specifies that the product names should be separated by `sep`. In sum, we use `GROUP_CONCAT` as follows.

```sql
GROUP_CONCAT(
    DISTINCT product
    SEPARATOR ','
);
```

This concatenates the distinct product names into a single string for each sell date. Lastly, we sort the final result in ascending order based on the `sell_date`. This ensures that the output table is organized from the earliest to the latest sell dates. The complete code is as follows:


#### Implementation

```sql
SELECT 
    sell_date,
    COUNT(DISTINCT(product)) AS num_sold, 
    GROUP_CONCAT(DISTINCT product ORDER BY product SEPARATOR ',') AS products
FROM 
    Activities
GROUP BY 
    sell_date
ORDER BY 
    sell_date ASC
```