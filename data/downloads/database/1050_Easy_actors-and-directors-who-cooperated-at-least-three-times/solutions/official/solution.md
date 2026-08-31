# Official Solution

**Link:** [https://leetcode.com/problems/actors-and-directors-who-cooperated-at-least-three-times/solution/](https://leetcode.com/problems/actors-and-directors-who-cooperated-at-least-three-times/solution/)

---

<!-- Don't delete this -->
[TOC]

# Solution

---

## pandas

### Approach: Group By and Count

#### Intuition

In pandas, we can use the `.groupby` function on the `'actor_id'` and `'director_id'` columns and then count the number of instances per group using the `.size()` function. We then filter out the groups that have a count of at least `3`.

#### Algorithm

To solidify the intuition behind the algorithm, let's first look at an example:

The original table `actor_director`:

<table>
    <tr>
        <th>actor_id</th>
        <th>director_id</th>
        <th>timestamp</th>
    </tr>
    <tr>
        <td>1</td>
        <td>1</td>
        <td>0</td>
    </tr>
    <tr>
        <td>1</td>
        <td>1</td>
        <td>1</td>
    </tr>
    <tr>
        <td>1</td>
        <td>1</td>
        <td>2</td>
    </tr>
    <tr>
        <td>1</td>
        <td>2</td>
        <td>3</td>
    </tr>
    <tr>
        <td>1</td>
        <td>2</td>
        <td>4</td>
    </tr>
    <tr>
        <td>2</td>
        <td>1</td>
        <td>5</td>
    </tr>
    <tr>
        <td>2</td>
        <td>1</td>
        <td>6</td>
    </tr>
</table>

<br>

The following table is obtained by grouping `actor_id` and `director_id`, and then filtered to include only those groups with a count of at least 3.

<table>
    <tr>
        <th>actor_id</th>
        <th>director_id</th>
    </tr>
    <tr>
        <td>1</td>
        <td>1</td>
    </tr>
</table>


<br>

Note that the returned DataFrame contains only the `actor_id` and `director_id` columns.

#### Implementation

```python3
import pandas as pd

def actors_and_directors(actor_director: pd.DataFrame) -> pd.DataFrame:
    cnts = actor_director.groupby(['actor_id', 'director_id']).size().reset_index(name='counts')
    return cnts[cnts['counts'] >= 3][['actor_id', 'director_id']]
```

<br>

---


## Database

### Approach: Group By and Count

#### Intuition

In SQL, the query to find the actor-director pairs that have cooperated at least three times involves grouping by the `actor_id` and `director_id` and then filtering out the pairs that have a count of at least 3.

#### Algorithm

To solidify the intuition behind the algorithm, let's first look at an example:

The original table `ActorDirector`:

<table>
    <tr>
        <th>actor_id</th>
        <th>director_id</th>
        <th>timestamp</th>
    </tr>
    <tr>
        <td>1</td>
        <td>1</td>
        <td>0</td>
    </tr>
    <tr>
        <td>1</td>
        <td>1</td>
        <td>1</td>
    </tr>
    <tr>
        <td>1</td>
        <td>1</td>
        <td>2</td>
    </tr>
    <tr>
        <td>1</td>
        <td>2</td>
        <td>3</td>
    </tr>
    <tr>
        <td>1</td>
        <td>2</td>
        <td>4</td>
    </tr>
    <tr>
        <td>2</td>
        <td>1</td>
        <td>5</td>
    </tr>
    <tr>
        <td>2</td>
        <td>1</td>
        <td>6</td>
    </tr>
</table>

<br>

The following table is obtained by grouping `actor_id` and `director_id`, and then filtered to include only those groups with a count of at least 3.

<table>
    <tr>
        <th>actor_id</th>
        <th>director_id</th>
    </tr>
    <tr>
        <td>1</td>
        <td>1</td>
    </tr>
</table>


<br>

Note that we only select the `actor_id` and `director_id` columns.

#### Implementation

```sql
SELECT actor_id, director_id
FROM ActorDirector
GROUP BY actor_id, director_id
HAVING COUNT(timestamp) >= 3;
```