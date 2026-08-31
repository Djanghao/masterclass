# ✅98.43%🔥Easy Solution🔥with explanation🔥

**Author:** MrAke
**Votes:** 265
**Link:** [https://leetcode.com/problems/count-subarrays-with-fixed-bounds/solutions/4949181/](https://leetcode.com/problems/count-subarrays-with-fixed-bounds/solutions/4949181/)

---

# Intuition \uD83E\uDDAF

#### To count the number of fixed-bound subarrays, we need to identify the subarrays where the minimum value is equal to `minK` and the maximum value is equal to `maxK`. We can iterate through the array and keep track of the indices of the last occurrence of `minK` and `maxK`. Then, for each index, we can calculate the number of fixed-bound subarrays ending at that index.
----

# Approach \uD83D\uDE80


#### 1. Initialize variables `res` to store the result, `bad_idx` to store the index of the last occurrence of a value outside the range `[minK, maxK]`, and `left_idx` and `right_idx` to store the indices of the last occurrence of `minK` and `maxK` respectively.
#### 2. Iterate through the array nums and update the values of `bad_idx`, `left_idx`, and `right_idx` accordingly.
#### 3. For each index `i`, calculate the number of fixed-bound subarrays ending at `i` by taking the minimum of `left_idx` and `right_idx`, and subtracting `bad_idx`. Add this count to `res`.
#### 4. Return the final result `res`.

----
# Complexity 
- ## Time complexity: \u23F2\uFE0F
#### $$O(n)$$, where n is the length of the `nums` array. We iterate through the array once.

- ## Space complexity: \uD83D\uDE80
#### $$O(1)$$, as we are using a constant amount of extra space for variables regardless of the input size.
---
# Code

```python []
class Solution:
    def countSubarrays(self, nums: List[int], mink: int, maxK: int) -> int:

        res = 0
        bad_idx = left_idx = right_idx = -1

        for i, num in enumerate(nums) :
            if not mink <= num <= maxK:
                bad_idx = i

            if num == mink:
                left_idx = i

            if num == maxK:
                right_idx = i

            res += max(0, min(left_idx, right_idx) - bad_idx)

        return res
```
```C++ []
class Solution {
public:
    long long countSubarrays(vector<int>& nums, int minK, int maxK) {
        long long res = 0;
        int bad_idx = -1, left_idx = -1, right_idx = -1;

        for (int i = 0; i < nums.size(); ++i) {
            if (!(minK <= nums[i] && nums[i] <= maxK)) {
                bad_idx = i;
            }

            if (nums[i] == minK) {
                left_idx = i;
            }

            if (nums[i] == maxK) {
                right_idx = i;
            }

            res += max(0, min(left_idx, right_idx) - bad_idx);
        }

        return res;
    }
};

```
```java []
class Solution {
    public long countSubarrays(int[] nums, int minK, int maxK) {
        long res = 0;
        int badIdx = -1, leftIdx = -1, rightIdx = -1;

        for (int i = 0; i < nums.length; ++i) {
            if (!(minK <= nums[i] && nums[i] <= maxK)) {
                badIdx = i;
            }

            if (nums[i] == minK) {
                leftIdx = i;
            }

            if (nums[i] == maxK) {
                rightIdx = i;
            }

            res += Math.max(0, Math.min(leftIdx, rightIdx) - badIdx);
        }

        return res;
    }
}

```
```C# []
public class Solution {
    public long CountSubarrays(int[] nums, int minK, int maxK) {
        long res = 0;
        int badIdx = -1, leftIdx = -1, rightIdx = -1;

        for (int i = 0; i < nums.Length; ++i) {
            if (!(minK <= nums[i] && nums[i] <= maxK)) {
                badIdx = i;
            }

            if (nums[i] == minK) {
                leftIdx = i;
            }

            if (nums[i] == maxK) {
                rightIdx = i;
            }

            res += Math.Max(0, Math.Min(leftIdx, rightIdx) - badIdx);
        }

        return res;
    }
}

```
```javascript []
var countSubarrays = function(nums, minK, maxK) {
    let res = 0;
    let badIdx = -1, leftIdx = -1, rightIdx = -1;

    for (let i = 0; i < nums.length; ++i) {
        if (!(minK <= nums[i] && nums[i] <= maxK)) {
            badIdx = i;
        }

        if (nums[i] === minK) {
            leftIdx = i;
        }

        if (nums[i] === maxK) {
            rightIdx = i;
        }

        res += Math.max(0, Math.min(leftIdx, rightIdx) - badIdx);
    }

    return res;
};

```
---

