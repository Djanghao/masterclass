# [Python] Suffix Array + LCP O(N logN)

**Author:** chexex
**Votes:** 22
**Link:** [https://leetcode.com/problems/number-of-distinct-substrings-in-a-string/solutions/1010936/](https://leetcode.com/problems/number-of-distinct-substrings-in-a-string/solutions/1010936/)

---

##### Steps
1. Build [Suffix Array](https://en.wikipedia.org/wiki/Suffix_array) (Manber Myers algorithm O(n log n))
2. Construct [LCP](https://en.wikipedia.org/wiki/LCP_array) from the suffix array we've built (kasai algorithm O(n))
3. Get total number of substrings [1+2+3+4 Wiki reference](https://en.wikipedia.org/wiki/1_%2B_2_%2B_3_%2B_4_%2B_%E2%8B%AF)
4. Subtract sum of all common prefixes `sum(lcp)` from our total number of substrings

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
| 9                   | 1           | **leet**                  |   4 \u2190 |
| 0                   | 4           | **leet**coodeleet |   0 \u2190 |
| 6                   | 7           | odeleet                   |   1     |
| 5                   | 2           | oodeleet                 |   0     |
| 12                 | 5           | t                              |   1     |
| 3                   | 11         | tcoodeleet             |   0     |

##### Code
```python
class Solution:
    def build_lcp(self, s, sa):
        """
        Kasai algorithm to build LCP
        s: string
        sa: suffix array
        rank: inverse suffix array

        k: number of common prefixes between suffixes
        """
        n = len(sa)
        rank = [0] * n
        for i in range(n):
            rank[sa[i]] = i

        k = 0
        lcp = [0] * n
        for i in range(n):
            if rank[i] == n - 1:
                k = 0
                continue
            j = sa[rank[i] + 1]
            while i + k < n and j + k < n and s[i + k] == s[j + k]:
                k += 1
            lcp[rank[i]] = k
            k = max(k - 1, 0)
        return lcp

    def sort_bucket(self, s, buckets, order):
        d = defaultdict(list)
        for bucket in buckets: 
            key = s[bucket : bucket + order]
            d[key].append(bucket)

        result = []
        for k, v in sorted(d.items()):
            if len(v) > 1: 
                result.extend(self.sort_bucket(s, v, order << 1))  # or `order * 2`
            else: 
                result.append(v[0])
        print(d)
        return result 

    def suffix_array_manber_myers(self, s): 
        return self.sort_bucket(s, (range(len(s))), 1)

    def countDistinct(self, s: str) -> int:
        """
        Example:
        -----
        String: azaza
        -----
        Total number of substrings: n(n + 1) / 2
        -------------------
        a az aza azaz azaza
        z za zaz zaza
        a az aza
        z za
        z
        --------------------
        15
        """
        sa = self.suffix_array_manber_myers(s)
        lcp = self.build_lcp(s, sa)
        n = len(s)
        return ((n * (n + 1)) // 2) - sum(lcp)

```

##### Time complexity: O(N log N)
##### Space complexity: O(N)

##### References
* [Suffix array finding unique substrings by WilliamFiset](https://www.youtube.com/watch?v=m2lZRmMjebw&ab_channel=WilliamFiset)
* [Manber & Myers short python code](https://github.com/benfulton/Algorithmic-Alley/blob/master/AlgorithmicAlley/SuffixArrays/sa.py#L7-L21)
* [SO step by step explanation on how to build LCP with Kasai](https://stackoverflow.com/a/63104083)

##### Notes
###### Why kasai is O(N) and not O(n^2)?

* Everything except the while loop `while i + k < n and j + k < n and s[i + k] == s[j + k]` takes linear time.
* Each round in the loop increments `k`. Since `k` is decremented at most n times `k = max(k - 1, 0)` and cannot grow larger than n, the loop is executed O(n) times in total.
More on this in paper "[Linear-Time Longest-Common-Prefix
Computation in Suffix Arrays and Its
Applications](http://web.cs.iastate.edu/~cs548/references/linear_lcp.pdf)" pages 184-186