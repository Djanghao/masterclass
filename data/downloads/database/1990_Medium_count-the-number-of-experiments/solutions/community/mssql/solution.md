# COUNT() OVER WINDOW CTE SQL SERVER

**Author:** NishantLeet17
**Votes:** 3
**Link:** [https://leetcode.com/problems/count-the-number-of-experiments/solutions/1705654/](https://leetcode.com/problems/count-the-number-of-experiments/solutions/1705654/)

---

```
WITH CTE_CROSS AS (
select *
    from (values ('IOS'),('Android'),('Web')) a(platform)
    cross join (values ('Programming'),('Sports'),('Reading')) b(experiment_name)
)
SELECT DISTINCT E1.PLATFORM, E1.EXPERIMENT_NAME, 
COUNT(E2.EXPERIMENT_ID) OVER (PARTITION BY E1.EXPERIMENT_NAME, E1.PLATFORM) AS NUM_EXPERIMENTS 
FROM CTE_CROSS E1
LEFT JOIN EXPERIMENTS E2
ON E1.PLATFORM = E2.PLATFORM AND E1.EXPERIMENT_NAME = E2.EXPERIMENT_NAME
```
REFERRED TABLE CREATION FROM @sebnyberg SOLUTION