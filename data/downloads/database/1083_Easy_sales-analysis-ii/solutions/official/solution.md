# Official Solution

**Link:** [https://leetcode.com/problems/sales-analysis-ii/solution/](https://leetcode.com/problems/sales-analysis-ii/solution/)

---

​
<!-- Don't delete this -->
[TOC]
​
# Solution
​
---
​
--- 

## pandas

<!-- h3 for approaches -->
### Approach 1: Using 'isin()' (IN) and '~' (NOT IN)

<!-- h4 for sections -->
#### Algorithm

<!-- Describe your approach to solving the problem. -->
Since the information of buyers (`buyer_id`) and the product they purchased (`product_name`) are stored in two separate Dataframes, we first need to `merge` the two DataFrames `sales` and `product` on the common column `product_id`:

```python
sales_and_product = sales.merge(product, on = 'product_id')
```

With the new DataFrame, we can identify the buyers who have bought S8 and iPhone. Here, we create two separate DataFrames for buyers of each product: 

```python
#iPhone buyers
iPhone_sales = sales_and_product[sales_and_product['product_name'] == 'iPhone']

#S8 buyers
s8_sales = sales_and_product[sales_and_product['product_name'] == 'S8']
```

Now we can pinpoint the buyers who have bought S8 but not iPhone. To do this, we leverage the function [`isin()`](https://pandas.pydata.org/pandas-docs/stable/reference/api/pandas.DataFrame.isin.html) to first identify the S8 buyers who are also in the iPhoner buyer list, and then remove these buyers from the S8 buyers using the `~` operator. The buyers left have bought only S8. 

```python
df = s8_sales[~s8_sales.buyer_id.isin(iphone_sales['buyer_id'])]
```

Lastly, we want to return a DataFrame with only the column `buyer_id` as per requested and remove the duplicates using the function [`drop_duplicates()`](https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.drop_duplicates.html), which return DataFrame with duplicate rows removed.

```python
return df[['buyer_id']].drop_duplicates()
```

<!-- h4 for sections -->
#### Implementation

<iframe src="https://leetcode.com/playground/Rs73jqqf/shared" frameBorder="0" width="100%" height="276" name="Rs73jqqf"></iframe>

<br>

---

<!-- an empty line to separate approaches -->
<!-- h3 for approaches -->
### Approach 2: Using Lambda to Score Each Buyer

<!-- h4 for sections -->
#### Algorithm

<!-- Describe your approach to solving the problem. -->
The idea of this approach is to aggregate the sales for each buyer, 
give them a score per the `product_name` they have purchased, and filter out the unwanted users based on the score. 

To achieve this, we first `merge` the Dataframe `product` and `sales` to match the `product_name` purchased by each `buyer_id`.

```python
product_and_sales = product.merge(sales, on = 'product_id')
```

We then score the buyers by aggreagating the sales for each `buyer_id`: if there is a S8 purchase, the user will score 1 for the column `s8_sum`; if there is a iPhone purchase, the user will score 1 for the column `iphone_sum`. 

```python
buyer_score = product_and_sales.groupby('buyer_id').agg(s8_sum = ('product_name', lambda x:(x == 'S8').sum()), iphone_sum = ('product_name', lambda x:(x == 'iPhone').sum())).reset_index()
```

The new DataFrame `buyer_score` looks like this:

| buyer_id | s8_sum | iphone_sum |
| -------- | ------ | ---------- |
| 1        | 1      | 0          |
| 2        | 0      | 0          |
| 3        | 1      | 1          |​

With the scores for each buyer, we can now use the row-filtering method to select the ideal buyers. The ideal buyers need to have a score larger than 0 in the `s8_sum` column and a score of 0 in the `iphone_sum` column.

```python
df = buyer_score[(buyer_score['s8_sum'] > 0)&(buyer_score['iphone_sum'] == 0)]
```

Lastly, we return only the column `buyer_id` from the DataFrame. 

```python
return df[['buyer_id']]
```

<!-- h4 for sections -->
#### Implementation

<iframe src="https://leetcode.com/playground/MQPFrXJY/shared" frameBorder="0" width="100%" height="242" name="MQPFrXJY"></iframe>

<br>

---

## Database

<!-- h3 for approaches -->
### Approach 1: NOT IN/EXIST in the subquery

<!-- h4 for sections -->
#### Algorithm​
The most straightforward way to solve this type of **NOT IN** problem is always to use a subquery to select the unwanted group (for this question it is the buyers who have bought iPhone), and then select the wanted group in the main query (the buyers who have bought S8) and exclude the records in the subquery using `NOT IN` or `NOT EXISTS`. 
​

To create the subquery that contains the unwanted buyers: 
```sql
SELECT DISTINCT buyer_id
FROM Sales s
JOIN Product p
ON s.product_id = p.product_id
AND p.product_name = 'iPhone'
```

To create the main query that contains the wanted buyers:
```sql
SELECT DISTINCT s.buyer_id
FROM Sales s
JOIN Product p
ON s.product_id = p.product_id
AND p.product_name = 'S8'
```

Now in the Final Code, we remove the buyers in the subquery from the the main query by using `NOT IN`: 
<!-- h4 for sections -->
#### Final Code

```sql
SELECT DISTINCT s.buyer_id
FROM Sales s
JOIN Product p
ON s.product_id = p.product_id
AND p.product_name = 'S8'
AND s.buyer_id NOT IN
(
    SELECT DISTINCT buyer_id
    FROM Sales s
    JOIN Product p
    ON s.product_id = p.product_id
    AND p.product_name = 'iPhone'
    )
```
​
<!-- an empty line to separate approaches -->

### Approach 2: LEFT JOIN and NULL Ids From the Right Table

<!-- h4 for sections -->
#### Algorithm​
<!-- Describe your approach to solving the problem. -->
Another common approach to solve the 'NOT IN' problem is to use `LEFT JOIN`. In this approach, we join the two tables and put the wanted group in the left table. We then remove all the records in the right table (unwated group) from the left table by setting all the ids in the right table to NULL.

To do this, we first create a subquery that contains the unwanted group:
```sql
SELECT DISTINCT buyer_id
FROM Sales s
JOIN Product p
ON s.product_id = p.product_id
AND p.product_name = 'iPhone'
```

Then, in the main query, we identify all the buyers who have bought S8 (the wanted group):
```sql
SELECT DISTINCT s.buyer_id
FROM Sales s
JOIN Product p
ON s.product_id = p.product_id
AND p.product_name = 'S8'
```

Lastly, we have the main query `LEFT JOIN` the subquery on column `buyer_id`. We also add the filter that sets the `buyer_id` from the subquery to NULL. This way, all the overlapping users (users who bought both S8 and iPhone) will be removed, and the users who have only bought S8 will be retained.

<!-- h4 for sections -->
#### Final Code

```sql
SELECT DISTINCT s.buyer_id
FROM Sales s
JOIN Product p
ON s.product_id = p.product_id
AND p.product_name = 'S8'
LEFT JOIN
    (
    SELECT DISTINCT buyer_id
    FROM Sales s
    JOIN Product p
    ON s.product_id = p.product_id
    AND p.product_name = 'iPhone'
    )a
ON s.buyer_id = a.buyer_id
WHERE a.buyer_id IS NULL
```
​
<!-- an empty line to separate approaches -->


### Approach 3: Using CASE WHEN or GROUP_CONCAT to Score Each Buyer

<!-- h4 for sections -->
#### Algorithm

<!-- Describe your approach to solving the problem. -->
The idea of this approach is to group all sales records by each buyer and score them based on the `product_name` in each group. As a result, the user will get 1 score for any purchase of S8 or iPhone accordingly. Based on the score, we filter out the unwanted buyers from the final output. 


There are multiple ways to do this, and here we introduce two main ones using `CASE WHEN` or [`GROUP_CONCAT`](https://dev.mysql.com/doc/refman/5.7/en/aggregate-functions.html#function_group-concat).


We will start with the approach using `CASE WHEN`. We first need to join the two tables `Sales` and `Product` to match the `product_name` to each `buyer_id`. Since each buyer can purchase more than one product, we group all their orders by the `buyer_id`.

```sql
SELECT DISTINCT s.buyer_id
FROM Sales s
JOIN Product p
ON s.product_id = p.product_id
GROUP BY s.buyer_id
```

Once we have the sales aggregated for each buyer, we create the filter in the `HAVING` clause by using `CASE WHEN`, so the buyer will be scored by the product they have purchased. Since the buyer can purchase more than one product under the same brand, we aggregate all the scores by using `SUM()`. With the score generated for each buyer, we filter out the unwanted group from the wanted group: the qualified buyer will have a score larger than 0 for the S8 purchase and a score of 0 for the iPhone purchase. 

```sql
HAVING SUM(CASE WHEN p.product_name = 'iPhone' THEN 1 ELSE 0 END) = 0
AND SUM(CASE WHEN p.product_name = 'S8' THEN 1 ELSE 0 END) > 0
```

This step can be replaced by using `GROUP_CONCAT`, which returns a string result with the concatenated values from a group. In other words, instead of converting the `product_name` to a score, we look through all the `product_name` directly and catch the buyers who have a string pattern `S8` and no string pattern `iPhone` among all the `product_name`. 

```sql
HAVING GROUP_CONCAT(p.product_name) LIKE '%S8%'
AND GROUP_CONCAT(p.product_name) NOT LIKE '%iPhone%'
```
​<!-- h4 for sections -->
#### Final Code Using CASE WHEN
```sql
SELECT DISTINCT s.buyer_id
FROM Sales s
JOIN Product p
ON s.product_id = p.product_id
GROUP BY s.buyer_id
HAVING SUM(CASE WHEN p.product_name = 'iPhone' THEN 1 ELSE 0 END) = 0
AND SUM(CASE WHEN p.product_name = 'S8' THEN 1 ELSE 0 END) > 0
```
<!-- h4 for sections -->
#### Final Code Using GROUP_CONCAT

```sql
SELECT DISTINCT s.buyer_id
FROM Sales s
JOIN Product p
ON s.product_id = p.product_id
GROUP BY s.buyer_id
HAVING GROUP_CONCAT(p.product_name) LIKE '%S8%'
AND GROUP_CONCAT(p.product_name) NOT LIKE '%iPhone%'
```


-----