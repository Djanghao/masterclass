# C++ Binary Search explained

**Author:** Robbinb1993
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-average-subarray-ii/solutions/4342072/](https://leetcode.com/problems/maximum-average-subarray-ii/solutions/4342072/)

---


# Approach
The approach described in the editorial has been used. 

In each binary search iteration, for each element in the range $$[1, K]$$ (1-indexed), we add its value minus the current binary search $$mid$$ average value to the average offset sum ($$sum$$). If the resulting sum is greater or equal than 0, we know at least this average is possible. Otherwise (if the value is negative) we will follow this greedy approach: iteratively add elements to the right of the segment added so far. Now suppose there are currently $$M \\gt K$$ elements in this segment. Then we can extract at most $$M - K$$ elements from the prefix of this segment, and we still have a valid segment. So we will extract the prefix sum in the range $$[1, M - K]$$ with the smallest value from our current average offset sum ($$sum$$) and check again if the current segment has a value $$\\ge 0$$. If so we return true, because we found a segment with an average value of at least $$M$$. Finally, if we reached the end of the $$nums$$ array and we found no segment with at least an average value of $$M$$, we return false, and the binary search will try a smaller value in the next iteration.

# Complexity
- Time complexity:
$$O\\left(N \\log_2 \\left(\\frac{\	ext{max\\_val} - \	ext{min\\_val}}{1e-5}\\right)\\right)
$$

- Space complexity:
$$O(1)$$

# Code
```
class Solution {
public:
   bool possible(const double M, const vector<int>& nums, const int k) {
      double sum = 0;
      for (int i = 0; i < k; i++) {
         sum += nums[i] - M;
      }
      if (sum >= 0) {
         return true;
      }
      int lIdx = 0;
      double prefSum = 0;
      double mnPrefSum = 0;

      for (int i = k; i < int(nums.size()); i++) {
         sum += nums[i] - M;
         prefSum += nums[lIdx++] - M;
         mnPrefSum = min(mnPrefSum, prefSum);
         if (sum - mnPrefSum >= 0) {
            return true;
         }
      }
      return false;
   }

   double findMaxAverage(vector<int>& nums, int k) {
      double L = INT_MAX;
      double R = INT_MIN;

      for (auto& v : nums) {
         L = min(L, double(v));
         R = max(R, double(v));
      }

      while (R - L > 1e-5) {
         double M = (L + R) / 2.0;
         if (possible(M, nums, k)) {
            L = M;
         }
         else {
            R = M;
         }
      }

      return L;
   }
};
```