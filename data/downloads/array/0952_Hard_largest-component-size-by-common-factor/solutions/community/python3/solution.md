# [Python3] union-find

**Author:** ye15
**Votes:** 4
**Link:** [https://leetcode.com/problems/largest-component-size-by-common-factor/solutions/1546345/](https://leetcode.com/problems/largest-component-size-by-common-factor/solutions/1546345/)

---


`O(MlogM)` using sieve
```
class UnionFind: 
    
    def __init__(self, n):
        self.parent = list(range(n))
        self.rank = [1]*n
        
    def find(self, p): 
        if p != self.parent[p]: 
            self.parent[p] = self.find(self.parent[p])
        return self.parent[p]
    
    def union(self, p, q): 
        prt, qrt = self.find(p), self.find(q)
        if prt == qrt: return False 
        if self.rank[prt] > self.rank[qrt]: prt, qrt = qrt, prt
        self.parent[prt] = qrt
        self.rank[qrt] += self.rank[prt]
        return True 


class Solution:
    def largestComponentSize(self, A: List[int]) -> int:
        m = max(A)
        uf = UnionFind(m+1)
        seen = set(A)
        
        # modified sieve of eratosthenes 
        sieve = [1]*(m+1)
        sieve[0] = sieve[1] = 0 
        for k in range(m//2+1): 
            if sieve[k]: 
                prev = k if k in seen else 0
                for x in range(2*k, m+1, k): 
                    sieve[x] = 0
                    if x in seen: 
                        if prev: uf.union(prev, x)
                        else: prev = x
        return max(uf.rank)
```

**Related problems**
[952. Largest Component Size by Common Factor](https://leetcode.com/problems/largest-component-size-by-common-factor/discuss/1546345/Python3-union-find)
[1998. GCD Sort of an Array](https://leetcode.com/problems/gcd-sort-of-an-array/discuss/1445278/Python3-union-find)

Alternative implemetation `O(Nsqrt(M))` assuming `O(1)` union & find.
```
class Solution:
    def largestComponentSize(self, nums: List[int]) -> int:
        m = max(nums)
        uf = UnionFind(m+1)
        for x in nums: 
            for p in range(2, int(sqrt(x))+1): 
                if x%p == 0: 
                    uf.union(x, p)
                    uf.union(x, x//p)
        freq = Counter(uf.find(x) for x in nums)
        return max(freq.values())
```

Alternative implementation using `spf` `O((M+N)logM)`
```
class Solution:
    def largestComponentSize(self, nums: List[int]) -> int:
        m = max(nums)
        spf = list(range(m+1))
        for x in range(4, m+1, 2): spf[x] = 2
        for x in range(3, int(sqrt(m+1))+1): 
            if spf[x] == x: 
                for xx in range(x*x, m+1, x): 
                    spf[xx] = x 
        
        uf = UnionFind(len(nums))
        mp = {}
        for i, x in enumerate(nums): 
            while x > 1: 
                if spf[x] in mp: uf.union(i, mp[spf[x]])
                else: mp[spf[x]] = i
                x //= spf[x]
        return max(uf.rank)
```