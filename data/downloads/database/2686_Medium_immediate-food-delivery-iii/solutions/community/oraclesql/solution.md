# Oracle | Case | Avg

**Author:** kunalc_14
**Votes:** 0
**Link:** [https://leetcode.com/problems/immediate-food-delivery-iii/solutions/5637256/](https://leetcode.com/problems/immediate-food-delivery-iii/solutions/5637256/)

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
    to_char(order_date,'yyyy-mm-dd') as order_date,
    round(avg(case
        when order_date = customer_pref_delivery_date then 1
        else 0
    end)*100,2) as immediate_percentage
from
    delivery
group by
    to_char(order_date,'yyyy-mm-dd')
order by
    1

```