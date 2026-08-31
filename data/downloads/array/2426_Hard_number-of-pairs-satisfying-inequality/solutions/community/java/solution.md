# 2 O(nlogn) solutions | Merge Sort & BIT | Java

**Author:** bl2003
**Votes:** 13
**Link:** [https://leetcode.com/problems/number-of-pairs-satisfying-inequality/solutions/2648104/](https://leetcode.com/problems/number-of-pairs-satisfying-inequality/solutions/2648104/)

---

# Approach
- To find the number of pairs we first need to rearrange the equation:
`nums1[i] - nums1[j] <= nums2[i] - nums2[j] + diff`
- Move all i to the left and all j to the right:
`nums1[i] - nums2[i] <= nums1[j] - nums2[j] + diff`
- Define `nums[i] = nums1[i] - nums2[i]`
- Find the number of pairs i,j such that `nums[i] <= nums[j] + diff`
- This can be done with a Binary Tree data structure like a Fenwick Tree - BIT (Solution 1) or a segment tree
- This can also be done using a modified merge sort (Solution 2)
- Time complexity O(nlogn)
- Related problem:  [493 Reverse pairs](https://leetcode.com/problems/reverse-pairs/)
  - Also read [this thread for a very detailed explanation of the principles](https://leetcode.com/problems/reverse-pairs/discuss/97268/General-principles-behind-problems-similar-to-%22Reverse-Pairs%22)

# Solution 1 with a Fenwick tree (BIT)
- Use SHIFT to map all negative numbers into a positive number range
- Get the count of numbers already in the BIT satisfying `x <= current number + diff`
- Then add the current number to the BIT
```java
    private int SHIFT = 30000;
    public long numberOfPairs(int[] nums1, int[] nums2, int diff) {
        int n = nums1.length;
        BIT bit = new BIT(SHIFT * 2);
        long res = 0L;
        for (int i = 0; i < n; i++) {
            int ndiff = nums1[i] - nums2[i];
            res += bit.get(ndiff + diff + SHIFT);
            bit.add(ndiff + SHIFT);
        }
        return res;
    }
    // BIT: both add & get O(logN)
    private class BIT {
        private int[] bit;
        public BIT(int n) {
            bit = new int[n+1];
        }
        
        public void add(int val) {
            if (val <= 0) return;
            for (int i = val; i < bit.length; i += (i & -i)) bit[i]++;
        }
        
        public int get(int val) {
            int res = 0;
            for (int i = val; i > 0; i -= (i & -i)) res += bit[i];
            return res;
        }
    }
```
# Solution 2 with a modified Merge Sort
- Divide and conquer
- Sort left and right halves recursively
- Then merge sorted halves, and while merging find the number of pairs satisfying inequality
```java
    public long numberOfPairs(int[] nums1, int[] nums2, int diff) {
        int n = nums1.length;
        long[] nums = new long[n];
        for (int i = 0; i < n; i++) nums[i] = nums1[i] - nums2[i];
        long[] tmp = Arrays.copyOf(nums, n);
        return sort(nums, tmp, 0, n-1, diff);
    }
    // sort O(NlogN)
    private long sort(long[] nums, long[] tmp, int lo, int hi, int diff) {
        if (lo == hi) return 0L;
        int mid = lo + (hi - lo) / 2;
        long res = 0L;
        res += sort(nums, tmp, lo, mid, diff);
        res += sort(nums, tmp, mid+1, hi, diff);
        res += merge(nums, tmp, lo, mid, hi, diff);
        return res;
    }
    // merge 2*N = O(N)
    private long merge(long[] nums, long[] tmp, int lo, int mid, int hi, int diff) {
        long res = 0L;
        // find the count of pairs x <= y + diff in 2 sorted halves
        for (int i = lo, j = mid+1; i <= mid && j <= hi; i++) {
            while (j <= hi && nums[i] > nums[j] + diff) j++;
            res += hi-j+1;
        }
        // merge 2 sorted halves
        for (int i = lo, j = mid+1, k = lo; i <= mid || j <= hi; k++) {
            if (j > hi || (i <= mid && nums[i] < nums[j])) {
                tmp[k] = nums[i++];
            } else {
                tmp[k] = nums[j++];
            }
        }
        System.arraycopy(tmp, lo, nums, lo, hi-lo+1); // tmp -> nums
        return res;
    }
```
**Please upvote if you like my solutions. Thank you!**