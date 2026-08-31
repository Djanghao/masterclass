# Official Solution

**Link:** [https://leetcode.com/problems/sales-by-day-of-the-week/solution/](https://leetcode.com/problems/sales-by-day-of-the-week/solution/)

---

​
<!-- Don't delete this -->
[TOC]
​
# Solution
​
---
​
## pandas

<!-- h3 for approaches -->
### Approach: Reshaping DataFrame Using pivot_table

<!-- h4 for sections -->
#### Algorithm
​<!-- Describe your approach to solving the problem. -->
Since the column `item_category` is stored in the DataFrame `items` and the column `quantity` is stored in the Dataframe `orders`, we first left `merge` the DataFrame `items` to `orders` to get the total quantities for each `item_category` no matter if there is an order associated with the `item_category` or not. In this step, we can also rename the column `item_category` to `category` as per requested by the final output. 

```python
df = items.merge(orders, how='left', on='item_id').rename(columns={'item_category': 'category'})
```

Below is part of the output from this step: the item `category` and `quantity` sold are now stored in the same DataFrame. 

| item_id | item_name      | category | order_id | customer_id | order_date | quantity |
| ------- | -------------- | -------- | -------- | ----------- | ---------- | -------- |
| 1       | LC Alg. Book   | Book     | 1        | 1           | 2020-06-01 | 10       |
| 1       | LC Alg. Book   | Book     | 3        | 2           | 2020-06-02 | 5        |
| 1       | LC Alg. Book   | Book     | 7        | 5           | 2020-06-05 | 10       |

Next, we build the frame of the final output, which is all the days of the week, using the function `CategoricalDtype`. We can also pass the parameter `ordered=True` to make sure the categorical values are ordered from Monday to Sunday. 

```python
all_weekdays = pd.CategoricalDtype(
        categories = ['MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY', 'SUNDAY'], 
        ordered=True)
```

Now we can find the day of the week for each order using the function `day_name()`. We also convert the day names to uppercase using `str.upper()`. Additionally, we map the column type of the frame we created above (`all_weekdays`) to this column to make sure it contains all values in the same order. 

```python
df['dayofweek'] = df['order_date'].dt.day_name().str.upper().astype(all_weekdays)
```

Below is part of the output from this step.

| item_id | item_name      | category | order_id | customer_id | order_date | quantity | dayofweek |
| ------- | -------------- | -------- | -------- | ----------- | ---------- | -------- | --------- |
| 1       | LC Alg. Book   | Book     | 1        | 1           | 2020-06-01 | 10       | MONDAY    |
| 1       | LC Alg. Book   | Book     | 3        | 2           | 2020-06-02 | 5        | TUESDAY   |
| 1       | LC Alg. Book   | Book     | 7        | 5           | 2020-06-05 | 10       | FRIDAY    |

Almost there! Now we only need to reshape the table and pivot the values in `dayofweek` to columns. There are different ways to do this; in this approach, we choose the function `pivot_table` to calculate the aggregate total of `quantity` in the step. If you want to use `pivot()` or `unstack()`, you need to calculate the aggregate total first before reshaping the results. 

```python
df = df.pivot_table(index='category', columns='dayofweek', values='quantity', aggfunc='sum').reset_index()
```
​
<!-- h4 for sections -->
#### Implementation
​<iframe src="https://leetcode.com/playground/kULA2xjQ/shared" frameBorder="0" width="100%" height="327" name="kULA2xjQ"></iframe>
<!-- an empty line to separate approaches -->
---
​
## Database


<!-- h3 for approaches -->
### Approach: Reshaping Table Using SUM(CASE WHEN)

<!-- h4 for sections -->
#### Algorithm

<!-- Describe your approach to solving the problem. -->
Since the column `item_category` is stored in the table `Items` and the column `quantity` is stored in the table `Orders`, we `LEFT JOIN` the table `Items` to the table `Orders` to make sure the result includes all `item_category` no matter if there is an order associated with the `item_category` or not. 

To identify the day of the week from an `order_date`, we use the function `DAYOFWEEK()`. Since there is no existing function to pivot a table in MySql, we leverage the function `SUM(CASE WHEN)` to pivot the rows (the day of the week for each order) to columns (the total quantities sold for the day of the week from all orders). For the days that have no orders for any `item_category`, we add the function `IFNULL()` to return 0 for such days. Lastly, we have all the aggregate total quantities grouped by the `item_category` and rename the column to `CATEGORY` for the final output. 

<!-- h4 for sections -->
#### Implementation
```mysql []
SELECT item_category AS CATEGORY,
       IFNULL(SUM(CASE WHEN DAYOFWEEK(order_date) = 2 THEN quantity END), 0) AS 'MONDAY',
       IFNULL(SUM(CASE WHEN DAYOFWEEK(order_date) = 3 THEN quantity END), 0) AS 'TUESDAY',
       IFNULL(SUM(CASE WHEN DAYOFWEEK(order_date) = 4 THEN quantity END), 0) AS 'WEDNESDAY',
       IFNULL(SUM(CASE WHEN DAYOFWEEK(order_date) = 5 THEN quantity END), 0) AS 'THURSDAY',
       IFNULL(SUM(CASE WHEN DAYOFWEEK(order_date) = 6 THEN quantity END), 0) AS 'FRIDAY',
       IFNULL(SUM(CASE WHEN DAYOFWEEK(order_date) = 7 THEN quantity END), 0) AS 'SATURDAY',
       IFNULL(SUM(CASE WHEN DAYOFWEEK(order_date) = 1 THEN quantity END), 0) AS 'SUNDAY'
FROM Items i
LEFT JOIN Orders o
ON o.item_id = i.item_id
GROUP BY item_category
ORDER BY item_category
```

----