# 🐘PostgreSQL ❗ Beats 94.35% ❗ Simple solution with REGEX

**Author:** IliaAvdeev
**Votes:** 11
**Link:** [https://leetcode.com/problems/patients-with-a-condition/solutions/5192525/](https://leetcode.com/problems/patients-with-a-condition/solutions/5192525/)

---

# Approach
This SQL query aims to select all columns and rows from a table named "patients" where the "conditions" column contains the string "DIAB1" at the beginning of a word. Let's break it down:

* **`SELECT *`**: This instructs the database to retrieve all columns (`*`) from the table.
* **`FROM patients`**:  Specifies that the data should be retrieved from the table named "patients".
* **`WHERE conditions ~ '\\mDIAB1'`**: This is the filtering clause:
    * **`WHERE`**:  Indicates that a condition will be applied to filter the results.
    * **`conditions`**: Refers to a column likely named "conditions" within the "patients" table.
    * **`~`**: This is a symbol used in some SQL dialects (like PostgreSQL) for regular expression matching. It checks if the pattern on the right side matches the data in the "conditions" column.
    * **`'\\mDIAB1'`**: This is the regular expression pattern. 
        * **`\\m`**:  This signifies the beginning of a word boundary. This ensures you're only matching "DIAB1" when it's a separate word or at the very beginning of the "conditions" value.
        * **`DIAB1`**: The specific string you're searching for within the "conditions" column.

# Code
```
SELECT * FROM patients
WHERE conditions ~ '\\mDIAB1'
```