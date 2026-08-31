# Beats 100% | MySql, SQL Server | Easy Solution✅✅

**Author:** Ikapoor123
**Votes:** 17
**Link:** [https://leetcode.com/problems/delete-duplicate-emails/solutions/4774542/](https://leetcode.com/problems/delete-duplicate-emails/solutions/4774542/)

---

# For MySql, SQL Server
# Dont Worry just read it ..
# You can do it

 - **DELETE FROM:** This clause specifies that you want to remove rows from a table.
 - **p1**: This is an alias for the Person table, used to make the query more readable.
 - **WHERE**: This clause filters which rows to delete based on specific conditions.
 - **p1.Email** = p2.Email: This condition matches rows where the Email values in p1 and p2 are identical.
 - **p1.id > p2.Id**: This condition further filters to select rows where p1.id is greater than p2.id. This essentially means you're deleting the rows with higher IDs for each duplicate email address.

# Still having Doubt ? comment below
# Please UpVote \u2705\u2705

# Code
```
delete p1 
from Person p1, Person p2
where p1.Email = p2.Email 
and p1.id>p2.Id;
```
# Just
![smile.png](./images/0.png)
