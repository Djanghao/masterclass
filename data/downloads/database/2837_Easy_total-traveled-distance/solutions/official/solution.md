# Official Solution

**Link:** [https://leetcode.com/problems/total-traveled-distance/solution/](https://leetcode.com/problems/total-traveled-distance/solution/)

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
### Approach: Using left merge and fillna()

<!-- h4 for sections -->
#### Algorithm

<!-- Describe your approach to solving the problem. -->
For this approach, we will first get the aggregate sum of distance traveled for each `user_id`, and then `merge` to the DataFrame `users` to append their names. Since not all users in the DataFrame `users` might have traveled, we want to make sure it is a `left merge` so all users will be included in the final output. 

We can start by calculating the total distance traveled by each user. Since one user can have more than one ride, we want to group the `distance` at the `user_id` level and calculate the total using the function `sum()`. 


```python
total_distance = rides.groupby('user_id', as_index=False).distance.sum()
```

From this step, we acquired the total distance traveled for the users who have rides recorded in the DataFrame `rides`. 

| user_id | distance |
| ------- | -------- |
| 2       | 393      |
| 4       | 416      |
| 14      | 186      |
| 17      | 160      |

In the next step, we want to combine the total distance traveled with user names. Since not all users might have traveled, we need to perform a `left merge` here to make sure every user existing in the DataFrame `users` will be included in the final result. Since they have no record in the DataFrame `total_distance` that we created, we also want to apply the function `fillna()` to set the otherwise null values to 0 for these users. To get the final output, we also need to sort the results by `user_id` using the function `sort_values()`, and update the column name from `distance` to `traveled distance`. 

```python
df = users.merge(total_distance, on='user_id', how='left').fillna(0).sort_values('user_id').rename(columns={'distance': 'traveled distance'})
```

<!-- h4 for sections -->
#### Implementation
​<iframe src="https://leetcode.com/playground/ihrEuHFD/shared" frameBorder="0" width="100%" height="208" name="ihrEuHFD"></iframe>
<!-- an empty line to separate approaches -->
----
​
​
## Database

<!-- h3 for approaches -->
### Approach: Using LEFT JOIN AND IFNULL()

<!-- h4 for sections -->
#### Algorithm

<!-- Describe your approach to solving the problem. -->
Since both user's name (`name`) and total distance traveled (`distance`) are needed for the final out and they are stored in two separate tables, we need to `JOIN` the two tables together using the shared column `user_id`. It has to be a `LEFT JOIN` because not all users have completed a ride, and we want to put the table `Users` on the left to include the `user_id` for every user in the final output. To get the total distance traveled, we apply the function `SUM()` to the column `distance`, and `GROUP BY` the aggregate total at the user level (`user_id` and `name`) so each user will have one total distance traveled. For the users that have no rides recorded, we set their total distance traveled to 0 using the function `IFNULL()`. Lastly, we renamed the column of the calculation to `traveled distance` as requested by the final output. 

<!-- h4 for sections -->
#### Implementation

```mysql []
SELECT u.user_id, 
       u.name,
       IFNULL(SUM(distance), 0) AS 'traveled distance'
FROM Users AS u
LEFT JOIN Rides AS r
ON u.user_id = r.user_id
GROUP BY user_id, name
ORDER BY user_id 
```
​
<!-- an empty line to separate approaches -->


----