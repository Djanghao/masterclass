# Official Solution

**Link:** [https://leetcode.com/problems/fix-names-in-a-table/solution/](https://leetcode.com/problems/fix-names-in-a-table/solution/)

---

<!-- Don't delete this -->
[TOC]

# Solution

---

## pandas

---

### Overview

This task essentially boils down to updating a column of data in a table. The goal is to normalize the name column in the Users table, so that only the first letter is uppercase and the rest are lowercase, and sort the resulting values by `user_id`.

### Approach 1: Separating the first character from the rest

#### Algorithm

Pandas `.str` accessor methods are essentially vectorized string functions for Series and Index objects. This means that we can apply string functions to *each* element in a Series or Index without having to loop through each element individually — leading to faster and more concise code. More information can be found [here](https://pandas.pydata.org/pandas-docs/stable/reference/api/pandas.Series.str.html).

Warning: When using multiple Pandas `.str` accessor methods in a chained expression, be sure to use the `.str` accessor on each *before* the specific string function. For example, `users["name"].str[1:].str.lower()` is correct, while `users["name"].str[1:].lower()` is not as it is missing the second `.str` accessor before the `.lower()` method.


1. Extract the first character of the name column and convert it to uppercase.
1. Extract the remaining part of the name column (from the second character to the end) and convert it to lowercase.
1. Concatenate the uppercase first character and the lowercase remaining part.
1. Order the results by user_id.


#### Implementation

<iframe src="https://leetcode.com/playground/TZQfKTTz/shared" frameBorder="0" width="100%" height="140" name="TZQfKTTz"></iframe>

---

### Approach 2: Using .capitalize() str method

#### Algorithm

Instead of manually separating the first character and uppercasing it, while lowercasing the rest, we can instead use the `.capitalize()` method from the str accessor. Note that this only exists in Python Pandas and not MySQL. 

This method will capitalize the first letter of each word in the string, and lowercase the rest automatically, leading to more concise code.


#### Implementation

<iframe src="https://leetcode.com/playground/JeacfswC/shared" frameBorder="0" width="100%" height="140" name="JeacfswC"></iframe>

## Database

### Approach 1: Separating the first character from the rest

#### Algorithm

SQL provides various functions that allow us to manipulate and transform data. Here we will specifically utilize the following:

1. `SUBSTRING(column_name, start, length)`: This extracts a substring from a column's values, starting at the specified start position, and up to the specified length.

2. `UPPER(expression)`: This converts a string expression to uppercase.

3. `LOWER(expression)`: This converts a string expression to lowercase.

4. `CONCAT(string1, string2, ...)`: This concatenates two or more strings into one.

The key idea here is to separate the first character of the name column from the rest, change their cases accordingly, and then join them back together. The complete code is as follows:


#### Implementation

```sql
SELECT user_id, CONCAT(UPPER(SUBSTRING(name, 1, 1)), LOWER(SUBSTRING(name, 2))) AS name
FROM Users
ORDER BY user_id;
```