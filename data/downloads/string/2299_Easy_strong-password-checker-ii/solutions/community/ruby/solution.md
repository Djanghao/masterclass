# Ruby RegExp 1 line code. Detailed explanation

**Author:** user1452y
**Votes:** 2
**Link:** [https://leetcode.com/problems/strong-password-checker-ii/solutions/2139222/](https://leetcode.com/problems/strong-password-checker-ii/solutions/2139222/)

---

```
RegExp rules:

Not equal chars in adjacent positions  (?!.*([A-Za-z0-9#?!@$%^&*-])\\1{1})
At least one upper case English letter, (?=.*?[A-Z])
At least one lower case English letter, (?=.*?[a-z])
At least one digit, (?=.*?[0-9])
At least one special character, (?=.*?[-+!@#$%^&*()])
Minimum eight in length .{8,} (with the anchors)

# @param {String} password
# @return {Boolean}
def strong_password_checker_ii(password)
    return !(password !~ /^(?!.*([A-Za-z0-9#?!@$%^&*-])\\1{1})(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[-+!@#$%^&*()]).{8,}$/)
end
```

Pease **upvote** if you like the solution