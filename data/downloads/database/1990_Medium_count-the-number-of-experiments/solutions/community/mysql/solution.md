# Fast and easy to understand MySQL solution

**Author:** madibarsrch
**Votes:** 8
**Link:** [https://leetcode.com/problems/count-the-number-of-experiments/solutions/2254129/](https://leetcode.com/problems/count-the-number-of-experiments/solutions/2254129/)

---

First let's make the list of platforms and activities:

1. Platforms
```
WITH platforms AS (
    SELECT 'Android' AS platform
    UNION ALL
    SELECT 'IOS' AS platform
    UNION ALL
    SELECT 'Web' AS platform
)
```

2. Activities
```
activities AS (
    SELECT 'Reading' AS activity
    UNION ALL
    SELECT 'Sports' AS activity
    UNION ALL
    SELECT 'Programming' AS activity
)
```

**It is important to create this list in above-mentioned way because there might be test cases which does not have any of these platforms/activities. We need to make sure that we get all the platforms and activities to create  (platform, activity) pair.**

Then join them to create all the 9 pairs of (platform, experiment) and LEFT JOIN the result with `Experiments` table to get the number of experiments per pair.
```
SELECT
    p.platform,
    e.activity AS experiment_name,
    SUM(CASE
        WHEN ep.experiment_name = e.activity THEN 1 ELSE 0
    END) AS num_experiments
FROM platforms p
JOIN activities e
LEFT JOIN experiments ep ON p.platform = ep.platform AND e.activity = ep.experiment_name
GROUP BY p.platform, e.activity
```

So the final query looks like this:

```
WITH platforms AS (
    SELECT 'Android' AS platform
    UNION ALL
    SELECT 'IOS' AS platform
    UNION ALL
    SELECT 'Web' AS platform
),
activities AS (
    SELECT 'Reading' AS activity
    UNION ALL
    SELECT 'Sports' AS activity
    UNION ALL
    SELECT 'Programming' AS activity
)

SELECT
    p.platform,
    a.activity AS experiment_name,
    SUM(CASE
        WHEN ep.experiment_name = a.activity THEN 1 ELSE 0
    END) AS num_experiments
FROM platforms p
JOIN activities a
LEFT JOIN experiments ep ON p.platform = ep.platform AND a.activity = ep.experiment_name
GROUP BY p.platform, a.activity;
```