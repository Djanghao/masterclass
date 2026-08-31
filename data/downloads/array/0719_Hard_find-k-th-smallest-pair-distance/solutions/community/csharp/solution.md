# Find K-th smallest pair distance

**Author:** r9n
**Votes:** 10
**Link:** [https://leetcode.com/problems/find-k-th-smallest-pair-distance/solutions/5635855/](https://leetcode.com/problems/find-k-th-smallest-pair-distance/solutions/5635855/)

---

```
public class Solution {
    public int SmallestDistancePair(int[] nums, int k) {
        Array.Sort(nums);
        int low = 0;
        int high = nums[nums.Length - 1] - nums[0];

        while (low < high) {
            int mid = low + (high - low) / 2;
            if (CountPairs(nums, mid) < k) {
                low = mid + 1;
            } else {
                high = mid;
            }
        }

        return low;
    }

    private int CountPairs(int[] nums, int maxDistance) {
        int count = 0;
        int left = 0;

        for (int right = 1; right < nums.Length; right++) {
            while (nums[right] - nums[left] > maxDistance) {
                left++;
            }
            count += right - left;
        }

        return count;
    }
}

```