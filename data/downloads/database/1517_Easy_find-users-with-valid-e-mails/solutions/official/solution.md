# Official Solution

**Link:** [https://leetcode.com/problems/find-users-with-valid-e-mails/solution/](https://leetcode.com/problems/find-users-with-valid-e-mails/solution/)

---

<!-- Don't delete this -->
[TOC]

# Solution

---

## pandas

### Overview

Given a table with users and their emails, we want to filter users based on the validity of their email addresses. A valid email should start with a prefix containing only allowed characters and end with the domain `'@leetcode.com'`.

---

### Approach: Using Regular Expressions

#### Algorithm

In general, if you are asked to match a string, *writing a regular expression pattern to match on* should come first to mind.

RegEx provides various functionality, here are a few relevant ones:

1. `^`: This represents the start of a string or line.

1. `[a-z]`: This represents a character range, matching any character from `a` to `z`.

    * `[0-9]`: This represents a character range, matching any character from `0` to `9`.

    * `[a-zA-Z]`: This variant matches any character from `a` to `z` or `A` to `Z`. Note that there is no limit to the number of character ranges you can specify inside the square brackets -- you can add additional characters or ranges you want to match.

    * `[^a-z]`: This variant matches any character that is not from `a` to `z`. Note that the `^` character is used to negate the character range, which means it has a different meaning inside the square brackets than outside where it means the start.

1. `[a-z]*`: This represents a character range, matching any character from `a` to `z` zero or more times.

1. `[a-z]+`: This represents a character range, matching any character from `a` to `z` one or more times.

1. `.`: This matches exactly **one** of any character.

1. `\.`: This represents a period character. Note that the backslash is used to escape the period character, as the period character has a special meaning in regular expressions. Also note that in many languages, you need to escape the backslash itself, so you need to use `\\.`.

1. The dollar sign: This represents the end of a string or line.

The key idea here is to separate the first character of the name column from the rest, change their cases accordingly, and then join them back together.


#### Implementation

<iframe src="https://leetcode.com/playground/R6UNYbpZ/shared" frameBorder="0" width="100%" height="157" name="R6UNYbpZ"></iframe>

<br>

---


## Database

### Approach: Selecting rows based on conditions
#### Algorithm
In general, if you are asked to match a string, *writing a regular expression pattern to match on* should come first to mind.

RegEx provides various functionality, here are a few relevant ones:

1. `^`: This represents the start of a string or line.

1. `[a-z]`: This represents a character range, matching any character from `a` to `z`.

    * `[0-9]`: This represents a character range, matching any character from `0` to `9`.

    * `[a-zA-Z]`: This variant matches any character from `a` to `z` or `A` to `Z`. Note that there is no limit to the number of character ranges you can specify inside the square brackets -- you can add additional characters or ranges you want to match.

    * `[^a-z]`: This variant matches any character that is not from `a` to `z`. Note that the `^` character is used to negate the character range, which means it has a different meaning inside the square brackets than outside where it means the start.

1. `[a-z]*`: This represents a character range, matching any character from `a` to `z` zero or more times.

1. `[a-z]+`: This represents a character range, matching any character from `a` to `z` one or more times.

1. `.`: This matches exactly **one** of any character.

1. `\.`: This represents a period character. Note that the backslash is used to escape the period character, as the period character has a special meaning in regular expressions. Also note that in many languages, you need to escape the backslash itself, so you need to use `\\.`.

1. The dollar sign: This represents the end of a string or line.

The key idea here is to separate the first character of the name column from the rest, change their cases accordingly, and then join them back together.

The complete code is as follows:

#### Implementation

```sql
SELECT user_id, name, mail
FROM Users
-- Note that we also escaped the `@` character, as it has a special meaning in some regex flavors
WHERE mail REGEXP '^[a-zA-Z][a-zA-Z0-9_.-]*\\@leetcode\\.com$';
```