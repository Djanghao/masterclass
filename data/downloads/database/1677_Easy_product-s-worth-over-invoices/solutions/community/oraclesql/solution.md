# oracle nvl(sum(),0) to show better

**Author:** loco_fung
**Votes:** 0
**Link:** [https://leetcode.com/problems/products-worth-over-invoices/solutions/2838439/](https://leetcode.com/problems/products-worth-over-invoices/solutions/2838439/)

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
select pd.name
       ,nvl(sum(rest),0) as rest 
       ,nvl(sum(paid),0) as paid 
       ,nvl(sum(canceled),0) as canceled
       ,nvl(sum(refunded),0) as refunded
from Product       pd  
left join invoice vi on pd.product_id=vi.product_id  
group by pd.name
order by 1 asc 
```