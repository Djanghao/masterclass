# Pandas ABSOLUTELY 100% beating easy solution! + SQL query. All beginner friendly!

**Author:** heir-of-god
**Votes:** 19
**Link:** [https://leetcode.com/problems/combine-two-tables/solutions/3919364/](https://leetcode.com/problems/combine-two-tables/solutions/3919364/)

---

# Intuition
I love pandas and its simplicity)
# Approach
We use the pandas "merge" function and combine two tables based on the left (person) by person IDs, if there is no such ID in the second table, then pandas will put "Null" value for us.


![Leercode 100% beating.png](./images/0.png)

Upvote please, if you like my solution, thanks <3
# Code Pandas
```
import pandas as pd

def combine_two_tables(person: pd.DataFrame, address: pd.DataFrame) -> pd.DataFrame:
    return pd.merge(left=person, right=address, how='left', on='personId')[['firstName', 'lastName', 'city', 'state']]
```
# SQL query
```
# Write your MySQL query statement below
SELECT firstName, lastName, city, state FROM Person p LEFT OUTER JOIN Address a ON p.personId = a.personId
```
