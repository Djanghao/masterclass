# Oracle SQL

**Author:** Anu282
**Votes:** 6
**Link:** [https://leetcode.com/problems/movie-rating/solutions/2014979/](https://leetcode.com/problems/movie-rating/solutions/2014979/)

---

```
select name as results from
(select u.name, dense_rank() over (order by count(mr.created_at) desc, u.name asc) as rnk
    from users u inner join movierating mr
    on u.user_id = mr.user_id
    group by u.name
 )A where rnk = 1        
union
select title as results from
(select title, 
        dense_rank() over ( order by avg(rating) desc, title asc) rnk
        from movies m inner join movierating mr
        on m.movie_id = mr.movie_id
        where to_char(mr.created_at,'YYYY-MM') = '2020-02'
        group by title
) where rnk = 1
```