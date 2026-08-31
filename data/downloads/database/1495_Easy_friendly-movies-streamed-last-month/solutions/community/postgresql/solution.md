# Easy Solution

**Author:** iamkonstantin
**Votes:** 0
**Link:** [https://leetcode.com/problems/friendly-movies-streamed-last-month/solutions/6063316/](https://leetcode.com/problems/friendly-movies-streamed-last-month/solutions/6063316/)

---


# Code
```postgresql []
SELECT DISTINCT title
FROM Content
JOIN TVProgram USING(content_id)
WHERE Kids_content = 'Y' 
AND program_date BETWEEN '2020-06-01' AND '2020-06-30'
AND content_type = 'Movies'
```