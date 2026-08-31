# Solutions with Binary Search in C++, java and python

**Author:** cpcs
**Votes:** 11
**Link:** [https://leetcode.com/problems/minimum-operations-to-make-numbers-non-positive/solutions/3559599/](https://leetcode.com/problems/minimum-operations-to-make-numbers-non-positive/solutions/3559599/)

---

# Intuition
Binary search.

# Approach
The operation is the same as
(1) Decrease all values by y.
(2) Decrease nums[i] by x' = (x - y).

So we can do binary search on the answer. 

If we currently want mid operations, first decrease all the numbers by y * mid. Then we have mid operations to select indices to decrease them by x'.

For each value v = nums[i]
if mid >= (v + y - 1) / y (which is ceil(v / y)), then we don't need to worry about it (since it won't be positive afte the "-y" operations).

Otherwise we need ceil((v - mid * y) / x') = (v - mid * y + x' - 1) / x' operations to select this index to decrease it by x'.

# Complexity
- Time complexity:
O(n * log(N)) where N is the maximum value in nums.

- Space complexity:
O(1)

# Code

C++
```
class Solution {
public:
    int minOperations(vector<int>& nums, int x, int y) {
        int left = 1, right = *max_element(nums.begin(), nums.end()) / y + 1;
        x -= y;
        while (left <= right) {
            const int mid = (left + right) >> 1;
            int s = mid;
            for (int v : nums) {
                const int t = (v + y - 1) / y;
                if (mid >= t) {
                    continue;
                }
                s -= (v - mid * y + x - 1) / x;
                if (s < 0) {
                    break;
                } 
            }
            if (s >= 0) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
        return right + 1;
        
    }
};
```

Java:
```
class Solution {
    public int minOperations(int[] nums, int x, int y) {
        int right = nums[0];
        for (int v : nums) {
            right = Math.max(v, right);
        }
        int left = 1;
        right = right / y + 1;
        x -= y;
        while (left <= right) {
            int mid = (left + right) >> 1, s = mid;
            for (int v : nums) {
                int t = (v + y - 1) / y;
                if (mid >= t) {
                    continue;
                }
                s -= (v - mid * y + x - 1) / x;
                if (s < 0) {
                    break;
                } 
            }
            if (s >= 0) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
        return right + 1;
        
    }
}
```

Python3:
```
class Solution:
    def minOperations(self, nums: List[int], x: int, y: int) -> int:
        left, right = 1, max(nums) // y + 1
        x -= y
        while left <= right:
            mid = (left + right) >> 1
            s = mid
            for v in nums:
                t = (v + y - 1) // y
                if mid >= t:
                    continue
                s -= (v - mid * y + x - 1) // x
                if s < 0:
                    break
            if s >= 0:
                right = mid - 1
            else:
                left = mid + 1
        return right + 1
```