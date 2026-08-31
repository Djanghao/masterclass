# Official Solution

**Link:** [https://leetcode.com/problems/find-total-time-spent-by-each-employee/solution/](https://leetcode.com/problems/find-total-time-spent-by-each-employee/solution/)

---

[TOC]

<!-- Don't delete this -->
[TOC]

# Solution

---

## pandas

#### Intuition

In Pandas, we can calculate the difference between the `out_time` and `in_time` columns and store it as a new column named `total_time`. Afterwards, we can perform a group-by operation on the `event_day` and `emp_id` columns and calculate the sum of the `total_time` for each group.

#### Algorithm

By creating a new column `total_time` to capture the time difference between the `out_time` and `in_time` columns, we can proceed to group the data based on the `event_day` and `emp_id` columns. Subsequently, we calculate the total time spent by each employee on each day at the office by summing the `total_time` for each group.

Here is an example to help solidify the intuition behind the algorithm:

1. Original `employees` dataframe:
    <table>
        <tr>
            <th>emp_id</th>
            <th>event_day</th>
            <th>in_time</th>
            <th>out_time</th>
        </tr>
        <tr>
            <td>1</td>
            <td>2020-11-28</td>
            <td>4</td>
            <td>32</td>
        </tr>
        <tr>
            <td>1</td>
            <td>2020-11-28</td>
            <td>55</td>
            <td>200</td>
        </tr>
        <tr>
            <td>1</td>
            <td>2020-12-03</td>
            <td>1</td>
            <td>42</td>
        </tr>
        <tr>
            <td>2</td>
            <td>2020-11-28</td>
            <td>3</td>
            <td>33</td>
        </tr>
        <tr>
            <td>2</td>
            <td>2020-12-09</td>
            <td>47</td>
            <td>74</td>
        </tr>
    </table>

- Note that you can build the `employee` table via:
    ```python3
    import pandas as pd

    employees = pd.DataFrame({
        'emp_id': [1, 1, 1, 2, 2],
        'event_day': ['2020-11-28', '2020-11-28', '2020-12-03', '2020-11-28', '2020-12-09'],
        'in_time': [4, 55, 1, 3, 47],
        'out_time': [32, 200, 42, 33, 74]
    })
    ```

<br />

2. After creating `'total_time'` column:
    ```python3
    employees["total_time"] = employees["out_time"] - employees["in_time"]
    ```

    <table>
        <tr>
            <th>emp_id</th>
            <th>event_day</th>
            <th>in_time</th>
            <th>out_time</th>
            <th>total_time</th>
        </tr>
        <tr>
            <td>1</td>
            <td>2020-11-28</td>
            <td>4</td>
            <td>32</td>
            <td>28</td>
        </tr>
        <tr>
            <td>1</td>
            <td>2020-11-28</td>
            <td>55</td>
            <td>200</td>
            <td>145</td>
        </tr>
        <tr>
            <td>1</td>
            <td>2020-12-03</td>
            <td>1</td>
            <td>42</td>
            <td>41</td>
        </tr>
        <tr>
            <td>2</td>
            <td>2020-11-28</td>
            <td>3</td>
            <td>33</td>
            <td>30</td>
        </tr>
        <tr>
            <td>2</td>
            <td>2020-12-09</td>
            <td>47</td>
            <td>74</td>
            <td>27</td>
        </tr>
    </table>

<br />

3. By grouping the data based on `event_day` and `emp_id` and then summing the `total_time` for each group, we obtain the following table:
    ```python3
    employees = employees.groupby(["event_day", "emp_id"])["total_time"].sum().reset_index()
    ```

    <table>
        <tr>
            <th>event_day</th>
            <th>emp_id</th>
            <th>total_time</th>
        </tr>
        <tr>
            <td>2020-11-28</td>
            <td>1</td>
            <td>173</td>
        </tr>
        <tr>
            <td>2020-11-28</td>
            <td>2</td>
            <td>30</td>
        </tr>
        <tr>
            <td>2020-12-03</td>
            <td>1</td>
            <td>41</td>
        </tr>
        <tr>
            <td>2020-12-09</td>
            <td>2</td>
            <td>27</td>
        </tr>
    </table>

    <br/>

4. After renaming the column `event_day` to `day` and converting its type to `str`, we obtain the following result:
    ```python3
    employees.rename({"event_day": "day"}, axis=1, inplace=True);
    employees["day"] = employees["day"].astype(str);
    ```

    <table>
        <tr>
            <th>day</th>
            <th>emp_id</th>
            <th>total_time</th>
        </tr>
        <tr>
            <td>2020-11-28</td>
            <td>1</td>
            <td>173</td>
        </tr>
        <tr>
            <td>2020-11-28</td>
            <td>2</td>
            <td>30</td>
        </tr>
        <tr>
            <td>2020-12-03</td>
            <td>1</td>
            <td>41</td>
        </tr>
        <tr>
            <td>2020-12-09</td>
            <td>2</td>
            <td>27</td>
        </tr>
    </table>

#### Implementation

<iframe src="https://leetcode.com/playground/cEDk5U2f/shared" frameBorder="0" width="100%" height="191" name="cEDk5U2f"></iframe>

<br>

---

## Database

### Approach: Calculate Time and Group By

#### Intuition

In SQL, the query to calculate the total time spent by each employee on each day at the office involves calculating the difference between `out_time` and `in_time`, and then grouping by the `emp_id` and `event_day`, and finally summing up the time differences for each group.

#### Algorithm

This task requires calculating the total time spent by each employee on each day at the office. This implies that we have to first calculate the time difference for each entry (`out_time - in_time`), then group by the `emp_id` and `event_day`, and finally `sum` up the time differences for each group.

Here is an example to help solidify the intuition behind the algorithm:

The original table `Employees`:

<table>
    <tr>
        <th>emp_id</th>
        <th>event_day</th>
        <th>in_time</th>
        <th>out_time</th>
    </tr>
    <tr>
        <td>1</td>
        <td>2020-11-28</td>
        <td>4</td>
        <td>32</td>
    </tr>
    <tr>
        <td>1</td>
        <td>2020-11-28</td>
        <td>55</td>
        <td>200</td>
    </tr>
    <tr>
        <td>1</td>
        <td>2020-12-03</td>
        <td>1</td>
        <td>42</td>
    </tr>
    <tr>
        <td>2</td>
        <td>2020-11-28</td>
        <td>3</td>
        <td>33</td>
    </tr>
    <tr>
        <td>2</td>
        <td>2020-12-09</td>
        <td>47</td>
        <td>74</td>
    </tr>
</table>

<br />

The table after calculating the time difference, grouping by `emp_id` and `event_day`, and summing up the time differences:

<table>
    <tr>
        <th>day</th>
        <th>emp_id</th>
        <th>total_time</th>
    </tr>
    <tr>
        <td>2020-11-28</td>
        <td>1</td>
        <td>173</td>
    </tr>
    <tr>
        <td>2020-11-28</td>
        <td>2</td>
        <td>30</td>
    </tr>
    <tr>
        <td>2020-12-03</td>
        <td>1</td>
        <td>41</td>
    </tr>
    <tr>
        <td>2020-12-09</td>
        <td>2</td>
        <td>27</td>
    </tr>
</table>

#### Implementation

```sql
SELECT event_day AS day, emp_id, SUM(out_time - in_time) AS total_time
FROM Employees
GROUP BY event_day, emp_id;
```