# 100% Concatenate Cities per State MySQL, MS SQL Server, PostgreSQL, Oracle, Pandas

**Author:** d_sushkov
**Votes:** 6
**Link:** [https://leetcode.com/problems/find-cities-in-each-state/solutions/5364168/](https://leetcode.com/problems/find-cities-in-each-state/solutions/5364168/)

---

# Intuition
To solve this problem, we need to group cities by their respective states and concatenate the city names into a single string, separated by commas. The GROUP_CONCAT function in MySQL is perfect for this task.

# Approach
1. Select State and Cities: Use the GROUP_CONCAT function to concatenate city names for each state.
2. Order Cities: Ensure cities are ordered alphabetically within the concatenated string.
3. Group and Order Results: Group the results by state and order by state in ascending order.

# Complexity
- Time complexity: O(nlogn) due to the sorting of cities within each state.

- Space complexity: O(n) for storing the intermediate results.

# Code
**MySQL**
```
# Write your MySQL query statement below
SELECT state, 
       GROUP_CONCAT(city ORDER BY city SEPARATOR ', ') AS cities
FROM cities
GROUP BY state
ORDER BY state;
```
**MS SQL Server**
```
/* Write your T-SQL query statement below */
SELECT state,
       STRING_AGG(city, ', ') WITHIN GROUP (ORDER BY city) AS cities
FROM cities
GROUP BY state
ORDER BY state;
```
**Oracle**
```
/* Write your PL/SQL query statement below */
SELECT state,
       LISTAGG(city, ', ') WITHIN GROUP (ORDER BY city) AS cities
FROM cities
GROUP BY state
ORDER BY state;
```
**PostgreSQL**
```
-- Write your PostgreSQL query statement below
SELECT state,
       STRING_AGG(city, ', ' ORDER BY city) AS cities
FROM cities
GROUP BY state
ORDER BY state;
```
**Pandas**
```
import pandas as pd

def find_cities(cities: pd.DataFrame) -> pd.DataFrame:
     # Group by state and concatenate city names
    result = cities.groupby('state')['city'].apply(lambda x: ', '.join(sorted(x))).reset_index()

    # Rename columns
    result.columns = ['state', 'cities']

    # Sort by state
    result = result.sort_values('state').reset_index(drop=True)

    return result   
```