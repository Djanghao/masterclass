# Official Solution

**Link:** [https://leetcode.com/problems/immediate-food-delivery-i/solution/](https://leetcode.com/problems/immediate-food-delivery-i/solution/)

---

<!-- Don't delete this -->
[TOC]

# Solution

---

## pandas

### Approach: Selecting rows based on conditions


#### Intuition

The formula for calculating the percentage of immediate delivery is as follows:

$\text{percentage} = \frac{\text{validCount}}{\text{totalCount}} \cdot 100$


#### Algorithm

We have the original DataFrame `delivery` shown below:

| delivery_id | customer_id | order_date | customer_pref_delivery_date |
|-------------|-------------|------------|-----------------------------|
| 1           | 1           | 2019-08-01 | 2019-08-02                  |
| 2           | 5           | 2019-08-02 | 2019-08-02                  |
| 3           | 1           | 2019-08-11 | 2019-08-11                  |
| 4           | 3           | 2019-08-24 | 2019-08-26                  |
| 5           | 4           | 2019-08-21 | 2019-08-22                  |
| 6           | 2           | 2019-08-11 | 2019-08-13                  |

<br>

First, let's find the condition to determine whether an order is immediate, which is when `order_date` is equal to `customer_pref_delivery_date`. Therefore, the first step is to identify and count the number of rows that satisfy:

```
delivery['order_date'] = delivery['customer_pref_delivery_date']
```

When we compare two columns in pandas using the expression above, Pandas performs an element-wise comparison between the two columns. The result of this comparison is a Series where each element is either `True` or `False`, depending on whether the corresponding elements in the two columns are equal or not:

```python
is_valid = (delivery['order_date'] == delivery['customer_pref_delivery_date'])
```

We will obtain the resulting Series `is_valid`:

```
0    False
1     True
2     True
3    False
4    False
5    False
dtype: bool
```

To count the number of `True` in this Series, we can use the `sum()` method along with the bool indexing. In Pandas, `True` is treated as 1 and `False` as 0, so summing this Series effectively counts the number of `True` values.

```python
valid_count = is_valid.sum()

# valid_count = 2
```

<br>

The total number of orders is equal to the number of rows in the DataFrame `delivery`, which can be directly obtained using the `len()` method: 

```python
total_count = len(delivery)

# total_count = 6
```

<br>

As per the requirements of the problem, we need to round the result to two decimal places, so we use the build-in function `round()` which enables us to round a numeric value to a specified number of decimal places:

```python
# Round the percentage to 2 decimal places.
percentage = round(100 * valid_count / total_count, 2)

# percentage = 33.33
```

<br>

Finally, we generate a DataFrame `df` that includes the rounded values.

```python
df = pd.DataFrame({'immediate_percentage': [percentage]})
```

The resulting DataFrame `df` looks like this:

| immediate_percentage |
|------------|
| 33.33       |

<br>

#### Implementation

The complete code is shown below:

<iframe src="https://leetcode.com/playground/L3baGJxn/shared" frameBorder="0" width="100%" height="293" name="L3baGJxn"></iframe>

<br>
<br>


## Database

#### Intuition

The formula for calculating the percentage of immediate delivery is as follows:

$\text{percentage} = \frac{\text{validCount}}{\text{totalCount}} \cdot 100$


#### Algorithm

Regarding the percentage formula, we first need to derive the ratio of immediate orders to total orders, which is calculated as follows:

```sql
AVG(order_date = customer_pref_delivery_date)
```

The keyword `AVG` is used to calculate the average value of a numeric column or an expression that evaluates to a numeric value. It takes a single argument, which can be a column name, a mathematical expression, or a combination of both. In our case, `AVG()` takes a logical expression `order_date = customer_pref_delivery_date` which compares `order_date` with `customer_pref_delivery_date`, and if they are equal, it returns 1 (`True`), otherwise 0 (`False`). Then `AVG()` calculates the average of these 1s and 0s, which gives us the decimal percentage of rows where `order_date` is equal to `customer_pref_delivery_date`.


According to the formula at the beginning, we need to multiply the average value after the decimal point by 100, convert it to a percentage value, and then round to 2 decimal places, which can be achieved this way:

```sql
ROUND(
    100 * AVG(order_date = customer_pref_delivery_date),
    2)
```

`ROUND()` is a function that rounds a number to a specified number of decimal places. It has a syntax of `ROUND(number, k)` that rounds `number` to `k` decimal places. In this problem, we use it to round the average value to two decimal places.

Next, the keyword `AS` is used to rename the rounded value by giving it an alias as `immediate_percentage`.

#### Implementation

```sql
SELECT ROUND(
    100 * AVG(order_date = customer_pref_delivery_date), 
    2) AS immediate_percentage
FROM 
    Delivery;
```