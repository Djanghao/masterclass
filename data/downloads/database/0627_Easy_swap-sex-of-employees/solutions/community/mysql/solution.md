# ✔️ MySQL solution

**Author:** coding_menance
**Votes:** 533
**Link:** [https://leetcode.com/problems/swap-sex-of-employees/solutions/2755326/](https://leetcode.com/problems/swap-sex-of-employees/solutions/2755326/)

---

Solution using cases in MySQL:

```
UPDATE salary SET sex =
CASE sex
    WHEN 'm' THEN 'f'
    ELSE 'm'
END;
```

![kitty.jpeg](./images/0.jpeg)
