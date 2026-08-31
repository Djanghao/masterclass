# 💯Fastest & simplest possible: only 5 SLOC, commented

**Author:** dandv
**Votes:** 8
**Link:** [https://leetcode.com/problems/find-the-town-judge/solutions/2629846/](https://leetcode.com/problems/find-the-town-judge/solutions/2629846/)

---

We'll create an array `trustedBy`, and for each (a<sub>i</sub>, b<sub>i</sub>) trust relationship,
* disqualify person a<sub>i</sub> (since the judge trust no one, a<sub>i</sub> can't be the judge because they trust b<sub>i</sub>)
* increase the trust level of b<sub>i</sub>

If there is a judge, then their trust level must be n-1. There can be only one judge, because if there were 2 or more, their trust level would be n-2 or less.
```
function findJudge(n: number, trust: number[][]): number {
  const trustedBy: number[] = Array(n + 1).fill(0);
  for (const [a, b] of trust) {
    trustedBy[a] = NaN;  // since the judge doesn't trust anyone, a[i] can't be the judge
    trustedBy[b]++;  // ++ applied to NaN is still NaN, and won't amount to n-1
  }
  // Because trust pairs are unique, there can be only one judge, or none at all.
  return trustedBy.indexOf(n-1) || 1;
};
```