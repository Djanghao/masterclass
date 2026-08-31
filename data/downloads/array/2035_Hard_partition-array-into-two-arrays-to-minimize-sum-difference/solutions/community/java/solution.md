# Java meet-in-the-middle and two pointers. Time - O(n * 2^(n/2)), Space - O(2^(n^2))

**Author:** rs9
**Votes:** 18
**Link:** [https://leetcode.com/problems/partition-array-into-two-arrays-to-minimize-sum-difference/solutions/1513541/](https://leetcode.com/problems/partition-array-into-two-arrays-to-minimize-sum-difference/solutions/1513541/)

---

It's obviously NP-hard problem.
We divide our number array on two parts. Generate for both parts all possible splits and compute their sums difference.
Then for two lists of generated splits we try find two elements in them such that their absolute difference minimized.

```
import java.util.Arrays;

public class Solution {
    public int minimumDifference(int[] nums) {
        int n = nums.length;
        if (n == 2) return Math.abs(nums[1] - nums[0]);       
        int[][] lists1 = generate(Arrays.copyOfRange(nums, 0, n / 2));
        int[][] lists2 = generate(Arrays.copyOfRange(nums, n / 2, n));
        int ans = Integer.MAX_VALUE;
        for (int d = 0; d <= n / 2; d++) {
            int[] arr1 = lists1[d], arr2 = lists2[d];
            int k = arr1.length;
            int i1 = 0, i2 = 0; // we use two pointers to find two elements in arr1, arr2 with minimum absolute difference
            while (i1 < k && i2 < k) {
                int diff = arr1[i1] - arr2[i2];
                ans = Math.min(ans, Math.abs(diff));
                if (diff <= 0) i1++;
                if (diff >= 0) i2++;
            }
        }
        return ans;
    }

    private static int[][] generate(int[] nums) {
        int n = nums.length;
        int total = 0;
        for (int num : nums) total += num;
        int[][] ans = new int[n + 1][];
        int[] pos = new int[n + 1];
        for (int i = 0, binomial = 1; i <= n; i++) {
            ans[i] = new int[binomial]; // number of ways to choose i from n = binomial(i,n)
            binomial = binomial * (n - i) / (i + 1);
        }
        int maxValue = 1 << n;
        for (int key = 0; key < maxValue; key++) {
            int sum1 = 0;
            for (int i = 0; i < n; i++) {
                if ((key >> i & 1) == 1) sum1 += nums[i];
            }
            int sum2 = total - sum1;
            int bits = Integer.bitCount(key);
            ans[bits][pos[bits]++] = sum1 - sum2;
        }
        for (int[] arr : ans) Arrays.sort(arr);
        return ans;
    }
}
```

Space complexity - O(2^(n/2)) because number of ways to split n/2 elements is 2^(n/2)
Time complexity - O(2^(n/2) * n) as we compute each split's sum and sort them.