# 🌟 Detailed PostgreSQL solution 🚀 Beats 90%

**Author:** MathieuSoysal
**Votes:** 6
**Link:** [https://leetcode.com/problems/movie-rating/solutions/5039733/](https://leetcode.com/problems/movie-rating/solutions/5039733/)

---

# Explain 



- **movierating_in_february_2020**: This CTE selects all columns from the MovieRating table where the created_at date falls in February 2020.

- **movie_title_with_highest_average_rating_in_february_2020**: This CTE joins the movierating_in_february_2020 CTE with the Movies table on the `movie_id` column. It groups the results by `movie_id` and `title`, orders them by the average rating in descending order (highest average rating first), and then by `title` in ascending order (alphabetically). It limits the results to just the top one, which is the movie with the highest average rating in February 2020.

- **user_name_who_has_rated_the_greatest_number_of_movies**: This CTE joins the MovieRating table with the Users table on the `user_id` column. It groups the results by `user_id` and `name`, orders them by the count of `movie_id` in descending order (most movies rated first), and then by `name` in ascending order (alphabetically). It limits the results to just the top one, which is the user who has rated the greatest number of movies.

# Code
```
WITH movierating_in_february_2020 AS (
    SELECT *
    FROM MovieRating
    WHERE TO_CHAR(created_at, 'yyyy-mm') = '2020-02'
),

movie_title_with_highest_average_rating_in_february_2020 AS (
    SELECT title
    FROM movierating_in_february_2020
    INNER JOIN Movies
    USING(movie_id)
    GROUP BY movie_id, title
    ORDER BY AVG(rating) DESC,
            title ASC
    LIMIT 1
),

user_name_who_has_rated_the_greatest_number_of_movies AS (
    SELECT name
    FROM MovieRating
    INNER JOIN Users
    USING(user_id)
    GROUP BY user_id, name
    ORDER BY COUNT(movie_id) DESC,
            name ASC
    LIMIT 1
)

SELECT name AS results
FROM user_name_who_has_rated_the_greatest_number_of_movies

UNION ALL

SELECT title
FROM movie_title_with_highest_average_rating_in_February_2020;
```

____

If it was useful don't hesitate to upvote \uD83C\uDF20 Or keep it in your favorite \uD83C\uDF1F
![Upvote invitation](./images/0.png)