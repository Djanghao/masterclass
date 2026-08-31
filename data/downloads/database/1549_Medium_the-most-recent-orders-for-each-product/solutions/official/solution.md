# Official Solution

**Link:** [https://leetcode.com/problems/the-most-recent-orders-for-each-product/solution/](https://leetcode.com/problems/the-most-recent-orders-for-each-product/solution/)

---

​
[TOC]

# Solution
​
​
## pandas

<!-- h3 for approaches -->
### Approach 1: Using max() to Find the Most Recent Order First
<!-- h4 for sections -->
#### Algorithm
<!-- Describe your approach to solving the problem. -->
For this approach, we find the most recent order by applying `max()` to the column `order_date`, and then merge to the other DataFrames to append the product and order information for the most recent orders. 

We first find the most recent `order_date` for each `product_id` using `groupby()`.

```python
df = orders.groupby(['product_id'], as_index=False).order_date.max()
```

This step creates a DataFrame that contains the most recent `order_date` for each `product_id` as shown below. 

| product_id | order_date |
| ---------- | ---------- |
| 1          | 2020-08-01 |
| 2          | 2020-08-03 |
| 3          | 2020-08-29 |

Now we need to get the product and order information for these orders. Since the final output is looking for `product_name` and `order_id` and they are stored in two two different DataFrames `orders` and `products`, we merge the DataFrame `df` to these DataFrames. 

```python
#merge to get the order information
df = df.merge(orders, on=['product_id', 'order_date'])
#merge to get the product information
df = df.merge(products, on='product_id')
```

After the `merge`, we now have the product and order information for the most recent orders. 

| product_id | order_date | order_id | customer_id | product_name | price |
| ---------- | ---------- | -------- | ----------- | ------------ | ----- |
| 1          | 2020-08-01 | 6        | 2           | keyboard     | 120   |
| 1          | 2020-08-01 | 7        | 3           | keyboard     | 120   |
| 2          | 2020-08-03 | 8        | 1           | mouse        | 80    |
| 3          | 2020-08-29 | 3        | 3           | screen       | 600   |


Lastly, we clean up the final output by selecting the columns and sorting the records as per requested. Both steps can be achieved in one line:

```python
return df[['product_name', 'product_id', 'order_id', 'order_date']].sort_values(['product_name', 'product_id', 'order_id'])
```

<!-- h4 for sections -->
#### Implementation
​<iframe src="https://leetcode.com/playground/jctDQoq6/shared" frameBorder="0" width="100%" height="242" name="jctDQoq6"></iframe>
<!-- an empty line to separate approaches -->

<br>

<!-- h3 for approaches -->
### Approach 2: Filtering Rows by Maximum Value Using Lambda Function

<!-- h4 for sections -->
#### Algorithm
​<!-- Describe your approach to solving the problem. -->
For this approach, we first merge the DataFrame `orders` and `products` since we need columns from both DataFrames for the final output. The below step creates a new DataFrame to store the result. 

```python
df = orders.merge(products, on='product_id').reset_index()
```

In this new `df`, we can evaluate each record within each group of `product_id` by applying a lambda function to filter rows. For each group `product_id`, we filter rows where the `order_date` column is equal to the maximum `order_date` value within that group. In other words, we select the row(s) with the latest `order_date` for each `product_id`.
​
```python
df = df.groupby('product_id').apply(lambda x:x[x.order_date == x.order_date.max()]).reset_index(drop=True)
```

After this step, we have only the most recent orders for each product left in the DataFrame. 

| index | order_id | order_date | customer_id | product_id | product_name | price |
| ----- | -------- | ---------- | ----------- | ---------- | ------------ | ----- |
| 2     | 6        | 2020-08-01 | 2           | 1          | keyboard     | 120   |
| 3     | 7        | 2020-08-01 | 3           | 1          | keyboard     | 120   |
| 6     | 8        | 2020-08-03 | 1           | 2          | mouse        | 80    |
| 8     | 3        | 2020-08-29 | 3           | 3          | screen       | 600   |


To get the final output, we update the DataFrame by selecting the requested columns and sorting the records accordingly. We can add both steps in one line:

```python
return df[['product_name', 'product_id', 'order_id', 'order_date']].sort_values(['product_name', 'product_id', 'order_id'])
```

<!-- h4 for sections -->
#### Implementation
​​<iframe src="https://leetcode.com/playground/ebcf5vBs/shared" frameBorder="0" width="100%" height="208" name="ebcf5vBs"></iframe>
---

​
## Database

Similar to the question [1890](https://leetcode.com/problems/the-latest-login-in-2020/editorial/), there are two main methods to get the maximum or most recent records: using aggregate function `MAX()` or window function `RANK()`/`DENSE_RANK()`/`FIRST_VALUE()`/`ROW_NUMBER()` to sort the values in a column so that the wanted result will have the highest rank. 

<!-- h3 for approaches -->
### Approach 1: Using MAX() to Find the Most Recent Order

<!-- h4 for sections -->
#### Algorithm
<!-- Describe your approach to solving the problem. -->
<!-- h4 for sections -->

In the subquery, we first identify the most recent order using `MAX()` for each `product_id`. 

```sql
SELECT 
    DISTINCT product_id, 
    MAX(order_date) AS order_date
FROM Orders
GROUP BY 1
```

Next, we `JOIN ` the two tables `Products` and `Orders` on `product_id` in the main query to get all required columns for the final output.

```sql
SELECT 
    DISTINCT p.product_name,
    p.product_id,
    o.order_id,
    o.order_date
FROM 
    Products p 
JOIN 
    Orders o
ON 
    p.product_id = o.product_id
```

Lastly, we `JOIN` the main query to the subquery on `product_id` and `order_date` so only the wanted records (the most recent order info for each product) will be returned. We also want to make sure the final results are ordered by `product_name`, `product_id`, and `order_id` in ascending order. 

#### Implementation
```mysql []
SELECT 
    DISTINCT p.product_name,
    p.product_id,
    o.order_id,
    o.order_date
FROM 
    Products p 
JOIN 
    Orders o
ON 
    p.product_id = o.product_id
JOIN
    (
    SELECT 
        DISTINCT product_id, 
        MAX(order_date) AS order_date
    FROM 
        Orders
    GROUP BY 1
    )a
ON 
    o.product_id = a.product_id
AND 
    o.order_date = a.order_date
ORDER BY p.product_name,
    p.product_id,
    o.order_id
```

<br>


### Approach 2: Using RANK() to Find the Most Recent Order
<!-- h4 for sections -->
The logic of this approach is similar to the first approach, the major difference being that instead of getting the most recent order with the function `MAX()`, we sort the results in a way that the most recent `order_date` comes first.

#### Algorithm
<!-- Describe your approach to solving the problem. -->
<!-- h4 for sections -->
In the subquery, we rank the `order_date` in the descending order for each product. 

```sql
SELECT 
    order_id, 
    order_date, 
    product_id,
    RANK() OVER (PARTITION BY product_id ORDER BY order_date DESC) AS rnk
FROM 
    Orders
```

In the main query, we `JOIN` the `Products` table from the subquery to get all the needed columns. We also added the filter to select only the records with a rank of 1 from the subquery, so the `JOIN` will return only the wanted records. We also want to make sure the final results are ordered by `product_name`, `product_id`, and `order_id` in ascending order. 

#### Implementation
```mysql []
SELECT 
    DISTINCT p.product_name,
    p.product_id,
    o.order_id,
    o.order_date
FROM 
    Products p
JOIN 
    (
    SELECT 
        order_id, 
        order_date, 
        product_id,
        RANK() OVER (PARTITION BY product_id ORDER BY order_date DESC) AS rnk
    FROM Orders
)o
ON 
    p.product_id = o.product_id
AND 
    rnk = 1
ORDER BY p.product_name,
    p.product_id,
    o.order_id
```
----
​
<!-- an empty line to separate approaches -->
<br>