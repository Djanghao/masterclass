# One Liner with Regex

**Author:** maddhruv
**Votes:** 3
**Link:** [https://leetcode.com/problems/goal-parser-interpretation/solutions/1277907/](https://leetcode.com/problems/goal-parser-interpretation/solutions/1277907/)

---

Replace the regex with target strings

```
function interpret(command: string): string {
  return command.replace(/\\(al\\)/g, 'al').replace(/\\(\\)/g, 'o')
};
```