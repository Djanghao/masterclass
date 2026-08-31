# [Python] Suffix Array + LCP O(N logN)

**Author:** chexex
**Votes:** 27
**Link:** [https://leetcode.com/problems/longest-duplicate-substring/solutions/1030868/](https://leetcode.com/problems/longest-duplicate-substring/solutions/1030868/)

---

##### Steps
1. Build [Suffix Array](https://en.wikipedia.org/wiki/Suffix_array) (Manber Myers algorithm O(n log n))
2. Construct [LCP](https://en.wikipedia.org/wiki/LCP_array) from the suffix array we've built (kasai algorithm O(n))
3. Get maximum value from the LCP array we've built and it's position. `length` and `pos` O(n)
4. Get value from SA (suffix array) by index we've got previously. `sa_pos` O(1)
5. Return substring starting from `sa_pos` and ending with `sa_pos + length` O(n)

##### Example
`LEETCOODELEET`

| Suffix Array  | Rank    | Letters                      | LCP  |
|:------------:|:-------:|:-------------------:|:-----:|
| 4                   |  8          | coodeleet                |   0     |
| 7                   | 3           | deleet                      |   0     |
| 10                 | 6           | eet                           |   3     |
| 1                   | 12         | eetcoodeleet          |   1     |
| 8                   | 0           | eleet                        |   1     |
| 11                 | 10        | et                             |   2     |
| 2                   | 9           | etcoodeleet            |   0     |
|\u2192 9                | 1           | **leet**                  |   4 \u2190 |
| 0                   | 4           | **leet**coodeleet |   0     |
| 6                   | 7           | odeleet                   |   1     |
| 5                   | 2           | oodeleet                 |   0     |
| 12                 | 5           | t                              |   1     |
| 3                   | 11         | tcoodeleet             |   0     |


##### Code
```python
from collections import defaultdict
from operator import itemgetter


class Solution:
    def kasai(self, s, sa):
        n = len(sa)
        rank = [0] * n
        for i in range(n):
            rank[sa[i]] = i
        lcp = [0] * n
        k = 0
        for i in range(n):
            if rank[i] == n - 1:
                k = 0
                continue
            j = sa[rank[i] + 1]
            while j + k < n and i + k < n and s[i + k] == s[j + k]:
                k += 1
            lcp[rank[i]] = k
            k = max(0, k - 1)
        return lcp

    def manber_myers(self, s, buckets, order=1):
        d = defaultdict(list)
        for bucket in buckets:
            d[s[bucket:bucket+order]].append(bucket)

        res = []
        for k, v in sorted(d.items()):
            if len(v) > 1:
                res.extend(self.manber_myers(s, v, order * 2))
            else:
                res.append(v[0])
        return res

    def longestDupSubstring(self, s: str) -> str:
        sa = self.manber_myers(s, range(len(s)), 1)
        lcp = self.kasai(s, sa)
        if not any(lcp):
            return ""

        pos, length = max(enumerate(lcp), key=itemgetter(1))
        return s[sa[pos] : sa[pos] + length]
```

##### Time complexity: O(N log N)
##### Space complexity: O(N)

##### References
* [Notes on Manber & Myers algorithm](http://www.larsson.dogma.net/tr204.pdf) page 2
* [Manber & Myers short python code](https://github.com/benfulton/Algorithmic-Alley/blob/master/AlgorithmicAlley/SuffixArrays/sa.py#L7-L21)
* [Ben Fulton on his short python code above](http://algorithmicalley.com/archive/2013/06/30/suffix-arrays.aspx)
* [SO step by step explanation on how to build LCP with Kasai](https://stackoverflow.com/a/63104083)

##### More suffix array problems
[1062. Longest Repeating Substring](https://leetcode.com/problems/longest-repeating-substring/) `premium`
[1698. Number of Distinct Substrings in a String](https://leetcode.com/problems/number-of-distinct-substrings-in-a-string/) `premium`

##### Notes
###### Why kasai is O(N) and not O(n^2)?

* Everything except the while loop `while i + k < n and j + k < n and s[i + k] == s[j + k]` takes linear time.
* Each round in the loop increments `k`. Since `k` is decremented at most n times `k = max(k - 1, 0)` and cannot grow larger than n, the loop is executed O(n) times in total.
More on this in paper "[Linear-Time Longest-Common-Prefix
Computation in Suffix Arrays and Its
Applications](http://web.cs.iastate.edu/~cs548/references/linear_lcp.pdf)" pages 184-186