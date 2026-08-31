# C++ | easiest solution with detailed explanation and comment on code

**Author:** blue106
**Votes:** 12
**Link:** [https://leetcode.com/problems/minimize-the-maximum-adjacent-element-difference/solutions/6053367/](https://leetcode.com/problems/minimize-the-maximum-adjacent-element-difference/solutions/6053367/)

---


### **1. Intuition**

- You are given an array `nums` that contains integers and `-1` values representing missing elements.
- You are allowed to replace the `-1` elements with two positive integers (`minValue` and `maxValue`), which are chosen once for the entire array.
- The task is to replace the `-1` values in such a way that the maximum absolute difference between any two adjacent elements in the array is minimized.

---

### **2. Functions definitions**

#### **`isValidDifference()` Function**

This function checks whether it's possible to replace all `-1` values in the array `nums` such that the maximum absolute difference between any two adjacent elements does not exceed a given `maxDiff`.

- **Inputs**:
  - `nums`: The original array, including `-1` values.
  - `maxDiff`: The maximum allowed difference between adjacent elements.

- **Process**:
  1. **Create bounds**: For each non-missing element in the array, compute two possible values: 
     - The lower bound (`minValue`) is `nums[i] - maxDiff`.
     - The upper bound (`maxValue`) is `nums[i] + maxDiff`.
     These bounds are stored in two arrays: `lowerBounds` and `upperBounds`.
  
  2. **Calculate range**: The range of values that can be used to replace the `-1` values is constrained by the values in `lowerBounds` and `upperBounds`. We calculate:
     - `minValue = min(lowerBounds) + 2 * maxDiff` (the smallest possible value considering the allowed difference).
     - `maxValue = max(upperBounds) - 2 * maxDiff` (the largest possible value considering the allowed difference).

  3. **Test replacements**: For each `-1` value in `nums`, attempt to replace it with either `minValue` or `maxValue`. The replacement must ensure that the new value does not cause the difference with adjacent values to exceed `maxDiff`.
     - If it's possible to replace all `-1` values while satisfying the constraint, return `true`.
     - If not, return `false`.

#### **`minDifference()` Function**

This is the main function that solves the problem. It uses **binary search** to find the smallest possible `maxDiff` that works.

- **Inputs**:
  - `nums`: The array with integers and `-1` values.

- **Process**:
  1. **Count missing values**: First, count the number of `-1` values in `nums` and store the count in `missingCount`.

  2. **Handle edge cases**:
     - If there are no missing values (`missingCount == 0`), calculate the maximum absolute difference between adjacent elements in the array. This is the answer.
     - If the entire array consists of `-1` values, return `0` because all elements can be set to the same value (e.g., both `minValue` and `maxValue` are the same).
  
  3. **Binary search**:
     - Initialize the binary search bounds: `low = 0` and `high = 1000000005` (an arbitrarily large value to cover possible differences).
     - While `low` is not equal to `high`, compute the middle value `mid` as the average of `low` and `high`.
     - Call the `isValidDifference()` function to check if a difference of `mid` is possible.
     - If it is possible, update the upper bound `high = mid` to search for a smaller difference.
     - If it\u2019s not possible, update the lower bound `low = mid + 1` to search for a larger difference.
  
  4. **Return the result**: Once the binary search ends, `low` will be the smallest possible maximum difference that works.

---

### **3. Edge Cases Noticed**

- **No missing values**: If there are no `-1` values in `nums`, simply calculate the maximum difference between adjacent elements.
  
- **All elements are missing**: If all elements are `-1`, we can set them all to the same value (e.g., both `minValue` and `maxValue` are the same), making the maximum difference `0`.

- **Sparse or dense missing values**: The code handles cases where missing values are spread out or are adjacent to non-missing values.

---

### **4. Example Walkthrough**

Let\u2019s go through an example:

#### **Example 1:**

```cpp
vector<int> nums = [1, 2, -1, 10, 8];
```

We are looking for the smallest possible `maxDiff` after replacing the `-1` value.

- **Initial Array**: `[1, 2, -1, 10, 8]`
  
- **Binary Search**:
  - We start with `low = 0` and `high = 1000000005`.
  - In each iteration, we check if a given `maxDiff` works by calling `isValidDifference()`. This involves calculating possible replacements for `-1` and checking if the maximum difference between adjacent elements remains within the allowed `maxDiff`.
  
- **Result**: The smallest possible `maxDiff` that works is `4`.

#### **Example 2:**

```cpp
vector<int> nums = [-1, -1, -1];
```

- **Initial Array**: `[-1, -1, -1]`
  
- **Handling Edge Case**: Since all elements are `-1`, we can replace them all with the same value (e.g., both `minValue` and `maxValue` can be `4`), resulting in a `maxDiff` of `0`.

- **Result**: The minimum possible `maxDiff` is `0`.

---

### **5. Time and Space Complexity**

- **Time Complexity**:
  - The binary search runs in `O(log(maxDiff))`, where `maxDiff` is a large constant.
  - For each binary search iteration, the `isValidDifference()` function checks each element of the array, which takes `O(n)` time.
  - Overall time complexity: `O(n * log(maxDiff))`, where `n` is the size of the array.

- **Space Complexity**:
  - The space complexity is `O(n)` due to the additional storage used for `lowerBounds`, `upperBounds`, and the array copy passed to `isValidDifference()`.

---

### Conclusion

This code leverages **binary search** and **greedy filling** techniques to minimize the maximum difference between adjacent elements in the array after replacing missing values (`-1`). The binary search narrows down the smallest feasible `maxDiff`, while the greedy approach ensures that replacements of `-1` values maintain this difference. The solution is efficient with a time complexity of `O(n * log(maxDiff))`.

# Code
```cpp []
class Solution {
public:
    // Helper function to check if a given maxDiff is feasible
    bool isValidDifference(vector<int> nums, int maxDiff) {
        vector<int> lowerBounds, upperBounds;

        // Traverse through the nums array
        for (int i = 0; i < nums.size(); i++) {
            // When an element is not -1 and is adjacent to a -1, compute possible values
            if (nums[i] != -1 && (i && nums[i-1] == -1 || (i != nums.size()-1) && nums[i+1] == -1)) {
                lowerBounds.push_back(nums[i] - maxDiff);  // Minimum possible value for the element
                upperBounds.push_back(nums[i] + maxDiff);  // Maximum possible value for the element
            }
        }

        // Calculate the minimum and maximum values considering the allowed difference
        int minValue = *min_element(lowerBounds.begin(), lowerBounds.end()) + 2 * maxDiff;  // The lower bound value
        int maxValue = *max_element(upperBounds.begin(), upperBounds.end()) - 2 * maxDiff;  // The upper bound value

        // Now, for each -1 in the array, try to fill it with either `minValue` or `maxValue`
        for (int i = 0; i < nums.size(); i++) {
            if (nums[i] == -1) {  // If it's a missing value
                // Try replacing with `minValue` first
                if (
                    (i == 0 || abs(nums[i-1] - minValue) <= maxDiff) &&  // Check left neighbor
                    (i == (nums.size() - 1) || nums[i+1] == -1 || abs(nums[i+1] - minValue) <= maxDiff))  // Check right neighbor
                {
                    nums[i] = minValue;  // Replace with `minValue`
                } else {
                    nums[i] = maxValue;  // Otherwise, replace with `maxValue`
                }
            }
        }

        // After replacing all -1 values, check if the difference between adjacent elements is within `maxDiff`
        for (int i = 0; i < nums.size()-1; i++) {
            if (abs(nums[i] - nums[i+1]) > maxDiff) {  // If any difference exceeds `maxDiff`, return false
                return false;
            }
        }

        // If no differences exceeded the allowed maxDiff, return true
        return true;
    }

    // Main function to find the minimum possible difference between adjacent elements
    int minDifference(vector<int>& nums) {    
        int missingCount = 0;

        // Count how many missing values (-1) are in the array
        for (int x: nums) if (x == -1) missingCount++;

        // If no missing values, calculate the maximum difference between adjacent elements
        if (missingCount == 0) {
            int maxDiff = 0;
            for (int i = 0; i < nums.size()-1; i++) {
                maxDiff = max(maxDiff, abs(nums[i] - nums[i+1]));  // Find the largest difference
            }
            return maxDiff;
        } 
        // If all elements are missing, the minimum difference is 0 since we can set them to the same value
        else if (missingCount == nums.size()) return 0;

        // Perform binary search to find the minimum possible `maxDiff`
        int low = 0;
        int high = 1000000005;  // A large enough number to represent the upper bound

        // Binary search for the minimum `maxDiff`
        while (low != high) {
            int mid = (low + high) / 2;  // Find the midpoint of the current range

            // Test if the current maxDiff is feasible
            if (isValidDifference(nums, mid)) {
                high = mid;  // If feasible, try a smaller `maxDiff`
            } else {
                low = mid + 1;  // If not feasible, try a larger `maxDiff`
            }
        }

        // Return the smallest `maxDiff` that worked
        return low;
    }
};

```
![image.png](./images/0.png)

