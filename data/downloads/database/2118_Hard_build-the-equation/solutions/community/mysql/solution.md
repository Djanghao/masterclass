# MySQL: Easy use of GROUP_CONCAT with optimized, readable, and follow-up solutions

**Author:** farlowdw
**Votes:** 13
**Link:** [https://leetcode.com/problems/build-the-equation/solutions/1653717/](https://leetcode.com/problems/build-the-equation/solutions/1653717/)

---

**Optimized solution:**

```SQL
WITH eqn_reps AS (
  SELECT
    T.power,
    CONCAT(
      (CASE
        WHEN T.factor > 0 THEN '+'
        ELSE '-'
      END),
      (CASE
        WHEN T.power > 1 THEN CONCAT(ABS(T.factor), 'X^', T.power)
        WHEN T.power = 1 THEN CONCAT(ABS(T.factor), 'X')
        ELSE ABS(T.factor)
      END)
    ) AS eqn_rep
  FROM
    Terms T
)
SELECT
  CONCAT(GROUP_CONCAT(E.eqn_rep ORDER BY E.power DESC SEPARATOR ''), '=0') AS equation
FROM
  eqn_reps E;
```

**Readable solution:** Same as above but just a little more readable:

```SQL
WITH eqn_reps AS (
  SELECT
    T.power,
    (CASE
      WHEN T.factor > 0 THEN '+'
      ELSE '-'
    END) AS sgn_rep,
    (CASE
      WHEN T.power > 1 THEN CONCAT(ABS(T.factor), 'X^', T.power)
      WHEN T.power = 1 THEN CONCAT(ABS(T.factor), 'X')
      ELSE ABS(T.factor)
    END) AS power_rep
  FROM
    Terms T
)
SELECT
  CONCAT(GROUP_CONCAT(E.sgn_rep, E.power_rep ORDER BY E.power DESC SEPARATOR ''), '=0') AS equation
FROM
  eqn_reps E;
```

**Follow-up solution (extends readable solution):**

```SQL
WITH deduplicated_powers AS (
  SELECT
    T1.power,
    SUM(T1.factor) AS factor
  FROM
    Terms T1
  GROUP BY
    T1.power
  HAVING
    factor != 0
), eqn_reps AS (
  SELECT
    DP.power,
    (CASE
      WHEN DP.factor > 0 THEN '+'
      ELSE '-'
    END) AS sgn_rep,
    (CASE
      WHEN DP.power > 1 THEN CONCAT(ABS(DP.factor), 'X^', DP.power)
      WHEN DP.power = 1 THEN CONCAT(ABS(DP.factor), 'X')
      ELSE ABS(DP.factor)
    END) AS power_rep
  FROM
    deduplicated_powers DP
)
SELECT
  CONCAT(GROUP_CONCAT(E.sgn_rep, E.power_rep ORDER BY E.power DESC SEPARATOR ''), '=0') AS equation
FROM
  eqn_reps E;
```

**Explanation:** For the follow-up solution, the `deduplicated_powers` CTE is what it sounds like: Powers have been combined and hence deduplicated (if the combination leads to a `factor` of `0`, then that power is not considered). The `eqn_reps` CTE looks like the following (this is for the more readable version where `sgn_rep` and `power_rep` are considered separately instead of just being combined in a more complicated fashion with `CONCAT`):

```
+-------+---------+-----------+
| power | sgn_rep | power_rep |
+-------+---------+-----------+
|     2 | +       | 1X^2      |
|     1 | -       | 4X        |
|     0 | +       | 2         |
+-------+---------+-----------+
```

As the `eqn_reps` results set above makes clear, assembling the final result set is fairly easy by means of `GROUP_CONCAT`.

---

**Critique in comments:** @BuDongJiuWen notes the following: *The question defines "factor is an integer in the range `[-100, 100]` and cannot be zero.", so `factor != 0` would be unnecessary.*

**Response:** `factor != 0` is necessary for the follow-up, which is where it occurs in the answer above. Consider the [db fiddle](https://www.db-fiddle.com/f/8mUWH8B4F8ERJrGu9hK65S/0) where the schema has been updated:

```sql
DROP TABLE IF EXISTS Terms;

CREATE TABLE IF NOT EXISTS
  Terms (power int, factor int);

INSERT INTO
  Terms 
VALUES
  ('2', '1'),
  ('1', '-4'),
  ('1', '4'),
  ('0', '2');
```

The schema above is possible for the follow-up question since `power` is no longer considered to be the primary key for the `Terms` table. What is `-4x + 4x`? It's `0x`, a term that should not be reported in the final equation that's returned. But removing `factor != 0` from the follow-up solution results in the following output:

```
+--------------+
| equation     |
+--------------+
| +1X^2-0X+2=0 |
+--------------+
```

Adding `factor != 0` back in gives us the desired result:

```
+-----------+
| equation  |
+-----------+
| +1X^2+2=0 |
+-----------+
```
