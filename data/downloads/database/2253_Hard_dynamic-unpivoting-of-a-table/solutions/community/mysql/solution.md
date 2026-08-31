# MySQL - dynamically unpivot table

**Author:** focker
**Votes:** 4
**Link:** [https://leetcode.com/problems/dynamic-unpivoting-of-a-table/solutions/2856713/](https://leetcode.com/problems/dynamic-unpivoting-of-a-table/solutions/2856713/)

---

# Intuition
Inspired by solution [1981948](https://leetcode.com/problems/dynamic-pivoting-of-a-table/solutions/1981948/mysql-using-group-concat/) for the related problem [dynamic pivoting](https://leetcode.com/problems/dynamic-pivoting-of-a-table/description/)

For getting the price per store, we will have to combine several queries, which require column names (the store names) as input

# Approach
1. Break the problem into individual queries

If we only wanted to get the prices for the products in one store, e.g., LC_Store, we could use the following query:
```
SELECT product_id, "LC_Store" AS store, LC_Store AS price
FROM Products
WHERE LC_Store IS NOT NULL
```
2. Combine queries dynamically
    1. An individual query can be constructed if we know the store's name - replace LC_Store with the variable
    2. We can get the store names (the column names) from the table's meta information - these are the *COLUMN_NAMEs* from *INFORMATION_SCHEMA.COLUMNS*; make sure to ignore the "product_id" column
    3. The individual query can be combined using GROUP_CONCAT and " UNION " as a separator
    4. Increase the max length allowed for GROUP_CONCAT

# Code
```
CREATE PROCEDURE UnpivotProducts()
BEGIN
    SET SESSION group_concat_max_len = 1000000;
    SET @case_stmt = NULL;

	SELECT GROUP_CONCAT(
            'SELECT product_id, "', COLUMN_NAME, '" AS store, ', COLUMN_NAME, ' AS price FROM Products WHERE ', COLUMN_NAME,' IS NOT NULL' SEPARATOR " UNION "
        )
    INTO @case_stmt
    FROM INFORMATION_SCHEMA.COLUMNS
    WHERE TABLE_NAME="Products" AND COLUMN_NAME != "product_id";

    SET @sql_query = @case_stmt;

    PREPARE final_sql_query FROM @sql_query;
    EXECUTE final_sql_query;
    DEALLOCATE PREPARE final_sql_query;

END

```