# 🚀BEATS 82% 🚀 | | 🔥EASY MySQL Solution 🔥 | | ✅ ROUND, SUM, BETWEEN ✅

**Author:** bhushanpakhle12
**Votes:** 691
**Link:** [https://leetcode.com/problems/average-selling-price/solutions/3872311/](https://leetcode.com/problems/average-selling-price/solutions/3872311/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
We cannot use the pre-defined AVG() function as here there are 2 tables and the formula for calaculating average selling price is different.

# Approach
<!-- Describe your approach to solving the problem. -->
We will be using the same formula which is given in the porblem description. The formula given for calculating the average selling price is :
Average selling price of product x = SUM[units of product x * price of product x(for which the purchase date lies between the start_date and end_Date)] / Total number of units sold of product x sold

For the numerator and denominator in the above formula we can use the predefined SUM() function in SQL.

Average selling price of product = SUM(units*price)/SUM(units)

Since, we also want that the purchase date must be in between the start date and end date so we will specify that in code because we want that price for that number of units is corresponding to that purchase date. 

# Code
```
# Write your MySQL query statement below
SELECT p.product_id, IFNULL(ROUND(SUM(units*price)/SUM(units),2),0) AS average_price
FROM Prices p LEFT JOIN UnitsSold u
ON p.product_id = u.product_id AND
u.purchase_date BETWEEN start_date AND end_date
group by product_id
```

##### Please upvote if you found it helpful.
![Upvote picture.jpg](./images/0.jpeg)

