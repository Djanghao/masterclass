# Oracle | Rank() | Easy Solution

**Author:** TK-X
**Votes:** 1
**Link:** [https://leetcode.com/problems/sales-analysis-i/solutions/2120719/](https://leetcode.com/problems/sales-analysis-i/solutions/2120719/)

---

```
select seller_id 
	from (
	select seller_id, rank() over (order by sum(price) desc) rk
	from Sales
	group by seller_id
	)
where rk = 1;
```