# Official Solution

**Link:** [https://leetcode.com/problems/second-highest-salary/solution/](https://leetcode.com/problems/second-highest-salary/solution/)

---

<!-- Don't delete this -->
[TOC] 

# Solution

---

## pandas

### Approach: Sorting

#### Algorithm
Given the table `employee` as follows:
<table>
    <tr>
        <th>id</th>
        <th>salary</th>
    </tr>
    <tr>
        <td>1</td>
        <td>100</td>
    </tr>
    <tr>
        <td>2</td>
        <td>200</td>
    </tr>
    <tr>
        <td>3</td>
        <td>300</td>
    </tr>
    <tr>
        <td>4</td>
        <td>200</td>
    </tr>
</table>
<br>

We first drop any duplicate salaries.
<table>
    <tr>
        <th>id</th>
        <th>salary</th>
    </tr>
    <tr>
        <td>1</td>
        <td>100</td>
    </tr>
    <tr>
        <td>2</td>
        <td>200</td>
    </tr>
    <tr>
        <td>3</td>
        <td>300</td>
    </tr>
</table>
<br>

Then we handle the case if there are less than two unique salaries. If there are less than two unique salaries, then we return `np.NaN` as the second highest salary. Otherwise, we sort the table by salary in descending order.

<table>
    <tr>
        <th>id</th>
        <th>salary</th>
    </tr>
    <tr>
        <td>3</td>
        <td>300</td>
    </tr>
    <tr>
        <td>2</td>
        <td>200</td>
    </tr>
    <tr>
        <td>1</td>
        <td>100</td>
    </tr>
</table>
<br>
Then we drop the `id` column.
<table>
    <tr>
        <th>salary</th>
    </tr>
    <tr>
        <td>300</td>
    </tr>
    <tr>
        <td>200</td>
    </tr>
    <tr>
        <td>100</td>
    </tr>
</table>
<br>
Rename the salary column to `SecondHighestSalary` 
<table>
    <tr>
        <th>SecondHighestSalary</th>
    </tr>
    <tr>
        <td>300</td>
    </tr>
    <tr>
        <td>200</td>
    </tr>
    <tr>
        <td>100</td>
    </tr>
</table>
<br>
Now we get the first two rows (via `.head(2)`).
<table>
    <tr>
        <th>SecondHighestSalary</th>
    </tr>
    <tr>
        <td>300</td>
    </tr>
    <tr>
        <td>200</td>
    </tr>
</table>
<br>
The last of which is the second highest salary (via `.tail(1)`).

<table>
    <tr>
        <th>SecondHighestSalary</th>
    </tr>
    <tr>
        <td>200</td>
    </tr>
</table>
<br>


#### Implementation

<iframe src="https://leetcode.com/playground/myX5kixv/shared" frameBorder="0" width="100%" height="412" name="myX5kixv"></iframe>

---
<br>

## Database

### Approach 1: Using sub-query and `LIMIT` clause
#### Algorithm

Sort the distinct salary in descend order and then utilize the [`LIMIT`](https://dev.mysql.com/doc/refman/5.7/en/select.html) clause to get the second highest salary.

```sql
SELECT DISTINCT
    Salary AS SecondHighestSalary
FROM
    Employee
ORDER BY Salary DESC
LIMIT 1 OFFSET 1
```

However, this solution will be judged as 'Wrong Answer' if there is no such second highest salary since there might be only one record in this table. To overcome this issue, we can take this as a temp table. The complete code is as follows:

#### Implementation

```sql
SELECT
    (SELECT DISTINCT
            Salary
        FROM
            Employee
        ORDER BY Salary DESC
        LIMIT 1 OFFSET 1) AS SecondHighestSalary
;
```

### Approach 2: Using `IFNULL` and `LIMIT` clause

#### Algorithm

Another way to solve the 'NULL' problem is to use `IFNULL` function as below. The `IFNULL` function will return the first argument if it is not `NULL`, otherwise it returns the second argument. 
This gives us the correct solution of *one row* containing `NULL` (if there is no such second highest salary) instead of just an empty table.

#### Implementation

```sql
SELECT
    IFNULL(
      (SELECT DISTINCT Salary
       FROM Employee
       ORDER BY Salary DESC
        LIMIT 1 OFFSET 1),
    NULL) AS SecondHighestSalary
```