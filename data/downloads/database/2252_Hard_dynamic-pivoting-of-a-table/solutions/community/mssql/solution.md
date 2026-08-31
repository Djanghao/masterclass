# SQL SERVER Dynamic Pivot

**Author:** butlerc9
**Votes:** 9
**Link:** [https://leetcode.com/problems/dynamic-pivoting-of-a-table/solutions/1981865/](https://leetcode.com/problems/dynamic-pivoting-of-a-table/solutions/1981865/)

---

#### INPUT TABLES:
PRODUCTS - List of the price of each product in each store

#### QUESTION:
Pivot the stores as columns and keep the price as values 

#### NOTES:
Maximum of 30 stores --> max 30 data columns

#### METHOD:
STEP 1 - Declare 2 text variables to store your query and pivoted column names. The number of columns is important here because if you have too many columns you could reach the size of the NVARCHAR data type if you set it at say 255.
STEP 2 - Use the string aggregation function to create a list of all columns you wish to pivot. This particular step would be prone to many bugs in the real world and also keep in mind that the way it is written here would be vunerable to SQL-injection attacks.
STEP 3 - When setting the @query variable the @store_columns is inserted into the values section of the pivot. At the point the full query is written with all of our desired pivot columns.
STEP 4 - Finally execute the query.

# Code

	CREATE PROCEDURE PivotProducts AS
	BEGIN

	-- Declaration of variables
	DECLARE @query AS NVARCHAR(MAX)
	DECLARE @store_columns AS NVARCHAR(MAX)

	-- Setting store_columns e.g. @store_columns = LC_store,Nozama,Shop,Souq
	SET @store_columns = (SELECT STRING_AGG(store,',') FROM (SELECT DISTINCT store FROM products) AS temp)

	-- Setting query to be executed and insterting the store columns

	SET @query = '

		SELECT 
			product_id,
			' + @store_columns + '
		FROM
			(SELECT product_id, store, price FROM products) AS src

		PIVOT

		(
				SUM(price)
			FOR
				store
			IN 
				(  ' + @store_columns + ')


		) AS pvt
	'

	-- execute the query
	exec(@query)


	END