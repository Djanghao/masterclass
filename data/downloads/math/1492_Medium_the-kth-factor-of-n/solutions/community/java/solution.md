# Java simple Loop O(sqrt(n))

**Author:** hobiter
**Votes:** 58
**Link:** [https://leetcode.com/problems/the-kth-factor-of-n/solutions/708548/](https://leetcode.com/problems/the-kth-factor-of-n/solutions/708548/)

---

Just loop until square root of n, by caching the other facters to a list.
i will track factors from 1, List will cache factors from n, then converge to sqrt(n);
just try count the kth, based on above logic.
```
    public int kthFactor(int n, int k) {
        int cnt = 0;
        List<Integer> l = new ArrayList<>();
        // loop i from small to large
        for(int i = 1; i * i <= n; i++) {
            if (n % i == 0) {
                if (i * i != n) l.add(n / i); // add factor from large to small.
                if (++cnt == k) return i; // i is the kth, found.
            }
        }
        if (l.size() + cnt < k) return -1;
        // if kth is not in the first cnt num of i's, keep counting 
        // from end to front of l list.
        return l.get(l.size() - (k - cnt));
    }
```