# SIMPLE | Explanation | EASY

**Author:** babasaheb256
**Votes:** 889
**Link:** [https://leetcode.com/problems/group-sold-products-by-the-date/solutions/2139850/](https://leetcode.com/problems/group-sold-products-by-the-date/solutions/2139850/)

---

**<<<< Please Press upvote Button !!!!!**

Almost immediately detected, the only serious challange of this problem is how to aggregate the product names in one cell. In MySql, this can be done using GROUP_CONCAT, in which you can also specify the sorting mechanism for the group concatenation (aggregation). The rest is simple.
```
select sell_date, count( DISTINCT product ) as num_sold ,
    
    GROUP_CONCAT( DISTINCT product order by product ASC separator ',' ) as products
    
        FROM Activities GROUP BY sell_date order by sell_date ASC;

```
![image](./images/0.jpeg)
