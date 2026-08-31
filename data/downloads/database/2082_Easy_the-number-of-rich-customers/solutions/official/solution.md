# Official Solution

**Link:** [https://leetcode.com/problems/the-number-of-rich-customers/solution/](https://leetcode.com/problems/the-number-of-rich-customers/solution/)

---

<!-- Don't delete this -->
[TOC]

# Solution

---

## pandas

### Approach: Counting Unique Values

#### Algorithm
To initiate the process, bills with amounts greater than 500 are filtered out. Subsequently, the resulting set of bills is processed to extract the unique customer IDs. This is achieved through the application of Boolean Indexing, enabling the filtering of rows that meet the condition `amount > 500`.

```python
rich_customers = store[store['amount'] > 500]
```

This creates a new DataFrame `rich_customers` by filtering the `store` DataFrame and selecting only those rows where the `amount` column is strictly greater than 500. 


|   bill_id |   customer_id |   amount |
|----------:|--------------:|---------:|
|         6 |             1 |      549 |
|         8 |             1 |      834 |
|        11 |             3 |      657 |


<br>

In the DataFrame `rich_customers`, there might be some duplicate customer IDs. To calculate the count of unique customer IDs in this column `customer_id`, we can use various approaches. For example, a more "Pythonic" method involves calculating the number of elements in the set of values in the `customer_id` column:

```python
count = len(set(rich_customers['customer_id']))

# count = 2
```

Alternatively, we can calculate the number of distinct customer IDs by applying the `nunique()` method to the Series `store['customer_id']` via:

```python
count = rich_customers['customer_id'].nunique()

# count = 2
```

<br>

Lastly, we create a new DataFrame `answer` as the final output. It contains a single column named `rich_count`, and the value in this column is the count of rich customers.

```python
answer = pd.DataFrame({'rich_count': [count]})
```
| rich_count |
|------------|
| 2          |


<br>


#### Implementation

Below is the complete code:

<iframe src="https://leetcode.com/playground/fHZEvtCq/shared" frameBorder="0" width="100%" height="225" name="fHZEvtCq"></iframe>

<br>

---

## Database

### Approach: Counting Unique Values

#### Algorithm

The rows in the `Store` table are filtered based on the condition `amount > 500`. Only the rows where the `amount` column holds values greater than 500 will be taken into account for the calculation.

In SQL, the aggregation function `COUNT(DISTINCT ...)` is used to count the number of distinct values for a specified column in a table. It provides a way to aggregate data and retrieve the count of unique occurrences for a particular attribute in the dataset. Therefore, we can apply the aggregation function `COUNT(DISTINCT customer_id)` to count the number of distinct values in the `customer_id` column. 

#### Implementation

```sql
SELECT 
    COUNT(DISTINCT customer_id) AS rich_count 
FROM 
    Store 
WHERE 
    amount > 500
```