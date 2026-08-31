# Readable CTE Solution - Faster Than 95%

**Author:** PreetMangatt
**Votes:** 4
**Link:** [https://leetcode.com/problems/number-of-comments-per-post/solutions/2029918/](https://leetcode.com/problems/number-of-comments-per-post/solutions/2029918/)

---

```
WITH Posts as (
    SELECT DISTINCT
        sub_id as post_id
    FROM
        Submissions
    WHERE
        parent_id IS NULL
)

SELECT
    Posts.post_id,
    COUNT(Distinct Submissions.sub_id) as number_of_comments
FROM
    Posts
LEFT JOIN 
    Submissions
ON
    Posts.post_id = Submissions.parent_id
GROUP BY
    Posts.post_id
ORDER BY
    Posts.post_id ASC
```