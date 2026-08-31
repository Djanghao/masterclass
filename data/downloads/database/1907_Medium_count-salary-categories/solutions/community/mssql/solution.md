# 💻Think like SQL Engine🔥LEFT JOIN ON CASE Statement✅(VALUES)

**Author:** k_a_m_o_l
**Votes:** 25
**Link:** [https://leetcode.com/problems/count-salary-categories/solutions/4335468/](https://leetcode.com/problems/count-salary-categories/solutions/4335468/)

---

# Code
```
/* Write your T-SQL query statement below */

SELECT 
    b.category
    ,COUNT(account_id)  accounts_count
FROM Accounts a
RIGHT OUTER JOIN (VALUES('Low Salary'),('High Salary'),('Average Salary')) AS b(category) 
    ON CASE WHEN income < 20000 THEN 'Low Salary'
        WHEN income > 50000 THEN 'High Salary'
        ELSE 'Average Salary' END = b.category
GROUP BY b.category


```
**IF it was helpful for you, pls UPVOTE**
![image.png](./images/0.png)
