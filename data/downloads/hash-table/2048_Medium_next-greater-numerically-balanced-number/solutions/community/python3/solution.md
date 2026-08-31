# [Python3] brute-force

**Author:** ye15
**Votes:** 3
**Link:** [https://leetcode.com/problems/next-greater-numerically-balanced-number/solutions/1537537/](https://leetcode.com/problems/next-greater-numerically-balanced-number/solutions/1537537/)

---


```
class Solution:
    def nextBeautifulNumber(self, n: int) -> int:
        while True: 
            n += 1
            nn = n 
            freq = defaultdict(int)
            while nn: 
                nn, d = divmod(nn, 10)
                freq[d] += 1
            if all(k == v for k, v in freq.items()): return n 
```

Backtracking
```
class Solution:
    def nextBeautifulNumber(self, n: int) -> int:
        
        def fn(i, x):
            if i == k:
                if all(d == v for d, v in freq.items() if v): yield x
            else: 
                for d in range(1, k+1):
                    if freq[d] < d <= freq[d] + k - i: 
                        freq[d] += 1
                        yield from fn(i+1, 10*x+d)
                        freq[d] -= 1

        for k in (len(str(n)), len(str(n))+1):
            freq = Counter()
            for val in fn(0, 0):
                if val > n: return val
```