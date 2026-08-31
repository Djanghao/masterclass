# very simple easy implementation only 1 loop with no extra space, best solution

**Author:** Have-To-Do-Every-Thing
**Votes:** 8
**Link:** [https://leetcode.com/problems/longest-subarray-of-1s-after-deleting-one-element/solutions/4993442/](https://leetcode.com/problems/longest-subarray-of-1s-after-deleting-one-element/solutions/4993442/)

---

# Intuition
The problem requires finding the length of the longest subarray containing only 1s after flipping at most one 0 to 1. One approach could be to utilize a sliding window technique to keep track of the longest subarray with only one zero. Once the zero occur the track that we made till now we compare with previous window and current last window.

# Approach
1. Initialize variables `prevWindow`, `currWindow`, and `max_length` to 0.
2. Iterate through the elements of the `nums` vector.
3. If the current element is 0, it marks the end of the current subarray. Update `max_length` with the maximum length found so far (`prevWindow + currWindow`).
4. Update `prevWindow` to `currWindow`, and reset `currWindow` to 0 to start counting the length of the next subarray.
5. If the current element is 1, increment `currWindow` to count the length of the current subarray.
6. After the loop, if `currWindow` equals the size of the `nums` vector, return `currWindow - 1`.
7. Update `max_length` with the maximum length found so far (`prevWindow + currWindow`) and return `max_length`.

# Complexity
- Time complexity: O(n), where n is the size of the `nums` vector. We iterate through the array once.
- Space complexity: O(1), as we use only a constant amount of extra space regardless of the input size.

# Code
``` C++ []
class Solution {
public:
    int longestSubarray(vector<int>& nums) {
        int prevWindow = 0;
        int currWindow = 0;
        int max_length = 0;
        
        for (int i = 0; i < nums.size(); i++) {
            if (nums[i] == 0) {
                max_length = max(max_length, prevWindow + currWindow);
                prevWindow = currWindow;
                currWindow = 0;
            } else {
                currWindow++;
            }
        }

        if (currWindow == nums.size()) {
            return currWindow - 1;
        }

        max_length = max(max_length, prevWindow + currWindow);
        return max_length;
    }
};

```
``` Python []
class Solution:
    def longestSubarray(self, nums: List[int]) -> int:
        prevWindow = 0
        currWindow = 0
        max_length = 0

        for num in nums:
            if num == 0:
                max_length = max(max_length, prevWindow + currWindow)
                prevWindow = currWindow
                currWindow = 0
            else:
                currWindow += 1

        if currWindow == len(nums):
            return currWindow - 1

        max_length = max(max_length, prevWindow + currWindow)
        return max_length
```
``` Java []
class Solution {
    public int longestSubarray(int[] nums) {
        int prevWindow = 0;
        int currWindow = 0;
        int max_length = 0;
        
        for (int i = 0; i < nums.length; i++) {
            if (nums[i] == 0) {
                max_length = Math.max(max_length, prevWindow + currWindow);
                prevWindow = currWindow;
                currWindow = 0;
            } else {
                currWindow++;
            }
        }

        if (currWindow == nums.length) {
            return currWindow - 1;
        }

        max_length = Math.max(max_length, prevWindow + currWindow);
        return max_length;
    }
};
```
``` C []
#include <stdio.h>

int longestSubarray(int* nums, int numsSize) {
    int prevWindow = 0;
    int currWindow = 0;
    int max_length = 0;
    
    for (int i = 0; i < numsSize; i++) {
        if (nums[i] == 0) {
            if (prevWindow + currWindow > max_length) {
                max_length = prevWindow + currWindow;
            }
            prevWindow = currWindow;
            currWindow = 0;
        } else {
            currWindow++;
        }
    }

    if (currWindow == numsSize) {
        return currWindow - 1;
    }

    if (prevWindow + currWindow > max_length) {
        max_length = prevWindow + currWindow;
    }

    return max_length;
}
```
``` JavaScript []
var longestSubarray = function(nums) {
    let prevWindow = 0;
    let currWindow = 0;
    let max_length = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            max_length = Math.max(max_length, prevWindow + currWindow);
            prevWindow = currWindow;
            currWindow = 0;
        } else {
            currWindow++;
        }
    }

    if (currWindow === nums.length) {
        return currWindow - 1;
    }

    max_length = Math.max(max_length, prevWindow + currWindow);
    return max_length;
};
``` 
``` C# []
using System;

public class Solution {
    public int LongestSubarray(int[] nums) {
        int prevWindow = 0;
        int currWindow = 0;
        int max_length = 0;
        
        for (int i = 0; i < nums.Length; i++) {
            if (nums[i] == 0) {
                max_length = Math.Max(max_length, prevWindow + currWindow);
                prevWindow = currWindow;
                currWindow = 0;
            } else {
                currWindow++;
            }
        }

        if (currWindow == nums.Length) {
            return currWindow - 1;
        }

        max_length = Math.Max(max_length, prevWindow + currWindow);
        return max_length;
    }
}
```
``` Python3 []
class Solution:
    def longestSubarray(self, nums: List[int]) -> int:
        prevWindow = 0
        currWindow = 0
        max_length = 0

        for num in nums:
            if num == 0:
                max_length = max(max_length, prevWindow + currWindow)
                prevWindow = currWindow
                currWindow = 0
            else:
                currWindow += 1

        if currWindow == len(nums):
            return currWindow - 1

        max_length = max(max_length, prevWindow + currWindow)
        return max_length
```