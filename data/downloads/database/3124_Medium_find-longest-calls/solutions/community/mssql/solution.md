# MS SQL Server Solution

**Author:** ohcc28
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-longest-calls/solutions/5444949/](https://leetcode.com/problems/find-longest-calls/solutions/5444949/)

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
```
/* Write your T-SQL query statement below */
select 
	first_name,
	type,
	convert(varchar(8), dateadd(second, duration, 0), 108) as duration_formatted
from 
(
	select ct.first_name, c.type, c.duration,  Rank()over(partition by type order by duration desc) as RN
	from Calls as c
	join Contacts as ct on ct.id = c.contact_id
) as T
where RN < 4
order by type, duration desc, first_name desc





```