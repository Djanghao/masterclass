# REGEXP one liner (MySQL)

**Author:** _nadie_
**Votes:** 243
**Link:** [https://leetcode.com/problems/patients-with-a-condition/solutions/2059131/](https://leetcode.com/problems/patients-with-a-condition/solutions/2059131/)

---

Going through different solutions, I didn't see anyone use a regular expression with a boundary. So, I decided to post one.
```
SELECT * FROM patients WHERE conditions REGEXP '\\\\bDIAB1'
```

The expression `conditions REGEXP '\\\\bDIAB1'` is actually the same as `conditions LIKE '% DIAB1%' OR
conditions LIKE 'DIAB1%';`, but it is obviously shorter. \uD83D\uDE09

The reason they are the same is that `\\b` matches either a non-word character (in our case, a space) or the position before the first character in the string. Also, you need to escape a backslash with another backslash, like so: `\\\\b`. Otherwise, the regular expression won't evaluate.

P.S. `\\b` also matches the position after the last character, but it doesn't matter in the context of this problem.
