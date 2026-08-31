# Oracle solution - lag, find islands and gaps

**Author:** adamrbeier
**Votes:** 1
**Link:** [https://leetcode.com/problems/consecutive-transactions-with-increasing-amounts/solutions/3556394/](https://leetcode.com/problems/consecutive-transactions-with-increasing-amounts/solutions/3556394/)

---

This was a tough but fun SQL problem, a fantastic challenge if you're a SQL person like me who's always biding my time for new LeetCode SQL problems, especially hard ones.  Let's dive into the solution.

# Approach
Let's go over the queries from inwards out:
\\- Start by querying the four columns from Transactions, and use lag to get the previous tow's transaction_date and amount, partitioning by customer_id and ordering by transaction_date
\\- Now that we have the Transactions info and the lagging record on the same row, we'll use two case when statements to identify valid consecutive rows, which I'll call "islands."  We do this by identifying rows that **do not** meet the consecutive criteria, that is the previous transaction_date is not transaction_date - 1, or the previous amount is greater than the current amount.  Assign rows that do not meet this consecutive criteria with a literal 1, and rows that do meet the consecutive condition with a 0.  Aggregate that over customer_id and transaction_date (a running total) to group consecutive rows and assign each group a number, acting as a sequential ID.
\\- For the "island group" created in the previous step, group by the island group and customer, and get the minimum and maximum transaction date.
\\- The final query filters the groups, only returning those of 3 or longer days (group end - group start >= 2 days).  Since this is Oracle, you also need to do some formatting on the dates to remove the timestamp. 

# Code
```
/* Write your PL/SQL query statement below */

select customer_id, 
to_char(CONSECUTIVE_START, 'yyyy-mm-dd') CONSECUTIVE_START, 
to_char(CONSECUTIVE_END, 'yyyy-mm-dd') CONSECUTIVE_END 
from
(
select CUSTOMER_ID,
ISLAND_GRP,
MIN(TRANSACTION_DATE) as CONSECUTIVE_START,
MAX(TRANSACTION_DATE) as CONSECUTIVE_END
from
(
select CUSTOMER_ID, TRANSACTION_ID, 
TRANSACTION_DATE,
AMOUNT,
PRE_DT,
PRE_AMT,
case when (TRANSACTION_DATE - PRE_DT = 1 and AMOUNT > PRE_AMT) then 0 else 1 end as ISLAND_ST,
SUM(case when (TRANSACTION_DATE - PRE_DT = 1 and AMOUNT > PRE_AMT) then 0 else 1 end) OVER (ORDER BY CUSTOMER_ID, TRANSACTION_DATE) as ISLAND_GRP
from
(
select T.customer_id, T.transaction_id, T.transaction_date, T.amount,
LAG(T.transaction_date, 1) over (partition by customer_id order by transaction_date) as PRE_DT,
LAG(T.amount, 1) over (partition by customer_id order by transaction_date) as PRE_AMT
from TRANSACTIONS T
)
) group by CUSTOMER_ID, ISLAND_GRP
) where CONSECUTIVE_END - CONSECUTIVE_START >= 2
order by customer_id, consecutive_start

```