# MySQL: TIMESTAMPDIFF and LEFT JOIN

**Author:** farlowdw
**Votes:** 10
**Link:** [https://leetcode.com/problems/employees-with-deductions/solutions/2521191/](https://leetcode.com/problems/employees-with-deductions/solutions/2521191/)

---

**Solution:**

```sql
SELECT
  E.employee_id
FROM
  Employees E
  LEFT JOIN Logs L ON E.employee_id = L.employee_id
GROUP BY
  E.employee_id,
  E.needed_hours
HAVING
  (SUM(CEIL(IFNULL(TIMESTAMPDIFF(SECOND, L.in_time, L.out_time),0) / 60)) / 60) < E.needed_hours;
```

---

**Response to question:**

> The reason we need to state the `E.needed_hours` on `GROUP BY` clause is that SQL doesn't know to choose which `needed_hours` column on `HAVING` clause? I though we can only state the `employee_id` on `GROUP BY` clause and using `needed_hours` on `HAVING` clause, but I got returned error that SQL doesn't find the `needed_hours` column. Thus, I guess there would be multiple same `needed_hours` for each `employee_id` because I `LEFT JOIN` the two tables and SQL doesn't know the which column to choose if I didn't state to `GROUP BY`. Is it right? The wrong answer looks like the below and it returns `Unknown column 'Employees.needed_hours' in 'having clause'`.

**Short answer:** it's unclear what `needed_hours` actually *means* in a `HAVING` clause if you have not also used `needed_hours` in the `GROUP BY` clause. Hence the error.

**Longer answer:** I think I can sketch out a decent description by using a simple query as a reference point:

```sql
SELECT
  E.employee_id,
  E.needed_hours
FROM
  Employees E
  LEFT JOIN Logs L ON E.employee_id = L.employee_id;
```

The query above yields the following result set:

```
+-------------+--------------+
| employee_id | needed_hours |
+-------------+--------------+
|           1 |           20 |
|           1 |           20 |
|           1 |           20 |
|           2 |           12 |
|           3 |            2 |
+-------------+--------------+
```

Now, [straight from the MySQL docs](https://dev.mysql.com/doc/refman/8.0/en/select.html) (indicators (i) and (ii) added by myself):

> (i) The SQL standard requires that `HAVING` must reference only columns in the `GROUP BY` clause or columns used in aggregate functions. 
> (ii) However, MySQL supports an extension to this behavior, and permits `HAVING` to refer to columns in the `SELECT` list and columns in outer subqueries as well.

(i) So you could do something like

```sql
SELECT
  E.employee_id
FROM
  Employees E
  LEFT JOIN Logs L ON E.employee_id = L.employee_id
GROUP BY
  E.employee_id
HAVING
  (SUM(CEIL(IFNULL(TIMESTAMPDIFF(SECOND, L.in_time, L.out_time), 0) / 60)) / 60) < MAX(E.needed_hours);
```

where you could similarly replace `MAX(E.needed_hours)` with either `MIN(E.needed_hours)` or `AVG(E.needed_hours)` for the same effect. But something like `SUM(E.needed_hours)` would fail. Why? Well, look at the previously mentioned result set. 

What we're *really* interested in is not present, namely the `time_in` and `time_out` data (i.e., the whole `(SUM(CEIL( ... ))` thing). But notice what's going on with the `employee_id` and `needed_hours` pairs. The `E.needed_hours` values, however many there may be that arise from the `LEFT JOIN`, will always be *unique* in regards to their association with `employee_id`. This is guaranteed since the `Employee` table has `employee_id` as its primary key. Hence, even though the `employee_id` of `1` occurs three separate times in the above result set, the `needed_hours` value is unique (namely `20`).

Grouping by `employee_id` alone gives us

```
+-------------+
| employee_id |
+-------------+
|           1 |
|           2 |
|           3 |
+-------------+
```

and we can compute `(SUM(CEIL( ... ))`, but what would referencing `needed_hours` in the `HAVING` clause even *mean* in this case? There are three separate `needed_hours` values attached to the `employee_id` with a value of `1` above even though that number is unique. Hence, `MAX`, `MIN`, and `AVG` don't cause issues--they all return `20` as the expected number. But using a different aggregate function like `SUM` would be incorrect and cause issues. In fact, applying *any* aggregate to `needed_hours` in this case is unnecessary, hacky, and just plain confusing. Grouping by `employee_id` *and* `needed_hours` gives us 

```
+-------------+--------------+
| employee_id | needed_hours |
+-------------+--------------+
|           1 |           20 |
|           2 |           12 |
|           3 |            2 |
+-------------+--------------+
```

where we can still easily compute `(SUM(CEIL( ... ))` and now what `needed_hours` means is unambiguous.

(ii) For completeness, you could do something ridiculous to take advantage of MySQL's "behavioral extension":

```sql 
WITH base_data AS (
  SELECT
    E.employee_id, E.needed_hours
  FROM
    Employees E
    LEFT JOIN Logs L ON E.employee_id = L.employee_id
  GROUP BY
    E.employee_id
  HAVING
    (SUM(CEIL(IFNULL(TIMESTAMPDIFF(SECOND, L.in_time, L.out_time), 0) / 60)) / 60) < E.needed_hours
)
SELECT
  B.employee_id
FROM
  base_data B;
```

---

Both approaches above work *without* grouping by `needed_hours`. But they're kind of silly aren't they? Something like the original query

```sql 
SELECT
  E.employee_id
FROM
  Employees E
  LEFT JOIN Logs L ON E.employee_id = L.employee_id
GROUP BY
  E.employee_id,
  E.needed_hours
HAVING
  (SUM(CEIL(IFNULL(TIMESTAMPDIFF(SECOND, L.in_time, L.out_time), 0) / 60)) / 60) < E.needed_hours;
```

works just fine. It's clearer too. Hopefully now it makes more sense as well.

