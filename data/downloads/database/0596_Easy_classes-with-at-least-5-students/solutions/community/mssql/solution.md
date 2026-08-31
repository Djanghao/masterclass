# one liner using GROUP BY

**Author:** user1652uo
**Votes:** 31
**Link:** [https://leetcode.com/problems/classes-with-at-least-5-students/solutions/2580473/](https://leetcode.com/problems/classes-with-at-least-5-students/solutions/2580473/)

---

**Upvote if you feel it easy :)**
```
SELECT class
FROM Courses
GROUP BY class
HAVING count(student) > = 5;
```