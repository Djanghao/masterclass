# PostgreSQL regex solution using the tilde (~) operator, explained

**Author:** embosfer
**Votes:** 27
**Link:** [https://leetcode.com/problems/find-users-with-valid-e-mails/solutions/4986612/](https://leetcode.com/problems/find-users-with-valid-e-mails/solutions/4986612/)

---

# Approach

We use the tilde(~) operator as opposed to LIKE, as it's far more powerful.

^ means start with.
Then we define a set of characters to match with the brackets [].
Within them we put two ranges: a-z and A-Z, with a \\+ after it to ensure this character matches *at least* once.
Then another set, [a-zA-Z0-9_\\.-]* to match 0 or more times (via the asterisk at the end).
Then finally we enforce @leetcode.com at the end. Putting the dollar ($) will tell the engine to match only emails that end exactly like this.
 Important to notice here that the dot needs to be escaped (with a backslash \\\\ in front of it), otherwise the regex engine will interpret it as "match any character", i.e. not putting it would make it match emails with leetcode[place any character here]com, such as leetcodeAcom or leetcode_com.
 

# Code
```
SELECT *
FROM Users
WHERE mail ~ '^[a-zA-Z]+[a-zA-Z0-9_.-]*@leetcode\\.com$'
```
```