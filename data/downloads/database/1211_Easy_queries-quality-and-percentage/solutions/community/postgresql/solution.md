# 🐘PostgreSQL ❗ Beats 96% ❗ Simple solution with GROUP BY

**Author:** IliaAvdeev
**Votes:** 15
**Link:** [https://leetcode.com/problems/queries-quality-and-percentage/solutions/5158599/](https://leetcode.com/problems/queries-quality-and-percentage/solutions/5158599/)

---

# Approach
- `SELECT query_name`: Select the column `query_name` from the table.
- `ROUND(SUM(rating::numeric / position) / COUNT(result), 2) quality`: Calculate the quality of each query by summing the rating divided by the position for each query, then dividing by the total count of results. It rounds the result to 2 decimal places.
- `ROUND(100. * COUNT(rating) FILTER (WHERE rating < 3) / COUNT(rating), 2) poor_query_percentage`: Calculate the percentage of poor queries for each query. It counts the number of ratings that are less than 3, then divides by the total count of ratings, and multiplies by 100. It rounds the result to 2 decimal places.
- `FROM Queries`: This indicates the table named `Queries` is being used.
- `WHERE query_name IS NOT NULL`: Filters out any rows where the `query_name` is null.
- `GROUP BY query_name`: Groups the results by the `query_name` column.

# Code
```
SELECT query_name,
       ROUND(SUM(rating::numeric / position) / COUNT(result), 2)                  quality,
       ROUND(100. * COUNT(rating) FILTER ( WHERE rating < 3 ) / COUNT(rating), 2) poor_query_percentage
FROM Queries
WHERE query_name IS NOT NULL
GROUP BY query_name
```