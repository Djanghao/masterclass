# Prefix Sum 100% Beats

**Author:** Sumeet_Sharma-1
**Votes:** 22
**Link:** [https://leetcode.com/problems/maximum-beauty-of-an-array-after-applying-operation/solutions/6134328/](https://leetcode.com/problems/maximum-beauty-of-an-array-after-applying-operation/solutions/6134328/)

---

# \uD83C\uDF1F **Intuition**  
The problem is to find the maximum number of elements in the array that can be made "equal" by adjusting them within a range defined by `k`.  
- \uD83E\uDDE0 **Key Idea:**  
  Use a **range-marking technique** to track how many numbers can be adjusted to fall within the same value range. This avoids the inefficiency of adjusting and comparing numbers directly.  
- \u2705 **Why does it work?**  
  By marking all possible adjustment ranges for each number and computing their overlaps, we can determine the maximum overlap, which corresponds to the largest group of "equal" numbers.  

---

# \uD83D\uDEE0\uFE0F **Approach**

### \uD83D\uDD22 Step 1: Find the Maximum Value in the Array  
- \uD83E\uDDD0 **Why?**  
  The maximum value in the array determines the size of the range array we use to track overlaps.  
- \uD83D\uDE80 **How?**  
  Traverse the array using a simple loop and keep track of the largest element.  
  - Initialize `maxValue = 0`.  
  - For each number `num` in the array, update `maxValue = max(maxValue, num)`.

---

### \uD83C\uDF10 Step 2: Mark Ranges in a Tracking Array  
- \uD83D\uDEE1\uFE0F **What is the tracking array?**  
  A `range` array where each index represents a possible value after adjustment.  
- \uD83D\uDEE0\uFE0F **How does it work?**  
  - For each number `num` in `nums`:  
    1. Calculate the lower bound of the range: `left = max(0, num - k)`.  
    2. Calculate the upper bound of the range: `right = min(maxValue, num + k) + 1`.  
    3. Increment `range[left]` to start the range.  
    4. Decrement `range[right]` to end the range.  
  - This marks the possible values that `num` can contribute to after adjustments.

---

### \uD83D\uDCCA Step 3: Calculate the Prefix Sum  
- \uD83D\uDD04 **Why prefix sum?**  
  The prefix sum accumulates the overlaps at each point in the `range` array, telling us how many ranges include that point.  
- \u2728 **How to compute it?**  
  - Initialize `result = 0`.  
  - Traverse the `range` array:  
    - Add the current value to the previous prefix sum: `range[i] += range[i - 1]`.  
    - Update `result = max(result, range[i])` to track the maximum overlap.

---

### \uD83C\uDFC1 Step 4: Return the Result  
- The maximum value in the prefix sum is the largest group of elements that can be made "equal" with the given adjustments.

---

# \uD83D\uDE80 **Complexity Analysis**  
- **Time Complexity:**  
  - Finding the maximum value: `O(n)`  
  - Marking ranges: `O(n)`  
  - Calculating prefix sum: `O(m)` (where `m` is the size of the `range` array, approximately `maxValue`).  
  - **Overall:** `O(n + m)`  
- **Space Complexity:**  
  - The `range` array takes `O(m)` space.  

---

# Code
```cpp []
class Solution {
public:
    int maximumBeauty(vector<int>& nums, int k) {
        int n = nums.size();
        int maxValue = 0;

        // Find the maximum value in the array
        for (int i = 0; i < n; i++) {
            if (nums[i] > maxValue) {
                maxValue = nums[i];
            }
        }

        // Create an array to track ranges
        vector<int> range(maxValue + 10, 0);

        // Mark ranges for each number in the array
        for (int i = 0; i < n; i++) {
            int left = max(0, nums[i] - k);
            int right = min(maxValue, nums[i] + k) + 1;
            range[left]++;
            range[right]--;
        }

        // Calculate prefix sums and find the maximum value
        int result = range[0];
        for (int i = 1; i < range.size(); i++) {
            range[i] += range[i - 1];
            if (range[i] > result) {
                result = range[i];
            }
        }

        return result;
    }
};

```
```Java []
class Solution {
    public int maximumBeauty(int[] nums, int k) {
        int n = nums.length;
        int maxValue = 0;

        // Step 1: Find the maximum value in the array
        for (int i = 0; i < n; i++) {
            if (nums[i] > maxValue) {
                maxValue = nums[i];
            }
        }

        // Step 2: Create an array to track ranges
        int[] range = new int[maxValue + 10];

        // Step 3: Mark ranges for each number in the array
        for (int i = 0; i < n; i++) {
            int left = Math.max(0, nums[i] - k);
            int right = Math.min(maxValue, nums[i] + k) + 1;
            range[left]++;
            range[right]--;
        }

        // Step 4: Calculate prefix sums and find the maximum value
        int result = range[0];
        for (int i = 1; i < range.length; i++) {
            range[i] += range[i - 1];
            if (range[i] > result) {
                result = range[i];
            }
        }

        // Step 5: Return the result
        return result;
    }
}
```
```Python3 []
class Solution:
    def maximumBeauty(self, nums: List[int], k: int) -> int:
        n = len(nums)
        max_value = 0

        # Step 1: Find the maximum value in the array
        for num in nums:
            if num > max_value:
                max_value = num

        # Step 2: Create an array to track ranges
        range_array = [0] * (max_value + 10)

        # Step 3: Mark ranges for each number in the array
        for num in nums:
            left = max(0, num - k)
            right = min(max_value, num + k) + 1
            range_array[left] += 1
            range_array[right] -= 1

        # Step 4: Calculate prefix sums and find the maximum value
        result = range_array[0]
        for i in range(1, len(range_array)):
            range_array[i] += range_array[i - 1]
            if range_array[i] > result:
                result = range_array[i]

        # Step 5: Return the result
        return result
```
```C []
int maximumBeauty(int* nums, int numsSize, int k) {
    int maxValue = 0;

    // Step 1: Find the maximum value in the array
    for (int i = 0; i < numsSize; i++) {
        if (nums[i] > maxValue) {
            maxValue = nums[i];
        }
    }

    // Step 2: Create an array to track ranges
    int rangeSize = maxValue + 10;
    int* range = (int*)calloc(rangeSize, sizeof(int));

    // Step 3: Mark ranges for each number in the array
    for (int i = 0; i < numsSize; i++) {
        int left = (nums[i] - k > 0) ? nums[i] - k : 0;
        int right = (nums[i] + k < maxValue) ? nums[i] + k + 1 : maxValue + 1;
        range[left]++;
        if (right < rangeSize) {
            range[right]--;
        }
    }

    // Step 4: Calculate prefix sums and find the maximum value
    int result = range[0];
    for (int i = 1; i < rangeSize; i++) {
        range[i] += range[i - 1];
        if (range[i] > result) {
            result = range[i];
        }
    }

    // Step 5: Free the allocated memory and return the result
    free(range);
    return result;
}
```
```C# []
public class Solution {
    public int MaximumBeauty(int[] nums, int k) {
        int n = nums.Length;
        int maxValue = 0;

        // Step 1: Find the maximum value in the array
        for (int i = 0; i < n; i++) {
            if (nums[i] > maxValue) {
                maxValue = nums[i];
            }
        }

        // Step 2: Create an array to track ranges
        int[] range = new int[maxValue + 10];

        // Step 3: Mark ranges for each number in the array
        for (int i = 0; i < n; i++) {
            int left = Math.Max(0, nums[i] - k);
            int right = Math.Min(maxValue, nums[i] + k) + 1;
            range[left]++;
            if (right < range.Length) {
                range[right]--;
            }
        }

        // Step 4: Calculate prefix sums and find the maximum value
        int result = range[0];
        for (int i = 1; i < range.Length; i++) {
            range[i] += range[i - 1];
            if (range[i] > result) {
                result = range[i];
            }
        }

        // Step 5: Return the result
        return result;
    }
}
```
```Javascript []
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumBeauty = function(nums, k) {
    const n = nums.length;
    let maxValue = 0;

    // Step 1: Find the maximum value in the array
    for (let i = 0; i < n; i++) {
        if (nums[i] > maxValue) {
            maxValue = nums[i];
        }
    }

    // Step 2: Create an array to track ranges
    const range = new Array(maxValue + 10).fill(0);

    // Step 3: Mark ranges for each number in the array
    for (let i = 0; i < n; i++) {
        const left = Math.max(0, nums[i] - k);
        const right = Math.min(maxValue, nums[i] + k) + 1;
        range[left]++;
        if (right < range.length) {
            range[right]--;
        }
    }

    // Step 4: Calculate prefix sums and find the maximum value
    let result = range[0];
    for (let i = 1; i < range.length; i++) {
        range[i] += range[i - 1];
        if (range[i] > result) {
            result = range[i];
        }
    }

    // Step 5: Return the result
    return result;
};
```
```Ruby []
# @param {Integer[]} nums 
# @param {Integer} k
# @return {Integer}
def maximum_beauty(nums, k)
  n = nums.length
  max_value = 0

  # Step 1: Find the maximum value in the array
  nums.each do |num|
    max_value = num if num > max_value
  end

  # Step 2: Create an array to track ranges
  range = Array.new(max_value + 10, 0)

  # Step 3: Mark ranges for each number in the array
  nums.each do |num|
    left = [0, num - k].max
    right = [max_value, num + k].min + 1
    range[left] += 1
    range[right] -= 1 if right < range.length
  end

  # Step 4: Calculate prefix sums and find the maximum value
  result = range[0]
  (1...range.length).each do |i|
    range[i] += range[i - 1]
    result = range[i] if range[i] > result
  end

  # Step 5: Return the result
  result
end
```