# Oracle set operations

**Author:** btiger
**Votes:** 3
**Link:** [https://leetcode.com/problems/customers-who-bought-products-a-and-b-but-not-c/solutions/2956128/](https://leetcode.com/problems/customers-who-bought-products-a-and-b-but-not-c/solutions/2956128/)

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
with cte1 as ((select customer_id from orders where product_name = 'A'
intersect
select customer_id from orders where product_name = 'B')
minus
select customer_id from orders where product_name = 'C')
select * from customers natural join cte1

```