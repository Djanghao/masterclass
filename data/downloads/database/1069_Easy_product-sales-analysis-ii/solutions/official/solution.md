# Official Solution

**Link:** [https://leetcode.com/problems/product-sales-analysis-ii/solution/](https://leetcode.com/problems/product-sales-analysis-ii/solution/)

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
### Approach: Get Aggregated Sum by Using groupby and sum()

<!-- h4 for sections -->
#### Algorithm

<!-- Describe your approach to solving the problem. -->
To get the total quantity sold for every product id, we need the two columns `quantity` and `product_id`, and both of them are stored in the DataFrame `sales`. Since one `product_id` might have multiple sales records, we need to calculate the aggregated sum of `quantity` for each `product_id`.

```python
pd = sales.groupby(['product_id'], as_index = False)['quantity'].sum()
```

In the code above, we pass the parameter [as_index](https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.groupby.html) so it will return an object with group labels (`product_id`) as the index. 

Now there is only one step left from the final output. We want to update the column name from `quantity` to `total_quantity` as per requested. Here we use the function [rename](https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.rename.html) to achieve this. 

```python
pd = sales.groupby(['product_id'], as_index = False)['quantity'].sum().rename(columns = {'quantity': 'total_quantity'})
```

<!-- h4 for sections -->
#### Implementation

<iframe src="https://leetcode.com/playground/ZUGcMfEs/shared" frameBorder="0" width="100%" height="174" name="ZUGcMfEs"></iframe>

----
​
## Database

<!-- h3 for approaches -->
### Approach: Get Aggregated Sum by Using GROUP BY and SUM()

<!-- h4 for sections -->
#### Algorithm​
<!-- Describe your approach to solving the problem. -->
To get the total quantity sold for every product id, we need the two columns `quantity` and `product_id`. Since both are stored in the table `Sales`, we only need to use this one table and calculate the aggregated sum of `quantity` for each `product_id`. To get the final output, we also need to rename the column name to `total_quantity`. 
​
<!-- h4 for sections -->
#### Implementation

```sql
SELECT product_id,
       SUM(quantity) AS total_quantity
FROM Sales
GROUP BY product_id
```
​
<!-- an empty line to separate approaches -->
<br>