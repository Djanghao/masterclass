# faster than 94%

**Author:** PeterHontaru
**Votes:** 3
**Link:** [https://leetcode.com/problems/unpopular-books/solutions/1370004/](https://leetcode.com/problems/unpopular-books/solutions/1370004/)

---

```
SELECT b.book_id, b.name
FROM Books as b
LEFT JOIN Orders as o
    ON b.book_id = o.book_id AND o.dispatch_date >= DATEADD(year, -1, '2019-06-23')
WHERE b.available_from <= DATEADD(month, -1, '2019-06-23') 
GROUP BY b.name, b.book_id
HAVING COALESCE(SUM(o.quantity), 0) < 10
```