# Fast and Simple Solution (have description)

**Author:** OnDecember
**Votes:** 192
**Link:** [https://leetcode.com/problems/movie-rating/solutions/4401066/](https://leetcode.com/problems/movie-rating/solutions/4401066/)

---

# Intuition
My initial thoughts are to find the most frequent user in terms of movie ratings and the highest-rated movie in February 2020. This involves joining relevant tables and grouping data to identify the desired results.

# Approach
The approach involves two separate queries combined using UNION ALL. The first query focuses on users, utilizing the MovieRating and Users tables. It calculates the count of ratings for each user, orders the results by the count in descending order, and selects the top result. The second query revolves around movies, using the MovieRating and Movies tables. It filters ratings created in February 2020, calculates the average rating for each movie, orders the results by the average rating in descending order, and selects the top result.

1. First Query (for Users):

```SELECT name AS results```: Selects the user's name and aliases it as "results."
```FROM MovieRating JOIN Users USING(user_id)```: Joins the MovieRating and Users tables using the user_id.
```GROUP BY name```: Groups the results by the user's name.
```ORDER BY COUNT(*) DESC, name```: Orders the results by the count of ratings in descending order and, in case of ties, by the user's name.
```LIMIT 1```: Limits the output to the top row (most frequent user) from the sorted list.

2. Second Query (for Movies in February 2020):

```SELECT title AS results```: Selects the movie title and aliases it as "results."
```FROM MovieRating JOIN Movies USING(movie_id)```: Joins the MovieRating and Movies tables using the movie_id.
```WHERE EXTRACT(YEAR_MONTH FROM created_at) = 202002```: Filters ratings created in February 2020.
```GROUP BY title```: Groups the results by the movie title.
```ORDER BY AVG(rating) DESC, title```: Orders the results by the average rating in descending order and, in case of ties, by the movie title.
```LIMIT 1```: Limits the output to the top row (highest-rated movie in February 2020) from the sorted list.

3. UNION ALL:

Combines the results of both queries. "```UNION ALL```" is used to preserve all rows, even if they are duplicates.

# Complexity
- Time complexity:
The time complexity of the first query is influenced by the JOIN, GROUP BY, and ORDER BY operations, typically O(m + n log n), where m is the number of rows in the MovieRating table, and n is the number of distinct users. The time complexity of the second query is similarly influenced by JOIN, GROUP BY, and ORDER BY operations, typically O(p + q log q), where p is the number of rows in the MovieRating table for February 2020, and q is the number of distinct movies.

- Space complexity:
The space complexity is primarily influenced by the result sets of the two queries. For the first query, it is O(n), where n is the number of distinct users. For the second query, it is O(q), where q is the number of distinct movies.

# Code
```
# Write your MySQL query statement below
(SELECT name AS results
FROM MovieRating JOIN Users USING(user_id)
GROUP BY name
ORDER BY COUNT(*) DESC, name
LIMIT 1)

UNION ALL

(SELECT title AS results
FROM MovieRating JOIN Movies USING(movie_id)
WHERE EXTRACT(YEAR_MONTH FROM created_at) = 202002
GROUP BY title
ORDER BY AVG(rating) DESC, title
LIMIT 1);
```
![image.png](./images/0.png)
