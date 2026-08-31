# Official Solution

**Link:** [https://leetcode.com/problems/recyclable-and-low-fat-products/solution/](https://leetcode.com/problems/recyclable-and-low-fat-products/solution/)

---

<!-- Don't delete this -->
[TOC] 

# Solution

---

## pandas

### Approach: Selecting rows based on conditions
#### Algorithm
We have the original DataFrame `products` shown below:

| product_id | low_fats | recyclable |
|------------|----------|------------|
| 0          | Y        | N          |
| 1          | Y        | Y          |
| 2          | N        | Y          |
| 3          | Y        | Y          |
| 4          | N        | N          |


In Pandas, boolean indexing allows us to filter the DataFrame by using boolean arrays or conditions. It means that we can use a Series of boolean values or create conditions that evaluate to `True` or `False` for each row in the DataFrame. By applying these boolean values or conditions as an index to the DataFrame, we can selectively extract the rows that satisfy the conditions. 

In this scenario, we should select only the rows where the `low_fats` column has a value of "Y" (indicating the product is low fat) and the `recyclable` column has a value of "Y" (indicating the product is recyclable), which can be represented as:

```python3
df = products[(products['low_fats'] == 'Y') & (products['recyclable'] == 'Y')]
```

This filtering creates a new DataFrame `df` containing the products that meet both criteria. Note that the rows with `product_id` equal to 0, 2, and 4 are filtered out.

| product_id | low_fats | recyclable |
|------------|----------|------------|
| 1          | Y        | Y          |
| 3          | Y        | Y          |


<br>

Next, we need to select only the desired column `product_id` from `df` using double square brackets.

```python3
df = df[['product_id']]
```

The resulting DataFrame looks like this:

| product_id |
|------------|
| 1          |
| 3          |

<br>


#### Implementation

<iframe src="https://leetcode.com/playground/giepmUye/shared" frameBorder="0" width="100%" height="191" name="giepmUye"></iframe>

<br>
<br>


## Database

### Approach: Selecting rows based on conditions


#### Algorithm
The keyword `SELECT` is used to specify the columns that we want to retrieve from the table `Products`. In this scenario, we want to retrieve the `product_id` column.

The keyword `WHERE` is used to filter the rows in the table `Products` based on specific conditions, which the `low_fats` column has the value "Y" (indicating low-fat products) and the `recyclable` column has the value "Y" (indicating recyclable products). We use the logical operator `AND` to combine both conditions, ensuring that the final result includes only product IDs for products that are both low fat and recyclable.


#### Implementation

```sql
SELECT
    product_id
FROM
    Products
WHERE
    low_fats = 'Y' AND recyclable = 'Y'
```