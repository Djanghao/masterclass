# C# Binary Search

**Author:** xiaoping3418
**Votes:** 0
**Link:** [https://leetcode.com/problems/earliest-second-to-mark-indices-i/solutions/4787553/](https://leetcode.com/problems/earliest-second-to-mark-indices-i/solutions/4787553/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
public class Solution {
    public int EarliestSecondToMarkIndices(int[] nums, int[] changeIndices) {
        int n = nums.Length, m = changeIndices.Length;
        List<int>[] v = new List<int>[n];
        
        for (int i = 0; i < n; ++i) v[i] = new List<int>();
        for (int i = 0; i < m; ++i) v[changeIndices[i] - 1].Add(i);

        if (check(nums, v, m - 1) == false) return -1;

        int left = 0, right = m - 1;
        while (left < right) {
            int mid = left + (right - left) / 2;

            if (check(nums, v, mid)) right = mid;
            else left = mid + 1;
        }

        return left + 1;
    }

    private bool check(int[] nums, List<int>[] v, int m) {
        int n = nums.Length;
        int[] data = new int[m + 1];

        for (int i = 0; i < n; ++i) {
            if (v[i].Count == 0 || v[i][0] > m) return false;
            int left = 0, right = v[i].Count - 1;
            while (left < right) {
                int mid = right - (right - left) / 2;
    
                if (v[i][mid] <= m) left = mid;
                else right = mid - 1;
            }
            data[v[i][left]] += nums[i] + 1;
        }

        long sum = 0;
        for (int i = 0; i <= m; ++i) {
            sum += data[i];
            if (sum > i + 1) return false;
        }

        return true;
    }
}
```