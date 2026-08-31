# Official Solution

**Link:** [https://leetcode.com/problems/find-followers-count/solution/](https://leetcode.com/problems/find-followers-count/solution/)

---

[TOC]

## Solution

--- 

### Overview

We want to find the followers for each user in this problem.
> (user_id, follower_id) is the primary key for this table.

This implies that there will be unique combinations of `user_id` and `follower_id` in the table. For example, you cannot have the following table:
```
+---------+-------------+
| user_id | follower_id |
+---------+-------------+
|    1    |      2      |
|    1    |      2      |
+---------+-------------+
```
The same combination of `user_id` and `follower_id` cannot occur multiple times.

In the table below, user `1` has three followers.

```
+---------+-------------+
| user_id | follower_id |
+---------+-------------+
|    1    |      2      |
|    1    |      3      |
|    1    |      4      |
|    3    |      2      |
|    3    |      5      |
+---------+-------------+
```

Next, we need to ensure that our output users are ordered by `user_id` in ascending order.

For the example shared above the output should look like:

```
+---------+-----------------+
| user_id | followers_count |
+---------+-----------------+
|    1    |        3        |
|    3    |        2        |
+---------+-----------------+
```
---

### Approach: `COUNT` and `GROUP BY`

#### Intuition

We essentially need to count the number of times a particular `user_id` occurs in the `user_id` column and this count will be equal to the follower count. This is because each `(user_id, follower_id)` combination is unique. We can try to use the `COUNT` function to count the occurences of a single `user_id`. Remember, `COUNT` is an aggregate function, you will have to tell it which field to aggregate by. This can be done using the `GROUP BY` clause. Since we want to print the `user_id` and its count in the table, we can do `GROUP BY user_id`.

Lastly, we can use the `ORDER BY` clause to order the result by `user_id`.


#### Algorithm

1. `SELECT user_id, COUNT(user_id) AS followers_count`: This part specifies the columns to be selected in the result set. Here, we want to retrieve the `user_id` and the count of followers for each user. The `COUNT(user_id)` function is used to count the number of rows in the followers table, which represents the number of followers for a particular user. The result of this count is aliased as `followers_count` to match the output requirements of the problem.

2. `FROM followers`: This part specifies the table from which the data is being retrieved.

3. `GROUP BY user_id`: This part groups the rows based on the `user_id` column. By using `GROUP BY`, the query will calculate the count of followers for each unique `user_id`. The result set will have one row for each unique `user_id`.

4. `ORDER BY user_id ASC`: This part orders the result set based on the `user_id` column in ascending order. `ASC` stands for ascending. Please note, the default ordering done by the `ORDER BY` clause is ascending. So removing `ASC` from the query will also work.

#### Implementation

##### SQL

```sql
SELECT user_id, COUNT(user_id) AS followers_count
FROM followers
GROUP BY user_id
ORDER BY user_id ASC;
```