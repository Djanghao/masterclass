# ✅ 4 Method ||C++ || Beginner Friendly ||Beat 100%

**Author:** BhavayGupta2002
**Votes:** 9
**Link:** [https://leetcode.com/problems/minimum-positive-sum-subarray/solutions/6077873/](https://leetcode.com/problems/minimum-positive-sum-subarray/solutions/6077873/)

---

### Approach 1: **Brute Force**

#### Steps:
1. Iterate through all possible subarrays of size \\( k \\) where \\( l <= k <= r \\).
2. Compute the sum of each subarray.
3. Check if the sum is greater than \\( 0 \\), and keep track of the minimum valid sum.
4. Return the minimum valid sum or \\(-1\\) if no such subarray exists.

#### Complexity:
- **Time Complexity**: \\(O(n^2)\\) (since we calculate the sum for all subarrays).
- **Space Complexity**: \\(O(1)\\) (no extra space used).

#### Code:
```cpp
class Solution {
public:
    int minSumSubarray(vector<int>& nums, int l, int r) {
        int n = nums.size();
        int minSum = INT_MAX;
        bool found = false;

        for (int start = 0; start < n; ++start) {
            int sum = 0;
            for (int end = start; end < n; ++end) {
                sum += nums[end];
                int length = end - start + 1;
                if (length >= l && length <= r && sum > 0) {
                    minSum = min(minSum, sum);
                    found = true;
                }
            }
        }

        return found ? minSum : -1;
    }
};
```

---

### Approach 2: **Sliding Window (Optimized)**

#### Steps:
1. Use a sliding window of size \\( l \\) to \\( r \\).
2. Maintain the sum of elements in the current window.
3. Check if the sum is greater than \\( 0 \\), and update the minimum sum if valid.
4. Slide the window one element at a time, updating the sum in \\( O(1) \\).

#### Complexity:
- **Time Complexity**: \\(O(n X (r - l + 1))\\) (for sliding windows of varying sizes).
- **Space Complexity**: \\(O(1)\\).

#### Code:
```cpp
class Solution {
public:
    int minSumSubarray(vector<int>& nums, int l, int r) {
        int n = nums.size();
        int minSum = INT_MAX;
        bool found = false;

        for (int k = l; k <= r; ++k) {
            int sum = 0;
            for (int i = 0; i < n; ++i) {
                sum += nums[i];
                if (i >= k - 1) {
                    if (sum > 0) {
                        minSum = min(minSum, sum);
                        found = true;
                    }
                    sum -= nums[i - k + 1];
                }
            }
        }

        return found ? minSum : -1;
    }
};
```

---
### **Approach 3: Prefix Sum with Sliding Window**


### **Steps**

#### **1. Precompute Prefix Sum**
- Create a prefix sum array where each element at index \\(i\\) stores the sum of all elements from index \\(0\\) to \\(i - 1\\).
  - Formula: `prefix[i] = prefix[i - 1] + nums[i - 1]`.

#### **2. Iterate Over All Valid Subarray Sizes**
- For each \\(k\\) in the range \\([l, r]\\):
  - Use the prefix sum array to calculate subarray sums in \\(O(1)\\).
  - Compare each subarray sum with the current minimum.

#### **3. Check Validity**
- If the subarray sum is greater than \\(0\\), update the minimum sum.

#### **4. Return the Result**
- If a valid subarray is found, return the minimum sum. Otherwise, return \\(-1\\).

#### Complexity:
- **Time Complexity**: \\(O(n X (r - l + 1))\\) (for sliding windows of varying sizes).
- **Space Complexity**: \\(O(1)\\).

### **Code**
```cpp
class Solution {
public:
    int minSumSubarray(vector<int>& nums, int l, int r) {
        int n = nums.size();
        vector<int> prefix(n + 1, 0);

        // Step 1: Compute prefix sums
        for (int i = 0; i < n; ++i) {
            prefix[i + 1] = prefix[i] + nums[i];
        }

        int minSum = INT_MAX;
        bool found = false;

        // Step 2: Iterate over all window sizes
        for (int k = l; k <= r; ++k) {
            // Sliding window over prefix sum
            for (int i = 0; i + k <= n; ++i) {
                int sum = prefix[i + k] - prefix[i]; // Subarray sum from i to i+k-1
                if (sum > 0) {
                    minSum = min(minSum, sum);
                    found = true;
                }
            }
        }

        // Step 3: Return result
        return found ? minSum : -1;
    }
};
```

---

### Approach 4: **Optimized Sliding Window with Fixed Size**

The sliding window method allows us to efficiently calculate the sum of a subarray by updating the sum incrementally as we "slide" the window across the array. For every subarray of size \\(k\\), we:
1. Add the element at the current end of the window.
2. Remove the element at the start of the window if the window size exceeds \\(k\\).


### **Steps**

#### **1. Iterate over all window sizes (\\(k\\))**
- Start by trying subarrays of size \\(l\\) (minimum valid size) and incrementally check sizes up to \\(r\\) (maximum valid size).
- For each \\(k\\), initialize the sliding window and calculate the sum dynamically as the window slides.

#### **2. Use a sliding window of size \\(k\\)**
- Start with the first \\(k\\) elements to initialize the sum.
- Slide the window one element at a time:
  - Add the new element at the window's end.
  - Remove the old element at the window's start.
- This ensures \\(O(1)\\) updates to the sum for each new position.

#### **3. Check validity**
- After updating the sum, check if it is greater than \\(0\\).
- If valid, compare it with the current minimum sum and update if smaller.

#### **4. Return the result**
- After evaluating all possible subarray sizes, return the smallest valid sum. If no valid subarray is found, return \\(-1\\).

#### Complexity:
- **Time Complexity**: \\(O(n X (r - l + 1))\\) (for sliding windows of varying sizes).
- **Space Complexity**: \\(O(1)\\).

```cpp
class Solution {
public:
    int minSumSubarray(vector<int>& nums, int l, int r) {
        int n = nums.size();
        int minSum = INT_MAX;  // Stores the minimum valid sum
        bool found = false;   // Indicates if a valid subarray is found

        // Iterate over all window sizes from l to r
        for (int k = l; k <= r; ++k) {
            int sum = 0;

            // Initialize the sum for the first window of size k
            for (int i = 0; i < k; ++i) {
                sum += nums[i];
            }

            // Check the first window
            if (sum > 0) {
                minSum = min(minSum, sum);
                found = true;
            }

            // Slide the window across the array
            for (int i = k; i < n; ++i) {
                sum += nums[i];           // Add the new element at the end of the window
                sum -= nums[i - k];       // Remove the old element at the start of the window

                // Check the current window
                if (sum > 0) {
                    minSum = min(minSum, sum);
                    found = true;
                }
            }
        }

        // Return the result or -1 if no valid subarray was found
        return found ? minSum : -1;
    }
};
```
