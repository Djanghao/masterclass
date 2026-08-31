# Three MySQL solutions with explanations

**Author:** olivia612
**Votes:** 68
**Link:** [https://leetcode.com/problems/unpopular-books/solutions/361617/](https://leetcode.com/problems/unpopular-books/solutions/361617/)

---

The idea of this first solution is to run the calculation first in the subquery to give us the books that have been sold in the last year, and then use a left join to give us the books that was abailable after 2019-05-23 and filter the books using multiple condition in the where clause to give us the books that have been sold less than 10 copies.
```
select b.book_id, b.name
from books b left join
    (select book_id, sum(quantity) as book_sold
    from Orders 
    where dispatch_date between '2018-06-23' and '2019-06-23'
    group by book_id) t
on b.book_id = t.book_id
where available_from < '2019-05-23'
and (book_sold is null or book_sold <10)
order by b.book_id;
```

The logic of the second solution is to first filter the two tables first and then run the calculation based on those two subqueries. The first subquery is to filter out the books that was available for more than one month, and the second subquery was to filter out the books that was sold during the last year. After joined the two 'tables', used a HAVING clause to find out the books that have been  sold less than 10 copies during the last year. 
```
select b.book_id, b.name from
(select * from books where available_from < '2019-05-23') b
left join
(select * from Orders where dispatch_date > '2018-06-23') o
on b.book_id = o.book_id
group by b.book_id, b.name
having sum(o.quantity) is null or sum(o.quantity) <10;
```

The third solution has similiar logic with the second one. The major difference is that this one joined the tables first and then run the filter later to give us the information that we need. 
```
select b.book_id, b.name
from books b left join orders o
on b.book_id = o.book_id and dispatch_date between '2018-06-23' and '2019-06-23'
where datediff('2019-06-23', available_from) > 30
group by b.book_id, b.name
having ifnull(sum(quantity),0) <10;
```