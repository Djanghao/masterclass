# Full Join

**Author:** albertguosgp
**Votes:** 0
**Link:** [https://leetcode.com/problems/monthly-transactions-ii/solutions/6083565/](https://leetcode.com/problems/monthly-transactions-ii/solutions/6083565/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Two subquery and join the result.
# Approach

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```postgresql []
-- Write your PostgreSQL query statement below

SELECT
    case when t2.month is null then c2.month else t2.month end,
    case when t2.country is null then c2.country else t2.country end,
    case when t2.approved is null then 0 else t2.approved end as "approved_count",
    case when t2.approved_amount is null then 0 else t2.approved_amount end as "approved_amount",
    case when c2.count is null then 0 else c2.count end as "chargeback_count",
    case when c2.amount is null then 0 else c2.amount end  as "chargeback_amount"
FROM 
    (
        SELECT
            to_char(t.trans_date::date, 'YYYY-MM') as "month",
            t.country as "country",
            count(t.state) as "approved",
            sum(t.amount) as "approved_amount"
        FROM    
            transactions t
        where
            t.state = 'approved'
        GROUP BY 
            (to_char(t.trans_date::date, 'YYYY-MM'), t.country)
    ) t2
FULL JOIN     
    (
        SELECT 
            to_char(c.trans_date::date, 'YYYY-MM') as "month",
            t1.country as "country",
            sum(t1.amount) as "amount",
            count(t1.amount) as "count"
        FROM
            chargebacks c, transactions t1
        where 
            c.trans_id = t1.id
        GROUP BY 
            (1, t1.country)
    ) c2 on t2.month = c2.month and t2.country = c2.country

order by t2.month asc;
```