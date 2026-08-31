# Official Solution

**Link:** [https://leetcode.com/problems/friend-requests-ii-who-has-the-most-friends/solution/](https://leetcode.com/problems/friend-requests-ii-who-has-the-most-friends/solution/)

---

​
<!-- Don't delete this -->
[TOC]
​
# Solution
​
---
​
## pandas

<!-- h3 for approaches -->
### Approach: Combining DataFrames Using concat() and Finding the Top Values Using sort_values() and head()


<!-- h4 for sections -->
#### Algorithm

<!-- Describe your approach to solving the problem. -->
Since one person can acquire a friend by either requesting or accepting a friend request, to get how many friends each person has, we can count how many times their id appeared in either the column `requester_id` or the column `accepter_id`. It's generally a good idea to combine the two columns into one for easier calculation. 

Let's start by combining the two columns. We can leverage the function `concat()` to combine DataFrames just like using `UNION/UNION ALL` in MySQL, or, in this case, combine only the columns. We add the function `to_frame()` to convert the result from a Series to a DataFrame. For later calculation, we also renamed the newly created column as `id`.

```python
values = pd.concat([request_accepted["requester_id"], request_accepted["accepter_id"]]).to_frame('id')
```

We now have the two columns `requester_id` and `accepter_id` combined into one. 

| id |
| -- |
| 1  |
| 1  |
| 2  |
| 3  |
| 2  |
| 3  |
| 3  |
| 4  |

Now we only need to count how many times each `id` appeared in the list and identify the `id` with the maximum count. To do this, we can apply `count()` to `id` and group the result at the `id` level. We can leverage the function `agg()` to get the aggregate value and rename the result at the same time. To look for the maximum count, we sort the list by the count (the newly created column `num`) in descending order using the function `sort_values()` and passing the parameter `ascending=False` to the function. The `id` that has the most friends is now listed at the top, and we can select this record using the function `head()`.  

```python
df = values.groupby('id', as_index=False).agg(num=('id', 'count')).sort_values('num', ascending=False).head(1)
```

<!-- h4 for sections -->
#### Implementation
​<iframe src="https://leetcode.com/playground/mLCXWMTb/shared" frameBorder="0" width="100%" height="191" name="mLCXWMTb"></iframe>
<!-- an empty line to separate approaches -->

----
​
​
## Database


<!-- h3 for approaches -->
### Approach 1: Combining Tables Using UNION ALL and Finding the Top Values Using ORDER BY + LIMIT

<!-- h4 for sections -->
#### Algorithm

<!-- Describe your approach to solving the problem. -->

Since one person can acquire a friend by either requesting or accepting a friend request, to get how many friends each person has, we can count how many times their id appeared in either the column `requester_id` or the column `accepter_id`. It's generally a good idea to combine the two columns into one for easier calculation. 

Let's start by combining the two columns. For this problem, it's important to use `UNION ALL` so all duplicate values are kept. Both columns are renamed as `id`, and we can put this step in a CTE for later usage. 

```sql
WITH all_ids AS (
   SELECT requester_id AS id 
   FROM RequestAccepted
   UNION ALL
   SELECT accepter_id AS id
   FROM RequestAccepted)
```

Next, we can count how many times each `id` appeared in the list and identify the `id` with the maximum count. To do this, we can group the aggregate value `COUNT(id)` at the `id` level. To retain only the `id` that has the maximum counts, we can sort the result by the `COUNT(id)` in descending order and take only the first record using `LIMIT`. Last but not least, we rename the aggregate count to `num` for the final output. All of these steps can be achieved in the main query without creating any subqueries. 


```sql
SELECT id, 
   COUNT(id) AS num
FROM all_ids
GROUP BY id
ORDER BY COUNT(id) DESC
LIMIT 1
```

<!-- h4 for sections -->
#### Implementation

```mysql []
WITH all_ids AS (
   SELECT requester_id AS id 
   FROM RequestAccepted
   UNION ALL
   SELECT accepter_id AS id
   FROM RequestAccepted)
SELECT id, 
   COUNT(id) AS num
FROM all_ids
GROUP BY id
ORDER BY COUNT(id) DESC
LIMIT 1
```
​
<!-- an empty line to separate approaches -->


### Approach 2: Combining Tables Using UNION ALL and Finding Top Values Using RANK()

<!-- h4 for sections -->
#### Algorithm

<!-- Describe your approach to solving the problem. -->
The main difference between this approach and the first one is that this approach can include multiple `id`s if there is more than one person who has the most number of friends. Also, it's never a bad idea to use the window function.  

Similarly, we can start by combining the two columns into one. For this problem, it's important to use `UNION ALL` so all duplicate values are kept. Both columns are renamed as `id`, and we can put this step in a CTE for later usage. 


```sql
WITH all_ids AS (
   SELECT requester_id AS id 
   FROM RequestAccepted
   UNION ALL
   SELECT accepter_id AS id
   FROM RequestAccepted)
```

In the subquery, we can count how many times each `id` appeared in the list using `COUNT()` and `GROUP` the result at the `id` level. The calculated result is renamed to `num` as requested by the final output. Additionally, we can append a rank to the records per the aggregate count in descending order. 

```sql
   (
   SELECT id, 
      COUNT(id) AS num, 
      RANK () OVER(ORDER BY COUNT(id) DESC) AS rnk
   FROM all_ids
   GROUP BY id
   )t0
```

Now we can select the top record, which is the `id` that has the maximum count (number of friends), in the main query. 

```sql
SELECT id, num
FROM 
   (
   SELECT id, 
      COUNT(id) AS num, 
      RANK () OVER(ORDER BY COUNT(id) DESC) AS rnk
   FROM all_ids
   GROUP BY id
   )t0
WHERE rnk=1
```

<!-- h4 for sections -->
#### Implementation

```mysql []
WITH all_ids AS (
   SELECT requester_id AS id 
   FROM RequestAccepted
   UNION ALL
   SELECT accepter_id AS id
   FROM RequestAccepted)
SELECT id, num
FROM 
   (
   SELECT id, 
      COUNT(id) AS num, 
      RANK () OVER(ORDER BY COUNT(id) DESC) AS rnk
   FROM all_ids
   GROUP BY id
   )t0
WHERE rnk=1
```
----