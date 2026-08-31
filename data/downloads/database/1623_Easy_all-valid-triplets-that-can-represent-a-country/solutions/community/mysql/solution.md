# MYSQL Simple Join

**Author:** haiming1927
**Votes:** 12
**Link:** [https://leetcode.com/problems/all-valid-triplets-that-can-represent-a-country/solutions/1006968/](https://leetcode.com/problems/all-valid-triplets-that-can-represent-a-country/solutions/1006968/)

---

```
SELECT a.student_name AS member_A,
       b.student_name AS member_B,
       c.student_name AS member_C
FROM SchoolA a, SchoolB b, SchoolC c
WHERE a.student_id != b.student_id AND
      b.student_id != c.student_id AND 
      a.student_id != c.student_id AND 
      a.student_name != b.student_name AND
      b.student_name != c.student_name AND
      a.student_name != c.student_name 
```