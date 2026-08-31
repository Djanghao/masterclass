# Simple sliding window approach

**Author:** ThatsRajeev
**Votes:** 42
**Link:** [https://leetcode.com/problems/maximum-frequency-of-an-element-after-performing-operations-i/solutions/6027196/](https://leetcode.com/problems/maximum-frequency-of-an-element-after-performing-operations-i/solutions/6027196/)

---


### Explanation

1. **Initial Setup and Sorting**:
   - First, the array `nums` is sorted in ascending order. This allows us to work with contiguous subarrays where elements are close in value, making it easier to consider converting elements to a single target value within a specific range.
   - A frequency map (like a hash map or dictionary) is used to store the count of each element in `nums`. This helps us calculate potential maximum frequencies for each target value without modifying the array directly.

2. **First Pass: Using Existing Numbers as Reference Points**:
   - In this first pass, each element in `nums` is considered as a potential target frequency value. We try to make as many elements in a contiguous subarray equal to this target by adjusting values within a given range.
   - For each element `nums[mid]` (considered as a reference point), a sliding window is created with `left` and `right` pointers. This window expands to include elements close enough in value such that they can potentially be converted to `nums[mid]` by adding or subtracting up to `k`.
   - We adjust `left` and `right` pointers to keep the range within `k` of `nums[mid]`, ensuring all elements in this window could be converted to `nums[mid]`.

   - **Formula**: The formula `(total - count[nums[mid]])` represents the number of elements in the window that would need adjustment to match `nums[mid]`. We take the minimum of this value and `numOperations` (to avoid exceeding the number of allowed operations), and then add `count[nums[mid]]` (the current frequency of `nums[mid]`) to get the maximum achievable frequency with `nums[mid]` as the target.

3. **Second Pass: Using a Non-Existent Number as Reference Point**:
   - In this second pass, instead of an existing number, we consider a hypothetical target value (a midpoint) that doesn\u2019t necessarily exist in `nums`. This approach can potentially increase frequency by creating a target that might be more centrally located within a subarray.
   - We calculate this midpoint as `(nums[left] + nums[right]) / 2` and adjust `left` so that the midpoint is within `k` distance from both `nums[left]` and `nums[right]`. This ensures all elements between `left` and `right` can potentially be modified to match this midpoint.
   - This pass allows for flexibility in choosing a target that might maximize frequency without relying on existing elements.

4. **Updating the Maximum Frequency (`ans`)**:
   - After each pass, we update `ans` with the maximum frequency achieved. This ensures that we capture the highest possible frequency from both the first (using existing numbers) and the second pass (using a hypothetical midpoint).

### Complexity Analysis

- **Time Complexity**: Sorting the array takes \\(O(n log n)\\), and each pass over the array is \\(O(n)\\), so the overall time complexity is \\(O(n log n)\\).
- **Space Complexity**: \\(O(n)\\) is required for the frequency map used to store element counts.

---

### Summary

This code employs a two-part strategy:
   - **First Pass**: Uses existing elements in `nums` as reference points.
   - **Second Pass**: Uses a non-existent midpoint as a hypothetical reference point.

This combination of strategies provides flexibility in maximizing the frequency of a target value with minimal modifications, leveraging both existing and hypothetical reference points.

# Code
```java []
class Solution {
    public int maxFrequency(int[] nums, int k, int numOperations) {
        int n = nums.length, ans = 0, left = 0, right = 0;
        Arrays.sort(nums);

        // HashMap to store the frequency of each number in the sorted array
        HashMap<Integer, Integer> count = new HashMap<>();
        for(int num : nums) count.put(num, count.getOrDefault(num, 0) + 1);

        // First pass: choose an existing number as the "reference point"
        for(int mid = 0; mid < n; mid++) {
            // Move the left pointer to maintain that the difference between nums[mid] and nums[left] is <= k
            while(nums[mid] - nums[left] > k) {
                left++;
            }

            // Move the right pointer to maintain that the difference between nums[right] and nums[mid] is <= k
            while(right < n - 1 && nums[right + 1] - nums[mid] <= k) {
                right++;
            }

            int total = right - left + 1; // total elements in the current range
            ans = Math.max(ans, Math.min(total - count.get(nums[mid]), numOperations) + count.get(nums[mid]));
        }

        // Second pass: choose a non-existent number as the "reference point"
        left = 0;
        for(right = 0; right < n; right++) {
            int mid = (nums[left] + nums[right]) / 2;

            // Move the left pointer until the mid-point falls within range [nums[left], nums[right]]
            while(mid - nums[left] > k || nums[right] - mid > k) {
                left++;
                mid = (nums[left] + nums[right]) / 2;
            }
            ans = Math.max(ans, Math.min(right - left + 1, numOperations));
        }

        return ans;
    }
}
```

```C++ []
class Solution {
public:
    int maxFrequency(vector<int>& nums, int k, int numOperations) {
        int n = nums.size(), ans = 0, left = 0, right = 0;
        sort(nums.begin(), nums.end());  // Sort the array for sliding window approach

        // HashMap to store frequency of each number
        unordered_map<int, int> count;
        for (int num : nums) {
            count[num]++;
        }

        // First pass: choose an existing number as the reference point
        for (int mid = 0; mid < n; mid++) {
            // Adjust left pointer to keep nums[mid] - nums[left] within `k`
            while (nums[mid] - nums[left] > k) {
                left++;
            }

            // Adjust right pointer to keep nums[right] - nums[mid] within `k`
            while (right < n - 1 && nums[right + 1] - nums[mid] <= k) {
                right++;
            }

            int total = right - left + 1;  // Calculate range size
            // Update ans with maximum achievable frequency for nums[mid] as the target
            ans = max(ans, min(total - count[nums[mid]], numOperations) + count[nums[mid]]);
        }

        // Second pass: choose a non-existent number as reference point
        left = 0;
        for (right = 0; right < n; right++) {
            int mid = (nums[left] + nums[right]) / 2;  // Calculate hypothetical midpoint

            // Adjust left pointer to ensure midpoint is within `k` range from both ends
            while (mid - nums[left] > k || nums[right] - mid > k) {
                left++;
                mid = (nums[left] + nums[right]) / 2;
            }

            // Update ans with maximum achievable frequency with the hypothetical midpoint
            ans = max(ans, min(right - left + 1, numOperations));
        }

        return ans;
    }
}
```

```Python []
class Solution(object):
    def maxFrequency(self, nums, k, numOperations):
        # Sort the array to use a sliding window approach
        nums.sort()
        n = len(nums)
        ans = 0
        left = 0
        right = 0
        
        # First pass: choose existing numbers as reference points
        from collections import Counter
        count = Counter(nums)  # Dictionary to store frequency of each element

        for mid in range(n):
            # Move the left pointer to maintain the range within `k`
            while nums[mid] - nums[left] > k:
                left += 1

            # Move the right pointer to include numbers within `k` range from `nums[mid]`
            while right < n - 1 and nums[right + 1] - nums[mid] <= k:
                right += 1

            # Calculate total elements in the current range
            total = right - left + 1
            # Update ans with the maximum frequency achievable with current reference
            ans = max(ans, min(total - count[nums[mid]], numOperations) + count[nums[mid]])

        # Second pass: choose a non-existent midpoint as reference
        left = 0
        for right in range(n):
            # Calculate midpoint between nums[left] and nums[right]
            mid = (nums[left] + nums[right]) // 2
            # Move left pointer to keep midpoint within `k` range of both ends
            while mid - nums[left] > k or nums[right] - mid > k:
                left += 1
                mid = (nums[left] + nums[right]) // 2
            
            # Update ans with maximum frequency achievable with non-existent midpoint
            ans = max(ans, min(right - left + 1, numOperations))
        
        return ans

```