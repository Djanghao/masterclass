# 🌟 PostgreSQL solution

**Author:** MathieuSoysal
**Votes:** 12
**Link:** [https://leetcode.com/problems/list-the-products-ordered-in-a-period/solutions/5018989/](https://leetcode.com/problems/list-the-products-ordered-in-a-period/solutions/5018989/)

---

# Code
```
SELECT product_name, SUM(unit) AS unit
FROM Orders AS o
INNER JOIN Products
USING(product_id)
WHERE TO_CHAR(order_date, 'YYYY-MM') = '2020-02'
GROUP BY product_id, product_name
HAVING SUM(unit) >= 100;
```
If it was useful don't hesitate to upvote \uD83C\uDF20
![Upvote invitation](./images/0.png)