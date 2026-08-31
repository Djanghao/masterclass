# Official Solution

**Link:** [https://leetcode.com/problems/sales-person/solution/](https://leetcode.com/problems/sales-person/solution/)

---

<!-- Don't delete this -->
[TOC]

# Solution

---

## pandas

### Approach: Joining Tables and Using Exclusion with "NOT IN"

#### Algorithm

If we know all the salespersons who have sales in this company 'RED', it will be fairly easy to know who does not have.

We consider salespersons related to orders related to the company **"RED"** by joining the DataFrame `orders` with `company`, and selecting the orders having `name` as `'RED'`. This helps retain only those orders that are associated with the company **"RED"**. 

```python
df = pd.merge(orders, company, on='com_id')

red_orders = df[df['name'] == 'RED']
```

We will have the following DataFrame `red_orders`:


```
| order_id | date     | com_id | sales_id | amount | com_id | name | city   |
|----------|----------|--------|----------|--------|--------|------|--------|
| 3        | 3/1/2014 | 1      | 1        | 50000  | 1      | RED  | Boston |
| 4        | 4/1/2014 | 1      | 4        | 25000  | 1      | RED  | Boston |
```

<br>

Next, we use `red_orders.sales_id.unique()` to obtain all the unique sales IDs in the `red_orders`. These are the identifiers for individual salespersons and will help us filter "valid" salespersons. We store these unique sales IDs in a variable called `invalid_ids`. We'll use `invalid_ids` in the next step to filter out "invalid" salespersons who have at least one of these IDs and focus on "valid" salespersons that are not related to these sales IDs.

```python
invalid_ids = red_orders.sales_id.unique()
```

We can obtain the `invalid_ids`:

```
[1 4]
```

<br>

Next, we will check for each salesperson's sales ID if it appears in `invalid_ids`, the collection of unique invalid sales IDs. This step is about selecting those "valid" salespersons whose sales IDs are not found in the `invalid_ids`. Note that the symbol `~` negates the condition, meaning it keeps the salespersons whose sales IDs are NOT in `invalid_ids`. In other words, we retrieve the salespersons that are unrelated to the "invalid" sales IDs.


```python
valid_sales_person = sales_person[~sales_person['sales_id'].isin(invalid_ids)]
```

We will obtain the following DataFrame `valid_sales_person`:

<table>
  <tr>
    <th>sales_id</th>
    <th>name</th>
    <th>salary</th>
    <th>commission_rate</th>
    <th>hire_date</th>
  </tr>
  <tr>
    <td>2</td>
    <td>Amy</td>
    <td>12000</td>
    <td>5</td>
    <td>2010-05-01</td>
  </tr>
  <tr>
    <td>3</td>
    <td>Mark</td>
    <td>65000</td>
    <td>12</td>
    <td>2008-12-25</td>
  </tr>
  <tr>
    <td>5</td>
    <td>Alex</td>
    <td>5000</td>
    <td>10</td>
    <td>2007-02-03</td>
  </tr>
</table>


<br>

  
Note that we need to follow the question's requirement and return only the column `name`. Hence the complete code is as follows:

#### Implementation

<iframe src="https://leetcode.com/playground/Ctw4KAwr/shared" frameBorder="0" width="100%" height="259" name="Ctw4KAwr"></iframe>

<table>
  <tr>
    <th>name</th>
  </tr>
  <tr>
    <td>Amy</td>
  </tr>
  <tr>
    <td>Mark</td>
  </tr>
  <tr>
    <td>Alex</td>
  </tr>
</table>



<br>


## Database

### Approach: Joining Tables and Using Exclusion with "NOT IN"

#### Algorithm

To start, we can query the information of sales in company 'RED' as a temporary table. And then try to build a connection between this table and the **salesperson** table since it has the name information.

```sql
SELECT
    *
FROM
    orders o
        LEFT JOIN
    company c ON o.com_id = c.com_id
WHERE
    c.name = 'RED'
;
```
>Note: "LEFT OUTER JOIN" could be written as "LEFT JOIN".

```
| order_id | date     | com_id | sales_id | amount | com_id | name | city   |
|----------|----------|--------|----------|--------|--------|------|--------|
| 3        | 3/1/2014 | 1      | 1        | 50000  | 1      | RED  | Boston |
| 4        | 4/1/2014 | 1      | 4        | 25000  | 1      | RED  | Boston |
```

Obviously, the column *sales_id* exists in table **salesperson** so we may use it as a subquery, and then utilize the [`NOT IN`](https://dev.mysql.com/doc/refman/5.7/en/any-in-some-subqueries.html) to get the target data.


#### Implementation

```sql
SELECT
    s.name
FROM
    salesperson s
WHERE
    s.sales_id NOT IN (SELECT
            o.sales_id
        FROM
            orders o
                LEFT JOIN
            company c ON o.com_id = c.com_id
        WHERE
            c.name = 'RED')
;
```