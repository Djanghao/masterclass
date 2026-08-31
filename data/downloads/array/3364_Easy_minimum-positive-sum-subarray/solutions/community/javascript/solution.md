# 🔥 Best Sliding Window Solution 💨 || Beats 🚀 100% 🌟

**Author:** mansimittal935
**Votes:** 2
**Link:** [https://leetcode.com/problems/minimum-positive-sum-subarray/solutions/6078274/](https://leetcode.com/problems/minimum-positive-sum-subarray/solutions/6078274/)

---

# Intuition
The problem aims to find the smallest positive sum of any subarray whose length lies between l and r. By sliding a window of each size i in this range over the array, we can calculate the sum efficiently and update the minimum if it meets the criteria.

---

# Approach
 Use a nested loop where the outer loop iterates through all possible lengths between l and r, and the inner loop uses a sliding window technique to compute the sum of subarrays for each length. Update the minimum positive sum if the current window's sum is greater than zero, and return -1 if no valid sum is found.

--- 

# Complexity
- Time complexity:
-     O((r - l + 1) * n), where n is the array size, due to the sliding window for each subarray length.
- Space complexity:
-     O(1), as no additional space is used apart from variables.
# Code
```cpp []
class Solution {
public:
    int minimumSumSubarray(vector<int>& nums, int l, int r) {
        
        int minSum = INT_MAX;
        for(int i = l; i <= r; i++) {
            int currSum = 0;

            for(int j = 0; j < i; j++) {
                currSum += nums[j];
            }
            if(currSum > 0) {
                minSum = min(minSum, currSum);
            }

            int low = 0, high = i;

            while(high < nums.size()) {
                currSum -= nums[low];
                currSum += nums[high];

                low ++, high++;

                if(currSum > 0) {
                    minSum = min(minSum, currSum);
                }
            }
        }
        if(minSum == INT_MAX) return -1;
        return minSum;
    }
};
```
```javascript []
class Solution {
    minimumSumSubarray(nums, l, r) {
        let minSum = Infinity;
        for (let i = l; i <= r; i++) {
            let currSum = 0;

            for (let j = 0; j < i; j++) {
                currSum += nums[j];
            }
            if (currSum > 0) {
                minSum = Math.min(minSum, currSum);
            }

            let low = 0, high = i;

            while (high < nums.length) {
                currSum -= nums[low];
                currSum += nums[high];

                low++, high++;

                if (currSum > 0) {
                    minSum = Math.min(minSum, currSum);
                }
            }
        }
        return minSum === Infinity ? -1 : minSum;
    }
}
```
```python []
class Solution:
    def minimumSumSubarray(self, nums, l, r):
        minSum = float('inf')
        for i in range(l, r + 1):
            currSum = 0

            for j in range(i):
                currSum += nums[j]
            if currSum > 0:
                minSum = min(minSum, currSum)

            low, high = 0, i

            while high < len(nums):
                currSum -= nums[low]
                currSum += nums[high]

                low += 1
                high += 1

                if currSum > 0:
                    minSum = min(minSum, currSum)

        if minSum == float('inf'):
            return -1
        return minSum
```
```ruby []
class Solution
  def minimum_sum_subarray(nums, l, r)
    min_sum = Float::INFINITY
    (l..r).each do |i|
      curr_sum = 0

      (0...i).each do |j|
        curr_sum += nums[j]
      end
      min_sum = [min_sum, curr_sum].min if curr_sum > 0

      low = 0
      high = i

      while high < nums.size
        curr_sum -= nums[low]
        curr_sum += nums[high]

        low += 1
        high += 1

        min_sum = [min_sum, curr_sum].min if curr_sum > 0
      end
    end
    min_sum == Float::INFINITY ? -1 : min_sum
  end
end
```
```java []
import java.util.List;

class Solution {
    public int minimumSumSubarray(List<Integer> nums, int l, int r) {
        
        int minSum = Integer.MAX_VALUE;
        for (int i = l; i <= r; i++) {
            int currSum = 0;

            for (int j = 0; j < i; j++) {
                currSum += nums.get(j);
            }
            if (currSum > 0) {
                minSum = Math.min(minSum, currSum);
            }

            int low = 0, high = i;

            while (high < nums.size()) {
                currSum -= nums.get(low);
                currSum += nums.get(high);

                low++;
                high++;

                if (currSum > 0) {
                    minSum = Math.min(minSum, currSum);
                }
            }
        }
        if (minSum == Integer.MAX_VALUE) return -1;
        return minSum;
    }
}
```
