# Simple oracle solution with Join

**Author:** roadytom
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-accounts-that-did-not-stream/solutions/5909029/](https://leetcode.com/problems/number-of-accounts-that-did-not-stream/solutions/5909029/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```oraclesql []
/* Write your PL/SQL query statement below */
select count(sb.account_id) as accounts_count
from subscriptions sb
join streams st on sb.account_id=st.account_id
where (end_date  like '2021%' or start_date like '2021%')and 
stream_date not between '2021-01-01' and '2021-12-31'

```