# Simple In-Depth explanation of WHERE and IS NULL!!

**Author:** kshitijarora96
**Votes:** 347
**Link:** [https://leetcode.com/problems/market-analysis-i/solutions/2319471/](https://leetcode.com/problems/market-analysis-i/solutions/2319471/)

---

SELECT u.user_id as buyer_id, u.join_date, count(o.order_id) as 'orders_in_2019'
FROM users u
LEFT JOIN Orders o
ON o.buyer_id=u.user_id AND YEAR(order_date)='2019'
GROUP BY u.user_id


Q) Why is there no need to check for ISNULL here?
Because,
* FROM statement says select all rows of 'User' table
* LEFT JOIN say s!elect only those rows of 'Orders' table where buyer_id = user_id AND the Year of Order_Date is 2019, 
* Now, when we do a COUNT then it returns non-null values and if all values are null then it returns 0, thus NULL would never be returned.

Q) Why can't we use WHERE Year is 2019 here?
Because, SQL query is executed in following order:
1. FROM 
2.  WHERE
3.  GROUP BY 
4.  HAVING 
5.  SELECT 
6.  ORDER BY ,
so, it removes the records for which no orders were placed in 2019 way before you can perform a GROUP BY or SELECT(COUNT).