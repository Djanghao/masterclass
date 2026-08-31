# brute force and memoization

**Author:** yu6
**Votes:** 29
**Link:** [https://leetcode.com/problems/can-i-win/solutions/95283/](https://leetcode.com/problems/can-i-win/solutions/95283/)

---

1. O(n!) brute force, n is maxChoosableInteger. T(n)=nT(n-1)
```
    bool canIWin(int maxChoosableInteger, int desiredTotal) {
        if(!desiredTotal) return 1;
        return canWin(~0<<maxChoosableInteger, maxChoosableInteger, desiredTotal);
    }
    bool canWin(int pool, int maxint, int tot) {
        if(tot<=0) return 0;
        for(int i=0;i<maxint;i++) {
            int mask = 1<<i;
            if(pool & mask) continue;
            pool|=mask;
            if(!canWin(pool,maxint, tot-i-1)) return 1;
            pool^=mask;
        }
        return 0;
    }
```
2. O(n2^n) Memoization. There is redundant computation in #1. A state with a pool and total may be computed many times. So we can cache the state and reuse it. At first glance, it seems that a state is determined by two values, the pool and the total. However, since the initial total is known, the remaining total is known given the pool. So a state can be identified by the pool only.
```
    bool canIWin(int maxChoosableInteger, int desiredTotal) {
        if(!desiredTotal) return 1;
        if(maxChoosableInteger*(maxChoosableInteger+1)/2<desiredTotal) return 0;
        unordered_map<int,char> mem;
        return canWin(~0<<maxChoosableInteger, maxChoosableInteger, desiredTotal, mem);
    }
    bool canWin(int pool, int maxint, int tot, unordered_map<int,char>& mem) {
        if(tot<=0) return 0;
        auto it = mem.find(pool);
        if(it != mem.end()) return it->second;
        for(int i=0;i<maxint;i++) {
            int mask = 1<<i;
            if(pool & mask) continue;
            pool|=mask;
            if(!canWin(pool,maxint,tot-i-1,mem)) return mem[pool^=mask]=1;
            pool^=mask;
        }
        return mem[pool] = 0;
    }
```
3. Iterative dp. For most dp problems, the next step is to transform recursion with memoization to iterative dp. However, that does not help and is actually pretty bad for this problem. In iterative dp, we have to visit all the 2^n states to get the result. In #2 DFS with memoization, DFS terminates as soon as it finds a way to win. The worst case O(n2^n) rarely happens. So if DFS has early termination condition, then it should be better than dp that visits all the states. Similar problems are [word break](https://discuss.leetcode.com/topic/66356/evolve-from-brute-force-to-optimal-a-review-of-all-solutions) and [Concatenated Words](https://discuss.leetcode.com/topic/78569/a-review-of-top-solutions).