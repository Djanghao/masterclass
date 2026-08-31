# Attention Coders:  Determine if Three Sides Form a Triangle -  Beats 98.54%

**Author:** deepankyadav
**Votes:** 314
**Link:** [https://leetcode.com/problems/triangle-judgement/solutions/3570676/](https://leetcode.com/problems/triangle-judgement/solutions/3570676/)

---

# ***Please Upvote my solution, if you find it helpful ;)***

# Intuition
When we talk about triangles, we know that they are formed by connecting three sides. The intuition behind the Triangle Judgement query is to determine whether a given set of three sides can actually form a valid triangle or not. To do this, we need to check if the sum of any two sides is greater than the third side. If this condition holds true for all three combinations of sides, then we can say that a triangle can be formed. Otherwise, it means the sides cannot form a triangle.

# Approach
To solve the Triangle Judgement problem, we will create an IF statement to check the validity condition for each row in the "Triangle" table. The IF statement will compare the sum of two sides with the third side, for all possible combinations of sides. If all three comparisons are true, we will assign the value "Yes" to a new column called "triangle". If any of the comparisons are false, we will assign the value "No" to the "triangle" column. This approach allows us to easily evaluate the triangle formation condition for each set of sides.

# Complexity
- Time complexity:
The complexity of the Triangle Judgement query is quite simple. It involves only one SQL query with an IF statement. The time complexity is determined by the number of rows in the "Triangle" table since we need to evaluate the condition for each row.

- Space complexity:
The space complexity is low, as we don't require any additional data structures or variables.

# Code
```
# Write your MySQL query statement below

SELECT *, IF(x+y>z and y+z>x and z+x>y, "Yes", "No") as triangle FROM Triangle
```
***Please Upvote my solution, if you find it helpful ;)***
![6a87bc25-d70b-424f-9e60-7da6f345b82a_1673875931.8933976.jpeg](./images/0.jpeg)

