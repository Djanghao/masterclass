# Official Solution

**Link:** [https://leetcode.com/problems/sellers-with-no-sales/solution/](https://leetcode.com/problems/sellers-with-no-sales/solution/)

---

[TOC]

## Solution

--- 

### Overview

This is a typical "**not in**" problem (more commonly known as a left anti-join in SQL), where we want to retrieve all records from Table A that are **not in** Table B. There are three different approaches to address it. We will introduce them one by one, starting from the simplest to the most complex.

---

### Approach 1: Not in/Exists in the Subquery

#### Intuition
The most straightforward way to solve this type of problem is to use a subquery to `SELECT` the unwanted group (sellers who had sales in the year 2020) and then, `SELECT` all other sellers in the main query, ensuring that the names in the subquery result are excluded using `NOT IN` or `NOT EXISTS`.  

#### Algorithm

1. In the subquery, `SELECT` the unwanted group, which consists of the sellers who had sales in the year 2020.
2. In the main query, `SELECT` all sellers, and use `NOT IN` or `NOT EXISTS` to exclude names in the subquery from the main query
3. `ORDER` the output by the `seller_name` as required.

#### Implementation

##### MySQL
Step 1: subquery
```sql
SELECT 
    DISTINCT seller_id
FROM 
    Orders
WHERE 
    YEAR(sale_date) = 2020
```

<br>

Steps 2-4: main query 
```sql 
SELECT 
    seller_name
FROM 
    Seller s
WHERE 
    s.seller_id NOT IN (SELECT 
                            DISTINCT seller_id
                        FROM 
                            Orders
                        WHERE 
                            YEAR(sale_date) = 2020)
ORDER BY 1 ASC
```

<br>

---

### Approach 2: Left Join then Exclude the Matching Record.

#### Intuition
Since the unwanted group (sellers who had sales in the year 2020) is a subset of the main group (all sellers), we can use a `LEFT JOIN` to combine the main group (left table) and the unwanted group (right table), which returns `NULL` for the right table's columns when there's no match. Subsequently, we can apply the `WHERE` clause to filter out the rows where the unwanted group's join column is `NULL`. In this way, we remove the overlap, the unwanted group, from the main group to get the expected result.

#### Algorithm

1. In the subquery, `SELECT` the unwanted group, which consists of the sellers who had sales in the year 2020.
2. Have the table `Seller` `LEFT JOIN` the table from the subquery.
3. Use the `WHERE` clause to exclude the names having the subquery's id as `NULL`.
4. `ORDER` the resulting table by the `seller_name`.

#### Implementation

##### MySQL
```sql
SELECT 
    seller_name
FROM 
    Seller a
LEFT JOIN 
    (SELECT 
        DISTINCT seller_id
    FROM 
        Orders
    WHERE 
        YEAR(sale_date) = 2020) b
ON 
    a.seller_id = b.seller_id
WHERE 
    b.seller_id IS NULL 
ORDER BY 1 ASC
```
----

### Approach 3: Flag Records by `HAVING` or `CASE WHEN`

#### Intuition
Another way to remove unwanted records is to flag them and subsequently remove them from all records. There are different ways to do this, but the underlying principle remains consistent across different methods: if a seller has at least one sale record in the year 2020, the seller should be excluded from the final output. Here, we use `CASE WHEN` and `HAVING` to achieve this. 

#### Algorithm for HAVING

1. Have the table of all sellers `LEFT JOIN` the table of the unwanted group.
2. `GROUP` the records by `seller_id`.
3. `SELECT` the `seller_name` for the final output.
4. Use the filtering condition `HAVING` to select the sellers with a value of 0 (have no `sale_date` in 2020).
5. `ORDER` the resulting table by `seller_name`.

#### Implementation

##### MySQL
```sql
SELECT 
    seller_name
FROM 
    Seller s
LEFT JOIN 
    Orders o
ON 
    s.seller_id = o.seller_id
GROUP BY 
    s.seller_id
HAVING 
    SUM(IFNULL(YEAR(sale_date)='2020',0)) = 0
ORDER BY 1 ASC
```
#### Algorithm for CASE WHEN

1. In the subquery, `LEFT JOIN` the two tables to get all sales records(`LEFT JOIN` will make sure even the sellers without any sale records will be included), and `GROUP` the result by each `seller_id` so we will have only one record for each seller
2. In the subquery, create a flag for each seller so that only sellers without any sale records in the year 2020 will be flagged as 0.
3. In the main query, `SELECT` the `seller_name` for the final output, and use `WHERE` clause so that only sellers with `flag = 0` are included in the final output.
4. `ORDER` the resulting table by `seller_name`.

Steps 1-2
```sql
SELECT 
    seller_name, 
    SUM(CASE WHEN YEAR(sale_date) ='2020' THEN 1 ELSE 0 END) AS flag
FROM 
    Seller s
LEFT JOIN 
    Orders o
ON 
    s.seller_id = o.seller_id
GROUP BY    
    s.seller_id
```

Steps 3-4
```sql
SELECT 
    seller_name
FROM (
    SELECT 
        seller_name, 
        SUM(CASE WHEN YEAR(sale_date) ='2020' THEN 1 ELSE 0 END) AS flag
    FROM 
        Seller s
    LEFT JOIN 
        Orders o
    ON 
        s.seller_id = o.seller_id
    GROUP BY 
        s.seller_id
)t0
WHERE 
    flag=0
ORDER BY 1 ASC
```

### Conclusion

The third method might be a stretch for an interview but is very helpful when dealing with complicated dataset and requests. 

----