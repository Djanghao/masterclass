# SQL simple solution

**Author:** Zalak_prajapati_94
**Votes:** 2
**Link:** [https://leetcode.com/problems/orders-with-maximum-quantity-above-average/solutions/2564220/](https://leetcode.com/problems/orders-with-maximum-quantity-above-average/solutions/2564220/)

---

'''
select order_id
from ordersdetails o1
group by order_id
having max(quantity) > all(select sum(quantity)*1.0/count(distinct product_id) as avg
									   from ordersdetails o2 
									  group by order_id)
						  '''