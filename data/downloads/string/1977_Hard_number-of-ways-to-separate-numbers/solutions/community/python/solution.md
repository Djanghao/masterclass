# Truly "simple" O(n^2) time, O(n) memory, 18 lines of Python

**Author:** kstauffer
**Votes:** 3
**Link:** [https://leetcode.com/problems/number-of-ways-to-separate-numbers/solutions/2256562/](https://leetcode.com/problems/number-of-ways-to-separate-numbers/solutions/2256562/)

---

Many people have observed this is a straightforward dynamic programming challenge, but many people are stuck on O(n^3) time or O(n^2) memory. Here is a simple formulation of the problem such that the "obvious" implementation takes O(n^2) time and only O(n) memory.

Let ways[n][i] = Number of valid ways (i.e. creating a non-decreasing sequence) to insert commas into num[:i] such that the last element of the (now comma-separated list) has n digits.

Because leading zeros are not allowed, a comma cannot be inserted before a 0 digit. So if num[i] is 0, then ways[n][i] = 0 for all n.

The boundary conditions for `ways` are:
ways[0][i] = 0, for all i
ways[n][0] = 0, for all n
ways[n][i] = 0, n > i
ways[n][i] = 0 if num[i] == "0"
ways[i][i] = 1 if num[i] != "0"

These boundary conditions establish ways to be a lower triangular matrix:
* ways[0] 0 0 ...
* ways[1] 0 1 0 0 0 0 ...
* ways[2] 0 x 1 0 0 0 0 ...
* ways[3] 0 y z 1 0 0 0 0 ...

Where x, y, z, etc. are to be filled in by the recurrence explained in the next section.

Remember, every sequence S counted by ways[n][i] has an n digit number as its last element. Before that element (if it isn't the first in the list), there is an element of either 1, 2, 3, ..., or n digits, and the subsequence of S without its last element was formed from num[0:i-n] (since the last element of S has n digits). So, the inductive step is:

ways[n][i] = ways[1][i-n] + ways[2][i-n] + ways[3][i-n] + ... + ways[n-1][i-n] + (ways[n][i-n] if possible)

The "if possible" part depends on whether the decimal number num[i-n : i] is greater than or equal to the n-digit number that would immediately precede it. Precisely:
`(ways[n][i-n] if i-n-n>=0 and num[i-n-n : i-n] <= num[i-n : i] else 0)`

Now expand ways[n+1][i+1]:
```
ways[n+1][i+1] =
		(ways[n+1][(i+1)-(n+1] if ... else 0) + sum(ways[k][(i+1) - (n+1)] for k in range(n+1))
			= (ways[n+1][i-n] if ... else 0) + sum(ways[k][i-n] for k in range(n)) + ways[n][i-n]
```

# The key observation is that ways[n][i] and ways[n+1][i+1] share a common value: sum(ways[k][i-n] for k in range(n)).

ways is lower triangular and we can compute it column by column. Compute ways[1][i] directly. At step n, let acc[i] be the running tally of sum(ways[k][i] for k in range(n)). Because ways[n][i] reference acc[j] for j < i, we have to update ways first and then make a second pass to update acc. The full code is below.

```
class Solution:
    def numberOfCombinations(self, num: str) -> int:
        if num[0]=='0': return 0
        N=len(num)
        MOD=int(10**9+7)
        ways = (N+1)*[0]
        acc = list(ways)
        for n in range(1,N+1):
            ways[n] = int(n==N or num[n]!='0')
            for i in range(n+1,N+1):
                if i<N and num[i]=='0':
                    ways[i] = 0
                    continue
                ways[i] = (acc[i-n] + ((w := ways[i-n]) and i>=2*n and num[i-2*n:i-n] <= num[i-n:i] and w)) %MOD
            for i in range(n,N+1):
                a = (acc[i] + ways[i]) %MOD
                acc[i] = a
        return acc[N]
```