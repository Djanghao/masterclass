# Java two pointer solution with O(sort)

**Author:** IIIIIIII
**Votes:** 19
**Link:** [https://leetcode.com/problems/count-pairs-in-two-arrays/solutions/1250004/](https://leetcode.com/problems/count-pairs-in-two-arrays/solutions/1250004/)

---

We convert the solution from nums1[i] + nums1[j] > nums2[i] + nums2[j] to (nums1[i] - nums2[i]) + (nums1[i] - nums2[j]) > 0.
And with diff arraya diff[i] = num1[i] - nums2[i], the goal is to solve how many pairs of i,j we can find such that diff[i] + diff[j] > 0.
With diff array sorted, we can find the pair by two pointers.

```
public long countPairs(int[] nums1, int[] nums2) {
        int n = nums1.length;
        int[] diff = new int[n];
        for (int i = 0; i < n; i++) {
            diff[i] = nums1[i] - nums2[i];
        }
        Arrays.sort(diff);
        int j = n - 1;
        long cnt = 0;
        for (int i = 0; i < n; i++) {
            while (j > i && diff[i] + diff[j] > 0) {
                j--;
            }
            if (j >= i) {
                cnt += n - j - 1;
            } else {
                cnt += n - i - 1;
            }
        }
        return cnt;
    }
```