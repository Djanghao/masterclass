# Oracle solution - instr() and substr()

**Author:** adamrbeier
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-all-unique-email-domains/solutions/4785811/](https://leetcode.com/problems/find-all-unique-email-domains/solutions/4785811/)

---

LeetCode strikes again!  The problem description states that the table should be ordered by count descending, but based on submissions, the ordering that's accepted is by domain ascending (alphabetically).  I'm sure there's comments highlighting this but I wanted to note that.

I cannot speak for everybody but I'd like to believe that data people who know SQL also know other programming langauges.  While SQL has string functions that we're going to utilize in this solution, string parsing is more common in other languages (Python being my main other language) and the applications - finding a character in a string, using positional indices to parse a string - come into play here, and certainly make this one straightforward if you know how to deal with strings.  Let's cover the solution...

# Approach
The problem deals with the email domain, which is what's after the '@'.  Translating that into string functions, we need to find the position of the '@' character in the email, and then take the remaining characters.  The instr() function does just that, with `instr(email, '@')` returning the position of the '@' character in the email.  Since we want the characters after the '@', use substr() to take a substring of email.  Since the positions are inclusive, add 1 to the position of the '@' from instr(), and so `substr(email, instr(email, '@') + 1)` will return the domain for a full email.

Touching on my comment earlier about having familiarity with strings from general programming, some may be familiar with using negative positions to parse a string from the end.  Since the domain must end in '.com', we can use `substr(email, -4)` to return the final 4 characters of the email.

With those string functions in place, putting it all together is easy.  Select the domain and do a count on that, and add a where to ensure that the email is valid (ends in '.com').  Add the proper ordering, which I mentioned in the intro, as what's accepted differs from the problem statement.

# Code
```
/* Write your PL/SQL query statement below */
select substr(email, instr(email, '@') + 1) as email_domain, count(*) as count
from Emails
where substr(email, -4) = '.com'
group by substr(email, instr(email, '@') + 1)
order by 1
```