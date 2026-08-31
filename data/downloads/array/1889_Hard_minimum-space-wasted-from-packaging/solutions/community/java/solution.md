# [Java] Binary Search + Prefix Sum

**Author:** nirvana_rsc
**Votes:** 7
**Link:** [https://leetcode.com/problems/minimum-space-wasted-from-packaging/solutions/1254123/](https://leetcode.com/problems/minimum-space-wasted-from-packaging/solutions/1254123/)

---

For each box vendor sort boxes and use upperBound() to check the maximum package we can fit in that size.
```java
    private static final int MOD = (int) (1e9 + 7);

    public int minWastedSpace(int[] packages, int[][] boxes) {
        final int n = packages.length;
        Arrays.sort(packages);
        final long[] pre = new long[n + 1];
        for (int i = 1; i <= n; i++) {
            pre[i] = pre[i - 1] + packages[i - 1];
        }
        long res = (long) 9e18;
        for (int[] box : boxes) {
            Arrays.sort(box);
            if (packages[n - 1] > box[box.length - 1]) {
                continue;
            }
            long curr = 0;
            int prev = 0;
            for (int size : box) {
                if (size < packages[0]) {
                    continue;
                }
                final int next = upperBound(packages, size);
                final long sum = pre[next + 1] - pre[prev];
                final long L = next - prev + 1;
                final long add = (L * size) - sum;
                prev = next + 1;
                curr += add;
            }
            res = Math.min(res, curr);
        }
        return res == (long) 9e18 ? -1 : (int) (res % MOD);
    }

    private static int upperBound(int[] l, int tar) {
        int lo = 0, hi = l.length - 1;
        while (lo < hi) {
            final int mid = lo + hi + 1 >>> 1;
            if (l[mid] > tar) {
                hi = mid - 1;
            } else {
                lo = mid;
            }
        }
        return lo;
    }
```