# MySQL with CTE and Window

**Author:** Quar
**Votes:** 19
**Link:** [https://leetcode.com/problems/merge-overlapping-events-in-the-same-hall/solutions/2878704/](https://leetcode.com/problems/merge-overlapping-events-in-the-same-hall/solutions/2878704/)

---

# Intuition
For each event hall, an event belongs to an onging series of events if its `start_day <= max_prev_end_day` of all preceding events (events starts earlier than this event).

For each event hall, we need to sequentially iterate events holded in this hall by their `start_day` in an ascending order and keep tracking of the `max(end_day)`. For each event we:
1. test if it begins a new series of event `start_day > max_prev_end_day`
2. update the `max_prev_end_day = max(max_prev_end_day, end_day)`


# Approach
We can do this with user defined variables (incoveniently it has been deprecated since MySQL 8.0), or with the window expression along with common table expression (CTE).

# Complexity
- Time complexity:
$O(n)$ where $n$ is the number of records. On the same level with the user-defined variable approach.

- Space complexity:
$O(n)$ where $n$ is the number of records. On the same level with the user-defined variable approach.


# Code
```
WITH new_event_start AS (
  SELECT
  	IFNULL(start_day > MAX(end_day) OVER pw, 1) AS is_new_event_start,
  	hall_id,
    start_day,
  	end_day
  FROM
  	HallEvents
  WINDOW
  	pw AS (
      PARTITION BY hall_id 
      ORDER BY start_day ASC, end_day DESC
      ROWS BETWEEN UNBOUNDED PRECEDING AND 1 PRECEDING
    )
),
event_id AS (
  SELECT
  	SUM(is_new_event_start) OVER w AS event_id,
    hall_id,
    start_day,
    end_day
  FROM
  	new_event_start
  WINDOW
  	w AS (
      PARTITION BY hall_id
      ORDER BY start_day ASC, end_day DESC
    )
)
SELECT
	hall_id,
    min(start_day) AS start_day,
    max(end_day) As end_day    
FROM
	event_id
GROUP BY hall_id, event_id
  
```
Execution plan for test 1 (6 rows in total)

| id  | select_type | table      | partitions | type |   ...   | rows | filtered | Extra           |
| --- | ----------- | ---------- | ---------- | ---- | ------- | ---- | -------- | --------------- |
| 1   | PRIMARY     | derived2 |    null    | ALL  |   ...   | 6    | 100      | Using temporary |
| 2   | DERIVED     | derived3 |    null    | ALL  |   ...   | 6    | 100      | Using filesort  |
| 3   | DERIVED     | HallEvents |    null    | ALL  |   ,,,   | 6    | 100      | Using filesort  |
