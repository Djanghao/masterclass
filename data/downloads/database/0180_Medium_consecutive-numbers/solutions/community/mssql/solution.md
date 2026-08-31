# Easy Approach 🔥|| Clear Code 👍|| Simple Explanation🤩

**Author:** kartikeymish
**Votes:** 200
**Link:** [https://leetcode.com/problems/consecutive-numbers/solutions/3509769/](https://leetcode.com/problems/consecutive-numbers/solutions/3509769/)

---

# Approach
<!-- Describe your approach to solving the problem. -->
- Easily taking out the distinct num from the table whose occurence >= 3. 
- To check that consecutively occurence is atleast 3 times, we do it by `creating 3 tables for every other id by +1 increment` & `matching them that they are equal.` 


# Code
```
# Write your MySQL query statement below
SELECT distinct 
    i1.num as ConsecutiveNums 
FROM 
    logs i1,
    logs i2,
    logs i3
WHERE 
    i1.id=i2.id+1 AND 
    i2.id=i3.id+1 AND 
    i1.num=i2.num AND 
    i2.num=i3.num
```
![please-upvote-and.jpg](./images/0.jpeg)
