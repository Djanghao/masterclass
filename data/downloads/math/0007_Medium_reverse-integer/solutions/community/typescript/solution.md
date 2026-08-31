# ✔️ 100% Fastest TypeScript Solution

**Author:** sergeyleschev
**Votes:** 11
**Link:** [https://leetcode.com/problems/reverse-integer/solutions/1888703/](https://leetcode.com/problems/reverse-integer/solutions/1888703/)

---

```
const minInt = -Math.pow(2, 31)
const maxInt = -minInt - 1

function reverse(x: number): number {
  const isNegative = x < 0
  let reversed = 0
  if (isNegative) { x = -x }

  while (x > 0) {
    const remainder = x % 10
    reversed = reversed * 10 + remainder
    x = Math.floor(x / 10)
  }

  if (reversed > maxInt) { return 0 }
  return isNegative ? -reversed : reversed
}
```

Let me know in comments if you have any doubts. I will be happy to answer.

Please upvote if you found the solution useful.