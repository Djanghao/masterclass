# Attention Coders: Efficient SQL Query to Retrieve Products Ordered (using Join)

**Author:** deepankyadav
**Votes:** 97
**Link:** [https://leetcode.com/problems/list-the-products-ordered-in-a-period/solutions/3583495/](https://leetcode.com/problems/list-the-products-ordered-in-a-period/solutions/3583495/)

---

## ***Please Upvote my solution, if you find it helpful ;)***

# Intuition
We want to find the products that were ordered during **February 2020** and determine the total number of units ordered for each product. Additionally, we only want to include products that have a total unit count of at least **100**.

# Approach
To solve this problem, we can follow these steps:

1. Look at the Products table and select the product_name column, which contains the names of the products.
1. Look at the Orders table and find the sum of units for each product using the product_id column that matches the products.
1. Filter the orders to include only those made in the specified period. We check the year and month of the order_date column.
1. Group the results by the product_id so that we can aggregate the units ordered for each product.
1. Finally, apply a condition to include only those products that have a sum of units greater than or equal to 100.

# Complexity
- Time complexity:
The time complexity of your solution depends on the size of the Orders table and how efficiently the database can process the query. However, in general, your solution has a time complexity of $$O(n)$$, where n is the number of rows in the Orders table that satisfy the specified conditions.

- Space complexity:
The space complexity of your solution is determined by the number of distinct product_ids in the specified period. This is because we need to store and process the aggregated results for each distinct product_id. So the space complexity is $$O(m)$$, where m is the number of distinct product_ids.

# Code
```
# Write your MySQL query statement below

SELECT p.product_name AS product_name, sum(o.unit) AS unit FROM Products p
JOIN Orders o USING (product_id)
WHERE YEAR(o.order_date)='2020' AND MONTH(o.order_date)='02'
GROUP BY p.product_id
HAVING SUM(o.unit)>=100
```
***Please Upvote my solution, if you find it helpful ;)***

![6a87bc25-d70b-424f-9e60-7da6f345b82a_1673875931.8933976.jpeg](./images/0.jpeg)

