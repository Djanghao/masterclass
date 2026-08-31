# 🔥BEATS 💯 % 🎯 |✨SUPER EASY BEGINNERS 👏

**Author:** CodeWithSparsh
**Votes:** 7
**Link:** [https://leetcode.com/problems/shortest-subarray-with-or-at-least-k-ii/solutions/6029382/](https://leetcode.com/problems/shortest-subarray-with-or-at-least-k-ii/solutions/6029382/)

---

![image.png](./images/0.png)



---

## Intuition
The task is to find the shortest subarray such that the bitwise OR of its elements meets or exceeds a given value \\( k \\). By using a sliding window approach and maintaining bit counts of elements in the window, we can adjust the window\u2019s size and position to find the minimum subarray length that meets this condition.

---

## Approach
1. **Initialize Variables**:
   - A `count` array of size 32 (to track the bit counts of numbers in the window).
   - Two pointers, `start` and `end`, to represent the sliding window boundaries.
   - A variable `min` to store the minimum length.

2. **Sliding Window**:
   - Expand the window by incrementing `end` and updating the bit counts for each added element.
   - Once the OR result of the window meets or exceeds \\( k \\), calculate the length of the subarray and update `min` if the new length is smaller.
   - Shrink the window by moving `start` and adjusting bit counts until the OR result is less than \\( k \\).

3. **Helper Functions**:
   - `_updateBits` updates the count array for each bit of a number.
   - `_getVal` calculates the OR result of the current window based on the count array.

---

## Complexity
- **Time Complexity**: \\(O(n \\cdot 32) = O(n)\\), where \\( n \\) is the length of `nums`.
- **Space Complexity**: \\(O(1)\\), as only constant additional space is used.

---

## Implementations in Various Languages


```dart []
class Solution {
  int minimumSubarrayLength(List<int> nums, int k) {
    List<int> count = List.filled(32, 0);
    int start = 0, end = 0, min = nums.length + 1;

    while (end < nums.length) {
      _updateBits(count, nums[end], 1);

      while (start <= end && _getVal(count) >= k) {
        min = min < (end - start + 1) ? min : (end - start + 1);
        _updateBits(count, nums[start], -1);
        start++;
      }
      end++;
    }
    return min == nums.length + 1 ? -1 : min;
  }

  void _updateBits(List<int> count, int num, int val) {
    for (int i = 0; i < 32; i++) {
      if (((num >> i) & 1) == 1) {
        count[i] += val;
      }
    }
  }

  int _getVal(List<int> count) {
    int ans = 0;
    for (int i = 0; i < 32; i++) {
      if (count[i] > 0) {
        ans |= (1 << i);
      }
    }
    return ans;
  }
}
```


```java []
class Solution {
    public int minimumSubarrayLength(int[] nums, int k) {
        int[] count = new int[32];
        int start = 0, end = 0, min = nums.length + 1;

        while (end < nums.length) {
            updateBits(count, nums[end], 1);
            while (start <= end && getVal(count) >= k) {
                min = Math.min(min, end - start + 1);
                updateBits(count, nums[start], -1);
                start++;
            }
            end++;
        }
        return min == nums.length + 1 ? -1 : min;
    }

    private void updateBits(int[] count, int num, int val) {
        for (int i = 0; i < 32; i++) {
            if ((num & (1 << i)) != 0) {
                count[i] += val;
            }
        }
    }

    private int getVal(int[] count) {
        int ans = 0;
        for (int i = 0; i < 32; i++) {
            if (count[i] > 0) {
                ans |= (1 << i);
            }
        }
        return ans;
    }
}
```


```python []
class Solution:
    def minimumSubarrayLength(self, nums, k):
        count = [0] * 32
        start = 0
        min_length = len(nums) + 1

        for end in range(len(nums)):
            self._updateBits(count, nums[end], 1)

            while start <= end and self._getVal(count) >= k:
                min_length = min(min_length, end - start + 1)
                self._updateBits(count, nums[start], -1)
                start += 1

        return -1 if min_length == len(nums) + 1 else min_length

    def _updateBits(self, count, num, val):
        for i in range(32):
            if num & (1 << i):
                count[i] += val

    def _getVal(self, count):
        ans = 0
        for i in range(32):
            if count[i] > 0:
                ans |= (1 << i)
        return ans
```


```javascript []
function minimumSubarrayLength(nums, k) {
    const count = Array(32).fill(0);
    let start = 0, minLength = nums.length + 1;

    for (let end = 0; end < nums.length; end++) {
        updateBits(count, nums[end], 1);

        while (start <= end && getVal(count) >= k) {
            minLength = Math.min(minLength, end - start + 1);
            updateBits(count, nums[start], -1);
            start++;
        }
    }
    return minLength === nums.length + 1 ? -1 : minLength;
}

function updateBits(count, num, val) {
    for (let i = 0; i < 32; i++) {
        if ((num & (1 << i)) !== 0) {
            count[i] += val;
        }
    }
}

function getVal(count) {
    let ans = 0;
    for (let i = 0; i < 32; i++) {
        if (count[i] > 0) {
            ans |= (1 << i);
        }
    }
    return ans;
}
```


```cpp []
#include <vector>
#include <algorithm>

class Solution {
public:
    int minimumSubarrayLength(std::vector<int>& nums, int k) {
        std::vector<int> count(32, 0);
        int start = 0, minLength = nums.size() + 1;

        for (int end = 0; end < nums.size(); ++end) {
            updateBits(count, nums[end], 1);

            while (start <= end && getVal(count) >= k) {
                minLength = std::min(minLength, end - start + 1);
                updateBits(count, nums[start], -1);
                ++start;
            }
        }
        return minLength == nums.size() + 1 ? -1 : minLength;
    }

private:
    void updateBits(std::vector<int>& count, int num, int val) {
        for (int i = 0; i < 32; ++i) {
            if (num & (1 << i)) {
                count[i] += val;
            }
        }
    }

    int getVal(const std::vector<int>& count) {
        int ans = 0;
        for (int i = 0; i < 32; ++i) {
            if (count[i] > 0) {
                ans |= (1 << i);
            }
        }
        return ans;
    }
};
```

---

![image.png](./images/1.png) {:style='width:250px'}