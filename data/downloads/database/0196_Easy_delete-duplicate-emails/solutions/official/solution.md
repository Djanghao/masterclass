# Official Solution

**Link:** [https://leetcode.com/problems/delete-duplicate-emails/solution/](https://leetcode.com/problems/delete-duplicate-emails/solution/)

---

<!-- Don't delete this -->
[TOC]

# Solution

---

## pandas


### Approach: Grouping

#### Algorithm
The requirement is to keep only the smallest `id` for each unique email. Naturally, we think of using the `groupby` method to achieve this. `person.groupby('email')` will group the `person` by the unique values in the `email` column. We divide `person` into multiple groups based on the unique values in the `email` column. This grouping allows us to group together rows with the same `email` so that we can operate on each group separately.

We want to find the minimum `id` value within each group to retain the rows with the smallest `id`. To achieve this, we use the `transform('min')` method to generate a new series for each group, containing the minimum values from the `id` column within each respective group.


```python
min_id = person.groupby('email')['id'].transform('min')
```

This gives us a Series with the same length as the original DataFrame `person`, where each value represents the minimum `id` value within its corresponding group.

```
0    1
1    2
2    1
Name: id, dtype: int64
```

<br>

Next, we can select the rows whose `id` is not the minimum `id` within their corresponding group:

```python
removed_person = person[person['id'] != min_id]
```
We will have the following DataFrame `removed_person`:

<table>
  <thead>
    <tr>
      <th>id</th>
      <th>email</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>3</td>
      <td>john@example.com</td>
    </tr>
  </tbody>
</table>

<br>

Note that we are asked to modify `person` in-place. Therefore, we can use the `drop` method with `inplace=True` to remove all rows based on the index values provided by `removed_person.index`. The complete code is as follows:

#### Implementation

<iframe src="https://leetcode.com/playground/PCXVqnLP/shared" frameBorder="0" width="100%" height="174" name="PCXVqnLP"></iframe> 


We can expect `person` to look like this.

<table>
  <thead>
    <tr>
      <th>id</th>
      <th>email</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>john@example.com</td>
    </tr>
    <tr>
      <td>2</td>
      <td>bob@example.com</td>
    </tr>
  </tbody>
</table>




<br>


---

## Database


### Approach: Using `DELETE` and `WHERE` clause

#### Algorithm

By joining this table with itself on the *Email* column, we can get the following code.
```sql
SELECT p1.*
FROM person p1,
    person p2
WHERE
    p1.Email = p2.Email
;
```



Then we need to find the bigger id having same email address with other records. So we can add a new condition to the `WHERE` clause like this.

```sql
SELECT p1.*
FROM person p1,
    person p2
WHERE
    p1.Email = p2.Email AND p1.Id > p2.Id
;
```

As we already get the records to be deleted, we can alter this statement to `DELETE` in the end.

#### Implementation

```sql
DELETE p1 FROM person p1,
    person p2
WHERE
    p1.Email = p2.Email AND p1.Id > p2.Id
```