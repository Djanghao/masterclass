# mysql faster than 100%

**Author:** davidzyx
**Votes:** 4
**Link:** [https://leetcode.com/problems/count-apples-and-oranges/solutions/1009876/](https://leetcode.com/problems/count-apples-and-oranges/solutions/1009876/)

---

```
select sum(apple_count) as apple_count, sum(orange_count) as orange_count from 
((select sum(c.apple_count) as apple_count, sum(c.orange_count) as orange_count from boxes b left join chests c on b.chest_id = c.chest_id where b.chest_id is not null)
union
(select sum(b.apple_count) as apple_count, sum(b.orange_count) as orange_count from boxes b)) 
as temp
```