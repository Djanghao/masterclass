# Java/Python one pass solution, O(n) time O(n) space using buckets

**Author:** dietpepsi
**Votes:** 447
**Link:** [https://leetcode.com/problems/contains-duplicate-iii/solutions/61639/](https://leetcode.com/problems/contains-duplicate-iii/solutions/61639/)

---

The idea is like the bucket sort algorithm. Suppose we have consecutive buckets covering the range of nums with each bucket a width of (t+1). If there are two item with difference <= t, one of the two will happen:

    (1) the two in the same bucket
    (2) the two in neighbor buckets

For detailed explanation see my blog [here](http://algobox.org/contains-duplicate-iii/)

**Python**

    def containsNearbyAlmostDuplicate(self, nums, k, t):
        if t < 0: return False
        n = len(nums)
        d = {}
        w = t + 1
        for i in xrange(n):
            m = nums[i] / w
            if m in d:
                return True
            if m - 1 in d and abs(nums[i] - d[m - 1]) < w:
                return True
            if m + 1 in d and abs(nums[i] - d[m + 1]) < w:
                return True
            d[m] = nums[i]
            if i >= k: del d[nums[i - k] / w]
        return False


    # 30 / 30 test cases passed.
    # Status: Accepted
    # Runtime: 56 ms
    # 93.81%


**Java**

    private long getID(long i, long w) {
        return i < 0 ? (i + 1) / w - 1 : i / w;
    }

    public boolean containsNearbyAlmostDuplicate(int[] nums, int k, int t) {
        if (t < 0) return false;
        Map<Long, Long> d = new HashMap<>();
        long w = (long)t + 1;
        for (int i = 0; i < nums.length; ++i) {
            long m = getID(nums[i], w);
            if (d.containsKey(m))
                return true;
            if (d.containsKey(m - 1) && Math.abs(nums[i] - d.get(m - 1)) < w)
                return true;
            if (d.containsKey(m + 1) && Math.abs(nums[i] - d.get(m + 1)) < w)
                return true;
            d.put(m, (long)nums[i]);
            if (i >= k) d.remove(getID(nums[i - k], w));
        }
        return false;
    }