# An Oracle solution

**Author:** yucan29
**Votes:** 0
**Link:** [https://leetcode.com/problems/dynamic-unpivoting-of-a-table/solutions/5881174/](https://leetcode.com/problems/dynamic-unpivoting-of-a-table/solutions/5881174/)

---

```
CREATE FUNCTION UnpivotProducts
RETURN SYS_REFCURSOR IS result SYS_REFCURSOR;
    v_sql varchar2(4000);
    v_columns varchar2(3000);
BEGIN
    for r in (select column_name from USER_TAB_COLUMNS where table_name='PRODUCTS' order by column_id )
    loop
        if(upper(replace(r.column_name,'"'))<>'PRODUCT_ID') then
            v_columns := v_columns || '"' || r.column_name || '"' || ', ';
        end if;
        
    end loop;
    
    v_columns := rtrim(v_columns,', ');    

    v_sql:=
       'select 
          * 
        from PRODUCTS
        unpivot
        (
            price 
            for store in
            (' 
                 ||  v_columns ||
            ')
    )        
    order by 
        1';       
    
    open result for v_sql;

    RETURN result;
END;
```