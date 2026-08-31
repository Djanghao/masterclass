# Clean Solution with detailed Explanation to 178.  ||  CTE, LEAD, ROW_NUMBER

**Author:** ztt_09
**Votes:** 1
**Link:** [https://leetcode.com/problems/consecutive-transactions-with-increasing-amounts/solutions/5677219/](https://leetcode.com/problems/consecutive-transactions-with-increasing-amounts/solutions/5677219/)

---

# Intuition
The key point to this solution is to find start dates of every  consecutive two days with increasing amount. **Full code** scroll to the bottom \u2B07\uFE0F\u2B07\uFE0F\u2B07\uFE0F.

# Approach
1. For each **customer_id**, find the **transaction_date** that has a consecutive date with an inceasing amount. 
```
with start_date1 as (select *,
case when (lead(amount) over (partition by customer_id order by transaction_date) - amount)>0 and
(lead(transaction_date) over (partition by customer_id order by transaction_date) - transaction_date) = 1
then transaction_date end  as start_consecutive 
from transactions)
```
With this step you could get all start dates of every consecutive two days with increasing amount.

EX.
| transaction_id | customer_id | transaction_date | amount | start_consecutive |
| -------------- | ----------- | ---------------- | ------ | ----------------- |
| 1              | 101         | 2023-05-01       | 100    | 2023-05-01        |
| 2              | 101         | 2023-05-02       | 150    | 2023-05-02        |
| 3              | 101         | 2023-05-03       | 200    | null              |
| 4              | 102         | 2023-05-01       | 50     | null              |
| 5              | 102         | 2023-05-03       | 100    | 2023-05-03        |
| 6              | 102         | 2023-05-04       | 200    | null              |

2. For the table **start_date1**, we form the subgroup by the difference between the **start_consecutive** and **row_number**.
```
subgroup as (select * , 
start_consecutive - row_number() over (partition by customer_id order by start_consecutive)::integer as grouptag
from start_date1
where start_consecutive is not null)
```

EX.
| transaction_id | customer_id | transaction_date | amount | start_consecutive | grouptag   |
| -------------- | ----------- | ---------------- | ------ | ----------------- | ---------- |
| 1              | 101         | 2023-05-01       | 100    | 2023-05-01        | 2023-04-30 |
| 2              | 101         | 2023-05-02       | 150    | 2023-05-02        | 2023-04-30 |
| 5              | 102         | 2023-05-03       | 100    | 2023-05-03        | 2023-05-02 |

3. From the grouping, we could get all consecutive periods that satified the increasing amount constraint. Now we are only missing the last date in the period (since we are searching for the start date of the consecutive two days instead of the end date in **Step 1**).  
Since for the consective two days we are always returning the start date, the end date could be achieved by `start date + 1`. Therefore we could get the start date: `min(start_consecutive)` and the end date: `max(start_consecutive)+1` for all groups.
Also we filter out the period that is less than 3 days by `consecutive_end-consecutive_start`.
```
select *
from (
select customer_id, min(start_consecutive) as consecutive_start, max(start_consecutive)+1 as consecutive_end
from subgroup
group by customer_id, grouptag)
where consecutive_end-consecutive_start >= 2
order by customer_id, consecutive_start
```

---

## Full Code
```postgresql []
with start_date1 as (select *,
case when (lead(amount) over (partition by customer_id order by transaction_date) - amount)>0 and
(lead(transaction_date) over (partition by customer_id order by transaction_date) - transaction_date) = 1
then transaction_date end  as start_consecutive 
from transactions),
 
subgroup as (select * , 
start_consecutive - row_number() over (partition by customer_id order by start_consecutive)::integer as grouptag
from start_date1
where start_consecutive is not null)

select *
from (
select customer_id, min(start_consecutive) as consecutive_start, max(start_consecutive)+1 as consecutive_end
from subgroup
group by customer_id, grouptag)
where consecutive_end-consecutive_start >= 2
order by customer_id, consecutive_start
```

___

\u2B06\uFE0F\u2B06\uFE0F Please upvote if you find this Solution helpful \u2B06\uFE0F\u2B06\uFE0F

![PussInBootsShrekGIF.gif](./images/0.gif)

