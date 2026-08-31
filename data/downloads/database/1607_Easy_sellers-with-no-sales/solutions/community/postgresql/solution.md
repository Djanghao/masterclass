# CHECK THIS SUPER EASY SOLUTION!!!!!!!!!!

**Author:** ravishankar324
**Votes:** 1
**Link:** [https://leetcode.com/problems/sellers-with-no-sales/solutions/5582777/](https://leetcode.com/problems/sellers-with-no-sales/solutions/5582777/)

---



# Code
```
-- Write your PostgreSQL query statement below
SELECT seller_name 
FROM Seller
WHERE seller_id NOT IN (SELECT DISTINCT seller_id
                FROM Orders
                WHERE EXTRACT(YEAR FROM sale_date) = 2020)
ORDER BY seller_name
```