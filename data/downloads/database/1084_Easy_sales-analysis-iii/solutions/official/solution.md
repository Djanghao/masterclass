# Official Solution

**Link:** [https://leetcode.com/problems/sales-analysis-iii/solution/](https://leetcode.com/problems/sales-analysis-iii/solution/)

---

<!-- Don't delete this -->
[TOC]

# Solution

---

## pandas

<!-- h3 for approaches -->
### Approach 1: Filter `sales` and Merge with `product`

<!-- h4 for sections -->
#### Algorithm
The problem asks us to find all products that were sold **only** between `2019-01-01` and `2019-03-31`. This means that, for a given `product_id`, the following two conditions need to hold:
- the earliest date is larger or equal to '2019-01-01', `min(sale_date) >= '2019-01-01'`
- the latest date is smaller or equal to '2019-03-31', `max(sale_date) <= '2019-03-31'`

Based on the above analysis, we begin by grouping the `sales` table according to the `product_id` column. Next, we utilize the `filter` function to select groups (product ids) that meet the aforementioned two conditions.
```python
start_time = pd.to_datetime('2019-01-01')
end_time =  pd.to_datetime('2019-03-31')
df = sales.groupby('product_id').filter(lambda x:
    min(x['sale_date']) >= start_time and max(x['sale_date']) <= end_time
)
```
|seller_id|product_id|buyer_id|sale_date|quantity|price|
|---|---|---|---|---|---|
|1|1|1|2019-01-21|2|2000|

<br>

Now, we have a table (data frame) that contains all product ids of our interest but there might be duplicates. Therefore, we use the `drop_duplicates` function to keep only one record for each `product_id`.
```python
df = df.drop_duplicates(subset = 'product_id')
```

Next, we merge with the `product` table to find the product name for each product id.
```python
df = df.merge(product, left_on = 'product_id', right_on = 'product_id')
```

|seller_id|product_id|buyer_id|sale_date|quantity|price|product_name|unit_price|
|---|---|---|---|---|---|---|---|
|1|1|1|2019-01-21|2|2000|S8|1000|

<br>

Finally, we simply return the `product_id` and `product_name` columns from the above table.
```python
return df[['product_id', 'product_name']]
```


<!-- h4 for sections -->
#### Implementation

<iframe src="https://leetcode.com/playground/VgHeWSER/shared" frameBorder="0" width="100%" height="242" name="VgHeWSER"></iframe>

<br>
-----

## Database

<!-- h3 for approaches -->
### Approach 1: Group By and Use Having Clause


<!-- h4 for sections -->
#### Algorithm

We first join two tables `sales` and `product` on equal product ids. Then we group the table by the `product_id` column.


```sql
SELECT DISTINCT p.product_id, p.product_name
FROM Sales s
LEFT JOIN Product p ON p.product_id = s.product_id
GROUP BY p.product_id
```

Note that we need to guarantee there are no duplicates, therefore we use the `SELECT DISTINCT` statement here.

Next, we use the `HAVING` clause to select groups (product ids) of interest that satisfy the following conditions:
- the earliest date is larger or equal to '2019-01-01', `MIN(sale_date) >= '2019-01-01'`
- the latest date is smaller or equal to '2019-03-31', `MAX(sale_date) <= '2019-03-31'`

```sql
HAVING MIN(sale_date) >= '2019-01-01' AND MAX(sale_date) <= '2019-03-31';
```


<!-- h4 for sections -->
#### Implementation

```sql
SELECT DISTINCT p.product_id, p.product_name
FROM Sales s
LEFT JOIN Product p ON p.product_id = s.product_id
GROUP BY p.product_id
HAVING MIN(sale_date) >= '2019-01-01' AND MAX(sale_date) <= '2019-03-31';
```

<br>