# Official Solution

**Link:** [https://leetcode.com/problems/managers-with-at-least-5-direct-reports/solution/](https://leetcode.com/problems/managers-with-at-least-5-direct-reports/solution/)

---

<!-- Don't delete this -->
[TOC]

# Solution

---

## pandas

### Approach: Group By and Join

#### Algorithm

We are asked to find the managers having at least 5 direct reports, which involves counting the number of reports for each manager ID. This can be done by grouping the orders by each unique manager ID. Hence, we group the DataFrame `Employee` by the column `managerId` and apply the `size()` method to calculate the number of reports of each unique value in `managerId`, which represents the number of employees reporting to each manager.

`reset_index(name='count')` is used to assign a new name `count` to the resulting column that represents the count of reports. This step ensures that the resulting DataFrame `df` has two columns: `managerId` and `count`.

```python
df = employee.groupby('managerId').size().reset_index(name='count')
```

We can obtain the following DataFrame `df`:

<table>
  <tr>
    <th>managerId</th>
    <th>count</th>
  </tr>
  <tr>
    <td>101</td>
    <td>5</td>
  </tr>
</table>

<br>

Then, we filter the rows having `count` equal to or at least 5, which represent managers having 5 or more reports.

```python
managers = managers[managers['count'] >= 5]
```

<table>
  <tr>
    <th>managerId</th>
    <th>count</th>
  </tr>
  <tr>
    <td>101</td>
    <td>5</td>
  </tr>
</table>

<br>


Next, we can get the name of these managers by joining `df` with `employee` on the common column (`managerId` in `df`, and `id` in `employee`). Note that we use set the method as `how = 'inner'`, which selects the managers that have matching values in both two DataFrames. Therefore, we would not select an employee who is not a valid manager, nor would we select a manager who is not in `employee`.


#### Implementation

<iframe src="https://leetcode.com/playground/38YGVvFa/shared" frameBorder="0" width="100%" height="174" name="38YGVvFa"></iframe>

We can obtain the following table as the answer:

<table>
  <tr>
    <th>name</th>
  </tr>
  <tr>
    <td>John</td>
  </tr>
</table>



<br>


## Database

### Approach: Group By and Join

#### Algorithm

The subquery selects the manager IDs from the employee and groups them based on the number of reports they have. The `HAVING` clause filters out the `managerId` having a count of reports greater than or equal to 5.

```sql
SELECT 
    ManagerId
FROM 
    Employee
GROUP BY ManagerId
HAVING COUNT(ManagerId) >= 5
```

Next, we perform an inner join `JOIN` between the table from this subquery and the table `employee` to obtain all the manager names.

#### Implementation

```sql
SELECT
    Name
FROM
    Employee AS t1 
JOIN
    (SELECT 
        ManagerId
    FROM 
        Employee
    GROUP BY ManagerId
    HAVING COUNT(ManagerId) >= 5) AS t2
ON 
    t1.Id = t2.ManagerId
;
```

<br>

---

### Approach 2: `IN` Clause with Subquery

#### Algorithm

We can also use the `IN` clause in combination with a subquery. 

Similar to the previous approach, the subquery selects the manager IDs from the `employee` and groups them based on the number of reports they have. The HAVING clause is then used to filter out the `managerId` having 5 or more reports.

```sql
SELECT 
    ManagerId
FROM 
    Employee
GROUP BY ManagerId
HAVING COUNT(ManagerId) >= 5
```

Next, we select the names from the `employee`, where the `ManagerId` is present in the table obtained from the subquery using the keyword `IN`. This way, we retrieve the names of managers having at least 5 reports.

#### Implementation

```sql
SELECT
    name
FROM
    employee
WHERE
    id IN (
        SELECT
            managerId
        FROM
            employee
        GROUP BY
            managerId
        HAVING COUNT(*) >= 5
    );
```