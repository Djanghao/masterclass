# Convoluted Oracle Function Mishmash

**Author:** Seedpod
**Votes:** 2
**Link:** [https://leetcode.com/problems/convert-date-format/solutions/2835171/](https://leetcode.com/problems/convert-date-format/solutions/2835171/)

---

# Approach
https://docs.oracle.com/cd/B14117_01/server.101/b10759/sql_elements004.htm
The `to_char` function brings us close to the required output. All that is left is to use `initcap` to convert the UPPER CASE TEXT to Start Case (e.g., FEBRUARY \u27A1 February)

# Code
```
select initcap(to_char(day, 'fmDAY, MONTH DD, YYYY')) as day from days;
```