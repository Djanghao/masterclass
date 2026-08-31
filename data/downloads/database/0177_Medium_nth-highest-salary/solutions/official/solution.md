# Official Solution

**Link:** [https://leetcode.com/problems/nth-highest-salary/solution/](https://leetcode.com/problems/nth-highest-salary/solution/)

---

<!-- Don't delete this -->
[TOC]

# Solution

---

## pandas

### Overview

Retrieve the $n^{th}$ highest salary from the `Employee` table. If there is no nth highest salary, we will return `null`.

---

### Approach: Rank-Based Filtering

#### Algorithm

To identify the $n^{th}$ highest salary (after removing duplicates), we apply a **ranking** approach using `pandas`. This is more flexible than sorting alone and handles ties automatically.

Here is an example to help solidify the intuition behind the algorithm:

The original table `employee` with `N = 2`:

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
        <td>500</td>
    </tr>
    <tr>
        <td>5</td>
        <td>500</td>
    </tr>
</table>

<br>

**Step 1: Remove Duplicate Salaries**  
We only care about unique salaries, so we drop duplicate values in the `salary` column:
```python
dist = employee.drop_duplicates(subset='salary')
```

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
        <td>500</td>
    </tr>
</table>

<br>

**Step 2: Rank Salaries in Descending Order**  
We assign ranks to the salaries using `rank(method='dense', ascending=False)`. This ensures:

  - Higher salaries have lower rank values.
  - Equal salaries receive the same rank.
  - Gaps in ranks are avoided.

```python
dist['rnk'] = dist['salary'].rank(method='dense', ascending=False)
```

<table>
    <tr>
        <th>salary</th>
        <th>rnk</th>
    </tr>
    <tr>
        <td>500</td>
        <td>1</td>
    </tr>
    <tr>
        <td>300</td>
        <td>2</td>
    </tr>
    <tr>
        <td>200</td>
        <td>3</td>
    </tr>
    <tr>
        <td>100</td>
        <td>4</td>
    </tr>
</table>

<br>

**Step 3: Filter by Rank**  
We then select the row(s) where `rnk == N`. If none exist, we return `null`.

In this case `N = 2`, so after filtering and selecting relevant columns we end up with:

<table>
    <tr>
        <th>salary</th>
    </tr>
    <tr>
        <td>500</td>
    </tr>
    <tr>
        <td>300</td>
    </tr>
</table>

<br>

#### Implementation

<iframe src="https://leetcode.com/playground/a879iCKY/shared" frameBorder="0" width="100%" height="242" name="a879iCKY"></iframe>

---
<br>

## Database

### Approach: Sort and Limit
#### Algorithm
In SQL, the query to find the $n^{th}$ highest salary involves sorting the distinct salaries in descending order and limiting the result to the nth row. Here we subtract 1 from N because SQL indexing starts from 0.

This task requires to find the nth highest salary from the Employee table. If there is no nth highest salary, the query should return null. This implies that we have to order the salary column in descending order and pick the nth entry.

Here is an example to help solidify the intuition behind the algorithm:

Original Employee table with `N = 2`:

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
        <td>500</td>
    </tr>
    <tr>
        <td>5</td>
        <td>500</td>
    </tr>
</table>
<br>

Sub-Table after removing duplicates via `SELECT DISTINCT`:
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
        <td>500</td>
    </tr>
</table>
<br>

Sub-Table after sorting in descending order via `ORDER BY salary DESC`:
<table>
    <tr>
        <th>id</th>
        <th>salary</th>
    </tr>
    <tr>
        <td>4</td>
        <td>500</td>
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

And the 2nd highest salary is `300`, which can be found by taking the second row in the descendingly-ordered table! We do this with `LIMIT M, 1` which takes the next `1` row starting from the `M`th row (indexed from 0).

Note that in SQL, the order of execution for the clauses in a query is generally as follows:

1. FROM clause: This specifies the tables from which data will be retrieved.
1. WHERE clause: This filters the rows based on a specified condition.
1. GROUP BY clause: This groups rows based on a specified column or expression.
1. HAVING clause: This filters the grouped rows based on a condition.
1. SELECT clause: This selects the columns or expressions that will be returned in the result set.
1. ORDER BY clause: This sorts the result set based on a specified column or expression.
1. LIMIT/OFFSET clause: This limits the number of rows returned in the result set.

Note: Your DBMS may execute a query in an equivalent but *different* order.

#### Implementation

```sql
CREATE FUNCTION getNthHighestSalary(N INT) RETURNS INT
BEGIN
DECLARE M INT; 
    SET M = N-1; 
  RETURN (
      SELECT DISTINCT salary
      FROM Employee
      ORDER BY salary DESC
      LIMIT M, 1
  );
END
```