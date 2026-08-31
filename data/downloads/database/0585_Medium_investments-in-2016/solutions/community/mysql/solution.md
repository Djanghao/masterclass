# 🚀✅Best Optimum Solution with Explanation!

**Author:** deepankyadav
**Votes:** 303
**Link:** [https://leetcode.com/problems/investments-in-2016/solutions/3670790/](https://leetcode.com/problems/investments-in-2016/solutions/3670790/)

---

## ***Please Upvote my solution, if you find it helpful ;)***

# Intuition
The solution aims to calculate the total insured value in 2016 for the insurance policies that meet specific conditions.

# Approach
1. We want to calculate the total insured value in the year 2016 for specific insurance policies.
1. We start by looking at the "Insurance" table.
1. First, we find all the policies where the insured value in 2015 appears more than once. This helps us identify policies that have been renewed or updated.
1. Next, we find all the unique combinations of latitude and longitude where only one policy exists. This helps us identify policies with unique locations.
1. We then apply these two conditions together using the AND operator to filter the policies that meet both criteria.
1. Finally, we calculate the sum of the insured values in 2016 for the filtered policies, rounding the result to two decimal places.
# Complexity
- Time complexity:
The time complexity of the query depends on the size of the "Insurance" table. The subqueries used to filter the data have a time complexity of $$O(n^2)$$, where n is the number of rows in the table. Overall, the time complexity can be considered linear or $$O(n)$$ in terms of the number of rows in the table.

- Space complexity:
The space complexity of the query is determined by the size of the "Insurance" table and the number of distinct tiv_2015, lat, and lon values. The query itself does not consume significant additional space beyond the input table. Thus, the space complexity can be considered $$O(n)$$, where n is the number of rows in the table.

# Code
```
# Write your MySQL query statement below
SELECT ROUND(SUM(tiv_2016), 2) AS tiv_2016
FROM Insurance
WHERE tiv_2015 IN (
    SELECT tiv_2015
    FROM Insurance
    GROUP BY tiv_2015
    HAVING COUNT(*) > 1
)
AND (lat, lon) IN (
    SELECT lat, lon
    FROM Insurance
    GROUP BY lat, lon
    HAVING COUNT(*) = 1
)
```
***Please Upvote my solution, if you find it helpful ;)***
![6a87bc25-d70b-424f-9e60-7da6f345b82a_1673875931.8933976.jpeg](./images/0.jpeg)
