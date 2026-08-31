# SQL ✅ |GROUP BY, HAVING✅✅✅| Easy to understand

**Author:** jasurbekaktamov081
**Votes:** 153
**Link:** [https://leetcode.com/problems/classes-with-at-least-5-students/solutions/3811588/](https://leetcode.com/problems/classes-with-at-least-5-students/solutions/3811588/)

---

![image.png](./images/0.png)

# Code
```
SELECT class
FROM Courses
GROUP BY class
HAVING COUNT(student) >= 5;

```