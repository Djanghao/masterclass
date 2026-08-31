# MySQL Solution With Explanations (Faster Than 100%)

**Author:** zac4
**Votes:** 208
**Link:** [https://leetcode.com/problems/user-purchase-platform/solutions/338776/](https://leetcode.com/problems/user-purchase-platform/solutions/338776/)

---

Let's start with a simple preprocess:
```SQL
SELECT
  spend_date,
  user_id,
  SUM(CASE platform WHEN 'mobile' THEN amount ELSE 0 END) mobile_amount,
  SUM(CASE platform WHEN 'desktop' THEN amount ELSE 0 END) desktop_amount
FROM Spending
GROUP BY spend_date, user_id
```

For each user in each day, we fetch its `mobile_amount` and `desktop_amount` respectively and output them into a single row. In this form, we can see a user belongs to which platform very clearly:
| spend_date | user_id | mobile_amount | desktop_amount | ->_(platform)_ |
|------------|---------|---------------|----------------|----------------|
| 2019-07-01 | 1       | 100           | 100            | -> _(both)_    |
| 2019-07-01 | 2       | 100           | 0              | -> _(mobile)_  |
| 2019-07-01 | 3       | 0             | 100            | -> _(desktop)_ |
| 2019-07-02 | 2       | 100           | 0              | -> _(mobile)_  |
| 2019-07-02 | 3       | 0             | 100            | ->_(desktop)_  |

Based on the above table, we use the following SQL to bind users to their platforms and calculate the amounts spent:
```SQL
SELECT
    spend_date,
    user_id,
    IF(mobile_amount > 0, IF(desktop_amount > 0, 'both', 'mobile'), 'desktop') platform,
    (mobile_amount + desktop_amount) amount
FROM (
	...
) o
```
Result table:
| spend_date | user_id | platform | amount |
|------------|---------|----------|--------|
| 2019-07-01 | 1       | both     | 200    |
| 2019-07-01 | 2       | mobile   | 100    |
| 2019-07-01 | 3       | desktop  | 100    |
| 2019-07-02 | 2       | mobile   | 100    |
| 2019-07-02 | 3       | desktop  | 100    |

We don't wanna miss any record which has ZERO `total_amount` and `total_users`. So we need to get all combinations of `spend_date` and `platform`:
```SQL
SELECT DISTINCT(spend_date), 'desktop' platform FROM Spending
UNION
SELECT DISTINCT(spend_date), 'mobile' platform FROM Spending
UNION
SELECT DISTINCT(spend_date), 'both' platform FROM Spending
```
The output:
| spend_date | platform |
|------------|----------|
| 2019-07-01 | desktop  |
| 2019-07-01 | mobile  |
| 2019-07-01 | both   |
| 2019-07-02 | desktop  |
| 2019-07-02 | mobile  |
| 2019-07-02 | both   |

After joinning this table to the previous one, we have our __final answer__:
```SQL
SELECT 
    p.spend_date,
    p.platform,
    IFNULL(SUM(amount), 0) total_amount,
    COUNT(user_id) total_users
FROM 
(
    SELECT DISTINCT(spend_date), 'desktop' platform FROM Spending
    UNION
    SELECT DISTINCT(spend_date), 'mobile' platform FROM Spending
    UNION
    SELECT DISTINCT(spend_date), 'both' platform FROM Spending
) p 
LEFT JOIN (
    SELECT
        spend_date,
        user_id,
        IF(mobile_amount > 0, IF(desktop_amount > 0, 'both', 'mobile'), 'desktop') platform,
        (mobile_amount + desktop_amount) amount
    FROM (
        SELECT
          spend_date,
          user_id,
          SUM(CASE platform WHEN 'mobile' THEN amount ELSE 0 END) mobile_amount,
          SUM(CASE platform WHEN 'desktop' THEN amount ELSE 0 END) desktop_amount
        FROM Spending
        GROUP BY spend_date, user_id
    ) o
) t
ON p.platform=t.platform AND p.spend_date=t.spend_date
GROUP BY spend_date, platform
```
