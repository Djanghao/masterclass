# Official Solution

**Link:** [https://leetcode.com/problems/capital-gainloss/solution/](https://leetcode.com/problems/capital-gainloss/solution/)

---

<!-- Don't delete this -->
[TOC]

# Solution

---

## pandas

### Approach: Group by and Aggregation

#### Algorithm

We want to calculate the **capital_gain_loss** for each **stock_name** in the `stocks` dataframe. Let us start by looking at the original `stocks` DataFrame:

| stock_name    | operation | operation_day | price  |
|---------------|-----------|---------------|--------|
| Leetcode      | Buy       | 1             | 1000   |
| Corona Masks  | Buy       | 2             | 10     |
| Leetcode      | Sell      | 5             | 9000   |
| Handbags      | Buy       | 17            | 30000  |
| Corona Masks  | Sell      | 3             | 1010   |
| Corona Masks  | Buy       | 4             | 1000   |
| Corona Masks  | Sell      | 5             | 500    |
| Corona Masks  | Buy       | 6             | 1000   |
| Handbags      | Sell      | 29            | 7000   |
| Corona Masks  | Sell      | 10            | 10000  |

<br>

When we consider buying and selling a stock, we pay money out of our principal to obtain the stock, and when we sell a stock, we get the capital back. In the `stocks` DataFrame, we want to update the price to reflect the *payment* for buying a stock and the *capital earned* when selling a stock. 


To do this, we can use a helper function that takes in **operation** and **price** as parameters. If the **operation** is 'Buy', it returns the opposite of **price** denoting our payment for a stock. If the **operation** is 'Sell', it returns a positive **price**, reflecting our capital earned for a stock. Let's illustrate this in Python:

```python
# Helper function to update prices in 'stocks' DataFrame.
def helper(operation, price):
    if operation == "Buy":
        return -int(price)
    elif operation == "Sell":
        return int(price)
```

We can use the `.apply()` method by passing in the helper function as a lambda function with arguments **x['operation']** and **x['price']**. Note that we need to set **axis=1** for the `.apply()` method to apply the lambda function to each row, not each column. By doing so, the `.apply()` method will update the **price** column directly in the `stocks` DataFrame.

```python
# Update 'price' column given 'operation' is 'Buy' or 'Sell'
Stocks['price'] = Stocks.apply(lambda x: helper(x['operation'], x['price']), axis = 1)
```

Here is the updated `stocks` DataFrame after the `.apply()` method. Note that the values in the **price** column are changed according to the values in the **operation** column.

| stock_name    | operation | operation_day | price  |
|---------------|-----------|---------------|--------|
| Leetcode      | Buy       | 1             | -1000  |
| Corona Masks  | Buy       | 2             | -10    |
| Leetcode      | Sell      | 5             | 9000   |
| Handbags      | Buy       | 17            | -30000 |
| Corona Masks  | Sell      | 3             | 1010   |
| Corona Masks  | Buy       | 4             | -1000  |
| Corona Masks  | Sell      | 5             | 500    |
| Corona Masks  | Buy       | 6             | -1000  |
| Handbags      | Sell      | 29            | 7000   |
| Corona Masks  | Sell      | 10            | 10000  |

<br>

With this updated **price** column, our next step is to aggregate the *gain/loss* for each stock. To do this, we will employ the `.groupby().sum()` method using **stock_name** as the grouping criterion and indexing the **price** column to perform aggregation. We also need to utilize the method `.reset_index()` with `name='{column name}'` to rename the summed column. In this scenario, we will use `name='capital_gain_loss'`.

```python
 # Groupby 'stock_name' and sum over 'price' column
 # Rename summed column to 'capital_gain_loss'
 df = Stocks.groupby(by='stock_name')['price'].sum().reset_index(name='capital_gain_loss')
```

This creates the resulting DataFrame `df`:

| stock_name    | capital_gain_loss |
|---------------|-------------------|
| Corona Masks  | 9500              |
| Leetcode      | 8000              |
| Handbags      | -23000            |

<br>

#### Implementation

<iframe src="https://leetcode.com/playground/7hoyfkRZ/shared" frameBorder="0" width="100%" height="344" name="7hoyfkRZ"></iframe>

<br>

## Database

### Approach: Group by and Aggregation

#### Algorithm

In SQL, we can utilize `GROUP BY` on column **stock_name** to aggregate unique stocks in our `stocks` Table. To aggregate the **capital_gain_loss**, we need to utilize the `SUM()` function on our **price** column, but before that, we need to find a way to determine the recorded value of **price** if our **operation** is a *Buy* or *Sell*. To achieve this, we can utilize a `CASE` expression inside our `SUM()` function that will go through some conditions and returns a value when the condition is met. In this problem, we will apply the following conditions: if the operation is *Buy*, the price will be counted as its opposite value; If the operation is Sell, the price will be counted as its positive value (remaining unchanged).

We also need to update this `SUM()` result to be a named column. In this case, we renamed it to **capital_gain_loss**.

#### Implementation

```sql
SELECT 
    stock_name,
    SUM(
        CASE 
            WHEN operation = 'buy' THEN -price
            WHEN operation = 'sell' THEN price
        END
    ) AS capital_gain_loss
FROM Stocks
GROUP BY stock_name
```