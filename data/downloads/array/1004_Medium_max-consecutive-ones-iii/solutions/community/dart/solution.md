# Simplest way to solve Max Consecutive Ones

**Author:** patel_jaimin
**Votes:** 5
**Link:** [https://leetcode.com/problems/max-consecutive-ones-iii/solutions/6096906/](https://leetcode.com/problems/max-consecutive-ones-iii/solutions/6096906/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The problem is asking for the length of the longest contiguous subarray that contains at most `k` zeros. The key idea is that we can use the sliding window technique to efficiently find this subarray. We maintain two pointers (`i` and `j`) representing the window's boundaries. As we expand the window by moving `j`, we count the zeros inside the window. If the count exceeds `k`, we shrink the window from the left side by incrementing `i` until the number of zeros is at most `k`. This will allow us to keep track of the longest subarray that satisfies the condition without needing to check all possible subarrays.

# Approach
<!-- Describe your approach to solving the problem. -->
1. Sliding Window Technique:

    - We will use two pointers, `i` and j, both initially set to 0. `j` will expand the window to the right, and `i` will contract the window from the left when the number of zeros exceeds `k`.
    - The variable `k` will track how many zeros can be included in the current window.
    - We will iterate through the array with the pointer `j` and, whenever we encounter a 0, we decrement k. If `k` becomes negative, it means the current window has more than `k` zeros, so we need to move `i` to the right (contract the window) and possibly increment `k` back if we remove a zero.
    - During this process, we keep track of the maximum window length, which is the longest subarray found.
2. Steps:

    - Start with two pointers `i = 0` and `j = 0` and a variable to track the number of zeros in the current window.
    - Move `j` and expand the window to the right.
    - When a zero is encountered, decrement `k`.
    - If `k` becomes negative, increment `i` to shrink the window until `k` becomes non-negative again.
    - The result will be the maximum length of a valid window.

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```csharp []
public class Solution {
    public int LongestOnes(int[] nums, int k) {
        int i = 0, j = 0;
        while (j < nums.Length) {
            if (nums[j++] == 0) {
                k--;
            }
            if (k < 0) {
                if (nums[i++] == 0) {
                    k++;
                }
            }
        }
        return j - i;
    }
}
```
```c []
int longestOnes(int* nums, int numsSize, int k) {
    int i = 0, j = 0;
    while (j < numsSize) {
        if (nums[j++] == 0) {
            k--;
        }
        if (k < 0) {
            if (nums[i++] == 0) {
                k++;
            }
        }
    }
    return j - i;
}
```
```cpp []
class Solution {
public:
    int longestOnes(vector<int>& nums, int k) {
        int i=0,j=0;
        while(j<nums.size()){
            if(nums[j++]==0){
                k--;
            }
            if(k<0){
                if(nums[i++]==0){
                    k++;
                }
            }
        }
        return j-i;
    }
};
```
```java []
class Solution {
    public int longestOnes(int[] nums, int k) {
        int i = 0, j = 0;
        while (j < nums.length) {
            if (nums[j++] == 0) {
                k--;
            }
            if (k < 0) {
                if (nums[i++] == 0) {
                    k++;
                }
            }
        }
        return j - i;
    }
}
```
```javascript []
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function (nums, k) {
    let i = 0, j = 0;
    while (j < nums.length) {
        if (nums[j++] === 0) {
            k--;
        }
        if (k < 0) {
            if (nums[i++] === 0) {
                k++;
            }
        }
    }
    return j - i;
};
```
```typescript []
function longestOnes(nums: number[], k: number): number {
    let i = 0, j = 0;
    while (j < nums.length) {
        if (nums[j++] === 0) {
            k--;
        }
        if (k < 0) {
            if (nums[i++] === 0) {
                k++;
            }
        }
    }
    return j - i;
};
```
```Go []
func longestOnes(nums []int, k int) int {
    i, j := 0, 0
    for j < len(nums) {
        if nums[j] == 0 {
            k--
        }
        j++
        if k < 0 {
            if nums[i] == 0 {
                k++
            }
            i++
        }
    }
    return j - i
}
```
```Dart []
class Solution {
  int longestOnes(List<int> nums, int k) {
    int i = 0, j = 0;
    while (j < nums.length) {
      if (nums[j++] == 0) {
        k--;
      }
      if (k < 0) {
        if (nums[i++] == 0) {
          k++;
        }
      }
    }
    return j - i;
  }
}
```
```python []
class Solution(object):
    def longestOnes(self, nums, k):
        """
        :type nums: List[int]
        :type k: int
        :rtype: int
        """
        i = 0
        j = 0
        while j < len(nums):
            if nums[j] == 0:
                k -= 1
            j += 1
            if k < 0:
                if nums[i] == 0:
                    k += 1
                i += 1
        return j - i
```
```python3 []
class Solution:
    def longestOnes(self, nums: List[int], k: int) -> int:
        i = 0
        j = 0
        while j < len(nums):
            if nums[j] == 0:
                k -= 1
            j += 1
            if k < 0:
                if nums[i] == 0:
                    k += 1
                i += 1
        return j - i
```

![WhatsApp Image 2024-11-20 at 1.42.14 PM.jpeg](./images/0.jpeg)
