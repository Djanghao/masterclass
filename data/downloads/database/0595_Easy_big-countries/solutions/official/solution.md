# Official Solution

**Link:** [https://leetcode.com/problems/big-countries/solution/](https://leetcode.com/problems/big-countries/solution/)

---

<!-- Don't delete this -->
[TOC]

# Solution

---

## pandas

### Approach: Filtering rows

#### Intuition

<table>
  <tr>
    <th>name</th>
    <th>continent</th>
    <th>area</th>
    <th>population</th>
    <th>gdp</th>
  </tr>
  <tr>
    <td>Afghanistan</td>
    <td>Asia</td>
    <td>652230</td>
    <td>25500100</td>
    <td>20343000000</td>
  </tr>
  <tr>
    <td>Albania</td>
    <td>Europe</td>
    <td>28748</td>
    <td>2831741</td>
    <td>12960000000</td>
  </tr>
  <tr>
    <td>Algeria</td>
    <td>Africa</td>
    <td>2381741</td>
    <td>37100000</td>
    <td>188681000000</td>
  </tr>
  <tr>
    <td>Andorra</td>
    <td>Europe</td>
    <td>468</td>
    <td>78115</td>
    <td>3712000000</td>
  </tr>
  <tr>
    <td>Angola</td>
    <td>Africa</td>
    <td>1246700</td>
    <td>20609294</td>
    <td>100990000000</td>
  </tr>
</table>

<br>
To determine whether a country is considered `big`, there are two conditions to verify, as stated in the description:

- The country must have an area of at least three million square kilometers, denoted as `area >= 3,000,000`.

- The population of the country should be a minimum of twenty-five million, expressed as `population >= 25,000,000`.

#### Algorithm

First, we apply row filtering to identify the countries that satisfy the conditions.


```python
    df = world[(world['area'] >= 3000000) | (world['population'] >= 25000000)]
```

This step filters out the rows representing countries that do not meet the conditions, leaving the remaining table as follows.

<table>
  <tr>
    <th>name</th>
    <th>continent</th>
    <th>area</th>
    <th>population</th>
    <th>gdp</th>
  </tr>
  <tr>
    <td>Afghanistan</td>
    <td>Asia</td>
    <td>652230</td>
    <td>25500100</td>
    <td>20343000000</td>
  </tr>
  <tr>
    <td>Algeria</td>
    <td>Africa</td>
    <td>2381741</td>
    <td>37100000</td>
    <td>188681000000</td>
  </tr>
</table>


<br>

Noting that the table has five columns, we need to return three columns according to the requirements of the problem. Thus the next step is returning the three required columns with the relative order as: `name`, `population`, and `area`.

```python
    df = df[['name', 'population', 'area']]
```

<table>
  <tr>
    <th>name</th>
    <th>population</th>
    <th>area</th>
  </tr>
  <tr>
    <td>Afghanistan</td>
    <td>25500100</td>
    <td>652230</td>
  </tr>
  <tr>
    <td>Algeria</td>
    <td>37100000</td>
    <td>2381741</td> 
  </tr>
</table>
 
<br>

#### Implementation

<iframe src="https://leetcode.com/playground/3C3wJk4h/shared" frameBorder="0" width="100%" height="140" name="3C3wJk4h"></iframe>

<br>

---

## Database

<!-- h3 for approaches -->
### Approach: Filtering rows using `WHERE`

<!-- h4 for sections -->
#### Algorithm

To determine whether a country is considered `big`, there are two conditions to verify, as stated in the description:

- The country must have an area of at least three million square kilometers, denoted as `area >= 3,000,000`.

- The population of the country should be a minimum of twenty-five million, expressed as `population >= 25,000,000`.


```sql
SELECT 
    * 
FROM 
    world 
WHERE 
    area >= 3000000 
    OR population >= 25000000
```

<br>

Noting that we need to return three columns according to the requirements of the problem. Thus the next step is selecting the three required columns with the relative order as: `name`, `population`, and `area`. The complete answer is as follows.

```sql
SELECT
    name, population, area
FROM
    world
WHERE
    area >= 3000000 OR population >= 25000000
;
```