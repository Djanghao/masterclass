# [Python] Clean & Simple, bitmask

**Author:** yo1995
**Votes:** 39
**Link:** [https://leetcode.com/problems/maximum-product-of-the-length-of-two-palindromic-subsequences/solutions/1458544/](https://leetcode.com/problems/maximum-product-of-the-length-of-two-palindromic-subsequences/solutions/1458544/)

---

```python
class Solution:
    def maxProduct(self, s: str) -> int:
        # n <= 12, which means the search space is small
        n = len(s)
        arr = []
        
        for mask in range(1, 1<<n):
            subseq = ''
            for i in range(n):
                # convert the bitmask to the actual subsequence
                if mask & (1 << i) > 0:
                    subseq += s[i]
            if subseq == subseq[::-1]:
                arr.append((mask, len(subseq)))
        
        result = 1
        for (mask1, len1), (mask2, len2) in product(arr, arr):
            # disjoint
            if mask1 & mask2 == 0:
                result = max(result, len1 * len2)
        return result
```

A slightly improved version, to break early when checking the results

```python
class Solution:
    def maxProduct(self, s: str) -> int:
        # n <= 12, which means the search space is small
        n = len(s)
        arr = []
        
        for mask in range(1, 1<<n):
            subseq = ''
            for i in range(n):
                # convert the bitmask to the actual subsequence
                if mask & (1 << i) > 0:
                    subseq += s[i]
            if subseq == subseq[::-1]:
                arr.append((mask, len(subseq)))
        
        arr.sort(key=lambda x: x[1], reverse=True)
        result = 1
        for i in range(len(arr)):
            mask1, len1 = arr[i]
            # break early
            if len1 ** 2 < result: break
            for j in range(i+1, len(arr)):
                mask2, len2 = arr[j]
                # disjoint
                if mask1 & mask2 == 0 and len1 * len2 > result:
                    result = len1 * len2
                    break
        
        return result
```