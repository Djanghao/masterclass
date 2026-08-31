# Python DP+DFS O(n^2) with Explanations

**Author:** flamesofmoon
**Votes:** 40
**Link:** [https://leetcode.com/problems/count-different-palindromic-subsequences/solutions/109510/](https://leetcode.com/problems/count-different-palindromic-subsequences/solutions/109510/)

---

I started out with only the DFS part, got TLE, then designed the DP part `cache` and passed.

The computations are done in `DFS(start, end)` in which I computed the answer for the string `S[start, end]`. `cache` is only to save the results of the computations in order to avoid repetitions.

In `DFS(start, end)`, for instance, for the letter `'a'`, I compute the number of palindromes that start and end with `'a'` in the following way:

First of all, I compute when `'a'` appears first (index `i`) and last (index `j`) in the segment I am considering. Then it breaks down into two cases:

1) If `i` == `j`. There is only one `'a'` in the segment. So the answer is 1.
2) If `i` !=  `j`. The possible palindromes are `'a'`, `'aa'`, and `'a*a'` where `'*'` stands for any palindromes contained in `S[i+1:j]`. The answer would be `DFS(i+1,j) + 2`. Since I want to avoid repetitive computation, I write `cache(i+1,j) + 2` instead.

The worst case time complexity is O(n^2). The best case time complexity is O(n).

Btw, to make this algorithm even faster, one could set `check` to be a 2D list instead of a dictionary, but that would occupy more space.

```
    def countPalindromicSubsequences(self, S):
        """
        :type S: str
        :rtype: int
        """
        def cache(start, end):            # This function serves to save the result
            if end <= start + 2:          # simple cases can be computed directly
                return end - start
            
            if (start, end) not in check: # if not saved, compute and save before returning
                check[(start, end)] = DFS(start, end)
                
            return check[(start, end)]
        
        def DFS(start, end):     #returns the number of distinct palindromes in S[start:end]
            count = 0
            segment = S[start:end]
            
            for x in 'abcd':
                try:
                    i = segment.index(x) + start  # the starting index in S
                    j = segment.rindex(x) + start # the ending index in S
                except:
                    continue
                    
                count += cache(i+1, j) + 2 if i != j else 1

            return count % 1000000007
                
        check = {}
        return cache(0, len(S))
```