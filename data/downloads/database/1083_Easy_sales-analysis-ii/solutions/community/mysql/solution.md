# Beginner SQL: Simple Logic using JOIN, GROUP BY and Having

**Author:** harshada2022
**Votes:** 5
**Link:** [https://leetcode.com/problems/sales-analysis-ii/solutions/2598030/](https://leetcode.com/problems/sales-analysis-ii/solutions/2598030/)

---

	select
		s.buyer_id
	from 
		Product p join Sales s
	on  
		p.product_id = s.product_id
	group by
		s.buyer_id 
	having 
		sum(p.product_name = 'S8') > 0 AND sum(p.product_name = 'iPhone') = 0