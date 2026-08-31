# MySQL: CTEs and window functions [with detailed explanation]

**Author:** farlowdw
**Votes:** 8
**Link:** [https://leetcode.com/problems/report-contiguous-dates/solutions/1358228/](https://leetcode.com/problems/report-contiguous-dates/solutions/1358228/)

---

**Solution 1 (inefficient) [better solution immediately follows]:** My first attempt led me to the following solution which works but is terribly inefficient due to the use of the `TO_DAYS()` function which must be applied to every single record from both tables:

```
WITH success_batches AS (
  SELECT
    S.success_date,
    TO_DAYS(S.success_date)
      - ROW_NUMBER() OVER(ORDER BY S.success_date) AS grp
  FROM
    Succeeded S
  WHERE
    S.success_date BETWEEN '2019-01-01' AND '2019-12-31'
), fail_batches AS (
  SELECT
    F.fail_date,
    TO_DAYS(F.fail_date)
      - ROW_NUMBER() OVER(ORDER BY F.fail_date) AS grp
  FROM
    Failed F
  WHERE
    F.fail_date BETWEEN '2019-01-01' AND '2019-12-31'
)
SELECT
  'failed' AS period_state,
  MIN(FB.fail_date) AS start_date,
  MAX(FB.fail_date) AS end_date
FROM
  fail_batches FB
GROUP BY
  FB.grp
UNION ALL
SELECT
  'succeeded' AS period_state,
  MIN(SB.success_date) AS start_date,
  MAX(SB.success_date) AS end_date
FROM
  success_batches SB
GROUP BY
  SB.grp
ORDER BY
  start_date;
```

---

**Solution 2:** There is a much better solution that does not depend on `TO_DAYS()` or anything like that\u2014it uses the difference between the global day order (i.e., for all days) and the relative day order (i.e., the day order from the `Failed` table and the day order from the `Succeeded` table) to form a group ID for batches of dates that are contiguous (i.e., rows with the same group number will represent those dates that are contiguous):

```
WITH fails_and_successes AS (
  SELECT
    'failed' AS period_state,
    F.fail_date AS day,
    ROW_NUMBER() OVER(ORDER BY F.fail_date) AS relative_order
  FROM
    Failed F
  WHERE
    F.fail_date BETWEEN '2019-01-01' AND '2019-12-31'
  UNION ALL
  SELECT
    'succeeded' AS period_state,
    S.success_date AS day,
    ROW_NUMBER() OVER(ORDER BY S.success_date) AS relative_order
  FROM
    Succeeded S
  WHERE
    S.success_date BETWEEN '2019-01-01' AND '2019-12-31'
), fail_and_success_groups AS (
  SELECT
    FS.period_state,
    FS.day,
    ROW_NUMBER() OVER(ORDER BY FS.day) - FS.relative_order AS grp
  FROM
    fails_and_successes FS
)
SELECT
  FSG.period_state,
  MIN(FSG.day) AS start_date,
  MAX(FSG.day) AS end_date
FROM
  fail_and_success_groups FSG
GROUP BY
  FSG.grp, FSG.period_state
ORDER BY
  start_date;
```

Let's break this down by CTE:

- `fails_and_successes`: This CTE gathers all eligible failure and success records (i.e., all `fail_date` and `success_date` values are in the provided date range) but first orders them by date in ascending order within each partition or `period_state`.

	The query
	
	```
  WITH fails_and_successes AS (
    SELECT
      'failed' AS period_state,
      F.fail_date AS day,
      ROW_NUMBER() OVER(ORDER BY F.fail_date) AS relative_order
    FROM
      Failed F
    WHERE
      F.fail_date BETWEEN '2019-01-01' AND '2019-12-31'
    UNION ALL
    SELECT
      'succeeded' AS period_state,
      S.success_date AS day,
      ROW_NUMBER() OVER(ORDER BY S.success_date) AS relative_order
    FROM
      Succeeded S
    WHERE
      S.success_date BETWEEN '2019-01-01' AND '2019-12-31'
  ) SELECT * FROM  fails_and_successes;
	```

	gives us the following result set:
	
	```
  +--------------+------------+----------------+
  | period_state | day        | relative_order |
  +--------------+------------+----------------+
  | failed       | 2019-01-04 |              1 |
  | failed       | 2019-01-05 |              2 |
  | succeeded    | 2019-01-01 |              1 |
  | succeeded    | 2019-01-02 |              2 |
  | succeeded    | 2019-01-03 |              3 |
  | succeeded    | 2019-01-06 |              4 |
  +--------------+------------+----------------+
	```

- `fail_and_success_groups`: Since all `day` values are distinct (we are told the task runs *once* a day), we can use the relative day ordering above within each `period_state` partition along with another application of `ROW_NUMBER()` to generate a *global ranking* of sorts that can be used to effectively generate groups of dates that are contiguous within each partition.

	The query

	```
  WITH fails_and_successes AS (
    SELECT
      'failed' AS period_state,
      F.fail_date AS day,
      ROW_NUMBER() OVER(ORDER BY F.fail_date) AS relative_order
    FROM
      Failed F
    WHERE
      F.fail_date BETWEEN '2019-01-01' AND '2019-12-31'
    UNION ALL
    SELECT
      'succeeded' AS period_state,
      S.success_date AS day,
      ROW_NUMBER() OVER(ORDER BY S.success_date) AS relative_order
    FROM
      Succeeded S
    WHERE
      S.success_date BETWEEN '2019-01-01' AND '2019-12-31'
  ), fail_and_success_groups AS (
    SELECT
      FS.period_state,
      FS.day,
      FS.relative_order,
      ROW_NUMBER() OVER(ORDER BY FS.day) AS global_order,
      ROW_NUMBER() OVER(ORDER BY FS.day) - FS.relative_order AS grp
    FROM
      fails_and_successes FS
  ) SELECT * FROM fail_and_success_groups;
	```

	gives us the following result set (the columns `relative_order` and `global_order` have simply been included to clarify where the `grp` values are coming from exactly):
	
	```
  +--------------+------------+----------------+--------------+-----+
  | period_state | day        | relative_order | global_order | grp |
  +--------------+------------+----------------+--------------+-----+
  | succeeded    | 2019-01-01 |              1 |            1 |   0 |
  | succeeded    | 2019-01-02 |              2 |            2 |   0 |
  | succeeded    | 2019-01-03 |              3 |            3 |   0 |
  | failed       | 2019-01-04 |              1 |            4 |   3 |
  | failed       | 2019-01-05 |              2 |            5 |   3 |
  | succeeded    | 2019-01-06 |              4 |            6 |   2 |
  +--------------+------------+----------------+--------------+-----+
	```

	Note how the `grp` value will always be distinct for clusters of contiguous records due to the auto-incrementing nature of `global_order` values *across* `period_state` partitions and `relative_order` values *within* `period_state` partitions.

All that is left now is to group records by their `grp` value and to find the `start_date` and `end_date` for each group, something easily accomplished with the `MIN()` and `MAX()` functions, respectively:

```
WITH fails_and_successes AS (
  SELECT
    'failed' AS period_state,
    F.fail_date AS day,
    ROW_NUMBER() OVER(ORDER BY F.fail_date) AS relative_order
  FROM
    Failed F
  WHERE
    F.fail_date BETWEEN '2019-01-01' AND '2019-12-31'
  UNION ALL
  SELECT
    'succeeded' AS period_state,
    S.success_date AS day,
    ROW_NUMBER() OVER(ORDER BY S.success_date) AS relative_order
  FROM
    Succeeded S
  WHERE
    S.success_date BETWEEN '2019-01-01' AND '2019-12-31'
), fail_and_success_groups AS (
  SELECT
    FS.period_state,
    FS.day,
    ROW_NUMBER() OVER(ORDER BY FS.day) - FS.relative_order AS grp
  FROM
    fails_and_successes FS
)
SELECT
  FSG.period_state,
  MIN(FSG.day) AS start_date,
  MAX(FSG.day) AS end_date
FROM
  fail_and_success_groups FSG
GROUP BY
  FSG.grp, FSG.period_state
ORDER BY
  start_date;
```

This gives us our final result set:

```
+--------------+------------+------------+
| period_state | start_date | end_date   |
+--------------+------------+------------+
| succeeded    | 2019-01-01 | 2019-01-03 |
| failed       | 2019-01-04 | 2019-01-05 |
| succeeded    | 2019-01-06 | 2019-01-06 |
+--------------+------------+------------+
```

--- 

**Note:** Solution 2 above was inspired by [this brilliant solution](https://leetcode.com/problems/report-contiguous-dates/discuss/835526/Mysql-window-function-easy-to-understand).