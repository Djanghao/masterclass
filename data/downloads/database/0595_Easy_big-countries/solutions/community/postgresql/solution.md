# ✅3/50 | All SQL50 Explained

**Author:** Piotr_Maminski
**Votes:** 7
**Link:** [https://leetcode.com/problems/big-countries/solutions/5833881/](https://leetcode.com/problems/big-countries/solutions/5833881/)

---


```mysql [MySQL]
SELECT 
    name
    ,population
    ,area
FROM World
WHERE area >= 3000000 OR population >= 25000000
;
```
```mssql [MS SQL Server]
SELECT 
    name
    ,population
    ,area
FROM World
WHERE area >= 3000000 OR population >= 25000000
;
```
```oraclesql [Oracle]
SELECT 
    name
    ,population
    ,area
FROM World
WHERE area >= 3000000 OR population >= 25000000
;
```
```postgresql [PostgreSQL]
SELECT 
    name
    ,population
    ,area
FROM World
WHERE area >= 3000000 OR population >= 25000000
;
```
```pythondata [Pandas]
import pandas as pd

def big_countries(world: pd.DataFrame) -> pd.DataFrame:
    return world[
        (world['area'] >= 3_000_000) | (world['population'] >= 25_000_000)
    ][['name', 'population', 'area']]
```

# Explained

- **WHERE area >= 3000000 OR population >= 25000000**
The **WHERE** clause is used to filter records based on specified conditions. Here, it filters the rows to include only those where either:
The area column has a value greater than or equal to 3,000,000 (indicating the country has a large area), or
The population column has a value greater than or equal to 25,000,000 (indicating the country has a large population).
The **OR** operator ensures that a row is included if either of the conditions is true.
# Order of Execution 

**FROM** World > **WHERE** area >= 3000000 OR population >= 25000000 > **SELECT** name, population, area

![image.png](./images/0.png)
![image.png](./images/1.png)
