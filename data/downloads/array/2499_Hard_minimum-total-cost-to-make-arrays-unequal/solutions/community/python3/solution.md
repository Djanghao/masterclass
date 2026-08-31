# [Python] Find smallest set to permute

**Author:** awice
**Votes:** 10
**Link:** [https://leetcode.com/problems/minimum-total-cost-to-make-arrays-unequal/solutions/2898939/](https://leetcode.com/problems/minimum-total-cost-to-make-arrays-unequal/solutions/2898939/)

---

### Approach
Because swapping to and from index $0$ is free, if $S'$ is the set of indices that are in at least one swap in the answer, then the optimal cost is `sum(S')`.

Let $S \\subseteq S'$ be the set of $i$ with $A[i] = B[i]$.  We have to move these, so the answer is at least `sum(S)`.  Note that if all $A[i]$ were different, then `sum(S)` is the final answer.

Now accounting for the values of $A[i]$, consider any $\	ext{major} = \	ext{mode}(\\{\\,A[i] \\mid i \\in S\\,\\})$. A necessary condition is that $\	ext{major}$ doesn't occur more than $\\frac{|S'|}{2}$ times. Actually, it's also a sufficient one (*).

So say $\	ext{major}$ has frequency larger than $\\frac{|S|}{2}$ (there can be at most one), then we need to add $i$'s to $S'$ so that $A[i]$ and $B[i]$ are not equal to $\	ext{major}$, until we get the frequency at or below $\\frac{\\|S'\\|}{2}$.

### Code
```
class Solution:
    def minimumTotalCost(self, A, B):
        N = len(A)
        indexes = {i for i in range(N) if A[i] == B[i]}
        if not indexes:
            return 0

        count = Counter(A[i] for i in indexes)
        major = max(count, key=count.__getitem__)
        to_add = max(count[major] * 2 - len(indexes), 0)
        for i in range(N):
            if to_add and A[i] != major != B[i] and i not in indexes:
                to_add -= 1
                indexes.add(i)

        return -1 if to_add else sum(indexes)
```

(* proof : let the largest frequencies be $(f_1, f_2, \\cdots)$, then decrementing $f_1$ and $f_2$ would have $f_2 \\leq \\frac{n}{2} \\Leftrightarrow f_2 - 1 \\leq \\frac{n-2}{2}$ and $f_3 \\leq \\frac{n}{3} \\leq \\frac{n-2}{2}$ showing our induction would hold for $n \\geq 6$, and small $n$ is an exercise.)