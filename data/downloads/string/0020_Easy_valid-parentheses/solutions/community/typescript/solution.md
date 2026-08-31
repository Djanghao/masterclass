# ✔️ 100% Fastest TypeScript Solution

**Author:** sergeyleschev
**Votes:** 16
**Link:** [https://leetcode.com/problems/valid-parentheses/solutions/1888723/](https://leetcode.com/problems/valid-parentheses/solutions/1888723/)

---

```
const brackets: {[key: string]: string} = {
  ']': '[',
  '}': '{',
  ')': '(' 
}

function isValid(s: string): boolean {
  const stack: string[] = []
  const chars = s.split('')

  for (const char of chars) {
    if (isClosing(char)) {
      const opening = stack.pop()

      if (brackets[char] !== opening) { return false }
    } else { stack.push(char) }
  }

  return stack.length === 0
}

function isClosing(s: string): boolean {
  return brackets.hasOwnProperty(s)
}
```

Let me know in comments if you have any doubts. I will be happy to answer.

Please upvote if you found the solution useful.