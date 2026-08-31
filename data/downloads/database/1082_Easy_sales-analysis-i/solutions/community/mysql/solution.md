# Easy to Understand | Faster than 85% | Simple | MySQL

**Author:** Mrmagician
**Votes:** 6
**Link:** [https://leetcode.com/problems/sales-analysis-i/solutions/559602/](https://leetcode.com/problems/sales-analysis-i/solutions/559602/)

---

```
select 
	seller_id from sales 
	group by seller_id 
	having 
		sum(price) 
		= (
		select sum(price) as price from sales 
			group by seller_id 
				order by price desc 
					limit 1
		)
```

**I hope that you've found the solution useful.**
*In that case, please do upvote and encourage me to on my quest to document all leetcode problems\uD83D\uDE03*
PS: Search for **mrmagician** tag in the discussion, if I have solved it, You will find it there\uD83D\uDE38