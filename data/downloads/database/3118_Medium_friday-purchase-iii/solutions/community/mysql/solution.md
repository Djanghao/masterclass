# MySQL solution with CTE, DAYOFWEEK, IFNULL (beats 90%): explained

**Author:** altz79
**Votes:** 3
**Link:** [https://leetcode.com/problems/friday-purchase-iii/solutions/5188771/](https://leetcode.com/problems/friday-purchase-iii/solutions/5188771/)

---

# Intuition
Create comdinations of values: month_week / membership

# Approach
**Step 1.** Generating Combinations (week_membership_combinations CTE):

Inner Subqueries:
 -  weeks: Creates a temporary table with rows representing weeks 1 through 4 of a month.
- types: Creates a temporary table with rows for the 'Premium' and 'VIP' memberships.

CROSS JOIN: Combines each row from weeks with each row from types, generating all possible week-membership pairs (e.g., Week 1 - Premium, Week 1 - VIP, etc.).

**Step 2.** Calculating Spending Per Membership (amount_per_membership CTE):

WHERE DAYOFWEEK(p.purchase_date) = 6: Filters purchases to only those made on Fridays (day 6 of the week).

FLOOR((DAYOFMONTH(p.purchase_date) - 1) / 7) + 1 AS week_of_month: Calculates the week of the month for each purchase.

GROUP BY week_of_month, membership: Aggregates purchases by week and membership type.

**Step 3.** Add spending to each combination

It's important to perform LEFT JOIN because we need to include all the values from our combinations CTE. This ensures that all combinations are kept, even if there are no spending records for some.
If total_amount_base from the amount_per_membership table is found, use that value. If total_amount_base is NULL (meaning no spending for that combination), replace it with 0:
```
IFNULL(am.total_amount_base, 0) AS total_amount
```

# Complexity
- Time complexity: O(n * m)
The LEFT JOIN matches 8 combinations from the first CTE with potentially many rows from the second CTE. In the worst case, this could be O(8 * n * m), but since 8 is a constant, we can simplify it to O(n * m).

- Space complexity: O(k)
The size depends on the number of distinct combinations of week_of_month and membership in the filtered and grouped results in CTE: 'amount_per_membership'.

# Code
```
WITH week_membership_combinations AS (
SELECT *
FROM (
    SELECT 1 AS week_of_month UNION ALL
    SELECT 2 UNION ALL
    SELECT 3 UNION ALL
    SELECT 4
) AS weeks
CROSS JOIN (
    SELECT 'Premium' AS membership UNION ALL
    SELECT 'VIP'
) AS types
),

amount_per_membership AS (
SELECT SUM(amount_spend) AS total_amount_base,
       u.membership,
       FLOOR((DAYOFMONTH(p.purchase_date) - 1) / 7) + 1 AS week_of_month
FROM Purchases AS p
JOIN Users AS u USING(user_id)
WHERE DAYOFWEEK(p.purchase_date) = 6
GROUP BY week_of_month, membership)

SELECT wc.week_of_month, 
       wc.membership,
       IFNULL(am.total_amount_base, 0) AS total_amount
FROM week_membership_combinations AS wc 
LEFT JOIN  amount_per_membership AS am
ON am.week_of_month = wc.week_of_month AND am.membership = wc.membership
ORDER BY week_of_month, membership;
```