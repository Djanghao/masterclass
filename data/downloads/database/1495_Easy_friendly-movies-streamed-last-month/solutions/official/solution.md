# Official Solution

**Link:** [https://leetcode.com/problems/friendly-movies-streamed-last-month/solution/](https://leetcode.com/problems/friendly-movies-streamed-last-month/solution/)

---

## Solution

--- 

### Overview

The key to solving this problem is to carefully read the question, break it into single conditions, and make sure all of the conditions are included in the query. 

Per the question and the data, the conditions needed are:
1. Distinct titles - 'DISTINCT' is needed when selecting from column `title`
2. Kid-friendly - 'Y' in column `Kids_content`
3. The content needs to be a movie - 'Movies' in column `content_type` 
4. The stream date was in June 2020 - filter column `program_date` to return records from this month

There are several ways to extract year and month from a date column:

1) The most straightforward way is to use functions [MONTH()](https://dev.mysql.com/doc/refman/5.7/en/date-and-time-functions.html#function_month) and [YEAR()](https://dev.mysql.com/doc/refman/5.7/en/date-and-time-functions.html#function_year)
```sql
WHERE MONTH(program_date) = 6 AND YEAR(program_date)=2020
```
2) Extract the year and month using [DATE_FORMAT()](https://dev.mysql.com/doc/refman/5.7/en/date-and-time-functions.html#function_date-format) and filter by the year and month combination:
```sql
WHERE DATE_FORMAT(program_date,'%Y-%m') = '2020-06'
```
3) Treat the column as a string and return only the matched ones using [LEFT()](https://dev.mysql.com/doc/refman/5.7/en/string-functions.html#function_left):
```sql
WHERE LEFT(program_date, 7) = '2020-06'
```
---

### Approach 

#### Algorithm

1. Select the columns needed for the final output: DISTINCT `title`
2. JOIN the two tables as both tables are needed for creating the conditions
3. Add all the conditions

#### Implementation

##### MySQL

```sql
SELECT 
    DISTINCT c.title
FROM 
    Content c
JOIN 
    TVProgram p
ON 
    c.content_id = p.content_id
WHERE 
    c.Kids_content = 'Y'
AND 
    c.content_type = 'Movies'
AND MONTH(p.program_date) = 6 AND YEAR(p.program_date) = 2020
```

---