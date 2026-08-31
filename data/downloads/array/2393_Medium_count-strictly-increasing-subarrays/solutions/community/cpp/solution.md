# No DP or Stack. Pure count

**Author:** randomcoder219
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-strictly-increasing-subarrays/solutions/5093167/](https://leetcode.com/problems/count-strictly-increasing-subarrays/solutions/5093167/)

---

# Intuition
An increasing subarray of length i will have  (i * (i + 1)) / 2 subarrays of strictly increasing subarray. As soon as we get the element which is less than previous element, we start a new sub array.

# Approach
1. Maintain the current count of increasing subarray
2. As soon as we reach the point where the array is not strictly increasing we add the number of subarrays we can get from the strictly increasing sub array we had to the result and start a new subarray

# Complexity
- Time complexity: $$O(n)$$

- Space complexity: $$O(1)$$

# Code
```
class Solution {
public:
    long long countSubarrays(vector<int>& nums) {
        int n = nums.size();
        long long curr_count = 0;
        long long result = 0;

        for(int i = 0; i < n; i++) {
            if(i == 0 || nums[i] > nums[i - 1]) {
                curr_count += 1;
            } else {
                result += (curr_count * (curr_count + 1)) / 2;
                curr_count = 1;
            }
        }

        result += (curr_count * (curr_count + 1)) / 2;
        return result;
    }
};
```