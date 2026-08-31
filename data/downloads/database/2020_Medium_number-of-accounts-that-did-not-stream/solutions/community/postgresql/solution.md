# Postgres : not in

**Author:** anuraganand789
**Votes:** 1
**Link:** [https://leetcode.com/problems/number-of-accounts-that-did-not-stream/solutions/5244729/](https://leetcode.com/problems/number-of-accounts-that-did-not-stream/solutions/5244729/)

---


1. find all accounts streamed in 2021
2. find all accounts with valid subscriptions in 2021
3. Use 'not in' or 'except' operation to exclude the accounts 
which streamed in 2021

# Code
```

select count(account_id) as accounts_count from subscriptions 
where 
  2021 between extract(year from start_date) and extract(year from end_date)
  and 
  account_id not in (select account_id from streams where extract(year from stream_date) = 2021)
```