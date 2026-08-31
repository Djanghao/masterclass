# postgresql: string concatenation

**Author:** kycastillo
**Votes:** 5
**Link:** [https://leetcode.com/problems/fix-names-in-a-table/solutions/5127204/](https://leetcode.com/problems/fix-names-in-a-table/solutions/5127204/)

---

# Intuition
All we have to do is extract the user's ID and name, and then modify the name to ensure it's properly capitalized (first letter uppercase, rest lowercase).

# Approach
We can use the `substring()` function to isolate the first character and convert it to uppercase with `upper()`, and then concatenate it with the rest of the name, which is converted to lowercase using `lower()`. The "||" can be used here to perform this task. The data is then ordered by `user_id`.

# Note
The use of the "||" operator for string concatenation is common in PostgreSQL, Oracle, and SQLite. However, syntax for string concatenation may vary across different database systems. For example, MySQL uses the `CONCAT()` function for string concatenation.

# Code
```Postgresql []
SELECT user_id
	, (UPPER(SUBSTRING(name, 1, 1)) || LOWER(SUBSTRING(name, 2, LENGTH(name)))) AS name
FROM users
ORDER BY user_id;
```

```mysql []
SELECT user_id
	, CONCAT(UPPER(SUBSTRING(name, 1, 1)), LOWER(SUBSTRING(name, 2, LENGTH(name)))) AS name
FROM users
ORDER BY user_id;
```
