# javascript easy one line split and join

**Author:** zak0zak0zak
**Votes:** 58
**Link:** [https://leetcode.com/problems/goal-parser-interpretation/solutions/963415/](https://leetcode.com/problems/goal-parser-interpretation/solutions/963415/)

---

```
var interpret = function(command) {
    return command.split("()").join("o").split("(al)").join("al");
};
```