# ✅ 100% EASY || FAST 🔥|| CLEAN SOLUTION 🌟

**Author:** kartik_ksk7
**Votes:** 122
**Link:** [https://leetcode.com/problems/duplicate-emails/solutions/3827277/](https://leetcode.com/problems/duplicate-emails/solutions/3827277/)

---

# Code
```
<!-- /* SOLUTION - 1 */ --> 

SELECT Email FROM Person GROUP BY Email HAVING COUNT(Email) > 1;


<!-- SOLUTION - 2 -->

SELECT DISTINCT P1.Email FROM Person P1,Person P2 

WHERE P1.id <> P2.id AND P1.Email=P2.Email


```
![5kej8w.jpg](./images/0.jpeg)
