# Official Solution

**Link:** [https://leetcode.com/problems/products-price-for-each-store/solution/](https://leetcode.com/problems/products-price-for-each-store/solution/)

---

<!-- Don't delete this -->
[TOC]

# Solution

---

## pandas

<!-- h3 for approaches -->
### Approach 1: Using `.pivot()`

<!-- h4 for sections -->
#### Intuition

<!-- Describe your approach to solving the problem. -->
In this problem, we are tasked with finding the price of each product for each store in the initial dataframe `products`.

| product_id  | store  | price |
|-------------|--------|-------|
| 0           | store1 | 95    |
| 0           | store3 | 105   |
| 0           | store2 | 100   |
| 1           | store1 | 70    |
| 1           | store3 | 80    |

<br>

We can utilize pandas's `.pivot()` method to reorganize/reshape the data by converting columns into rows and vice-versa. To do this, we need to pass the columns into their respective parameters:
- Values passed into the `index` parameter become the DataFrame's new index
- Values passed into the `columns` parameter become the DataFrame's unique columns
- Values passed into the `values` parameter become the DataFrame's populated cells

In this case, we want to pass `product_id` into the `index` and `store` into `columns` to create the structure of our pivot table below.

| product_id  | store1 | store2 | store3 |
|-------------|--------|--------|--------|
| 0           |        |        |        |
| 1           |        |        |        |

<br>

Lastly, to populate our pivot table with the prices of each product of each store, we will pass `price` into `values`, resulting in the the DataFrame below.

| product_id  | store1 | store2 | store3 |
|-------------|--------|--------|--------|
| 0           | 95     | 100    | 105    |
| 1           | 70     | null   | 80     |

<br>

<!-- h4 for sections -->
#### Implementation

<iframe src="https://leetcode.com/playground/cTndWt2A/shared" frameBorder="0" width="100%" height="225" name="cTndWt2A"></iframe>

<br>
---


## Database

<!-- h3 for approaches -->
### Approach 1: Using `MAX, CASE WHEN` to pivot

<!-- h4 for sections -->
#### Intuition

<!-- Describe your approach to solving the problem. -->
We will pivot our table by utilizing `CASE WHEN` and `AS` to produce new rows in our resulting table. While pivoting using `CASE WHEN`, it will not automatically group rows of the same `product_id` to fill the next available value, thus resulting in a null `price` and a singular `product_id`. 

To resolve this, we can use aggregation functions `MAX`, `MIN`, or `SUM` on the column `price` to grab the next available `price` for each `product_id` rather than returning null and using `GROUP BY` to separate by unique `product_id`s. The role of the `MAX` function here is to ensure that only one row of results is returned for each product and to select the correct price for each store.


<!-- h4 for sections -->
#### Implementation

```mysql []
SELECT
  product_id,
  MAX(CASE WHEN store = 'store1' THEN price END) AS store1,
  MAX(CASE WHEN store = 'store2' THEN price END) AS store2,
  MAX(CASE WHEN store = 'store3' THEN price END) AS store3
FROM 
    Products 
GROUP BY 
    product_id
```

<!-- an empty line to separate approaches -->
<br>