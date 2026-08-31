# Step-by-step detailed solution || Easy to understand || MySQL

**Author:** pmehra_be20
**Votes:** 275
**Link:** [https://leetcode.com/problems/average-selling-price/solutions/3721742/](https://leetcode.com/problems/average-selling-price/solutions/3721742/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
A beginner friendly answer is written by following basic concepts step by step.
# Approach
<!-- Describe your approach to solving the problem. -->
Looking at the result table we write the basic select statement 
SELECT product_id, ____ as average_price FROM ___

AS average_price should be rounded to 2 decimal places
SELECT p.product_id, round(_____,2) as average_price

Now as evident from Explanation given, the two - price and units, required to calculate average_price are from different tables hence we need to join these tables (as product_id is common in these two tables we join on product_id)
-> update for the new test case 
I have used LEFT JOIN in place of INNER JOIN, to include all the product_ids in the Prices table even if it in not present in the UnitsSold table.
SELECT p.product_id, round(_____,2) as average_price
FROM Prices p LEFT JOIN UnitsSold u 
ON p.product_id = u.product_id

-> update for the new test case 
Now as there can be null value for the average_price (as we are left joining tables) to handle these null values (and replace null with a 0 in result table) we can use IFNULL() function as follows
SELECT p.product_id, IFNULL(round(_____,2),0) as average_price

Now to calculate average_price, we need to add price x units of all the products (of that particulat product_id) and then divide it by the sum of all its units 
This is formulated as:SUM(p.price*u.units)/SUM(u.units)
using SUM() function

For the calculation of average_price we first need to determine the price per unit based on the purchase date
Hence, modifying JOIN staement by adding the following condition
u.purchase_date BETWEEN p.Start_date and p.end_date

Now finally to have one product_id only once in the result table and calculate average_price for each product we: Group by product_id

Thus the final code becomes
SELECT p.product_id, IFNULL(round(SUM(p.price*u.units)/sum(u.units),2),0) as average_price
FROM Prices p LEFT JOIN UnitsSold u
ON p.product_id = u.product_id AND u.purchase_date BETWEEN p.Start_date and p.end_date
GROUP BY p.product_id

In the above code Aliases () are used as product_id belongs to both the tables and without them it is difficult to judge which table's product_id is being referred to. (i.e product_id will be ambiguous)
# Complexity
- Runtime : 1240 ms
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Beats: 98.06%
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
# Write your MySQL query statement below
SELECT p.product_id, IFNULL(round(SUM(p.price*u.units)/sum(u.units),2),0) as average_price
FROM Prices p 
LEFT JOIN UnitsSold u
ON p.product_id = u.product_id AND 
u.purchase_date BETWEEN p.Start_date and p.end_date
GROUP BY p.product_id
```
If you like my explanation kindly upvote for me :)