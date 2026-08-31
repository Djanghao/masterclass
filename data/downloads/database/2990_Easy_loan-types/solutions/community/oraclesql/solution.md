# Oracle solution - create counts for refi and mortgage

**Author:** adamrbeier
**Votes:** 0
**Link:** [https://leetcode.com/problems/loan-types/solutions/4494852/](https://leetcode.com/problems/loan-types/solutions/4494852/)

---

# Approach
This solution uses an approach that comes in handy when you have fact-type records (here, one per loan) and a field that may appear on multiple records that you need to aggregate (here, user_id).  Select the entire table, and use decode or case/when statements to assign specific records with a 1 if they meet the criteria, and a 0 otherwise.  For this specific problem, the CTE ```Loans_refi_mortgage``` is just a select of ```Loans```, with two fields added - refi_tmp and mortgage_tmp.  The field refi_tmp is 1 if the loan is type 'Refinance' and 0 otherwise, and the field mortgage_tmp is 1 if the loan is type 'Mortgage' and 0 for other types.

With the modified ```Loans_refi_mortgage``` table, we can then perform a simple aggregation (sum) of those tmp fields, grouping by user_id, with those sums becoming counts for a user_id.  For the final select, just query the aggregation CTE, and return user_id values where the refi count is >0 and the mortgage count is >0.

# Code
```
/* Write your PL/SQL query statement below */

with Loans_refi_mortgage as (
    select loan_id, user_id, loan_type,
    decode(loan_type, 'Refinance', 1, 0) as refi_tmp,
    decode(loan_type, 'Mortgage', 1, 0) as mortgage_tmp
    from Loans
),
Loans_agg as (
    select user_id, sum(refi_tmp) as refi_ct, sum(mortgage_tmp) as mortgage_ct
    from Loans_refi_mortgage
    group by user_id
)
select user_id from loans_agg
where refi_ct > 0 and mortgage_ct > 0
order by user_id
```