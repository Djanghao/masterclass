# Simple Solution with two line query

**Author:** deepankyadav
**Votes:** 412
**Link:** [https://leetcode.com/problems/customers-who-bought-all-products/solutions/3608247/](https://leetcode.com/problems/customers-who-bought-all-products/solutions/3608247/)

---

## ***Please Upvote my solution, if you find it helpful ;)***

# Intuition
To find the customers who have bought all the products, we need to compare the distinct products bought by each customer with the total number of products available. If the counts match, it means the customer has bought all the products.

# Approach
1. Select the customer_id from the Customer table.
1. Group the results by customer_id.
1. Apply a HAVING clause to filter out customers who have not bought all the products.
1. In the HAVING clause, use ***COUNT(DISTINCT product_key)*** to count the number of distinct product keys for each customer.
1. Compare this count with the total count of product keys in the Product table obtained through a subquery.
1. If the counts match, it means the customer has bought all the products.
# Complexity
- Time complexity:
The time complexity of this solution depends on the size of the Customer and Product tables. Let's assume there are n customers and m products. The counting of distinct product keys for each customer takes $$O(n)$$ time, and the subquery to count the total number of products takes $$O(m)$$ time. Therefore, the overall time complexity can be approximated as $$O(n + m)$$.

- Space complexity:
The space complexity of this solution is considered $$O(1)$$ or constant. It only requires a constant amount of additional space for storing intermediate results and the subquery. The space usage does not depend on the size of the input tables.

# Code
```
# Write your MySQL query statement below

'SELECT  customer_id FROM Customer GROUP BY customer_id
HAVING COUNT(distinct product_key) = (SELECT COUNT(product_key) FROM Product)'
```
***Please Upvote my solution, if you find it helpful ;)***
![6a87bc25-d70b-424f-9e60-7da6f345b82a_1673875931.8933976.jpeg](./images/0.jpeg)
