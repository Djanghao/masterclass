# SQL Server Dynamic Unpivot Solution

**Author:** Xing13682047257
**Votes:** 4
**Link:** [https://leetcode.com/problems/dynamic-unpivoting-of-a-table/solutions/1981170/](https://leetcode.com/problems/dynamic-unpivoting-of-a-table/solutions/1981170/)

---

1. Build @sql_col by selecting all the column names in Products table using cte. eg: [LC_Store],[Nozama],[Shop],[Souq].
2. Build @sql_str using UNPIVOT function with column names generated in step 1. eg: SELECT * FROM Products UNPIVOT (price FOR store IN ([LC_Store],[Nozama],[Shop],[Souq])) AS unpvt.
3. Execute @sql_str.

```
CREATE PROCEDURE UnpivotProducts AS
BEGIN
    DECLARE @sql_col NVARCHAR(MAX);
    WITH Cols AS (
        SELECT NAME FROM SYSCOLUMNS 
        WHERE ID IN (SELECT ID FROM SYSOBJECTS WHERE NAME = 'Products')
        AND NAME <> 'product_id'
    )

    SELECT @sql_col = ISNULL(@sql_col + ',', '') + QUOTENAME(NAME) FROM Cols GROUP BY NAME
	
    DECLARE @sql_str NVARCHAR(MAX);
    SET @sql_str = '
    SELECT * FROM Products
    UNPIVOT (
        price FOR store IN ('+ @sql_col +')
    ) AS unpvt'

    EXEC (@sql_str)    
END
```