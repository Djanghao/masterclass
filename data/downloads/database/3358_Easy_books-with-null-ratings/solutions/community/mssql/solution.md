# Solution for all SQL types - rating is NULL

**Author:** adamrbeier
**Votes:** 0
**Link:** [https://leetcode.com/problems/books-with-null-ratings/solutions/6056391/](https://leetcode.com/problems/books-with-null-ratings/solutions/6056391/)

---

This was befitting of the "Easy" rating - perform a simple select, and only a single where logical test is required.  For completeness I'll put my usual "let's dive into the solution..." here and put the nuts and bolts in the below approach section.

# Approach
The logical test here is `is NULL`, that's the test in SQL for null as the usual "= \\<VALUE\\>" will fail for nulls.  The input `books` table has 5 fields, so select the 4 that are not `rating`, and add the logical test `where rating is null`.

# Code
```Oracle []
/* Write your PL/SQL query statement below */

select book_id, title, author, published_year
from books
where rating is null
```
```MySQL []
# Write your MySQL query statement below

select book_id, title, author, published_year
from books
where rating is null
```
```MSSQL []
/* Write your T-SQL query statement below */

select book_id, title, author, published_year
from books
where rating is null
```
```Postgres []
-- Write your PostgreSQL query statement below

select book_id, title, author, published_year
from books
where rating is null
```