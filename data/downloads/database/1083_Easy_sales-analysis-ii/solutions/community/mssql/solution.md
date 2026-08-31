# Simple solutions mysql mssql oracle

**Author:** supertutu2
**Votes:** 5
**Link:** [https://leetcode.com/problems/sales-analysis-ii/solutions/989826/](https://leetcode.com/problems/sales-analysis-ii/solutions/989826/)

---

MySQL
```
Select s.buyer_id from Sales s
left join Product p
on s.product_id = p.product_id
group by s.buyer_id
having group_concat(distinct p.product_name) like '%S8%' and group_concat(distinct p.product_name) not like '%iPhone%'
```

MSSQL
```
Select s.buyer_id from Sales s
left join Product p
on s.product_id = p.product_id
group by s.buyer_id
having string_agg(p.product_name,',') like '%S8%' and string_agg(p.product_name,',') not like '%iPhone%'
```

Oracle
```
Select s.buyer_id from Sales s
left join Product p
on s.product_id = p.product_id
group by s.buyer_id
having listagg(p.product_name, ',') within group(order by p.product_name) like '%S8%' and listagg(p.product_name, ',') within group(order by p.product_name) not like '%iPhone%'
```
