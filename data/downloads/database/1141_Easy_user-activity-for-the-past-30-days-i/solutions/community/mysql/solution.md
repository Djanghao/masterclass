# just do what is asked step by step.

**Author:** speedychital
**Votes:** 507
**Link:** [https://leetcode.com/problems/user-activity-for-the-past-30-days-i/solutions/1961049/](https://leetcode.com/problems/user-activity-for-the-past-30-days-i/solutions/1961049/)

---

We have to count the users datewise. Ensure to count users distinctly as a user can log in multiple times during a particular day. Also, we want to count between a specific period of date.

Step-by-step solution

1. SELECT the columns to display

```
SELECT activity_date AS day, COUNT(DISTINCT user_id) AS active_users
FROM Activity;
```

2. Define the condition of the dates by using the WHERE clause.
```
SELECT activity_date AS day, COUNT(DISTINCT user_id) AS active_users
FROM Activity
WHERE (activity_date > "2019-06-27" AND activity_date <= "2019-07-27");
```

3. Lastly, group the results by date
```
SELECT activity_date AS day, COUNT(DISTINCT user_id) AS active_users
FROM Activity
WHERE (activity_date > "2019-06-27" AND activity_date <= "2019-07-27")
GROUP BY activity_date;
```

Upvote, if it helps. Thanks!