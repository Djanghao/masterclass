# ✔️✔️✔️easy & clean w/ explanation⚡beats 99%⚡MySQL || MS SQL Server || PostgreSQL || Oracle

**Author:** anish_sule
**Votes:** 12
**Link:** [https://leetcode.com/problems/trips-and-users/solutions/5025786/](https://leetcode.com/problems/trips-and-users/solutions/5025786/)

---

# Code
```
WITH not_banned as (
    SELECT users_id FROM users
    WHERE banned = 'No'
) 
SELECT
    request_at as Day,
    ROUND( SUM( CASE WHEN status LIKE 'cancelled%'
                     THEN 1.00
                     ELSE 0 END) / COUNT(*), 2)
    AS "Cancellation Rate"
FROM Trips
WHERE
    client_id IN (SELECT users_id FROM not_banned)
    AND driver_id IN (SELECT users_id FROM not_banned)
    AND request_at BETWEEN '2013-10-01' AND '2013-10-03'
GROUP BY request_at
```
# Explanation
1. **CTE** :

```sql
WITH not_banned as (
    SELECT users_id FROM users
    WHERE banned = 'No'
)
```

In this CTE, we're selecting all `users_id` from the `Users` table where the `banned` status is 'No'. This gives us a list of all unbanned users.
CTE o/p -

| users_id |
|----------|
| 1        |
| 3        |
| 4        |
| 10       |
| 11       |
| 12       |
| 13       |

2. **Main Query** :
The main query calculates the cancellation rate for each day between '2013-10-01' and '2013-10-03' for trips where both the client and the driver are not banned.

```sql
SELECT request_at as Day,
ROUND(SUM(CASE WHEN status LIKE 'cancelled%' THEN 1.00 ELSE 0 END) / COUNT(*), 2) AS "Cancellation Rate"
FROM Trips
WHERE client_id IN (SELECT users_id FROM not_banned)
    AND driver_id IN (SELECT users_id FROM not_banned)
    AND request_at BETWEEN '2013-10-01' AND '2013-10-03'
GROUP BY request_at
```

This query does the following:
- Filters the `Trips` table to only include rows where the `client_id` and `driver_id` are in the list of unbanned users from the CTE, and the `request_at` date is between `'2013-10-01'` and `'2013-10-03'`
- Groups the filtered rows by the `request_at` date.
- For each group (i.e. each day), it calculates the cancellation rate as the number of cancelled trips (where the `status` starts with 'cancelled') divided by the total number of trips. This rate is rounded to two decimal points.

i hope this helps!
have a good day : )