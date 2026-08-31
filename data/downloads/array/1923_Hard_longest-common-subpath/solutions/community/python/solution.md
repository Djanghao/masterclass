# binary search for length and generate a twin-hash of subpath

**Author:** 495
**Votes:** 11
**Link:** [https://leetcode.com/problems/longest-common-subpath/solutions/1315456/](https://leetcode.com/problems/longest-common-subpath/solutions/1315456/)

---

Credits @knighthoodcode for suggesting this idea in another thread

### Approach
* Binary search for the longest length of sub path.
* Get sub path signature as a concatenation of two hash values obtained using rabin-karp algorithm, but using two sets of `base` and `mod` values. This reduces the probability of collisions drastically.

```
    def longestCommonSubpath(self, n: int, paths: List[List[int]]) -> int:

        def getSubPathsHashes(array, l):
            base1, mod1 = 101, 999979
            base2, mod2 = 103, 999959
            
            h1, P1 = 0, pow(base1, l-1, mod1)
            h2, P2 = 0, pow(base2, l-1, mod2)

            for i in range(l):
                h1 = (h1 * base1 + array[i]) % mod1
                h2 = (h2 * base2 + array[i]) % mod2

            sub_path_hashset = set([str(h1)+str(h2)])

            for i in range(len(array)-l):
                h1 = ((h1 - array[i]*P1)*base1 + array[i+l]) % mod1
                h2 = ((h2 - array[i]*P2)*base2 + array[i+l]) % mod2           
                sub_path_hashset.add(str(h1)+str(h2))
                
            return sub_path_hashset
        
        lo, hi = 0, min(len(path) for path in paths) + 1
        
        while lo < hi:
            mid = (hi+lo) // 2
            lcs = set.intersection(*[getSubPathsHashes(path, mid) for path in paths])
            if lcs: lo = mid+1
            else:   hi = mid
        
        return lo-1
```