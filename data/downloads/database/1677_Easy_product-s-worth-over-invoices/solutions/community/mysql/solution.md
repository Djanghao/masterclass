# MYSQL: LEFT JOIN + IFNULL(SUM()) + GROUP BY.  Good Luck 👍✨

**Author:** ashlyjoseph
**Votes:** 3
**Link:** [https://leetcode.com/problems/products-worth-over-invoices/solutions/2393950/](https://leetcode.com/problems/products-worth-over-invoices/solutions/2393950/)

---

```
# Write your MySQL query statement below
/**

Two Table: Product/Invoice
product_id is the primary key for Product table.
This table contains the ID and the name of Product product.

invoice_id is the primary key for Invoice table and the id of this invoice.

PROBLEM: SQL query that will, for all products, return each product name with the total amount due, paid, canceled, and refunded across all invoices.

STEPS:
    GROUP BY product_id
    IFNULL(SUM(),0) of all field (rest,paid,canceled,refunded)
    LEFT JOIN Product.product_id = Invoice.product_id
*/

SELECT 
    P.name,
    IFNULL(SUM(rest),0) AS rest,
    IFNULL(SUM(paid),0) AS paid,
    IFNULL(SUM(canceled),0) AS canceled,
    IFNULL(SUM(refunded),0) AS refunded   
FROM Product P
LEFT JOIN Invoice I
ON P.product_id = I.product_id
GROUP BY P.product_id
ORDER BY 1
```