# Official Solution

**Link:** [https://leetcode.com/problems/customer-placing-the-largest-number-of-orders/solution/](https://leetcode.com/problems/customer-placing-the-largest-number-of-orders/solution/)

---

<!-- Don't delete this -->
[TOC]

# Solution

---

## pandas

### Approach: Group By

#### Algorithm

We are asked to find the customer who placed the largest number of orders, which involves counting the number of orders per customer. This can be done by grouping the orders by each unique customer. Hence, we group the DataFrame `orders` by the column `customer_number` and apply the `size()` method to calculate the number of occurrences of each unique value in `customer_number`, which represents the number of orders placed by each customer.

`reset_index(name='count')` is used to assign a new name `count` to the resulting column that represents the count of orders. This step ensures that the resulting DataFrame `df` has two columns: `customer_number` and `count`.


```
df = orders.groupby('customer_number').size().reset_index(name='count')
```

We will have the following DataFrame `df`:

<table>
  <tr>
    <th>customer_number</th>
    <th>count</th>
  </tr>
  <tr>
    <td>1</td>
    <td>1</td>
  </tr>
  <tr>
    <td>2</td>
    <td>1</td>
  </tr>
  <tr>
    <td>3</td>
    <td>2</td>
  </tr>
</table>

<br>

Once we have the count of orders per customer, we can sort the DataFrame by `count` in descending order.
 
```python
df.sort_values(by='count', ascending = False, inplace=True)
``` 

<table>
  <tr>
    <th>customer_number</th>
    <th>count</th>
  </tr>
  <tr>
    <td>3</td>
    <td>2</td>
  </tr>
  <tr>
    <td>1</td>
    <td>1</td>
  </tr>
  <tr>
    <td>2</td>
    <td>1</td>
  </tr>
</table>

<br>

Next, we return the `customer_number` in the first row, which denotes the customer placing the maximum orders. The complete code is as follows:



#### Implementation

<iframe src="https://leetcode.com/playground/EuSiBChq/shared" frameBorder="0" width="100%" height="225" name="EuSiBChq"></iframe>

We can obtain the following DataFrame:
<table>
  <tr>
    <th>customer_number</th>
  </tr>
  <tr>
    <td>3</td>
  </tr>
</table>

<br>

---

## Database

### Approach: Group By

#### Algorithm

First, we can select the <b>customer_number</b> and the according count of orders using `GROUP BY`.
```sql
SELECT
    customer_number, COUNT(*)
FROM
    orders
GROUP BY customer_number
```

<table>
  <tr>
    <th>customer_number</th>
    <th>COUNT(*)</th>
  </tr>
  <tr>
    <td>1</td>
    <td>1</td>
  </tr>
  <tr>
    <td>2</td>
    <td>1</td>
  </tr>
  <tr>
    <td>3</td>
    <td>2</td>
  </tr>
</table>


Then, the <b>customer_number</b> of first record is the result after sorting them by order count descending.

<table>
  <tr>
    <th>customer_number</th>
    <th>COUNT(*)</th>
  </tr>
  <tr>
    <td>3</td>
    <td>2</td>
  </tr>
</table>


In MySQL, the [LIMIT](https://dev.mysql.com/doc/refman/5.7/en/select.html) clause can be used to constrain the number of rows returned by the SELECT statement. It takes one or two nonnegative numeric arguments, the first of which specifies the offset of the first row to return, and the second specifies the maximum number of rows to return. The offset of the initial row is 0 (not 1).

It can be used with only one argument, which specifies the number of rows to return from the beginning of the result set. So `LIMIT 1` will return the first record.

#### Implementation

```sql
SELECT
    customer_number
FROM
    orders
GROUP BY customer_number
ORDER BY COUNT(*) DESC
LIMIT 1
;
```