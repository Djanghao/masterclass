# MS SQL, recursion + CTE

**Author:** bytchenko
**Votes:** 1
**Link:** [https://leetcode.com/problems/customers-with-maximum-number-of-transactions-on-consecutive-days/solutions/3688611/](https://leetcode.com/problems/customers-with-maximum-number-of-transactions-on-consecutive-days/solutions/3688611/)

---

# Intuition\r
<!-- Describe your first thoughts on how to solve this problem. -->\r
The main problem is to get `level` - number of consequent transactions before current; and we can do it with recursion. Then an easy task is to find `max level` and filter the transactions\r
\r
# Approach\r
<!-- Describe your approach to solving the problem. -->\r
recursive CTE query to compute `level` with a simple filtering after it.\r
\r
# Code\r
```\r
/* Write your T-SQL query statement below */\r
\r
with Seqs (customer_id, start_date, level, transaction_date) as (\r
  select t.customer_id,\r
         t.transaction_date start_date,\r
         1 level,\r
         t.transaction_date  transaction_date\r
    from Transactions t\r
   where not exists ( select 1\r
                        from Transactions x\r
                       where t.customer_id = x.customer_id \r
                         and DateAdd(day, 1, x.transaction_date) = t.transaction_date) \r
\r
   union all\r
\r
  select t.customer_id,\r
         s.start_date,\r
         s.level + 1,\r
         t.transaction_date\r
    from Seqs s join\r
         Transactions t on (\r
           t.customer_id = s.customer_id and\r
           DateAdd(day, 1, s.transaction_date) = t.transaction_date)),\r
\r
 maxes as (\r
  select Max(level) lvl,\r
           Customer_id\r
      from Seqs\r
group by Customer_id)\r
\r
  select s.Customer_id\r
    from Seqs s\r
   where s.level = (select max(x.lvl)\r
                      from maxes x)  \r
order by s.Customer_id                    \r
\r
\r
```