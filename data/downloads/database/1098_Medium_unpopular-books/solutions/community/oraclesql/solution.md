# Oracle 1 table scan 82%

**Author:** m-s-dwh-bi
**Votes:** 2
**Link:** [https://leetcode.com/problems/unpopular-books/solutions/1696706/](https://leetcode.com/problems/unpopular-books/solutions/1696706/)

---

select
b.book_id,
b.name
from
Books b
left join Orders o
on b.book_id  = o.book_id 
and o.dispatch_date between to_date('2018-06-23','yyyy-mm-dd') and to_date('2019-06-22','yyyy-mm-dd')
where
b.available_from < to_date('2019-05-24','yyyy-mm-dd')
group by b.book_id,
b.name
having sum(nvl(o.quantity,0)) < 10
-- in case of sum there need to be nvl to cover nulls