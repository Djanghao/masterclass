# Fast and Simple Solution (have description)

**Author:** OnDecember
**Votes:** 2
**Link:** [https://leetcode.com/problems/friendly-movies-streamed-last-month/solutions/4422910/](https://leetcode.com/problems/friendly-movies-streamed-last-month/solutions/4422910/)

---

# Problem Statement
Given data from the `Content` and `TVProgram` tables, the task is to retrieve distinct titles of movies intended for kids that were broadcast in June 2020.

## Intuition
The problem involves filtering and joining data to identify movies for kids broadcast in a specific month.

## Approach
1. **Joining Tables:**
   - Use the `JOIN` operation to combine the `Content` and `TVProgram` tables based on the `content_id` field.

2. **Filtering Criteria:**
   - Apply filters to select rows where content is intended for kids (`Kids_content = 'Y'`) and has a content type of 'Movies' (`content_type = 'Movies'`).
   - Use the `EXTRACT` function to filter rows where the broadcast month and year match the specified values (`202006` for June 2020).

3. **Distinct Titles:**
   - Use the `DISTINCT` keyword to retrieve unique movie titles that meet the specified criteria.

## Complexity
- **Time complexity:**
  - The time complexity is primarily determined by the filtering and joining operations, resulting in a time complexity of $$O(N \\log N)$$, where $$N$$ is the total number of records in the tables.

- **Space complexity:**
  - The space complexity is $$O(N)$$, where $$N$$ is the total number of records in the tables. This is due to the storage of intermediate results during the joining and filtering.

# Code
```sql
# Write your MySQL query statement below
SELECT DISTINCT title
FROM Content 
JOIN TVProgram
USING(content_id)
WHERE Kids_content = 'Y' AND content_type = 'Movies'
AND EXTRACT(YEAR_MONTH FROM program_date) = 202006
```
![image.png](./images/0.png)
