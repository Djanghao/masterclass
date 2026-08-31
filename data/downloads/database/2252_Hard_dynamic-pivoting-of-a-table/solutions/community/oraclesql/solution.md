# [Oracle] Learn how to write Static PIVOT first, then use Dynamic SQL and LISTAGG

**Author:** adigo
**Votes:** 3
**Link:** [https://leetcode.com/problems/dynamic-pivoting-of-a-table/solutions/2092427/](https://leetcode.com/problems/dynamic-pivoting-of-a-table/solutions/2092427/)

---

The first thing we need to know is how to write the static query with PIVOT.

For the given example table, the static PIVOT statement for generating the correct result is below,
```
select * from Products PIVOT ( SUM(price) FOR store in ('LC_Store' AS LC_Store, 'Nozama' AS Nozama, 'Shop' AS Shop, 'Souq' AS Souq))
```
Note that we need to give it an alias to prevent the column name from including single quotes.

The next step is to learn how to dynamically generate the column names. We can use `LISTAGG` for this purpose.

So the resulting code would be
```
CREATE FUNCTION PivotProducts
RETURN SYS_REFCURSOR IS result SYS_REFCURSOR;
v_stores VARCHAR2 (32767);
l_sql varchar2(32767);
BEGIN
    /* Write your PL/SQL query statement below */
    select LISTAGG('''' || store || ''' AS ' || store, ',') WITHIN GROUP (ORDER BY store) into v_stores from (select distinct store from Products);
    l_sql := 'select *  from Products PIVOT ( SUM(price) FOR store in (' || v_stores || '))';
    open result for l_sql;
    RETURN result;
END;
```