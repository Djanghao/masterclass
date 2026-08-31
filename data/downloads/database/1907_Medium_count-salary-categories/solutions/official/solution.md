# Official Solution

**Link:** [https://leetcode.com/problems/count-salary-categories/solution/](https://leetcode.com/problems/count-salary-categories/solution/)

---

<!-- Don't delete this -->
[TOC]

# Solution

---

## pandas

### Approach: Filter rows

#### Algorithm

Let's count the number in each category in turn, to filter the rows with low salary, we can apply `accounts['income'] < 20000` which checks each value in the `income` column of the DataFrame `accounts` to determine whether it is less than 20000.

```python
accounts['income'] < 20000
```
It creates a Boolean Series by comparing each value in the `income` column with 20000, resulting in `True` for rows with income less than 20000 and `False` otherwise

```
0    False
1     True
2    False
3    False
Name: income, dtype: bool
```
<br>

Next, we can use the `sum()` method to count the number of `True` values, `sum()` treats `True` as 1 and treat `False` as 0. Hence, the count denotes the number of `True` in the Series, which corresponds to the number of accounts with Low Salary.


```python
low_count = (accounts['income'] < 20000).sum()
```

Alternatively, we can use this Boolean Series as an index to filter the DataFrame `accounts`, which returns a new DataFrame that contains only the rows where the `income` value is less than 20000. Then we can use the `len()` function to get the number of rows that match the condition.

```python
low_count = len(accounts[accounts['income'] < 20000])
```
Both methods yield the same answer.

<br>

We determine the count of rows in each of the three categories using this approach.

```python
low_count = (accounts['income'] < 20000).sum()
average_count = ((accounts['income'] >= 20000) & (accounts['income'] <= 50000)).sum()
high_count = (accounts['income'] > 50000).sum()
```

<br>

Lastly, let's create a new DataFrame `ans` to store the results. The expected output DataFrame has two columns: `category` and `accounts_count`. For the `category` column, we assign the names of three categories. In the `accounts_count` column, we populate it with the corresponding counts we calculated earlier.


```python
ans = pd.DataFrame({
    'category': ['Low Salary', 'Average Salary', 'High Salary'],
    'accounts_count': [low_count, average_count, high_count]
})
```

We will have the following DataFrame `ans`:

| category       | accounts_count |
| -------------- | -------------- |
| Low Salary     | 1              |
| Average Salary | 0              |
| High Salary    | 3              |

<br>


#### Implementation

<iframe src="https://leetcode.com/playground/m68KhC2E/shared" frameBorder="0" width="100%" height="276" name="m68KhC2E"></iframe>

<br>



## Database

#### Algorithm

First, we perform the following steps for the category `Low Salary`:

- Select `Low Salary` as the `category` label for this category.

- Use the `SUM` function along with a `CASE` expression to count the number of accounts falling into the `Low Salary` category. 



The syntax of the `CASE WHEN` statement in SQL is as follows

```sql
CASE
    WHEN condition1 THEN result1
    WHEN condition2 THEN result2
    ...
    ELSE resultN
END
```
<br>

We will perform the above expression to evaluate each row in the `Accounts` table. If the `income` value is less than 20000, it returns 1 (meaning it falls into the `Low Salary` category); otherwise, it returns 0. The `SUM` function then calculates the total count of accounts falling into the `Low Salary` category.


```sql
SELECT 
    'Low Salary' AS category,
    SUM(CASE WHEN income < 20000 THEN 1 ELSE 0 END) AS accounts_count
FROM 
    Accounts
```

| category   | accounts_count |
| ---------- | -------------- |
| Low Salary | 1              |

<br>


Next, we perform similar steps for the `Average Salary` and `High Salary` categories.

```sql
SELECT  
    'Average Salary' category,
    SUM(CASE WHEN income >= 20000 AND income <= 50000 THEN 1 ELSE 0 END) 
    AS accounts_count
FROM 
    Accounts
```

| category       | accounts_count |
| -------------- | -------------- |
| Average Salary | 0              |

<br>

```sql
SELECT 
    'High Salary' category,
    SUM(CASE WHEN income > 50000 THEN 1 ELSE 0 END) AS accounts_count
FROM 
    Accounts
```

| category    | accounts_count |
| ----------- | -------------- |
| High Salary | 3              |

<br>

Finally, we combine the results of these three separate queries using the `UNION` operator. This allows us to get a consolidated summary that includes the counts of accounts for each salary category. The result will be a table with two required columns: `category` (the salary category label) and `accounts_count` (the count of accounts in each category). The complete code is as follows:


#### Implementation

```sql
SELECT 
    'Low Salary' AS category,
    SUM(CASE WHEN income < 20000 THEN 1 ELSE 0 END) AS accounts_count
FROM 
    Accounts
    
UNION
SELECT  
    'Average Salary' category,
    SUM(CASE WHEN income >= 20000 AND income <= 50000 THEN 1 ELSE 0 END) 
    AS accounts_count
FROM 
    Accounts

UNION
SELECT 
    'High Salary' category,
    SUM(CASE WHEN income > 50000 THEN 1 ELSE 0 END) AS accounts_count
FROM 
    Accounts
```

> When using the `UNION` operator in SQL, there are several considerations to keep in mind, such as ensuring that each part of the `UNION` has the same data types and is in the same order, and the number of columns must be the same. Fortunately, all three tables we want to union satisfy these conditions.