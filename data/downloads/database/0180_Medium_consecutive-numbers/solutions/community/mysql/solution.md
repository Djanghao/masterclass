# Easy and Simple Solution | Using Lead() | try this

**Author:** Manjeet1311
**Votes:** 548
**Link:** [https://leetcode.com/problems/consecutive-numbers/solutions/3359304/](https://leetcode.com/problems/consecutive-numbers/solutions/3359304/)

---



# Code
```
# Write your MySQL query statement below
with cte as (
    select num,
    lead(num,1) over() num1,
    lead(num,2) over() num2
    from logs

)

select distinct num ConsecutiveNums from cte where (num=num1) and (num=num2)
```
**If U like the solution, Pls Upvote**

![cat.png](./images/0.png)
