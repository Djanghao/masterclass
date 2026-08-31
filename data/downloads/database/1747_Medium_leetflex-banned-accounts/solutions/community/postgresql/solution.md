# Simple Solutions to 1747.  ||  BETWEEN,  OVERLAPS

**Author:** ztt_09
**Votes:** 2
**Link:** [https://leetcode.com/problems/leetflex-banned-accounts/solutions/5637825/](https://leetcode.com/problems/leetflex-banned-accounts/solutions/5637825/)

---

## Intuition
The key point to this problem is to find the overlaping of log period under different ip address conducted by same account id. There're two approaches listed to check the overlap period.

## Sol #1: BETWEEN
```
select distinct l1.account_id
from loginfo l1 join loginfo l2 on l1.account_id = l2.account_id 
and l1.ip_address != l2.ip_address 
and l1.login between l2.login and l2.logout
```

## Sol #2: OVERLAPS
Noting that OVERLAPS uses the half-open interval (`start <= time < end`), hence it will not consider the overlap of two time periods with only an endpoint in common. 

EX.
```
SELECT ('2021-02-01 16:00:00'::timestamp, '2021-02-01 17:00:00'::timestamp) OVERLAPS 
    ('2021-02-01 17:00:00'::timestamp, '2021-02-01 17:59:59'::timestamp)
```
The above yields `false`.


This special condition is solved by adding `l1.logout = l2.login`.
```
select distinct l1.account_id
from loginfo l1 join loginfo l2 on l1.account_id = l2.account_id 
and l1.ip_address != l2.ip_address 
and ((l1.login, l1.logout) overlaps (l2.login, l2.logout) is true OR l1.logout = l2.login)
```