# Official Solution

**Link:** [https://leetcode.com/problems/rank-scores/solution/](https://leetcode.com/problems/rank-scores/solution/)

---

<!-- Don't delete this -->
[TOC]

# Solution

---

## pandas 

### Approach 1: DENSE_RANK

#### Algorithm

Ideally, we could group rows together based on `score` value, assign the same
ranking to each member/row of a group, and then return all rows sorted by
ranking in decreasing order. But conventional usage of aggregate functions
relies on grouping query rows into a *single* result row, something we do not
want to do in this problem. We need to return *all* rows in a ranked fashion,
not just distinct or grouped `score` values ranked in descending order.

For example, conventional usage of aggregate functions would give us the
following result set for the example input:

<table>
  <thead>
    <tr>
      <th>score</th>
      <th>rank</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>4.00</td>
      <td>1</td>
    </tr>
    <tr>
      <td>3.85</td>
      <td>2</td>
    </tr>
    <tr>
      <td>3.65</td>
      <td>3</td>
    </tr>
    <tr>
      <td>3.50</td>
      <td>4</td>
    </tr>
  </tbody>
</table>
<br>

But we want *all* rows:

<table>
  <thead>
    <tr>
      <th>score</th>
      <th>rank</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>4.00</td>
      <td>1</td>
    </tr>
    <tr>
      <td>4.00</td>
      <td>1</td>
    </tr>
    <tr>
      <td>3.85</td>
      <td>2</td>
    </tr>
    <tr>
      <td>3.65</td>
      <td>3</td>
    </tr>
    <tr>
      <td>3.65</td>
      <td>3</td>
    </tr>
    <tr>
      <td>3.50</td>
      <td>4</td>
    </tr>
  </tbody>
</table>

<br>



Pandas provides the function `rank()` to help compute numerical data ranks along an axis, we can set the method parameter `method` as `dense` to assign dense ranks. Dense ranks mean that when there are ties (scores that have the same value), the next rank is not skipped. Instead, the same rank is assigned to all tied scores, and the next rank is incremented by one. This ensures that there are no gaps in the ranks, and each score gets a unique rank, which is also exactly what the question requires.

Therefore, we apply dense rank on the column `score`, 


```python
# Dense rank over 'score' by descending order
scores['rank'] = scores['score'].rank(method='dense', ascending=False)
```


We will have the following DataFrame:

<table>
  <thead>
    <tr>
      <th>id</th>
      <th>score</th>
      <th>rank</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>3.50</td>
      <td>4</td>
    </tr>
    <tr>
      <td>2</td>
      <td>3.65</td>
      <td>3</td>
    </tr>
    <tr>
      <td>3</td>
      <td>4.00</td>
      <td>1</td>
    </tr>
    <tr>
      <td>4</td>
      <td>3.85</td>
      <td>2</td>
    </tr>
    <tr>
      <td>5</td>
      <td>4.00</td>
      <td>1</td>
    </tr>
    <tr>
      <td>6</td>
      <td>3.65</td>
      <td>3</td>
    </tr>
  </tbody>
</table>
<br>

Next, we need to return the required columns, sorted by `score` in ascending order, the complete code is as follows:

#### Implementation

<iframe src="https://leetcode.com/playground/Jt3VZFqZ/shared" frameBorder="0" width="100%" height="140" name="Jt3VZFqZ"></iframe>

---

## Database

### Approach 1: Using DENSE_RANK() Window Function for Ranking

#### Algorithm

For SQL users, familiarity with [window functions](https://dev.mysql.com/doc/refman/8.0/en/window-functions-usage.html) proves to be useful here (as with most more advanced SQL problems):

> A window function performs an aggregate-like operation on a set of query
> rows. However, whereas an aggregate operation groups query rows into a single
> result row, a window function produces a result for each query row.

So far so good. Is there a window function that might concern ranking purposes?
The
[`DENSE_RANK()`](https://dev.mysql.com/doc/refman/8.0/en/window-function-descriptions.html#function_dense-rank)
window function turns out to be just what we need for this problem:

> Returns the rank of the current row within its partition, without gaps. Peers
> are considered ties and receive the same rank. This function assigns
> consecutive ranks to peer groups; the result is that groups of size greater
> than one do not produce noncontiguous rank numbers.

It seems likely we could use the `DENSE_RANK()` window function to great
effect here.

#### Implementation

```sql
SELECT
  S.score,
  DENSE_RANK() OVER (
    ORDER BY
      S.score DESC
  ) AS 'rank'
FROM
  Scores S;
```

**Note:** MySQL did not support window functions until version 8.0 (April 19,
2018). In general, window functions were not introduced into SQL until
SQL:2003, as noted in the MariaDB [window functions
overview](https://mariadb.com/kb/en/window-functions-overview/#scope) article.

---

### Approach 2: Correlated subquery with `COUNT(DISTINCT ...)`

#### Intuition

If we could count, for each score `S1.score`, the number of *distinct* scores
`S2.score` that are greater than or equal to this score, then this would
effectively give us the ranking of `S1.score`. We could then order our result
set by `S1.score` to comply with the problem's ranking rules.

#### Algorithm

A [correlated subquery](https://dev.mysql.com/doc/refman/8.0/en/correlated-subqueries.html) can be used to do the counting referred to above.

1. For each score from the `Scores` table, select the number of distinct scores
in the `Scores` table that are greater than or equal to this score.
2. Order the result set by `score`.



#### Implementation

```sql
SELECT
  S1.score,
  (
    SELECT
      COUNT(DISTINCT S2.score)
    FROM
      Scores S2
    WHERE
      S2.score >= S1.score
  ) AS 'rank'
FROM
  Scores S1
ORDER BY
  S1.score DESC;
```


---


### Approach 3: `INNER JOIN` with `COUNT(DISTINCT ...)`

#### Intuition

The intuition for this approach is fundamentally the same as that for Approach
2, but the manner of implementation is completely different.

#### Algorithm

1. Join the `Scores` table to itself in such a manner that for each score we
get all rows having a score greater than or equal to this score.
2. Group query rows by `id` and `score` value.
3. Count the number of distinct scores greater than or equal to the score used
in the join condition (this is the ranking).
4. Order the result set by the `score` value.


#### Implementation

```sql
SELECT
  S.score,
  COUNT(DISTINCT T.score) AS 'rank'
FROM
  Scores S
  INNER JOIN Scores T ON S.score <= T.score
GROUP BY
  S.id,
  S.score
ORDER BY
  S.score DESC;
```

The solution above is effective because of how the items are *grouped* -- the
`COUNT()` aggregate works on the groupings to give us the desired results. To
more clearly see how the query above works, we can inspect the output of the
following query:

```sql
SELECT
  S.id AS S_ID,
  S.score AS S_Score,
  T.id AS T_ID,
  T.score AS T_Score
FROM
  Scores S
  INNER JOIN Scores T ON S.score <= T.score
ORDER BY
  S.id,
  T.score;
```

If we apply this query to the sample data given in the problem description,
then we will get the following result set:

```
+------+---------+------+---------+
| S_ID | S_score | T_ID | T_score |
+------+---------+------+---------+
|    1 |    3.50 |    1 |    3.50 |
|    1 |    3.50 |    2 |    3.65 |
|    1 |    3.50 |    6 |    3.65 |
|    1 |    3.50 |    4 |    3.85 |
|    1 |    3.50 |    3 |    4.00 |
|    1 |    3.50 |    5 |    4.00 |
|    2 |    3.65 |    2 |    3.65 |
|    2 |    3.65 |    6 |    3.65 |
|    2 |    3.65 |    4 |    3.85 |
|    2 |    3.65 |    3 |    4.00 |
|    2 |    3.65 |    5 |    4.00 |
|    3 |    4.00 |    3 |    4.00 |
|    3 |    4.00 |    5 |    4.00 |
|    4 |    3.85 |    4 |    3.85 |
|    4 |    3.85 |    3 |    4.00 |
|    4 |    3.85 |    5 |    4.00 |
|    5 |    4.00 |    3 |    4.00 |
|    5 |    4.00 |    5 |    4.00 |
|    6 |    3.65 |    2 |    3.65 |
|    6 |    3.65 |    6 |    3.65 |
|    6 |    3.65 |    4 |    3.85 |
|    6 |    3.65 |    3 |    4.00 |
|    6 |    3.65 |    5 |    4.00 |
+------+---------+------+---------+
```

Note how this provides us with the desired result set when we use
`COUNT(DISTINCT ...)` in conjunction with proper grouping:

```
+-------+---------+
| score | rank    |
+-------+---------+
| 4.00  | 1       |
| 4.00  | 1       |
| 3.85  | 2       |
| 3.65  | 3       |
| 3.65  | 3       |
| 3.50  | 4       |
+-------+---------+
```

- `S_ID = 1`; `S_score = 3.50`: There are `4` distinct `T_score` values
  (`3.50`, `3.65`, `3.85`, and `4.00`).
- `S_ID = 2`; `S_score = 3.65`: There are `3` distinct `T_score` values
  (`3.65`, `3.85`, and `4.00`).
- ...


---


### Conclusion

We prefer Approach 1 for a variety of reasons, most notably its simplicity,
performance, and contextual appropriateness. Few problems will call for such an
appropriate direct application of `DENSE_RANK()` as this problem. But, as noted
at the end of Approach 1, window functions are fairly recent in their arrival
on the SQL landscape, especially in regards to how they are used in modern
development environments. 

In an interview setting, Approach 1 is optimal. But it should not be a surprise
if an interviewer asked for a solution that does not rely on modern SQL tools
such as window functions. Approach 2 or Approach 3 would be appropriate
strategies in such a situtation. Approach 2 may convey a deeper understanding
of how SQL processes queries while Approach 3 may convey creativity in
problem-solving. In either case though, something positive and desirable is
being conveyed.