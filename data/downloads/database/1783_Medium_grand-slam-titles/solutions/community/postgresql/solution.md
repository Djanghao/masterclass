# 10 Lines -- Elegant SQL Solution with 'Lateral'

**Author:** crodeyk
**Votes:** 2
**Link:** [https://leetcode.com/problems/grand-slam-titles/solutions/5849646/](https://leetcode.com/problems/grand-slam-titles/solutions/5849646/)

---

# Code
```postgresql []
select player_id, player_name, count(*) as grand_slams_count
from championships
cross join lateral (
    values
    ('Wimbledon', Wimbledon),
    ('Fr_open', Fr_open),
    ('US_open', US_open),
    ('Au_open', Au_open)
) as l(tourny, player_id)
left join players using(player_id)
group by player_id, player_name
```

# 'Lateral' (Unpivot) Keyword in Postgres

The key to this problem is recognizing that the `player_id` is spread across 4 columns, and to aggregate on it completely, we need to unpivot the data. The `lateral` keyword in PostgreSQL allows this.

**Step 1:** Given the table `championships`, let's 'un-pivot' (i.e., let's take the ids spread across four columns and put it in a single col)

```
-- championships original table
| year | Wimbledon | Fr_open | US_open | Au_open |
| ---- | --------- | ------- | ------- | ------- |
| 2018 | 1         | 1       | 1       | 1       |
| 2019 | 1         | 1       | 2       | 2       |
| 2020 | 2         | 1       | 2       | 2       |
```

Try running:
```
select  year, tourny, player_id
from championships
cross join lateral (
    values
    ('Wimbledon', Wimbledon),
    ('Fr_open', Fr_open),
    ('US_open', US_open),
    ('Au_open', Au_open)
) as l(tourny, player_id)
```

Like `insert`, there will be one row created per value in the lateral `values` clause. The cross join is needed here because we want there to be one row per year and tournament in the new dataset we are creating. This will create will create a tidy more dataset for our intended joins and aggregations.

```
-- Unpivoted championships table with lateral
| year | tourny    | player_id |
| ---- | --------- | --------- |
| 2018 | Au_open   | 1         |
| 2018 | Fr_open   | 1         |
| 2018 | US_open   | 1         |
| 2018 | Wimbledon | 1         |
...
```

**Step 2:** From here, we simply need to select, join `players`, and aggregate by `player_id, player_name` 
```sql
select player_id, player_name, count(*) as grand_slams_count
from championships
-- cross join lateral(values ...) as l(open, player_id) 
...
left join players using(player_id)
group by player_id, player_name
```

This approach is quite powerful once you recognize the pattern.

The best way to think about it is that `lateral` acts like **a dynamic, row-wise generator that can transform multiple columns into multiple rows**, creating a long format ("tidy") table where data relationships are clearer and more accessible final aggregations.

By using `cross join lateral`, each original row in the championships table effectively gets expanded into multiple rows\u2014one for each tournament\u2014thus simplifying operations like `join` and `group by` that require more **normalized** data.