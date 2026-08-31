# [Java] Sort + Prefix Sum preprocessing and scan, O(NLogN) Solution (45ms, beats 100%)

**Author:** hdchen
**Votes:** 4
**Link:** [https://leetcode.com/problems/maximum-total-beauty-of-the-gardens/solutions/1932731/](https://leetcode.com/problems/maximum-total-beauty-of-the-gardens/solutions/1932731/)

---

**Ituition**
* We want to add complete garden gradually and try to maximize the minimum number of the incomplete gardens.
* Apparently sort can help achieve the goal.
* For the complete garden, we can try to increase the number of complete gardens from the end of the array. In this way, we can use the minimum number of flowers to do it.
* To maximize the minimum number of incomplete garden, we can maintain another pointer to test if it can be the mimumum value after we plant the remaining flowers.
* If it can be the minimum value, it means all the other values appears before it must have the same value. If we have a prefix sum array, we can calculate if it's doable quickly.
* As the remaining flowers will keep decreasing, the pointer we used must move to the left side accordingly. Hence, we can have O(N) search solution here.
* We also need to handle the case - when we make up the minimum value, we may still have some flowers left and we should try to use all of them.
* Overall time complexity is O(NLogN) as (1) Sorting O(NLogN) (2) prefix sum O(N) (3) Two pointer search O(N)

```
class Solution {
    public long maximumBeauty(int[] flowers, long newFlowers, int target, int full, int partial) {
        int n = flowers.length;
        long[] prefix = new long[n + 1];
        Arrays.sort(flowers);
        for (int i = 0; i < n; ++i) prefix[i + 1] = prefix[i] + Math.min(flowers[i], target);
        long res = 0;
        for (int c = 0, i = n - 1; c <= n; ++c) {
            long remain = prefix[n] - prefix[n - c] + newFlowers - c * (long) target, min = 0;
            if (0 > remain) break;
            i = Math.min(i, n - c - 1);
            while (0 <= i && (target <= flowers[i] || flowers[i] * (long) (i + 1) - prefix[i + 1] > remain)) i--;
            if (0 <= i) {
                long dif = flowers[i] * (long) (i + 1) - prefix[i + 1];
                min = Math.min(target - 1, flowers[i] + (remain - dif) / (i + 1));
                if (i + 1 < n - c) min = Math.min(min, flowers[i + 1]);
            }
            res = Math.max(res, c * (long) full + min * (long) partial);
        }
        return res;
    }
}
```