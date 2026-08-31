# [MySQL] Good enough

**Author:** parrotypoisson
**Votes:** 0
**Link:** [https://leetcode.com/problems/books-with-null-ratings/solutions/6123564/](https://leetcode.com/problems/books-with-null-ratings/solutions/6123564/)

---

```mysql []
# Write your MySQL query statement below
SELECT book_id, title, author, published_year
FROM books
WHERE rating IS NULL
ORDER BY book_id;
```