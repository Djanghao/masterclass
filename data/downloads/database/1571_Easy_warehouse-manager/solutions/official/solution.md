# Official Solution

**Link:** [https://leetcode.com/problems/warehouse-manager/solution/](https://leetcode.com/problems/warehouse-manager/solution/)

---

<!-- Don't delete this -->
[TOC]

# Solution

---

## pandas

### Approach: Left Join and Aggregation

#### Algorithm

We want to identify the **volume** (the number of cubic feet) of inventory that is occupied in each warehouse. The original table `products` is as follows:

| product_id | product_name | Width      | Length   | Height    |
|------------|--------------|------------|----------|-----------|
| 1          | LC-TV        | 5          | 50       | 40        |
| 2          | LC-KeyChain  | 5          | 5        | 5         |
| 3          | LC-Phone     | 2          | 10       | 10        |
| 4          | LC-T-Shirt   | 4          | 10       | 20        |

<br>

First, let's create a new column to represent **cubic_ft** of each product. We can achieve this by utilizing the volume formula:

$$
\begin{aligned}
\text{volume} = \text{width} \times \text{height} \times \text{length}
\end{aligned}
$$

Given the volume formula, we can set a new column **cubic_ft** that is calculated from columns **width**, **height**, and **length**.


```python
# Create a new column 'cubic_ft' in the products DataFrame given the volume formula
products['cubic_ft'] = products['Width'] * products['Height'] * products['Length']
```

Below is the updated `products` DataFrame after the **cubic_ft** column is calculated.

| product_id | product_name | Width      | Length   | Height    | cubic_ft |
|------------|--------------|------------|----------|-----------|----------|
| 1          | LC-TV        | 5          | 50       | 40        | 10000    |
| 2          | LC-KeyChain  | 5          | 5        | 5         | 125      |
| 3          | LC-Phone     | 2          | 10       | 10        | 200      |
| 4          | LC-T-Shirt   | 4          | 10       | 20        | 800      |

<br>

After calculating the **cubic_ft** for each product, we can now use this updated `products` DataFrame to `merge()` with the `warehouse` table. We will utilize a **LEFT JOIN** on the **product_id**, which will left fill the **cubic_ft** of each product in each warehouse. To achieve this, we will pass the argument `how='left'` into the `.merge()` method. Let us see how `warehouse` looks originally before the merge:

| name       | product_id   | units       |
|------------|--------------|-------------|
| LCHouse1   | 1            | 1           |
| LCHouse1   | 2            | 10          |
| LCHouse1   | 3            | 5           |
| LCHouse2   | 1            | 2           |
| LCHouse2   | 2            | 2           |
| LCHouse3   | 4            | 1           |

<br>

Now let's take a look at the `warehouse` DataFrame after the merge.

```python
# Merge warehouse with Product using a left join on the product_id column
# For a cleaner looking table, we will only be bringing over columns product_id & cubic_ft
warehouse = warehouse.merge(
    Products[['product_id', 'cubic_ft']], 
    how='left', 
    on='product_id'
    )
```
| name       | product_id   | units       | cubic_ft |
|------------|--------------|-------------|----------|
| LCHouse1   | 1            | 1           |10000     |
| LCHouse1   | 2            | 10          |125       |
| LCHouse1   | 3            | 5           |200       |
| LCHouse2   | 1            | 2           |10000     |
| LCHouse2   | 2            | 2           |125       |
| LCHouse3   | 4            | 1           |800       |

<br>

Having the updated `warehouse` DataFrame, we can proceed to calculate the **volume** occupied by each product in each warehouse. Just like we previously computed the **cubic_ft** column for the `products` table, we will now add a new column in `warehouse` named **volume**, which is calculated by multiplying the **units** and **cubic_ft** columns.

```python
# Calculate the volume for each respective warehouse & product_id
warehouse['volume'] = warehouse['units'] * warehouse['cubic_ft']
```
Below is the updated `warehouse` DataFrame with the `volume` column:

| name       | product_id   | units       | cubic_ft | volume |
|------------|--------------|-------------|----------|--------|
| LCHouse1   | 1            | 1           |10000     |10000   |
| LCHouse1   | 2            | 10          |125       |1250    |
| LCHouse1   | 3            | 5           |200       |1000    |
| LCHouse2   | 1            | 2           |10000     |20000   |
| LCHouse2   | 2            | 2           |125       |250     |
| LCHouse3   | 4            | 1           |800       |800     |

<br>

Now that we have the **volume** for each product in each warehouse, our next step is to aggregate the volume for each warehouse. To do this, we will employ the `.groupby().sum()` method using **name** as the grouping criterion and indexing the **volume** column to perform aggregation. We also need to utilize the method `.reset_index()` with `name='{column name}'` to rename the summed column. In this scenario, we will use `name='volume'`.

```python
# Group by Warehouse and sum volume - save as df
df = warehouse.groupby('name')['volume'].sum().reset_index(name="volume")
```
This creates a new DataFrame `df`.

|name     |volume |
|-------  |-------|
|LCHouse1 | 12250 |
|LCHouse2 | 20250 |
|LCHouse3 | 800   |

<br>

Lastly, we need to rename the column names to conform to our solution. To do this, we will utilize `.rename(columns={'old_column_name': 'new_column_name})`. Here, we will update **name** to **warehouse_name**

```python
# Rename 'name' to 'warehouse_name'
df = df.rename(columns={'name': 'warehouse_name'})
```

Here is our resulting `df`!

|warehouse_name     |volume |
|-------------------|-------|
|LCHouse1           | 12250 |
|LCHouse2           | 20250 |
|LCHouse3           | 800   |

<br>

#### Implementation

<iframe src="https://leetcode.com/playground/5ZSRMXR3/shared" frameBorder="0" width="100%" height="293" name="5ZSRMXR3"></iframe>

<br>

## Database

### Approach: Left Join and Aggregation

#### Algorithm

In SQL, we can utilize a subquery to retrieve the volume of each product in the `Products` table. This is calculated by multiplying **width**, **height**, and **length** in the `Products` table. We will name this calculated field as **volume**. Let us also `SELECT` the **product_id** for joining purposes.

```sql
SELECT 
    p.product_id, 
    p.width * p.length * p.height AS volume
FROM 
    Products p;
```

With the `Warehouse` table, we will `LEFT JOIN` this subquery ON the *product_id* column. This will give us access to the **volume** of each product. 

```sql
SELECT 
    *
FROM 
    Warehouse w
LEFT JOIN (
    SELECT 
        p.product_id, 
        p.width * p.length * p.height AS cubic_ft
    FROM 
        Products p
) AS sub
ON w.product_id = sub.product_id;
```

The resulting table from this `LEFT JOIN` is:

| name     | product_id | units | product_id | cubic_ft |
| -------- | ---------- | ----- | ---------- | -------- |
| LCHouse1 | 1          | 1     | 1          | 10000    |
| LCHouse1 | 2          | 10    | 2          | 125      |
| LCHouse1 | 3          | 5     | 3          | 200      |
| LCHouse2 | 1          | 2     | 1          | 10000    |
| LCHouse2 | 2          | 2     | 2          | 125      |
| LCHouse3 | 4          | 1     | 4          | 800      |

<br>

Given these joined columns from our subquery, we will need to retrieve the **name** as **warehouse_name** for each warehouse, as well as the total **volume** of inventory in each warehouse. To achieve this aggregation, we will utilize the `SUM()` function on the **cubic_ft** column of our subquery and rename this as **volume** for our resulting table. Along with the `SUM()` function, we also need to group the rows to separate the warehouses. This will be done by using the `GROUP BY` clause, passing in **warehouse_name** to separate the warehouses.

#### Implementation

```sql
SELECT 
    w.name AS warehouse_name, 
    sum(w.units * sub.cubic_ft) AS volume
FROM 
    Warehouse w
LEFT JOIN (
    SELECT 
        p.product_id, 
        p.width * p.length * p.height AS cubic_ft
    FROM Products p
) AS sub
ON w.product_id = sub.product_id
GROUP BY warehouse_name;
```