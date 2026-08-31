# Python 1032ms beat 100% time & space

**Author:** bottlecapper
**Votes:** 16
**Link:** [https://leetcode.com/problems/largest-component-size-by-common-factor/solutions/581394/](https://leetcode.com/problems/largest-component-size-by-common-factor/solutions/581394/)

---

**Step 1: get primes less than sqrt(max(A))
Step 2: compute factors for each number in A
Step 3: use union-find to link two primes if they are factors of the same number in A
Step 4: for each number in A, add to its union (the union represented by its smallest prime)**
```
class Solution:
    def largestComponentSize(self, A: List[int]) -> int:
        primes = []
        for x in range(2, int(max(A)**0.5)+1):
            for y in primes:
                if x % y == 0:
                    break
            else:
                primes.append(x)
    
        factors = collections.defaultdict(list)         # compute factors of each 'a'
        for a in A:
            x = a
            for p in primes:
                if p*p > x:
                    break
                if x % p == 0:
                    factors[a].append(p)
                    while x % p == 0:
                        x //= p
            if x > 1:                                   # a new prime found
                factors[a].append(x)
                primes.append(x)
                
        primes = list(set(primes))
        n = len(primes)
        p2i = {p: i for i,p in enumerate(primes)}       # prime to index
        
        parent = [i for i in range(n)]                  # union-find on primes
        
        def find(i):
            if i != parent[i]:
                parent[i] = find(parent[i])
            return parent[i]
        
        def union(i,j):
            pi, pj = find(i), find(j)
            if pi != pj:
                parent[pi] = pj

        for a in A:
            if factors[a]:
                p0 = factors[a][0]
                for p in factors[a][1:]:                # link two primes if they are factors of 'a'
                    union(p2i[p0], p2i[p])
        
        count = collections.Counter(find(p2i[factors[a][0]]) for a in A if factors[a])      # each 'a' corresponds to a prime index
        return max(count.values())
```