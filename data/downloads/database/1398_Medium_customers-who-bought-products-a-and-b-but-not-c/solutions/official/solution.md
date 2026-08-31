# Official Solution

**Link:** [https://leetcode.com/problems/customers-who-bought-products-a-and-b-but-not-c/solution/](https://leetcode.com/problems/customers-who-bought-products-a-and-b-but-not-c/solution/)

---

<!-- Don't delete this -->
[TOC]

# Solution

---

## pandas

<!-- h3 for approaches -->
### Approach 1: Use Three `isin` Operations

<!-- h4 for sections -->
#### Algorithm

From the `orders` table (DataFrame), we first find customer ids that have brought product 'A', 'B' and 'C', respectively.
```python
buyA = orders.loc[orders['product_name'] == 'A', 'customer_id']
buyB = orders.loc[orders['product_name'] == 'B', 'customer_id']
buyC = orders.loc[orders['product_name'] == 'C', 'customer_id']
```

Subsequently, for every entry in the `customers` table, if the `customer_id` appears in both `BuyA` and `BuyB` but is absent from `BuyC`, the row is retained; otherwise, it is discarded.

Notably, there is no necessity to carry out this process iteratively within Pandas. Instead, we can efficiently utilize the `isin` operation to determine the 'in' relationship for all elements within a specific column.

Based on above analysis, we use three `isin` operations to determine if each customer in `customers` table satisfies the following conditions: 1. brought 'A', 2. brought 'B', 3. **not** brought 'C', respectively.
```python
condA = customers['customer_id'].isin(buyA)
condB = customers['customer_id'].isin(buyB)
condC = ~customers['customer_id'].isin(buyC)
```

Finally, we can straightforwardly retain customers who fulfill all three of the above conditions, arrange them in ascending order based on the `customer_id`, and return the answer.

```python
df = customers[condA & condB & condC]
return df.sort_values(by = 'customer_id')
```




<!-- h4 for sections -->
#### Code

```python
import pandas as pd

def find_customers(customers: pd.DataFrame, orders: pd.DataFrame) -> pd.DataFrame:
    buyA = orders.loc[orders['product_name'] == 'A', 'customer_id']
    buyB = orders.loc[orders['product_name'] == 'B', 'customer_id']
    buyC = orders.loc[orders['product_name'] == 'C', 'customer_id']

    condA = customers['customer_id'].isin(buyA)
    condB = customers['customer_id'].isin(buyB)
    condC = ~customers['customer_id'].isin(buyC)
    df = customers[condA & condB & condC]
    return df.sort_values(by = 'customer_id')
```

<!-- an empty line to separate approaches -->
<br>

<!-- h3 for approaches -->
### Approach 2: Filter with custom function and `isin`

<!-- h4 for sections -->
#### Algorithm

First, we group the `orders` table by the column `customer_id`. After this step, we apply the `filter` method to these groups using a custom function `valid`.

```python
def valid(subdf):
    purchased = set(subdf['product_name'])
    return  'A' in purchased and \
            'B' in purchased and \
            'C' not in purchased

df = orders.groupby('customer_id').filter(valid)
```

The `valid` function takes in an argument `subdf` that contains all records belonging to one customer/group and returns a boolean value. If the return value is `True`, then the group is retained; otherwise, it is discarded.

Inside the `valid` function, we first build a set `purchased` that contains all unique items brought by the customer. Then we check if both 'A' and 'B' are in the set and 'C' is not.

After this step, only records belonging to customers of our interest are kept.

|order_id|customer_id|product_name|
|---|---|---|
|60|3|A|
|70|3|B|
|80|3|D|

<br>


Now, we use the `isin` function to keep the customers in the `customer` table whose `customer_id` appears in the above `df` table. Also, don't forget to sort the table in ascending order based on the `customer_id` column.

```python
cond = customers['customer_id'].isin(df['customer_id'])
return customers[cond].sort_values(by = 'customer_id')
```



<!-- h4 for sections -->
#### Code

```python
import pandas as pd

def find_customers(customers: pd.DataFrame, orders: pd.DataFrame) -> pd.DataFrame:
    def valid(subdf):
        purchased = set(subdf['product_name'])
        return  'A' in purchased and \
                'B' in purchased and \
                'C' not in purchased

    df = orders.groupby('customer_id').filter(valid)

    cond = customers['customer_id'].isin(df['customer_id'])
    return customers[cond].sort_values(by = 'customer_id')
```

<br>
---


## Database

<!-- h3 for approaches -->
### Approach 1: Group By then Use Having Clause


<!-- h4 for sections -->
#### Algorithm

We first join two tables `customers` and `orders` based on the `customer_id` column. Then we group the table by the `customer_id` column.

```sql
SELECT c.customer_id, customer_name
FROM customers c
LEFT JOIN orders o ON c.customer_id = o.customer_id
GROUP BY c.customer_id
```

A part of the table for just one group may look like this.

| customer_id | customer_name | order_id  | product_name |
| ----------- | ------------- | --------  | ------------ |
| 3           | Elizabeth     | 80        | D            |
| 3           | Elizabeth     | 70        | B            |
| 3           | Elizabeth     | 60        | A            |

<br>

Next, we use the `HAVING` clause to select groups (customers) of interest that satisfy the following conditions:
- product A appears strictly greater than 0 times
- product B appears strictly greater than 0 times
- product C appears exactly 0 times

```sql
HAVING SUM(product_name='A') > 0
    AND SUM(product_name='B') > 0
    AND SUM(product_name='C') = 0
```

Note that we need to use `SUM` instead of `COUNT` function here. This is because `COUNT` function only counts the number of records that are not NULL, without taking the actual values into consideration.

Finally, we add an `ORDER BY` clause to sort the table by customer ids.

```sql
ORDER BY c.customer_id
```


<!-- h4 for sections -->
#### Code

```sql
SELECT c.customer_id, customer_name
FROM customers c
LEFT JOIN orders o ON c.customer_id = o.customer_id
GROUP BY c.customer_id
HAVING SUM(product_name='A') > 0
    AND SUM(product_name='B') > 0
    AND SUM(product_name='C') = 0
ORDER BY c.customer_id;
```

<br>