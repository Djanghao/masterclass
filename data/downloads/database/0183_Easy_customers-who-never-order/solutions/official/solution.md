# Official Solution

**Link:** [https://leetcode.com/problems/customers-who-never-order/solution/](https://leetcode.com/problems/customers-who-never-order/solution/)

---

<!-- Don't delete this -->
[TOC]

# Solution

---

## pandas

### Approach 1: Filtering Data with Exclusion Criteria

#### Algorithm

The criterion for determining whether a customer ever orders is: if a customer ID does not appear in the `orders` table, it means they have never placed an order.

Therefore, we can use row filtering to remove customer IDs that do not meet the criteria. 

> In Pandas:
> -  `isin(values)` is used to filter and select rows based on whether their values are present in a given set `values`. 
> -  `~` represents logical negation. 
>
>Therefore, `~isin(values)` selects rows if their values are NOT present in `values`.


```python
# Select the rows which `id` is not present in orders['customerId'].
df = customers[~customers['id'].isin(orders['customerId'])]
```

We can obtain the following table:

<table>
  <tr>
    <th>id</th>
    <th>name</th>
  </tr>
  <tr>
    <td>2</td>
    <td>Henry</td>
  </tr>
  <tr>
    <td>4</td>
    <td>Max</td>
  </tr>
</table>

<br>

Note that the requirement is to only return the names that meet the criteria, and the column `name` should be renamed as `Customers`, therefore.

```python
# Build a dataframe that only contains the column `name` 
# and rename the column `name` as `Customers`.
df = df[['name']].rename(columns={'name': 'Customers'})
```

Here is the resulting table:

<table>
  <tr>
    <th>Customers</th>
  </tr>
  <tr>
    <td>Henry</td>
  </tr>
  <tr>
    <td>Max</td>
  </tr>
</table>


<br>

#### Implementation

```python
import pandas as pd

def find_customers(customers: pd.DataFrame, orders: pd.DataFrame) -> pd.DataFrame:
    # Select the rows which `id` is not present in orders['customerId'].
    df = customers[~customers['id'].isin(orders['customerId'])]

    # Build a dataframe that only contains the column `name` 
    # and rename the column `name` as `Customers`.
    df = df[['name']].rename(columns={'name': 'Customers'})
    return df
```

<br>

---

### Approach 2: Left Join on `customers`


#### Algorithm
The idea is to join the table `customers` with the table `orders` based on the common customer ID (the column `id` in `customers` and the column `customerId` in `orders`). 

By performing a left join and selecting the records where the `customerId` is `null`, we can identify customers who do not make an order.

> We use a left join on `customers` because we want to include all customers from it, regardless of whether they place an order or not.
> Therefore, by using left join, we can preserve all the rows from the left table (`customers`) and match them with corresponding rows from the right table (`orders`) based on `id` and `customerID`, separately.

```python
df = customers.merge(orders, left_on='id', right_on='customerId', how='left')
```

The table appears as follows:

<table>
  <tr>
    <th>id</th>
    <th>name</th>
    <th>id</th>
    <th>customerId</th>
  </tr>
  <tr>
    <td>1</td>
    <td>Joe</td>
    <td>2</td>
    <td>1</td>
  </tr>
  <tr>
    <td>2</td>
    <td>Henry</td>
    <td>null</td>
    <td>null</td>
  </tr>
  <tr>
    <td>3</td>
    <td>Sam</td>
    <td>1</td>
    <td>3</td>
  </tr>
  <tr>
    <td>4</td>
    <td>Max</td>
    <td>null</td>
    <td>null</td>
  </tr>
</table>

<br>

The next step is filtering the joined table by selecting the rows where the `customerId` is null, which will give us the customers who do not have any orders.


```python
df = df[result['customerId'].isna()]
```

The table appears as follows:

<table>
  <tr>
    <th>id</th>
    <th>name</th>
    <th>id</th>
    <th>customerId</th>
  </tr>
  <tr>
    <td>2</td>
    <td>Henry</td>
    <td>null</td>
    <td>null</td>
  </tr>
  <tr>
    <td>4</td>
    <td>Max</td>
    <td>null</td>
    <td>null</td>
  </tr>
</table>

<br>

Similarly, we only return the names of the rows that meet the criteria, and rename the column `name` as `Customers`.

```python
df = df[['name']].rename(columns={'name': 'Customers'})
```

Here is the resulting table:

<table>
  <tr>
    <th>Customers</th>
  </tr>
  <tr>
    <td>Henry</td>
  </tr>
  <tr>
    <td>Max</td>
  </tr>
</table>

<br>

In summary, the complete answer is as follows:

#### Implementation

<iframe src="https://leetcode.com/playground/7kmLjiFR/shared" frameBorder="0" width="100%" height="174" name="7kmLjiFR"></iframe>

## Database

### Approach 1: Filtering Data with Exclusion Criteria

#### Algorithm

The criterion for determining whether a customer ever orders is: if a customer ID does not appear in the `orders` table, it means they have never placed an order.

Therefore, we can use row filtering to remove customer IDs that do not meet the criteria using `NOT IN` clause.

```sql
select *
from customers
where customers.id not in
(
    select customerid from orders
);
```

We can obtain the following table:

<table>
  <tr>
    <th>id</th>
    <th>name</th>
  </tr>
  <tr>
    <td>2</td>
    <td>Henry</td>
  </tr>
  <tr>
    <td>4</td>
    <td>Max</td>
  </tr>
</table>

<br>

Note that the requirement is to only return the names that meet the criteria, and the column `name` should be renamed as `Customers`, therefore, the complete answer is as follows:

#### Implementation

```sql
select customers.name as 'Customers'
from customers
where customers.id not in
(
    select customerid from orders
);
```

<br>

### Approach 2: Left Join on `customers`

#### Algorithm
The idea is to join the table `customers` with the table `orders` based on the common customer ID (the column `id` in `customers` and the column `customerId` in `orders`). 

By performing a left join and selecting the records where the `customerId` is `null`, we can identify customers who do not make an order.

> We use a left join on `customers` because we want to include all customers from it, regardless of whether they place an order or not.
> Therefore, by using left join, we can preserve all the rows from the left table (`customers`) and match them with corresponding rows from the right table (`orders`) based on `id` and `customerID`, separately.


```sql
SELECT * 
FROM Customers c
LEFT JOIN Orders o
ON c.Id = o.CustomerId
```

The table appears as follows:

<table>
  <tr>
    <th>id</th>
    <th>name</th>
    <th>id</th>
    <th>customerId</th>
  </tr>
  <tr>
    <td>1</td>
    <td>Joe</td>
    <td>2</td>
    <td>1</td>
  </tr>
  <tr>
    <td>2</td>
    <td>Henry</td>
    <td>null</td>
    <td>null</td>
  </tr>
  <tr>
    <td>3</td>
    <td>Sam</td>
    <td>1</td>
    <td>3</td>
  </tr>
  <tr>
    <td>4</td>
    <td>Max</td>
    <td>null</td>
    <td>null</td>
  </tr>
</table>

<br>

The next step is filtering the joined table by selecting the rows where the `customerId` is null, which will give us the customers who do not have any orders.

```sql
SELECT * 
FROM Customers
LEFT JOIN Orders ON Customers.Id = Orders.CustomerId
WHERE Orders.CustomerId IS NULL
```

The table appears as follows:

<table>
  <tr>
    <th>id</th>
    <th>name</th>
    <th>id</th>
    <th>customerId</th>
  </tr>
  <tr>
    <td>2</td>
    <td>Henry</td>
    <td>null</td>
    <td>null</td>
  </tr>
  <tr>
    <td>4</td>
    <td>Max</td>
    <td>null</td>
    <td>null</td>
  </tr>
</table>

<br>

Similarly, we only return the names of the rows that meet the criteria, and rename the column `name` as `Customers`. The complete answer is as follows:

#### Implementation

```sql
SELECT name AS 'Customers'
FROM Customers
LEFT JOIN Orders ON Customers.Id = Orders.CustomerId
WHERE Orders.CustomerId IS NULL
```