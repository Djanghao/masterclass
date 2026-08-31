# MySQL Using GROUP_CONCAT

**Author:** nuya
**Votes:** 17
**Link:** [https://leetcode.com/problems/dynamic-pivoting-of-a-table/solutions/1987715/](https://leetcode.com/problems/dynamic-pivoting-of-a-table/solutions/1987715/)

---

To pivot a table, the query looks like this:
```
SELECT
  product_id,
  SUM(IF(store = 'store1', price, NULL)) AS store1,
  SUM(IF(store = 'store2', price, NULL)) AS store2,
  SUM(IF(store = 'store3', price, NULL)) AS store3,
  SUM(IF(store = 'store4', price, NULL)) AS store4,
  SUM(IF(store = 'store5', price, NULL)) AS store5
FROM
  Products p
GROUP BY
  product_id;
  ```
  
Now we convert it to use store as a parameter:


```
CREATE PROCEDURE PivotProducts()
BEGIN
	# Write your MySQL query statement below.
    SET group_concat_max_len = 1000000; #This is tricky. There's a length limit on GROUP_CONCAT.
    SET @sql = NULL;
    SELECT
    GROUP_CONCAT(DISTINCT CONCAT(
      'SUM(IF(store = "', store, '", price, null)) AS ', store) ORDER BY store ASC)
    INTO @sql
    FROM Products;

    SET @sql = CONCAT('SELECT product_id, ', @sql, ' FROM Products GROUP BY product_id');
    

    PREPARE stmt FROM @sql;
    EXECUTE stmt;
    DEALLOCATE PREPARE stmt;
END
```

@sql can be printed out using `SELECT @sql;`

For the sample test case, @sql is:
```
"SELECT product_id, SUM(IF(store = \"LC_Store\", price, null)) AS LC_Store,SUM(IF(store = \"Nozama\", price, null)) AS Nozama,SUM(IF(store = \"Shop\", price, null)) AS Shop,SUM(IF(store = \"Souq\", price, null)) AS Souq FROM Products GROUP BY product_id"
```