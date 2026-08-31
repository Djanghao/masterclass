# Oracle | Join | Sum | NVL

**Author:** kunalc_14
**Votes:** 0
**Link:** [https://leetcode.com/problems/calculate-the-influence-of-each-salesperson/solutions/5636267/](https://leetcode.com/problems/calculate-the-influence-of-each-salesperson/solutions/5636267/)

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
/* Write your PL/SQL query statement below */
select
    sp.salesperson_id,
    sp.name,
    nvl(sum(sa.price),0) as total
from
    salesperson sp 
left join
    customer c on sp.salesperson_id = c.salesperson_id
left join
    sales sa on c.customer_id = sa.customer_id
group by
    sp.salesperson_id,
    sp.name
order by
    1
```