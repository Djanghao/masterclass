# Official Solution

**Link:** [https://leetcode.com/problems/combine-two-tables/solution/](https://leetcode.com/problems/combine-two-tables/solution/)

---

[TOC]

# Solution
---

## pandas

### Approach 1: Using `merge`

**Visualization of approach 1**

![fig](../Figures/175/175-1.png)

#### Intuition

Let's breakdown the steps given the following input DataFrames:

`person`:
<table>
  <tr>
    <th>personId</th>
    <th>lastName</th>
    <th>firstName</th>
  </tr>
  <tr>
    <td>1</td>
    <td>Wang</td>
    <td>Allen</td>
  </tr>
  <tr>
    <td>2</td>
    <td>Alice</td>
    <td>Bob</td>
  </tr>
</table>
<br>

`address`:
<table>
  <tr>
    <th>addressId</th>
    <th>personId</th>
    <th>city</th>
    <th>state</th>
  </tr>
  <tr>
    <td>1</td>
    <td>2</td>
    <td>New York City</td>
    <td>New York</td>
  </tr>
  <tr>
    <td>2</td>
    <td>3</td>
    <td>Leetcode</td>
    <td>California</td>
  </tr>
</table>
<br>

1. **Merging the DataFrames**
   
   ```python
   result = pd.merge(person, address, on='personId', how='left')
   ```
   In this step, we are merging the `person` and `address` dataframes using a left join operation with the `pd.merge()` function. Here:
   - `on='personId'` specifies that we are using the 'personId' column as the key for merging the data. This column is present in both dataframes, and it holds unique identifiers for the individuals.
   - `how='left'` specifies that we are performing a left join, meaning all the records from the `person` dataframe (the left dataframe) will be retained, and the matching records from the `address` dataframe (the right dataframe) will be merged where the 'personId' values match. If a 'personId' from the `person` dataframe does not have a matching 'personId' in the `address` dataframe, the 'city' and 'state' columns for that record will contain Null values (representing missing data).

<table>
  <tr>
    <th>personId</th>
    <th>lastName</th>
    <th>firstName</th>
    <th>addressId</th>
    <th>city</th>
    <th>state</th>
  </tr>
  <tr>
    <td>1</td>
    <td>Wang</td>
    <td>Allen</td>
    <td>Null</td>
    <td>Null</td>
    <td>Null</td>
  </tr>
  <tr>
    <td>2</td>
    <td>Alice</td>
    <td>Bob</td>
    <td>1.0</td>
    <td>New York City</td>
    <td>New York</td>
  </tr>
</table>
<br>

2. **Selecting Relevant Columns**

   ```python
   result = result[['firstName', 'lastName', 'city', 'state']]
   ```
   In this step, we select only the columns that we are interested in for the final output. Since the merging operation can potentially bring in other columns from the `address` dataframe, we are explicitly selecting only the 'firstName', 'lastName', 'city', and 'state' columns to be in our final result. This helps in maintaining a clean and focused dataset which contains only the information we are interested in.

<table>
  <tr>
    <th>firstName</th>
    <th>lastName</th>
    <th>city</th>
    <th>state</th>
  </tr>
  <tr>
    <td>Allen</td>
    <td>Wang</td>
    <td>Null</td>
    <td>Null</td>
  </tr>
  <tr>
    <td>Bob</td>
    <td>Alice</td>
    <td>New York City</td>
    <td>New York</td>
  </tr>
</table>
<br>

In summary, this script is taking two separate dataframes and merging them into a single dataframe where each row represents a person and contains their first name, last name, city, and state. This is done using the person's unique identifier to correctly match each person with their address. It's a common operation when you want to bring together information from different sources into a unified view.

#### Implementation

<iframe src="https://leetcode.com/playground/XRUKdTyk/shared" frameBorder="0" width="100%" height="174" name="XRUKdTyk"></iframe>


---

## Database

### Approach 1: Using `outer join`

#### Intuition

Since the *PersonId* in table **Address** is the foreign key of table **Person**, we can join these two tables to get the address information of a person.

Considering there might be no address information for every person, we should use `outer join` instead of the default `inner join`.

#### Implementation

> Note: For MySQL, an `outer join` is performed either using `left join` or `right join`. 


```sql
select FirstName, LastName, City, State
from Person left join Address
on Person.PersonId = Address.PersonId
;
```

> Note: Using the `where` clause to filter the records will fail if there is no address information for a person because it will not display the name information.