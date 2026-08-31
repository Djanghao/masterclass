# Step-by-step visual guide to recursive CTE solution

**Author:** anton-ivanov
**Votes:** 26
**Link:** [https://leetcode.com/problems/the-number-of-passengers-in-each-bus-ii/solutions/3432931/](https://leetcode.com/problems/the-number-of-passengers-in-each-bus-ii/solutions/3432931/)

---

# Intuition

To find out how many people boarded the bus, we need to know how many people were standing at the bus stop. This is difficult to calculate because you need to keep referring to the previous row of the table you are building. A simple way to calculate running totals like `SUM(passengers) OVER (...)` will not work.

Recursive CTE does exactly that: it allows you to build a table row-by-row while referring to the previous row you just calculated. 

Here is the original `Buses` table:

```
| bus_id | arrival_time | capacity |
| ------ | ------------ | -------- |
| 1      | 2            | 1        |
| 2      | 4            | 10       |
| 3      | 7            | 2        |
```

First, let's just add a "previous bus time" column for convenience:

```
| bus_id | arrival_time | capacity | prev_bus_time |
| ------ | ------------ | -------- | ------------- |
| 1      | 2            | 1        | 0             |
| 2      | 4            | 10       | 2             |
| 3      | 7            | 2        | 4             |
```

Then, let's join with the Passengers table and find out how many new passengers arrived before each bus. This doesn't take into account the spillover from previous buses who couldn't pick up everyone.

Also, let's add the row numbers for each bus because bus numbers may not be sequential, e.g. bus #371 may arrive before bus #1.

```
| bus_id | arrival_time | capacity | prev_bus_time | new_pax | row_num |
| ------ | ------------ | -------- | ------------- | ------- | ------- |
| 1      | 2            | 1        | 0             | 2       | 1       |
| 2      | 4            | 10       | 2             | 0       | 2       |
| 3      | 7            | 2        | 4             | 3       | 3       |
```

Now we have all the required data to built the results row-by-row. 

For each row, the number of people standing at the stop is `new_pax` plus all other `remaining` passengers who didn't fit into the previous buses. 

The `boarded` and `remaining` columns are calculated inside the recursive CTE.

Here's the table built by the CTE:

```
| row_num | bus_id | boarded | remaining |
| ------- | ------ | ------- | --------- |
| 1       | 1      | 1       | 1         |
| 2       | 2      | 1       | 0         |
| 3       | 3      | 2       | 1         |
```

# Code
```sql
WITH RECURSIVE

    # Add a "previous bus time" column:
    upd_buses AS (
        SELECT
            B.bus_id,
            B.arrival_time,
            B.capacity,
            COALESCE(LAG(B.arrival_time) OVER (ORDER BY B.arrival_time), 0) AS prev_bus_time
        FROM Buses B
    ),

    # For each bus, add a new_pax column showing how many new passengers
    # arrived to the bus stop since the last bus
    running_totals AS (
        SELECT
            B.bus_id,
            B.arrival_time,
            B.capacity,
            B.prev_bus_time,
            COUNT(P.passenger_id) AS new_pax,
            ROW_NUMBER() OVER (ORDER BY B.arrival_time) AS row_num
        FROM upd_buses AS B

        LEFT JOIN Passengers P
        ON
            P.arrival_time <= B.arrival_time
            AND
            P.arrival_time > B.prev_bus_time

        GROUP BY B.bus_id, B.arrival_time, B.capacity
    ),

    # Use a recursive CTE to build the final table row-by-row. "Boarded" is how many
    # people entered the bus, and "remaining" is how many didn't fit in.
    recursive_cte AS (
        # Base - select first row
        SELECT
            row_num,
            bus_id,
            LEAST(capacity, new_pax) AS boarded,
            (new_pax - LEAST(capacity, new_pax)) AS remaining
        FROM running_totals
        WHERE row_num = 1

        UNION ALL

        # Create all other rows, by combining the next row from the `running_totals` table,
        # and the previously built row from this CTE
        SELECT
            T.row_num,
            T.bus_id,
            LEAST(capacity, new_pax + remaining) AS boarded,
            (new_pax + remaining) - LEAST(capacity, new_pax + remaining) AS remaining
        FROM
            recursive_cte REC,
            running_totals T
        WHERE
            T.row_num = REC.row_num + 1
    )

# The data is ready, just select the columns we need
SELECT
    bus_id,
    boarded AS passengers_cnt
FROM recursive_cte
ORDER BY bus_id
```