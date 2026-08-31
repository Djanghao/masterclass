# One line solution || Easy Solution || TypeScript

**Author:** viniciusteixeiradias
**Votes:** 2
**Link:** [https://leetcode.com/problems/maximum-69-number/solutions/2787011/](https://leetcode.com/problems/maximum-69-number/solutions/2787011/)

---

Let me know in comments if you have any doubts. I will be happy to answer.
Please upvote if you found the solution useful.

```
const maximum69Number = (num: number): number => {
    return +num.toString().replace('6', '9')
};
```