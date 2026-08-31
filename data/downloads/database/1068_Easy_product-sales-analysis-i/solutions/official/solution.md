# Official Solution

**Link:** [https://leetcode.com/problems/product-sales-analysis-i/solution/](https://leetcode.com/problems/product-sales-analysis-i/solution/)

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

### Approach: Inner Join
<!-- h4 for sections -->
#### Algorithm

<!-- Describe your approach to solving the problem. -->
The information we want to display belongs to two separate DataFrames. It's important to note that these two DataFrames are related through the `product_id` column. Therefore, we will merge these two DataFrames using this column. This way, we will be able to present information from both DataFrames simultaneously. The `merge()` method defaults to an `INNER JOIN`, so there is no need to provide any argument to the `how` parameter, as we want to retrieve only the matching records from both DataFrames.

```python
sales_and_product = sales.merge(
    product,
    on=["product_id"]
    )
```
Below is how the new dataframe, sales_and_product, looks like after the merge:

| sale_id | product_id | year | quantity | price | product_name |
| ------- | ---------- | ---- | -------- | ----- | ------------ |
| 1       | 100        | 2008 | 10       | 5000  | Nokia        |
| 2       | 100        | 2009 | 12       | 5000  | Nokia        |
| 7       | 200        | 2011 | 15       | 9000  | Apple        |

<br>

Since we only need to report the columns `product_name`, `year`, and `price`, we create another DataFrame containing only these required columns. Double brackets are used to extract a subset of data and yield a new DataFrame.

```python
df = sales_and_product[['product_name', 'year', 'price']]
```

<!-- h4 for sections -->
#### Implementation

<iframe src="https://leetcode.com/playground/CLZQcoGZ/shared" frameBorder="0" width="100%" height="225" name="CLZQcoGZ"></iframe>​

<br>

---
​
## Database

### Approach: Inner Join
<!-- h3 for approaches -->
<!-- h4 for sections -->
#### Algorithm
<!-- Describe your approach to solving the problem. -->
The information we want to display belongs to two separate tables. It's important to note that these two tables are related through the `product_id` column. Therefore, we will join these two tables using this column. This way, we will be able to present information from both tables simultaneously. We `JOIN` the two tables `ON` the `product_id` column and `SELECT` the columns needed for the final output.
​
<!-- h4 for sections -->
#### Implementation

```sql
SELECT 
    p.product_name, s.year, s.price
FROM 
    Sales s
JOIN 
    Product p
ON
    s.product_id = p.product_id
```
​
<!-- an empty line to separate approaches -->
<br>