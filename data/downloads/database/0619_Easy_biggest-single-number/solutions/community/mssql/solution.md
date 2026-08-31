# Beats 99.39%

**Author:** vkhush
**Votes:** 17
**Link:** [https://leetcode.com/problems/biggest-single-number/solutions/3365275/](https://leetcode.com/problems/biggest-single-number/solutions/3365275/)

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
select coalesce ((
  select top 1 num from mynumbers
  group by num
  having count(*) = 1
  order by num desc
), null) as num;

```