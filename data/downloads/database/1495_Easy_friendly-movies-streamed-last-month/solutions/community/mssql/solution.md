# Very Easy MS SQL Server Solution using "DISTINCT" + "INNER JOIN" + "WHERE" Clause

**Author:** Vaishnav-Dahake
**Votes:** 1
**Link:** [https://leetcode.com/problems/friendly-movies-streamed-last-month/solutions/2530213/](https://leetcode.com/problems/friendly-movies-streamed-last-month/solutions/2530213/)

---

```
-- Conditions to check 
-- 1. kids friendly
-- 2. movies 
-- 3. streamed in June 2020

select distinct C.title 
from Content C
INNER JOIN TVProgram T ON C.content_id  = T.content_id
where C.Kids_content = 'Y' and year(T.program_date) = '2020' and month(T.program_date) = '6' and C.content_type = 'Movies'
```