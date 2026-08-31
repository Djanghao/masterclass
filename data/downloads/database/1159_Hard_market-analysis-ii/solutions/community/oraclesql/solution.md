# Easy Solution Using Rank

**Author:** TarunGrover6995
**Votes:** 1
**Link:** [https://leetcode.com/problems/market-analysis-ii/solutions/2135682/](https://leetcode.com/problems/market-analysis-ii/solutions/2135682/)

---

WITH cte AS
(SELECT seller_id, item_brand FROM (SELECT seller_id, item_brand, RANK() OVER (PARTITION BY seller_id ORDER BY 
order_date) Rank FROM Orders NATURAL JOIN Items) WHERE Rank = 2)

SELECT U.user_id seller_id, CASE WHEN U.favorite_brand = C.item_brand THEN 'yes' ELSE 'no' END AS "2nd_item_fav_brand" FROM Users U LEFT JOIN cte C ON (U.user_id = C.seller_id)