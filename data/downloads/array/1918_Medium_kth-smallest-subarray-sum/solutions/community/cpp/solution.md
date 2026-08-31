# Binary Search for Result, Sliding Window to Check

**Author:** Benlegend
**Votes:** 0
**Link:** [https://leetcode.com/problems/kth-smallest-subarray-sum/solutions/3782485/](https://leetcode.com/problems/kth-smallest-subarray-sum/solutions/3782485/)

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
class Solution {
public:
    /*
    Observations:
    1. Given an array of size n, there are n * (n + 1) / 2 subarrays.
       We know 1 <= n and k <= n * (n + 1) / 2.
    2. Given value cap, how many subarrays in nums have sum <= cap?
       We can apply sliding window to find out.
       At each j, march on i as long as window sum > cap.
       At last j - i + 1 subarrays ending at j have sum <= cap.

       This procedure costs O(n) time O(1) space.
    3. Let lo = min(nums) hi = sum(nums). We want to search for the
       leftmost value mid, such that count(subarrays with sum <= mid) >= k.

       nums = [2,5,5,5,3]
       sums = [2,3,5,5,5,7,8,10,10,12,13,15,20] k = 3

       We perform search in range [2, 20]. Not at every value there
       exists subarrays with sum of value, e.g., 4 or 6. Although there
       is no subarray with sum 6, we can count subarrays with sum < 6.
       At some value there exists multiple subarrays with sum of value,
       for example 5, 3 subarrays sum to 5.

       Let count(value) denote the count of subarrays with sum <= value.
                2 3 4 5 6 7
       count    1 2 2 5 5 6

       We can see the count sequence monotonically non-decrease, and
       might jump in > 1 gap between adjacent elements.

       That's the reason we search for leftmost value with count(value) >= k
       not == k. For example k = 4 -> value = 5.

       binary search; sliding window;
       O(nlogN) time O(1) space
    */
    int kthSmallestSubarraySum(vector<int>& nums, int k) {
        // for convenience
        int lo = 0, hi = 1e9;
        while (lo < hi) {
            int mid = lo + (hi - lo) / 2;

            int count = 0, sum = 0;
            for (int i = 0, j = 0; j < nums.size(); j++) {
                sum += nums[j];
                while (mid < sum) {
                    sum -= nums[i++];
                }
                count += j - i + 1;
            }

            if (count >= k) {
                hi = mid;
            } else {
                lo = mid + 1;
            }
        }

        return lo;
    }
};
```