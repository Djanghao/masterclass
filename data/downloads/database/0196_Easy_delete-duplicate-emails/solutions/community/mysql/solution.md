# MY SQL || SOLUTION

**Author:** _himanshu_12
**Votes:** 800
**Link:** [https://leetcode.com/problems/delete-duplicate-emails/solutions/2627589/](https://leetcode.com/problems/delete-duplicate-emails/solutions/2627589/)

---

***Using Cartesian Product***
```
delete p1 from person p1,person p2 
where p1.email=p2.email and p1.id>p2.id;
```

***Explanation:***
```
Input: 
Person table:
+----+------------------+
| id | email            |
+----+------------------+
| 1  | john@example.com |
| 2  | bob@example.com  |
| 3  | john@example.com |
+----+------------------+

=> From Person p1, Person p2 : it would look like:
1|john@example.com|1|john@example.com
1|john@example.com|2|bob@example.com 
1|john@example.com|3|john@example.com

2|bob@example.com|1|john@example.com
2|bob@example.com|2|bob@example.com
2|bob@example.com|3|john@example.com

3|john@example.com|1|john@example.com
3|john@example.com|2|bob@example.com
3|john@example.com|3|john@example.com

=> From Person p1, Person p2 where p1.email=p2.email and p1.id>p2.id:
It would look like:
3|john@example.com|1|john@example.com

Now delete this row's matching row in p1 using p1:  delete p1
```
***PLEASE UPVOTE IF YOU FIND IT A LITTLE BIT HELFPFUL, MEANS A LOT ;)***